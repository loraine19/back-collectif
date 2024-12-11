import { Injectable } from '@nestjs/common';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Group } from '@prisma/client';


@Injectable()
export class GroupsService {
  constructor(private prisma: PrismaService) { }
  async create(data: CreateGroupDto): Promise<Group> {
    return await this.prisma.group.create({
     data
    });
  }
  
  async findAll(): Promise<Group[]> {
    return await this.prisma.group.findMany({
      include: { GroupUser: { include: { User: true } } },});
  }

  async findOne(id: number): Promise<Group> {
    return await this.prisma.group.findUnique({
      where: { id },
      include: { GroupUser: { include: { User: true } } },
    })
  }

  async update(id: number, updateGroupDto: any):Promise<Group> {
    return await this.prisma.group.update({
      where: { id },
      data: updateGroupDto,
    });
  }

 async remove(id: number):Promise<Group> {
    return await this.prisma.group.delete({ where: { id } });
  }
}
