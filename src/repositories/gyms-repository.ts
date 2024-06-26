import { Gym, Prisma } from '@prisma/client'

export interface FindManyNearbyGym {
  latitude: number
  longitude: number
}
export interface GymsRepository {
  findByUserId(id: number): Promise<Gym | null>
  createGym(data: Prisma.GymCreateInput): Promise<Gym>
  searchGym(searchMany: string, pageInfo: number): Promise<Gym[]>
  findManyNearbyGyms(param: FindManyNearbyGym): Promise<Gym[]>
}
