export interface NavLink {
  id?: string
  label: string
  route?: string[]
  icon?: string
  visible?: boolean
  items?: NavLink[]
}
