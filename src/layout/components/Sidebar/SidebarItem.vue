<template>
  <div>
    <!-- 没有子菜单，只有以及菜单展示template -->
    <template v-if="!item.children || item.children.length === 0">
      <app-link :to="item.url">
        <el-menu-item :index="item.url" :class="{'submenu-title-noDropdown':!isNest}">
          <item :icon="item.icon" :title="item.name" />
        </el-menu-item>
      </app-link>
    </template>

    <el-submenu v-else ref="subMenu" :index="item.id" popper-append-to-body>
      <template slot="title">
        <item :icon="item.icon" :title="item.name" />
      </template>
      <sidebar-item
        v-for="child in item.children"
        :key="child.id"
        :is-nest="true"
        :item="child"
        class="nest-menu"
      />
    </el-submenu>
  </div>
</template>

<script>
import path from 'path'
import { isExternal } from '@/utils/validate'
import Item from './Item'
import AppLink from './Link'
import FixiOSBug from './FixiOSBug'

export default {
  name: 'SidebarItem',
  components: { Item, AppLink },
  mixins: [FixiOSBug],
  props: {
    // route object
    item: {
      type: Object,
      required: true
    },
    isNest: {
      type: Boolean,
      default: false
    }
  }
}
</script>
