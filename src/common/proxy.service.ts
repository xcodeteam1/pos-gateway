import { Injectable, HttpException } from '@nestjs/common';
import axios, { AxiosRequestConfig } from 'axios';

@Injectable()
export class ProxyService {
  async forwardRequest(
    targetUrl: string,
    path: string,
    method: string,
    body?: any,
    params?: any,
    headers?: Record<string, any>,
  ): Promise<any> {
    const config: AxiosRequestConfig = {
      method: method as any,
      url: `${targetUrl}${path}`,
      data: body,
      params,
      headers,
    };

    try {
      const response = await axios(config);
      return response.data;
    } catch (error: any) {
      throw new HttpException(
        error?.response?.data || error.message,
        error?.response?.status || 500,
      );
    }
  }
}
