import { BaseApi } from '@/api/BaseApi'
import { AxiosApi } from '@/api/AxiosApi'
import { IApi } from '@/types'

export class Api extends BaseApi implements IApi {
  private provider: any = new AxiosApi()

  async fetch(url: string): Promise<any> {
    return await this.provider.fetch(url)
  }
}
