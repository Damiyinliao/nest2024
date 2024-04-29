import { PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";

export class BaseEntity {
  @PrimaryGeneratedColumn() // 自增长列
  id?: string;
  @CreateDateColumn({
    comment: '创建时间',
    type: 'timestamp'
  })
  createTime: Date;
  @UpdateDateColumn({
    comment: '更新时间',
    type: 'timestamp'    
  })
  updateTime: Date;
  
  toJSON() {
    const { createTime, updateTime, ...other } = this;
    return {
      ...other,
      createTime: this.formatDate(createTime),
      updateTime: this.formatDate(updateTime)
    };
  }

  private formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = this.padZero(date.getMonth() + 1);
    const day = this.padZero(date.getDate());
    const hours = this.padZero(date.getHours());
    const minutes = this.padZero(date.getMinutes());
    const seconds = this.padZero(date.getSeconds());
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }

  private padZero(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }
}