import {Controller, Delete, Get, Post, Put} from '@nestjs/common';
import { AppService } from './app.service';

@Controller('event')
export class EventController {
  constructor(private readonly appService: AppService) {}

  @Get('all')
  getAllEvents( eventId){
    return[];
  }

  @Get(':eventId')
  getEvent( eventId){
    return {};
  }

  @Post()
  createEvent(){
    return {};
  }

  @Delete()
  deleteEvent(){
    return {};
  }

  @Put()
  updateEvent(){
    return {};
  }
}
