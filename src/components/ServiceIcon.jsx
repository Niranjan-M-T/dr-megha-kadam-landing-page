import serviceIcons from './serviceIcons'

export default function ServiceIcon({ name, ...props }) {
  const Icon = serviceIcons[name]
  return Icon ? <Icon {...props} /> : null
}
