import { Controller, All, Req, Res, HttpStatus, Ip } from '@nestjs/common';
import { Request, Response } from 'express';
import { ServicesConfig } from 'config/service';
import { ProxyService } from 'src/common/proxy.service';

@Controller('pos')
export class PosController {
  constructor(private readonly proxy: ProxyService) {}

  @All('*')
  async forward(@Req() req: Request, @Res() res: Response, @Ip() ip: string) {
    console.log('User IP:', ip);

    const path = req.path.replace('/pos', '');
    try {
      const data = await this.proxy.forwardRequest(
        ServicesConfig.POS_SERVICE_URL,
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
