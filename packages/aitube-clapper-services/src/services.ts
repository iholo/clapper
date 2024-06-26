import { StoreApi, UseBoundStore } from "zustand"
import { TimelineStore } from "@aitube/timeline"

import { AssistantStore } from "./assistant"
import { BroadcastStore } from "./broadcast"
import { EditorStore } from "./editor"
import { MonitorStore } from "./monitor"
import { RendererStore } from "./renderer"
import { ResolverStore } from "./resolver"
import { PluginsStore } from "./plugins"
import { AudioStore } from "./audio"
import { SettingsStore } from "./settings"
import { TasksStore } from "./tasks"
import { UIStore } from "./ui"

export type AssistantService = UseBoundStore<StoreApi<AssistantStore>>
export type AudioService = UseBoundStore<StoreApi<AudioStore>>
export type BroadcastService = UseBoundStore<StoreApi<BroadcastStore>>
export type EditorService = UseBoundStore<StoreApi<EditorStore>>
export type MonitorService = UseBoundStore<StoreApi<MonitorStore>>
export type RendererService = UseBoundStore<StoreApi<RendererStore>>
export type ResolverService = UseBoundStore<StoreApi<ResolverStore>>
export type SettingsService = UseBoundStore<StoreApi<SettingsStore>>
export type TasksService = UseBoundStore<StoreApi<TasksStore>>
export type TimelineService = UseBoundStore<StoreApi<TimelineStore>>
export type PluginsService = UseBoundStore<StoreApi<PluginsStore>>
export type UIService = UseBoundStore<StoreApi<UIStore>>

export type PrivateServices = {
  plugins: PluginsService
  settings: SettingsService
}

// the controllers publicly available
// missing from this list are the settings and the plugins store itself
export type PublicServices = {
  assistant: AssistantService
  audio: AudioService
  tasks: TasksService
  editor: EditorService
  monitor: MonitorService
  timeline: TimelineService
  renderer: RendererService
  resolver: ResolverService
  broadcast: BroadcastService
  ui: UIService
}

export type Services = PrivateServices & PublicServices