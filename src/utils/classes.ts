type ClassObject = {
  [key: string]: boolean
}

export const cx = (...classes: (string | ClassObject)[]): string => {
  return classes
    .flatMap((cls) => {
      if (typeof cls === 'string') {
        return cls
      } else if (typeof cls === 'object' && cls !== null) {
        return Object.entries(cls)
          .filter(([, value]) => value)
          .map(([key]) => key)
      }
      return ''
    })
    .filter(Boolean)
    .join(' ')
}
