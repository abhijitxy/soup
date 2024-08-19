import { z } from "zod"
import { source_simple_resistor } from "./source_simple_resistor"
import { source_simple_capacitor } from "./source_simple_capacitor"
import { source_simple_diode } from "./source_simple_diode"
import { source_simple_ground } from "./source_simple_ground"
import { source_simple_bug } from "./source_simple_bug"
import { source_simple_chip } from "./source_simple_chip"
import { source_led } from "./source_led"
import { source_simple_power_source } from "./source_simple_power_source"
import { source_switch } from "./source_switch"

export const any_source_component = z.union([
  source_simple_resistor,
  source_simple_capacitor,
  source_simple_diode,
  source_simple_ground,
  source_switch,
  source_simple_chip,
  source_simple_bug,
  source_led,
  source_simple_power_source,
])

export type AnySourceComponent = z.infer<typeof any_source_component>
