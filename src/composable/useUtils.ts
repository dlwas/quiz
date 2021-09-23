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
