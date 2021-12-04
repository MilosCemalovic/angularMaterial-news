import { Article } from './article'
import { Pagination } from './pagination'

export interface News {
  pagination: Pagination
  data: Article[]
}
