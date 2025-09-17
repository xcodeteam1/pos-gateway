import { Controller, All, Req, Res, HttpStatus } from '@nestjs/common';
import { ServicesConfig } from 'config/service';
import { Request, Response } from 'express';
import { ProxyService } from 'src/common/proxy.service';

@Controller('commerce')
export class CommerceController {
  constructor(private readonly proxy: ProxyService) {}

  @All('*')
  async forward(@Req() req: Request, @Res() res: Response) {
    try {
      const path = req.path.replace('/commerce', '');

      const data = await this.proxy.forwardRequest(
        ServicesConfig.COMMERCE_SERVICE_URL,
        path,
        req.method,
        req.body,
        req.query,
        req.headers,
      );

      res.status(HttpStatus.OK).json(data);
    } catch (err: any) {
      res
        .status(err.getStatus ? err.getStatus() : 500)
        .json(err.getResponse ? err.getResponse() : { message: err.message });
    }
  }
}
