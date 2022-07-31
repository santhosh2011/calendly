import {Controller, Delete, Get, Post, Put} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get()
  getAvailabilityOfEvent( eventId){
    return[];
  }

  @Get()
  getScheduleForDay( eventId, date){
    return[];
  }

  @Get('all')
  getAllEvents( eventId){
    return[];
  }

  @Get(':eventId')
  getEvent( eventId){
    return[];
  }

  @Post()
  createEvent(){

  }

  @Delete()
  deleteEvent(){

  }

  @Put()
  updateEvent(){

  }
}
