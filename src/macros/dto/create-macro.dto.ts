import { UUID } from "crypto";

export class CreateMacroDto {
  id: UUID
  name: string
  calories: number
  proteins: number
  fat: number
  vitamins: string[]
  minerals: string[]
}
