export function throwError(functionName: string, message: string): void {
  throw new Error(`[${functionName}]: ${message.toUpperCase()}`)
}

export function getType(payload: any): string | null {
  return payload ? typeof payload : null
}

export function ifKeyExist(object: object, key: any): string | null {
  return object && key ? (Object.keys(object).includes(key) ? key : null) : null
}

export function init(...args: any): void {
  for (let i = 0; i < args.length; i++) {
    args[i]()
  }
}

export function setPositive(elm: any) {
  elm.classList.add('bg-green-700', 'bg-opacity-60')
}

export function setNegative(elm: any) {
  elm.classList.add('bg-red-700', 'bg-opacity-60')
}

export function clearMarks(nodeList: any) {
  Array.from(nodeList).forEach((item: any) => {
    item.classList.remove('bg-red-700', 'bg-green-700', 'bg-opacity-60')
  })
}

export function parseUrl(baseUrl: string): URL {
  return new URL(baseUrl)
}

export function parseUrlWithArgs(baseUrl: string, [...args]: any): URL {
  let results: any = {}
  args.forEach((elm: any) => {
    Object.assign(results, elm)
  })
  return new URL(`${baseUrl}?${new URLSearchParams(results)}`)
}

export function getAnsweredQueries(array: []): string[] {
  const queries = []
  for (const [key, value] of Object.entries(array)) {
    queries.push(`${Object.values(value)}`)
  }
  return queries
}

export function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export const addClasses = (element: HTMLElement, classList: string): void => {
  if (element && classList) {
    element.classList.add(classList)
  }
}
export const removeClasses = (element: HTMLElement, classList: string): void => {
  if (element && classList) {
    element.classList.remove(classList)
  }
}

export const loadModules = (globObject: any): object => {
  let modules = {}

  for (const path in globObject) {
    globObject[path]().then((mod: any) => {
      const regex = /([^\\\/:*?\"<>|]+)$/
      const fileName = path.match(regex)![0].split('.')[0]
      if (fileName != null) {
        modules = Object.assign(modules, {
          [fileName]: JSON.parse(JSON.stringify(mod)),
        } as keyof object)
      }
    })
  }
  return modules
}
