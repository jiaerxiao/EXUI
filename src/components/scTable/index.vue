<script setup lang="ts">
  const loading = ref(false)

  const {
    tableName,
    apiObj,
    params,
    data,
    height,
    size,
    border,
    stripe,
    pageSize,
    pageSizes,
    rowKey,
    summaryMethod,
    column,
    remoteSort,
    remoteFilter,
    remoteSummary,
    hidePagination,
    hideDo,
    hideRefresh,
    hideSetting,
    paginationLayout,
  } = defineProps<{
    tableName?: { type: String; default: '' }
    apiObj?: { type: Object; default: () => {} }
    params?: { type: Object; default: () => {} }
    data?: { type: Object; default: () => {} }
    height?: { type: [String, Number]; default: '100%' }
    size?: { type: String; default: 'default' }
    border?: { type: Boolean; default: false }
    stripe?: { type: Boolean; default: false }
    pageSize?: { type: Number; default: 15 }
    pageSizes?: { type: Array<any>; default: [10, 20, 30, 40, 50] }
    rowKey?: { type: String; default: '' }
    summaryMethod?: { type: Function; default: null }
    column?: { type: Object; default: () => {} }
    remoteSort?: { type: Boolean; default: false }
    remoteFilter?: { type: Boolean; default: false }
    remoteSummary?: { type: Boolean; default: false }
    hidePagination?: { type: Boolean; default: false }
    hideDo?: { type: Boolean; default: false }
    hideRefresh?: { type: Boolean; default: false }
    hideSetting?: { type: Boolean; default: false }
    paginationLayout?: { type: String; default: config.paginationLayout }
  }>()

  // scPageSize: this.pageSize,
  //         isActivat: true,
  //         emptyText: '暂无数据',
  //         toggleIndex: 0,
  //         tableData: [],
  //         total: 0,
  //         currentPage: 1,
  //         prop: null,
  //         order: null,
  //         loading: false,
  //         tableHeight: '100%',
  //         tableParams: this.params,
  //         userColumn: [],
  //         customColumnShow: false,
  //         summary: {},
  //         config: {
  //           size: this.size,
  //           border: this.border,
  //           stripe: this.stripe,
  //         },
  const isActivat = ref(true)
  const emptyText = ref('暂无数据')
  const toggleIndex = ref(0)
  const tableData = ref()
  const total = ref()
  const tableParams = ref()

  const _height = computed(() => {
    return Number(height) ? Number(height) + 'px' : height
  })
  const _table_height = computed(() => {
    return hidePagination && hideDo ? '100%' : 'calc(100% - 50px)'
  })

  onMounted(() => {})
</script>
<template>
  <div class="scTable" :style="{ height: _height }" ref="scTableMain" v-loading="loading">
    <div class="scTable-table" :style="{ height: _table_height }">
      <el-table
        v-bind="$attrs"
        :data="tableData"
        :row-key="rowKey"
        :key="toggleIndex"
        ref="scTable"
        :height="height == 'auto' ? null : '100%'"
        :size="config.size"
        :border="config.border"
        :stripe="config.stripe"
        :summary-method="remoteSummary ? remoteSummaryMethod : summaryMethod"
        @sort-change="sortChange"
        @filter-change="filterChange"
      >
        <slot></slot>
        <template v-for="(item, index) in userColumn" :key="index">
          <el-table-column
            v-if="!item.hide"
            :column-key="item.prop"
            :label="item.label"
            :prop="item.prop"
            :width="item.width"
            :sortable="item.sortable"
            :fixed="item.fixed"
            :filters="item.filters"
            :filter-method="remoteFilter || !item.filters ? null : filterHandler"
            :show-overflow-tooltip="item.showOverflowTooltip"
          >
            <template #default="scope">
              <slot :name="item.prop" v-bind="scope">
                {{ scope.row[item.prop] }}
              </slot>
            </template>
          </el-table-column>
        </template>
        <el-table-column min-width="1"></el-table-column>
        <template #empty>
          <el-empty :description="emptyText" :image-size="100"></el-empty>
        </template>
      </el-table>
    </div>
    <div class="scTable-page" v-if="!hidePagination || !hideDo">
      <div class="scTable-pagination">
        <el-pagination
          v-if="!hidePagination"
          background
          :small="true"
          :layout="paginationLayout"
          :total="total"
          :page-size="scPageSize"
          :page-sizes="pageSizes"
          v-model:currentPage="currentPage"
          @current-change="paginationChange"
          @update:page-size="pageSizeChange"
        ></el-pagination>
      </div>
      <div class="scTable-do" v-if="!hideDo">
        <el-button
          v-if="!hideRefresh"
          @click="refresh"
          icon="el-icon-refresh"
          circle
          style="margin-left: 15px"
        ></el-button>
        <el-popover
          v-if="column"
          placement="top"
          title="列设置"
          :width="500"
          trigger="click"
          :hide-after="0"
          @show="customColumnShow = true"
          @after-leave="customColumnShow = false"
        >
          <template #reference>
            <el-button icon="el-icon-set-up" circle style="margin-left: 15px"></el-button>
          </template>
          <columnSetting
            v-if="customColumnShow"
            ref="columnSetting"
            @userChange="columnSettingChange"
            @save="columnSettingSave"
            @back="columnSettingBack"
            :column="userColumn"
          ></columnSetting>
        </el-popover>
        <el-popover v-if="!hideSetting" placement="top" title="表格设置" :width="400" trigger="click" :hide-after="0">
          <template #reference>
            <el-button icon="el-icon-setting" circle style="margin-left: 15px"></el-button>
          </template>
          <el-form label-width="80px" label-position="left">
            <el-form-item label="表格尺寸">
              <el-radio-group v-model="config.size" size="small" @change="configSizeChange">
                <el-radio-button label="large">大</el-radio-button>
                <el-radio-button label="default">正常</el-radio-button>
                <el-radio-button label="small">小</el-radio-button>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="样式">
              <el-checkbox v-model="config.border" label="纵向边框"></el-checkbox>
              <el-checkbox v-model="config.stripe" label="斑马纹"></el-checkbox>
            </el-form-item>
          </el-form>
        </el-popover>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .scTable {
  }
  .scTable-table {
    height: calc(100% - 50px);
  }
  .scTable-page {
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
  }
  .scTable-do {
    white-space: nowrap;
  }
  .scTable:deep(.el-table__footer) .cell {
    font-weight: bold;
  }
  .scTable:deep(.el-table__body-wrapper) .el-scrollbar__bar.is-horizontal {
    height: 12px;
    border-radius: 12px;
  }
  .scTable:deep(.el-table__body-wrapper) .el-scrollbar__bar.is-vertical {
    width: 12px;
    border-radius: 12px;
  }
</style>
