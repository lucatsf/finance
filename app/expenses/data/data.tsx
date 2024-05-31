import {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  CheckCircledIcon,
  LapTimerIcon,
  CrossCircledIcon,
  StopwatchIcon,
} from "@radix-ui/react-icons"

export const labels = [
  {
    value: "alimento",
    label: "Alimento",
  },
  {
    value: "saude",
    label: "Saude",
  },
  {
    value: "estudos",
    label: "Estudos",
  },
]

export const statuses = [
  {
    value: "Atrasado",
    label: "Atrasado",
    icon: LapTimerIcon,
  },
  {
    value: "A vencer",
    label: "A vencer",
    icon: StopwatchIcon,
  },
  {
    value: "Pago",
    label: "Pago",
    icon: CheckCircledIcon,
  },
  {
    value: "Cancelado",
    label: "Cancelado",
    icon: CrossCircledIcon,
  },
]

export const priorities = [
  {
    label: "Baixo",
    value: "low",
    icon: ArrowDownIcon,
  },
  {
    label: "Médio",
    value: "medium",
    icon: ArrowRightIcon,
  },
  {
    label: "Alto",
    value: "high",
    icon: ArrowUpIcon,
  },
]
