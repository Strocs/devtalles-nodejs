import { buildLogger } from "../../src/plugins";
import { logger as winstonLogger } from "../../src/plugins/logger.plugin";

describe("buildLogger", () => {
  test('should return a function logger', () => {
    const logger = buildLogger("test")
    expect(typeof logger.log).toBe('function')
    expect(typeof logger.error).toBe('function')
  })


  test('logger.log should log a message', () => {

    // Preparación
    const winstonLoggerMock = jest.spyOn(winstonLogger, 'log')
    const message = 'test message'
    const service = 'test service'

    //Estímulo
    const logger = buildLogger(service)
    logger.log(message)

    //Aserción
    expect(winstonLoggerMock).toHaveBeenCalled()
    expect(winstonLoggerMock).toHaveBeenCalledWith('info', expect.objectContaining({
      level: 'info', message,
      service
    }))
  })

  test('logger.log should log an error', () => {

    // Preparación
    const winstonLoggerMock = jest.spyOn(winstonLogger, 'error')
    const message = 'test message'
    const service = 'test service'

    //Estímulo
    const logger = buildLogger(service)
    logger.error(message)

    //Aserción
    expect(winstonLoggerMock).toHaveBeenCalled()
    expect(winstonLoggerMock).toHaveBeenCalledWith('error', { message, service })

  })
})