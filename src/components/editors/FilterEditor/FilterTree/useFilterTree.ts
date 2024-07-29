'use client'

import { create } from 'zustand'
import { ClapEntity, UUID } from '@aitube/clap'
import { Filter } from '@aitube/clapper-services'

import {
  LibraryTreeNode,
  TreeNodeItem,
  LibraryNodeType,
} from '@/components/tree-browsers/types'
import { icons } from '@/components/icons'
import {
  collectionClassName,
  libraryClassName,
} from '@/components/tree-browsers/style/treeNodeStyles'

export const useFilterTree = create<{
  availableFiltersLibraryTreeNodeId: string

  // activeFiltersLibraryTreeNodeId: string

  libraryTreeRoot: LibraryTreeNode[]
  init: () => void

  /**
   * Load available filters into the tree
   *
   * @param collections
   * @returns
   */
  setAvailableFilters: (filters: Filter[]) => void

  // we support those all selection modes for convenience - please keep them!
  selectedNodeItem?: TreeNodeItem
  selectedNodeType?: LibraryNodeType
  selectTreeNode: (
    treeNodeId?: string | null,
    nodeType?: LibraryNodeType,
    nodeItem?: TreeNodeItem
  ) => void
  selectedTreeNodeId: string | null
}>((set, get) => ({
  availableFiltersLibraryTreeNodeId: '',

  // activeFiltersLibraryTreeNodeId: '',

  libraryTreeRoot: [],
  init: () => {
    const availableFilterLibrary: LibraryTreeNode = {
      id: UUID(),
      nodeType: 'TREE_ROOT_PROJECT',
      label: 'Available filters',
      icon: icons.project,
      className: libraryClassName,
      isExpanded: true,
      children: [
        {
          id: UUID(),
          nodeType: 'DEFAULT_TREE_NODE_EMPTY',
          label: 'Empty',
          icon: icons.project,
          className: collectionClassName,
        },
      ],
    }

    const libraryTreeRoot = [availableFilterLibrary]

    set({
      availableFiltersLibraryTreeNodeId: availableFilterLibrary.id,
      libraryTreeRoot,
      selectedNodeItem: undefined,
      selectedTreeNodeId: null,
    })
  },

  setAvailableFilters: (filters: Filter[]) => {
    const availableFilterLibrary: LibraryTreeNode = {
      id: UUID(),
      nodeType: 'TREE_ROOT_PROJECT',
      label: 'Filters',
      icon: icons.project,
      className: libraryClassName,
      isExpanded: true,
      children: [
        {
          id: UUID(),
          nodeType: 'DEFAULT_TREE_NODE_EMPTY',
          label: 'Empty',
          icon: icons.project,
          className: collectionClassName,
        },
      ],
    }

    const libraryTreeRoot = [availableFilterLibrary]

    set({
      availableFiltersLibraryTreeNodeId: availableFilterLibrary.id,
      libraryTreeRoot,
      selectedNodeItem: undefined,
      selectedTreeNodeId: null,
    })
  },

  /*
  setCommunityCollections: (collections: CommunityEntityCollection[]) => {
    // TODO: implement this
   
  },
  */

  selectedNodeItem: undefined,
  selectEntity: (entity?: ClapEntity) => {
    if (entity) {
      console.log(
        'TODO julian: change this code to search in the entity collections'
      )
      const selectedTreeNode = get().libraryTreeRoot.find(
        (node) => node.data?.id === entity.id
      )

      // set({ selectedTreeNode })
      set({ selectedTreeNodeId: selectedTreeNode?.id || null })
      set({ selectedNodeItem: entity })
    } else {
      // set({ selectedTreeNode: undefined })
      set({ selectedTreeNodeId: null })
      set({ selectedNodeItem: undefined })
    }
  },

  // selectedTreeNode: undefined,
  selectedTreeNodeId: null,
  selectTreeNode: (
    treeNodeId?: string | null,
    nodeType?: LibraryNodeType,
    nodeItem?: TreeNodeItem
  ) => {
    set({ selectedTreeNodeId: treeNodeId ? treeNodeId : undefined })
    set({ selectedNodeType: nodeType ? nodeType : undefined })
    set({ selectedNodeItem: nodeItem ? nodeItem : undefined })
  },
}))

useFilterTree.getState().init()
