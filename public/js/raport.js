let str= " JJJJJJJJJJJJJJJException('JJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJ');\r\n" + "package-lock.json:\r\n" + 
           "   5020      },\r\n" + 
           "   5021:     \"domexception\": {\r\n" + 
           "   5022        \"version\": \"1.0.1\",\r\n" + 
           "   5023:       \"resolved\": \"https://registry.npmjs.org/domexception/-/domexception-1.0.1.tgz\",\r\n" + 
           "   5024        \"integrity\": \"sha512-raigMkn7CJNNo6Ihro1fzG7wr3fHuYVytzquZKX5n0yizGsTcYgzdIUwj1X9pK0VvjeihV+XiclP+DjwbsSKug==\",\r\n" + 
           "\r\n" + 
           "   9748          \"data-urls\": \"^1.1.0\",\r\n" + 
           "   9749:         \"domexception\": \"^1.0.1\",\r\n" + 
           "   9750          \"escodegen\": \"^1.11.1\",\r\n" + 
           "\r\n" + 
           "  13339      },\r\n" + 
           "  13340:     \"spdx-exceptions\": {\r\n" + 
           "  13341        \"version\": \"2.3.0\",\r\n" + 
           "  13342:       \"resolved\": \"https://registry.npmjs.org/spdx-exceptions/-/spdx-exceptions-2.3.0.tgz\",\r\n" + 
           "  13343        \"integrity\": \"sha512-/tTrYOC7PPI1nUAgx34hUpqXuyJG+DTHJTnIULG4rDygi4xu/tfgmq1e1cIRwRzwZgo4NLySi+ricLkZkw4i5A==\",\r\n" + 
           "\r\n" + 
           "  13351        \"requires\": {\r\n" + 
           "  13352:         \"spdx-exceptions\": \"^2.1.0\",\r\n" + 
           "  13353          \"spdx-license-ids\": \"^3.0.0\"\r\n" + 
           "\r\n" + 
           "  15047        \"requires\": {\r\n" + 
           "  15048:         \"domexception\": \"^1.0.1\",\r\n" + 
           "  15049          \"webidl-conversions\": \"^4.0.2\",\r\n" + 
           "\r\n" + 
           "src\\api\\dajm\\api-dajm.controller.ts:\r\n" + 
           "   1: import { Controller, Post, Body, Res, Req, ForbiddenException } from '@nestjs/common';\r\n" + 
           "   2  import { Request, Response } from 'express';\r\n" + 
           "   3  \r\n" + 
           "   4: import { MissingInformationException } from './exceptions/missing-information.exception';\r\n" + 
           "   5  import { ApiDajmService } from './api-dajm.service';\r\n" + 
           "\r\n" + 
           "  29    ) {\r\n" + 
           "  30:     if (typeof profile !== 'object' || typeof sector !== 'object') throw new MissingInformationException();\r\n" + 
           "  31  \r\n" + 
           "\r\n" + 
           "  46    computeSoftTest(@Body('softskills') softskills: any, @Req() req: Request, @Res() res: Response) {\r\n" + 
           "  47:     if (typeof softskills !== 'object') throw new MissingInformationException();\r\n" + 
           "  48  \r\n" + 
           "\r\n" + 
           "  63    computeSoftTestCommercial(@Body('softskills') softskills: any, @Req() req: Request, @Res() res: Response) {\r\n" + 
           "  64:     if (typeof softskills !== 'object') throw new MissingInformationException();\r\n" + 
           "  65  \r\n" + 
           "\r\n" + 
           "  80    computeSoftTestSocial(@Body('softskills') softskills: any, @Req() req: Request, @Res() res: Response) {\r\n" + 
           "  81:     if (typeof softskills !== 'object') throw new MissingInformationException();\r\n" + 
           "  82  \r\n" + 
           "\r\n" + 
           "  91  \r\n" + 
           "  92:     if (idetaToken !== process.env.DAJM_ACCESS_TOKEN) throw new ForbiddenException();\r\n" + 
           "  93    }\r\n" + 
           "\r\n" + 
           "src\\api\\dajm\\exceptions\\missing-information.exception.ts:\r\n" + 
           "  1: import { BadRequestException } from '@nestjs/common';\r\n" + 
           "  2  \r\n" + 
           "  3: export class MissingInformationException extends BadRequestException {\r\n" + 
           "  4    constructor(message = 'Missing information') {\r\n" + 
           "\r\n" + 
           "src\\api\\profideo\\api-profideo.controller.ts:\r\n" + 
           "   1: import { Controller, Get, ForbiddenException, Req, Res, BadRequestException, Param, Query } from '@nestjs/common';\r\n" + 
           "   2  import { Request, Response } from 'express';\r\n" + 
           "\r\n" + 
           "   4  import { ApiProfideoService } from './api-profideo.service';\r\n" + 
           "   5: import { MissingInformationException } from './exceptions/missing-information.exception';\r\n" + 
           "   6  \r\n" + 
           "\r\n" + 
           "  41      if (!appToken || !contractSetId || !concurrentFormulaId || !referentFormulaId) {\r\n" + 
           "  42:       throw new MissingInformationException();\r\n" + 
           "  43      }\r\n" + 
           "\r\n" + 
           "  57        .catch(error => {\r\n" + 
           "  58:         if (!(error instanceof ForbiddenException)) throw new BadRequestException();\r\n" + 
           "  59        });\r\n" + 
           "\r\n" + 
           "  64  \r\n" + 
           "  65:     if (idetaToken !== process.env.PROFIDEO_ACCESS_TOKEN) throw new ForbiddenException();\r\n" + 
           "  66    }\r\n" + 
           "\r\n" + 
           "src\\api\\profideo\\exceptions\\missing-information.exception.ts:\r\n" + 
           "  1: import { BadRequestException } from '@nestjs/common';\r\n" + 
           "  2  \r\n" + 
           "  3: export class MissingInformationException extends BadRequestException {\r\n" + 
           "  4    constructor(message = 'Missing information') {\r\n" + 
           "\r\n" + 
           "src\\core\\core.module.ts:\r\n" + 
           "   2  \r\n" + 
           "   3: import { allExceptionsFilterFactory } from './exceptions/all-exceptions.provider';\r\n" + 
           "   4  import { firebaseAppFactory } from './providers/firebase-app.provider';\r\n" + 
           "\r\n" + 
           "  11  const providers = [\r\n" + 
           "  12:   allExceptionsFilterFactory,\r\n" + 
           "  13    firebaseAppFactory,\r\n" + 
           "\r\n" + 
           "src\\core\\exceptions\\all-exceptions.filter.ts:\r\n" + 
           "   1  import { Catch, ArgumentsHost, Inject } from '@nestjs/common';\r\n" + 
           "   2: import { BaseExceptionFilter } from '@nestjs/core';\r\n" + 
           "   3  import Rollbar = require('rollbar');\r\n" + 
           "\r\n" + 
           "   7  @Catch()\r\n" + 
           "   8: export class AllExceptionsFilter extends BaseExceptionFilter {\r\n" + 
           "   9    constructor(@Inject('ROLLBAR') private rollbarService: Rollbar, private loggerService: LoggerService) {\r\n" + 
           "\r\n" + 
           "  12  \r\n" + 
           "  13:   catch(exception: any, host: ArgumentsHost) {\r\n" + 
           "  14      const ctx = host.switchToHttp();\r\n" + 
           "\r\n" + 
           "  16  \r\n" + 
           "  17:     this.loggerService.error(exception);\r\n" + 
           "  18:     this.rollbarService.error(exception, request);\r\n" + 
           "  19:     super.catch(exception, host);\r\n" + 
           "  20    }\r\n" + 
           "\r\n" + 
           "src\\core\\exceptions\\all-exceptions.provider.ts:\r\n" + 
           "  1: import { AllExceptionsFilter } from './all-exceptions.filter';\r\n" + 
           "  2  \r\n" + 
           "  3: export const allExceptionsFilterFactory = {\r\n" + 
           "  4:   provide: 'ALL_EXCEPTIONS_FILTER',\r\n" + 
           "  5:   useClass: AllExceptionsFilter\r\n" + 
           "  6  };\r\n" + 
           "\r\n" + 
           "src\\core\\exceptions\\do-nothing.exception.ts:\r\n" + 
           "  1  // This is an internal error, thus extending Error, not CustomError\r\n" + 
           "  2: export class DoNothingException extends Error {\r\n" + 
           "  3    constructor(message = 'Do nothing') {\r\n" + 
           "\r\n" + 
           "src\\features\\analytics\\analytics.factory.ts:\r\n" + 
           "   1: import { Injectable, BadRequestException } from '@nestjs/common';\r\n" + 
           "   2  import { InjectRepository } from '@nestjs/typeorm';\r\n" + 
           "\r\n" + 
           "  27        default:\r\n" + 
           "  28:         throw new BadRequestException('Unknown collection');\r\n" + 
           "  29      }\r\n" + 
           "\r\n" + 
           "src\\features\\analytics\\analytics.service.ts:\r\n" + 
           "    1: import { BadRequestException } from '@nestjs/common';\r\n" + 
           "    2  import { MongoRepository } from 'typeorm';\r\n" + 
           "\r\n" + 
           "  193        default:\r\n" + 
           "  194:         throw new BadRequestException('Invalid TimeSerie Granularity');\r\n" + 
           "  195      }\r\n" + 
           "\r\n" + 
           "  208        default:\r\n" + 
           "  209:         throw new BadRequestException('Invalid TimeSerie Granularity');\r\n" + 
           "  210      }\r\n" + 
           "\r\n" + 
           "  240        default:\r\n" + 
           "  241:         throw new BadRequestException('Invalid TimeSerie Granularity');\r\n" + 
           "  242      }\r\n" + 
           "\r\n" + 
           "  279        default:\r\n" + 
           "  280:         throw new BadRequestException('Invalid Collection Name');\r\n" + 
           "  281      }\r\n" + 
           "\r\n" + 
           "src\\features\\auto-replies\\auto-replies.service.ts:\r\n" + 
           "   1: import { Injectable, NotFoundException } from '@nestjs/common';\r\n" + 
           "   2  \r\n" + 
           "\r\n" + 
           "  54        .then(page => {\r\n" + 
           "  55:         if (!page) throw new NotFoundException(`This page id : ${pageId} does not have any related infos`);\r\n" + 
           "  56          return this.facebookRepository.disconnectPage(page.id, page.access_token).then(() => page);\r\n" + 
           "\r\n" + 
           "src\\features\\broadcast\\broadcast.controller.ts:\r\n" + 
           "   7  import { BroadcastService } from './broadcast.service';\r\n" + 
           "   8: import { BroadcastCreationException } from './exceptions/broadcast-creation.exception';\r\n" + 
           "   9  import { FacebookService as FacebookBroadcastService } from './channels/facebook/facebook.service';\r\n" + 
           "\r\n" + 
           "  81          }\r\n" + 
           "  82:         return Promise.reject(new BroadcastCreationException('An error occured during broadcast saving'));\r\n" + 
           "  83        })\r\n" + 
           "\r\n" + 
           "src\\features\\broadcast\\channels\\facebook\\facebook.service.ts:\r\n" + 
           "   4  \r\n" + 
           "   5: import { BroadcastCreationException } from '../../exceptions/broadcast-creation.exception';\r\n" + 
           "   6  import { LoggerService } from '../../../../core/logger/logger.service';\r\n" + 
           "\r\n" + 
           "  27        if (!creativeRes || !creativeRes.message_creative_id) {\r\n" + 
           "  28:         throw new BroadcastCreationException('An error occured during Message Creative creation');\r\n" + 
           "  29        }\r\n" + 
           "\r\n" + 
           "  45            if (!(broadcastRes && broadcastRes.broadcast_id)) {\r\n" + 
           "  46:             throw new BroadcastCreationException('An error occured during Broadcast creation');\r\n" + 
           "  47            }\r\n" + 
           "\r\n" + 
           "  53          .catch(reqError => {\r\n" + 
           "  54:           throw new BroadcastCreationException(get(reqError, 'error.error'));\r\n" + 
           "  55          });\r\n" + 
           "\r\n" + 
           "  76        .catch(reqError => {\r\n" + 
           "  77:         throw new BroadcastCreationException(reqError.error.error);\r\n" + 
           "  78        });\r\n" + 
           "\r\n" + 
           "src\\features\\broadcast\\exceptions\\broadcast-creation.exception.ts:\r\n" + 
           "  1: import { InternalServerErrorException } from '@nestjs/common';\r\n" + 
           "  2  \r\n" + 
           "  3: export class BroadcastCreationException extends InternalServerErrorException {\r\n" + 
           "  4    constructor(message?: string) {\r\n" + 
           "\r\n" + 
           "src\\features\\data-comparisons\\data-comparisons.service.stub.ts:\r\n" + 
           "   2  \r\n" + 
           "   3: import { InvalidComparisonException } from './exceptions/invalid-comparison.exception';\r\n" + 
           "   4  \r\n" + 
           "\r\n" + 
           "  32        default:\r\n" + 
           "  33:         throw new InvalidComparisonException('Type de comparaison invalide');\r\n" + 
           "  34      }\r\n" + 
           "\r\n" + 
           "src\\features\\data-comparisons\\data-comparisons.service.ts:\r\n" + 
           "    6  \r\n" + 
           "    7: import { InvalidComparisonException } from './exceptions/invalid-comparison.exception';\r\n" + 
           "    8: import { InvalidDataValueException } from '../data-processor/exceptions/invalid-data-value.exception';\r\n" + 
           "    9  import { LoggerService } from '../../core/logger/logger.service';\r\n" + 
           "\r\n" + 
           "   11  import { DataProcessorService } from '../data-processor/data-processor.service';\r\n" + 
           "   12: import { InfiniteLoopException } from '../../resources/nodes/exceptions/infinite-loop.exception';\r\n" + 
           "   13  \r\n" + 
           "\r\n" + 
           "   35          if (!nextNode) {\r\n" + 
           "   36:           return Promise.reject(new InvalidComparisonException('Missing next comparison'));\r\n" + 
           "   37          } else if (nextNode === context.currentNode.id) {\r\n" + 
           "   38            return Promise.reject(\r\n" + 
           "   39:             new InfiniteLoopException(\r\n" + 
           "   40                'La configuration du noeud ' + context.currentNode.name + ' provoque une boucle infinie.'\r\n" + 
           "\r\n" + 
           "   67          /* Checking Comparison parameters */\r\n" + 
           "   68:         if (!type) throw new InvalidComparisonException('Type de comparaison manquant');\r\n" + 
           "   69:         else if (!address) throw new InvalidComparisonException('Clé de comparaison manquante');\r\n" + 
           "   70          else if (type !== '!' && type !== '.!' && !comparator) {\r\n" + 
           "   71:           throw new InvalidComparisonException('Comparateur manquant');\r\n" + 
           "   72:         } else if (!ifTrue) throw new InvalidComparisonException('Action si Vrai manquante');\r\n" + 
           "   73:         else if (!ifFalse) throw new InvalidComparisonException('Action si Faux manquante');\r\n" + 
           "   74  \r\n" + 
           "\r\n" + 
           "  107        .catch((error: any) => {\r\n" + 
           "  108:         if (error instanceof InvalidDataValueException) {\r\n" + 
           "  109            if (type === '!') return ifFalse.targetNode;\r\n" + 
           "  110            if (type === '.!') return ifTrue.targetNode;\r\n" + 
           "  111:           throw new InvalidComparisonException('Variable de comparaison invalide');\r\n" + 
           "  112          } else throw error;\r\n" + 
           "\r\n" + 
           "  147        default:\r\n" + 
           "  148:         throw new InvalidComparisonException('Type de comparaison invalide');\r\n" + 
           "  149      }\r\n" + 
           "\r\n" + 
           "src\\features\\data-comparisons\\exceptions\\invalid-comparison.exception.ts:\r\n" + 
           "  1: import { UnprocessableEntityException } from '@nestjs/common';\r\n" + 
           "  2  \r\n" + 
           "  3: export class InvalidComparisonException extends UnprocessableEntityException {\r\n" + 
           "  4    super(message = 'Invalid comparison') {\r\n" + 
           "\r\n" + 
           "src\\features\\data-operations\\data-operations.oep.spec.ts:\r\n" + 
           "     5  import { DataComparisonsService } from '../data-comparisons/data-comparisons.service';\r\n" + 
           "     6: import { InvalidOperationException } from './exceptions/invalid-operation.exception';\r\n" + 
           "     7  import { DataComparisonsStubService } from '../data-comparisons/data-comparisons.service.stub';\r\n" + 
           "\r\n" + 
           "    42    // inivalue = null\r\n" + 
           "    43:   it('test add initialValue=null ---expected-> InvalidOperationException', () => {\r\n" + 
           "    44:     expect(() => service.computeOperandOperation(null, null, 2, 'add')).toThrow(InvalidOperationException);\r\n" + 
           "    45    });\r\n" + 
           "\r\n" + 
           "    47    // inivalue = undefined\r\n" + 
           "    48:   it('test add initialValue=undefined ---expected-> InvalidOperationException', () => {\r\n" + 
           "    49:     expect(() => service.computeOperandOperation(undefined, null, 2, 'add')).toThrow(InvalidOperationException);\r\n" + 
           "    50    });\r\n" + 
           "\r\n" + 
           "    52    // inivalue = type\r\n" + 
           "    53:   it('test add initialValue=bad type ---expected-> InvalidOperationException', () => {\r\n" + 
           "    54:     expect(() => service.computeOperandOperation('bad type', null, 2, 'add')).toThrow(InvalidOperationException);\r\n" + 
           "    55    });\r\n" + 
           "\r\n" + 
           "    57    // OperandValue = null\r\n" + 
           "    58:   it('test add OperandValue=null ---expected-> InvalidOperationException', () => {\r\n" + 
           "    59:     expect(() => service.computeOperandOperation(1, null, null, 'add')).toThrow(InvalidOperationException);\r\n" + 
           "    60    });\r\n" + 
           "\r\n" + 
           "    62    // OperandValue = undefined\r\n" + 
           "    63:   it('test add OperandValue=undefined ---expected-> InvalidOperationException', () => {\r\n" + 
           "    64:     expect(() => service.computeOperandOperation(1, null, undefined, 'add')).toThrow(InvalidOperationException);\r\n" + 
           "    65    });\r\n" + 
           "\r\n" + 
           "    67    // OperandValue = type\r\n" + 
           "    68:   it('test add OperandValue=bad type ---expected-> InvalidOperationException', () => {\r\n" + 
           "    69:     expect(() => service.computeOperandOperation(1, null, 'bad type', 'add')).toThrow(InvalidOperationException);\r\n" + 
           "    70    });\r\n" + 
           "\r\n" + 
           "    73    // Operation undefined\r\n" + 
           "    74:   it('Operation undefined---expected-> InvalidOperationException', () => {\r\n" + 
           "    75:     expect(() => service.computeOperandOperation(1, null, 2, undefined)).toThrow(InvalidOperationException);\r\n" + 
           "    76    });\r\n" + 
           "\r\n" + 
           "    85    // inivalue = null\r\n" + 
           "    86:   it('test remove initialValue=null ---expected-> InvalidOperationException', () => {\r\n" + 
           "    87:     expect(() => service.computeOperandOperation(null, null, 3, 'remove')).toThrow(InvalidOperationException);\r\n" + 
           "    88    });\r\n" + 
           "\r\n" + 
           "    90    // inivalue = undefined\r\n" + 
           "    91:   it('test remove initialValue=undefined ---expected-> InvalidOperationException', () => {\r\n" + 
           "    92:     expect(() => service.computeOperandOperation(undefined, null, 3, 'remove')).toThrow(InvalidOperationException);\r\n" + 
           "    93    });\r\n" + 
           "\r\n" + 
           "    95    // inivalue = type\r\n" + 
           "    96:   it('test remove initialValue=bad type ---expected-> InvalidOperationException', () => {\r\n" + 
           "    97:     expect(() => service.computeOperandOperation('bad type', null, 3, 'remove')).toThrow(InvalidOperationException);\r\n" + 
           "    98    });\r\n" + 
           "\r\n" + 
           "   100    // OperandValue = null\r\n" + 
           "   101:   it('test remove OperandValue=null ---expected-> InvalidOperationException', () => {\r\n" + 
           "   102:     expect(() => service.computeOperandOperation(4, null, null, 'remove')).toThrow(InvalidOperationException);\r\n" + 
           "   103    });\r\n" + 
           "\r\n" + 
           "   105    // OperandValue = undefined\r\n" + 
           "   106:   it('test remove OperandValue=undefined ---expected-> InvalidOperationException', () => {\r\n" + 
           "   107:     expect(() => service.computeOperandOperation(4, null, undefined, 'remove')).toThrow(InvalidOperationException);\r\n" + 
           "   108    });\r\n" + 
           "\r\n" + 
           "   110    // OperandValue = type\r\n" + 
           "   111:   it('test remove OperandValue=bad type ---expected-> InvalidOperationException', () => {\r\n" + 
           "   112:     expect(() => service.computeOperandOperation(4, null, 'bad type', 'remove')).toThrow(InvalidOperationException);\r\n" + 
           "   113    });\r\n" + 
           "\r\n" + 
           "   122    // inivalue = null\r\n" + 
           "   123:   it('test divide initialValue=null ---expected-> InvalidOperationException', () => {\r\n" + 
           "   124:     expect(() => service.computeOperandOperation(null, null, 2, 'divide')).toThrow(InvalidOperationException);\r\n" + 
           "   125    });\r\n" + 
           "\r\n" + 
           "   127    // inivalue = undefined\r\n" + 
           "   128:   it('test divide initialValue=undefined ---expected-> InvalidOperationException', () => {\r\n" + 
           "   129:     expect(() => service.computeOperandOperation(undefined, null, 2, 'divide')).toThrow(InvalidOperationException);\r\n" + 
           "   130    });\r\n" + 
           "\r\n" + 
           "   132    // inivalue = type\r\n" + 
           "   133:   it('test divide initialValue=bad type ---expected-> InvalidOperationException', () => {\r\n" + 
           "   134:     expect(() => service.computeOperandOperation('bad type', null, 2, 'divide')).toThrow(InvalidOperationException);\r\n" + 
           "   135    });\r\n" + 
           "\r\n" + 
           "   137    // OperandValue = null\r\n" + 
           "   138:   it('test divide OperandValue=null ---expected-> InvalidOperationException', () => {\r\n" + 
           "   139:     expect(() => service.computeOperandOperation(4, null, null, 'divide')).toThrow(InvalidOperationException);\r\n" + 
           "   140    });\r\n" + 
           "\r\n" + 
           "   142    // OperandValue = undefined\r\n" + 
           "   143:   it('test divide OperandValue=undefined ---expected-> InvalidOperationException', () => {\r\n" + 
           "   144:     expect(() => service.computeOperandOperation(4, null, undefined, 'divide')).toThrow(InvalidOperationException);\r\n" + 
           "   145    });\r\n" + 
           "\r\n" + 
           "   147    // OperandValue = type\r\n" + 
           "   148:   it('test divide OperandValue=bad type ---expected-> InvalidOperationException', () => {\r\n" + 
           "   149:     expect(() => service.computeOperandOperation(4, null, 'bad type', 'divide')).toThrow(InvalidOperationException);\r\n" + 
           "   150    });\r\n" + 
           "\r\n" + 
           "   160    // inivalue = null\r\n" + 
           "   161:   it('test multiply initialValue=null ---expected-> InvalidOperationException', () => {\r\n" + 
           "   162:     expect(() => service.computeOperandOperation(null, null, 4, 'multiply')).toThrow(InvalidOperationException);\r\n" + 
           "   163    });\r\n" + 
           "\r\n" + 
           "   165    // inivalue = undefined\r\n" + 
           "   166:   it('test multiply initialValue=undefined ---expected-> InvalidOperationException', () => {\r\n" + 
           "   167:     expect(() => service.computeOperandOperation(undefined, null, 4, 'multiply')).toThrow(InvalidOperationException);\r\n" + 
           "   168    });\r\n" + 
           "\r\n" + 
           "   170    // inivalue = type\r\n" + 
           "   171:   it('test multiply initialValue=bad type ---expected-> InvalidOperationException', () => {\r\n" + 
           "   172:     expect(() => service.computeOperandOperation('bad type', null, 4, 'multiply')).toThrow(InvalidOperationException);\r\n" + 
           "   173    });\r\n" + 
           "\r\n" + 
           "   175    // OperandValue = null\r\n" + 
           "   176:   it('test multiply OperandValue=null ---expected-> InvalidOperationException', () => {\r\n" + 
           "   177:     expect(() => service.computeOperandOperation(4, null, null, 'multiply')).toThrow(InvalidOperationException);\r\n" + 
           "   178    });\r\n" + 
           "\r\n" + 
           "   180    // OperandValue = undefined\r\n" + 
           "   181:   it('test multiply OperandValue=undefined ---expected-> InvalidOperationException', () => {\r\n" + 
           "   182:     expect(() => service.computeOperandOperation(4, null, undefined, 'multiply')).toThrow(InvalidOperationException);\r\n" + 
           "   183    });\r\n" + 
           "\r\n" + 
           "   185    // OperandValue = type\r\n" + 
           "   186:   it('test multiply OperandValue=bad type ---expected-> InvalidOperationException', () => {\r\n" + 
           "   187:     expect(() => service.computeOperandOperation(4, null, 'bad type', 'multiply')).toThrow(InvalidOperationException);\r\n" + 
           "   188    });\r\n" + 
           "\r\n" + 
           "   202    // inivalue = null\r\n" + 
           "   203:   it('test round initialValue=null ---expected-> InvalidOperationException', () => {\r\n" + 
           "   204:     expect(() => service.computeOperandOperation(null, null, 4, 'round')).toThrow(InvalidOperationException);\r\n" + 
           "   205    });\r\n" + 
           "\r\n" + 
           "   207    // inivalue = undefined\r\n" + 
           "   208:   it('test round initialValue=undefined ---expected-> InvalidOperationException', () => {\r\n" + 
           "   209:     expect(() => service.computeOperandOperation(undefined, null, 4, 'round')).toThrow(InvalidOperationException);\r\n" + 
           "   210    });\r\n" + 
           "\r\n" + 
           "   212    // inivalue = type\r\n" + 
           "   213:   it('test round initialValue=bad type ---expected-> InvalidOperationException', () => {\r\n" + 
           "   214:     expect(() => service.computeOperandOperation('bad type', null, 4, 'round')).toThrow(InvalidOperationException);\r\n" + 
           "   215    });\r\n" + 
           "\r\n" + 
           "   217    // OperandValue = null\r\n" + 
           "   218:   it('test round OperandValue=null ---expected-> InvalidOperationException', () => {\r\n" + 
           "   219:     expect(() => service.computeOperandOperation(4, null, null, 'round')).toThrow(InvalidOperationException);\r\n" + 
           "   220    });\r\n" + 
           "\r\n" + 
           "   222    // OperandValue = undefined\r\n" + 
           "   223:   it('test round OperandValue=undefined ---expected-> InvalidOperationException', () => {\r\n" + 
           "   224:     expect(() => service.computeOperandOperation(4, null, undefined, 'round')).toThrow(InvalidOperationException);\r\n" + 
           "   225    });\r\n" + 
           "\r\n" + 
           "   227    // OperandValue = type\r\n" + 
           "   228:   it('test round OperandValue=bad type ---expected-> InvalidOperationException', () => {\r\n" + 
           "   229:     expect(() => service.computeOperandOperation(4, null, 'bad type', 'round')).toThrow(InvalidOperationException);\r\n" + 
           "   230    });\r\n" + 
           "\r\n" + 
           "   243    // inivalue = null OperandValue=4 expected '4' car on ne considère pas le InitialValue\r\n" + 
           "   244:   it('test toString initialValue=null ---expected-> InvalidOperationException', () => {\r\n" + 
           "   245      expect(service.computeOperandOperation(null, null, 4, 'toString')).toStrictEqual('4');\r\n" + 
           "\r\n" + 
           "   248    // inivalue = undefined OperandValue=4 expected '4' car on ne considère pas le InitialValue\r\n" + 
           "   249:   it('test toString initialValue=undefined ---expected-> InvalidOperationException', () => {\r\n" + 
           "   250      expect(service.computeOperandOperation(undefined, null, 4, 'toString')).toStrictEqual('4');\r\n" + 
           "\r\n" + 
           "   253    // inivalue = type OperandValue=4\r\n" + 
           "   254:   it('test toString initialValue=bad type ---expected-> InvalidOperationException', () => {\r\n" + 
           "   255      expect(service.computeOperandOperation('bad type', null, 4, 'toString')).toStrictEqual('4');\r\n" + 
           "\r\n" + 
           "   258    // OperandValue = null\r\n" + 
           "   259:   it('test toString OperandValue=null ---expected-> InvalidOperationException', () => {\r\n" + 
           "   260:     expect(() => service.computeOperandOperation(4, null, null, 'toString')).toThrow(InvalidOperationException);\r\n" + 
           "   261    });\r\n" + 
           "\r\n" + 
           "   263    // OperandValue = undefined\r\n" + 
           "   264:   it('test toString OperandValue=undefined ---expected-> InvalidOperationException', () => {\r\n" + 
           "   265:     expect(() => service.computeOperandOperation(4, null, undefined, 'toString')).toThrow(InvalidOperationException);\r\n" + 
           "   266    });\r\n" + 
           "\r\n" + 
           "   293    // OperandValue = null\r\n" + 
           "   294:   it('test toUpperCase OperandValue=null ---expected-> InvalidOperationException', () => {\r\n" + 
           "   295:     expect(() => service.computeOperandOperation(4, null, null, 'toUpperCase')).toThrow(InvalidOperationException);\r\n" + 
           "   296    });\r\n" + 
           "\r\n" + 
           "   298    // OperandValue = undefined\r\n" + 
           "   299:   it('test toUpperCase OperandValue=undefined ---expected-> InvalidOperationException', () => {\r\n" + 
           "   300:     expect(() => service.computeOperandOperation(4, null, undefined, 'toUpperCase')).toThrow(InvalidOperationException);\r\n" + 
           "   301    });\r\n" + 
           "\r\n" + 
           "   303    // OperandValue = type\r\n" + 
           "   304:   it('test toUpperCase OperandValue=bad type ---expected-> InvalidOperationException', () => {\r\n" + 
           "   305:     expect(() => service.computeOperandOperation(4, null, 1, 'toUpperCase')).toThrow(InvalidOperationException);\r\n" + 
           "   306    });\r\n" + 
           "\r\n" + 
           "   327    // OperandValue = null\r\n" + 
           "   328:   it('test toLowerCase OperandValue=null ---expected-> InvalidOperationException', () => {\r\n" + 
           "   329:     expect(() => service.computeOperandOperation(4, null, null, 'toLowerCase')).toThrow(InvalidOperationException);\r\n" + 
           "   330    });\r\n" + 
           "\r\n" + 
           "   332    // OperandValue = undefined\r\n" + 
           "   333:   it('test toLowerCase OperandValue=undefined ---expected-> InvalidOperationException', () => {\r\n" + 
           "   334:     expect(() => service.computeOperandOperation(4, null, undefined, 'toLowerCase')).toThrow(InvalidOperationException);\r\n" + 
           "   335    });\r\n" + 
           "\r\n" + 
           "   337    // OperandValue = type\r\n" + 
           "   338:   it('test toLowerCase OperandValue=bad type ---expected-> InvalidOperationException', () => {\r\n" + 
           "   339:     expect(() => service.computeOperandOperation(4, null, 1, 'toLowerCase')).toThrow(InvalidOperationException);\r\n" + 
           "   340    });\r\n" + 
           "\r\n" + 
           "   347    // test toNumber InitialValue='PasNecessaire' OperandValue='MauavaisStringNumber' expected 23\r\n" + 
           "   348:   it('test toNumber InitialValue=\"PasNecessaire\" OperandValue=\"MauavaisStringNumber\"  ---expected-> InvalidOperationException ', () => {\r\n" + 
           "   349      expect(() => service.computeOperandOperation('PasNecessaire', null, 'MauavaisStringNumber', 'toNumber')).toThrow(\r\n" + 
           "   350:       InvalidOperationException\r\n" + 
           "   351      );\r\n" + 
           "\r\n" + 
           "   353  \r\n" + 
           "   354:   // inivalue = null OperandValue=null expected InvalidOperationException car on ne considère pas le InitialValue\r\n" + 
           "   355:   it('test toNumber initialValue=null OperandValue=null---expected-> InvalidOperationException', () => {\r\n" + 
           "   356:     expect(() => service.computeOperandOperation(null, null, null, 'toNumber')).toThrow(InvalidOperationException);\r\n" + 
           "   357    });\r\n" + 
           "   358  \r\n" + 
           "   359:   // inivalue = undefined OperandValue=undefined expected InvalidOperationException\r\n" + 
           "   360    // car on ne considère pas le InitialValue\r\n" + 
           "   361:   it('test toNumber initialValue=undefined  OperandValue=undefined---expected-> InvalidOperationException', () => {\r\n" + 
           "   362      expect(() => service.computeOperandOperation(undefined, null, undefined, 'toNumber')).toThrow(\r\n" + 
           "   363:       InvalidOperationException\r\n" + 
           "   364      );\r\n" + 
           "\r\n" + 
           "   367    // OperandValue = undefined\r\n" + 
           "   368:   it('test toNumber OperandValue=undefined ---expected-> InvalidOperationException', () => {\r\n" + 
           "   369:     expect(() => service.computeOperandOperation(4, null, undefined, 'toNumber')).toThrow(InvalidOperationException);\r\n" + 
           "   370    });\r\n" + 
           "\r\n" + 
           "   372    // OperandValue = type\r\n" + 
           "   373:   it('test toNumber OperandValue=bad type ---expected-> InvalidOperationException', () => {\r\n" + 
           "   374:     expect(() => service.computeOperandOperation(4, null, {}, 'toNumber')).toThrow(InvalidOperationException);\r\n" + 
           "   375    });\r\n" + 
           "\r\n" + 
           "   381  \r\n" + 
           "   382:   // InitialValue=bad type {} OperandValue = 3 expected InvalidOperationException\r\n" + 
           "   383:   it('test push InitialValue=bad type {} OperandValue=3 ---expected-> InvalidOperationException', () => {\r\n" + 
           "   384:     expect(() => service.computeOperandOperation({}, null, 3, 'push')).toThrow(InvalidOperationException);\r\n" + 
           "   385    });\r\n" + 
           "   386  \r\n" + 
           "   387:   // InitialValue=undefined OperandValue = 3 expected InvalidOperationException\r\n" + 
           "   388:   it('test push InitialValue=undefined OperandValue=3 ---expected-> InvalidOperationException', () => {\r\n" + 
           "   389:     expect(() => service.computeOperandOperation(undefined, null, 3, 'push')).toThrow(InvalidOperationException);\r\n" + 
           "   390    });\r\n" + 
           "   391  \r\n" + 
           "   392:   // InitialValue=null OperandValue = 3 expected InvalidOperationException\r\n" + 
           "   393:   it('test push InitialValue=null OperandValue=3 ---expected-> InvalidOperationException', () => {\r\n" + 
           "   394:     expect(() => service.computeOperandOperation(null, null, 3, 'push')).toThrow(InvalidOperationException);\r\n" + 
           "   395    });\r\n" + 
           "   396  \r\n" + 
           "   397:   // InitialValue=[1,2] OperandValue = null expected InvalidOperationException\r\n" + 
           "   398:   it('test push InitialValue=[1,2] OperandValue=null ---expected-> InvalidOperationException', () => {\r\n" + 
           "   399:     expect(() => service.computeOperandOperation([1, 2], null, null, 'push')).toThrow(InvalidOperationException);\r\n" + 
           "   400    });\r\n" + 
           "   401  \r\n" + 
           "   402:   // test push InitialValue=[1,2] OperandValue=undefined ---expected-> InvalidOperationException\r\n" + 
           "   403:   it('test push InitialValue=[1,2] OperandValue=undefined ---expected-> InvalidOperationException', () => {\r\n" + 
           "   404:     expect(() => service.computeOperandOperation([1, 2], null, undefined, 'push')).toThrow(InvalidOperationException);\r\n" + 
           "   405    });\r\n" + 
           "   406    /*\r\n" + 
           "   407:   // test push InitialValue=[1,2] OperandValue=[undefined] ---expected-> InvalidOperationException\r\n" + 
           "   408:   it('test push InitialValue=[1,2] OperandValue=[undefined] ---expected-> InvalidOperationException', () => {\r\n" + 
           "   409:     expect(() => service.computeOperandOperation([1, 2], null, [undefined], 'push')).toThrow(InvalidOperationException);\r\n" + 
           "   410    });\r\n" + 
           "\r\n" + 
           "   415  \r\n" + 
           "   416:   // test push InitialValue=[1,2,3,4,5] OperandValue=[6,7,8,9,10] ---expected-> InvalidOperationException\r\n" + 
           "   417:   it('test push InitialValue=[1,2,3,4,5] OperandValue=[6,7,8,9,10] ---expected-> InvalidOperationException', () => {\r\n" + 
           "   418      expect(() =>\r\n" + 
           "\r\n" + 
           "   430  \r\n" + 
           "   431:   // test sort InitailValue=null (OperandValue=0) not used ---expected-> InvalidOperationException\r\n" + 
           "   432:   it('test sort InitailValue=null (OperandValue=0) not used ---expected-> InvalidOperationException', () => {\r\n" + 
           "   433:     expect(() => service.computeOperandOperation(null, null, 0, 'sort')).toThrow(InvalidOperationException);\r\n" + 
           "   434    });\r\n" + 
           "   435  \r\n" + 
           "   436:   // test sort InitailValue=undefined (OperandValue=0) not used---expected-> InvalidOperationException\r\n" + 
           "   437:   it('test sort InitailValue=undefined (OperandValue=0) not used---expected-> InvalidOperationException', () => {\r\n" + 
           "   438:     expect(() => service.computeOperandOperation(undefined, null, 0, 'sort')).toThrow(InvalidOperationException);\r\n" + 
           "   439    });\r\n" + 
           "   440  \r\n" + 
           "   441:   // test sort InitailValue=bad type {} (OperandValue=0) not used---expected-> InvalidOperationException\r\n" + 
           "   442:   it('test sort InitailValue=bad type {} (OperandValue=0) not used---expected-> InvalidOperationException', () => {\r\n" + 
           "   443:     expect(() => service.computeOperandOperation({}, null, 0, 'sort')).toThrow(InvalidOperationException);\r\n" + 
           "   444    });\r\n" + 
           "\r\n" + 
           "   455    /*\r\n" + 
           "   456:   // test sort InitailValue=[3,1,2,4, undefined] (OperandValue=null) not used---expected-> InvalidOperationException\r\n" + 
           "   457    it(\r\n" + 
           "\r\n" + 
           "   459        +'(OperandValue=null)' +\r\n" + 
           "   460:       'not used---expected-> InvalidOperationException',\r\n" + 
           "   461      () => {\r\n" + 
           "   462        expect(() => service.computeOperandOperation([3, 1, 2, 4, undefined], null, null, 'sort')).toThrow(\r\n" + 
           "   463:         InvalidOperationException\r\n" + 
           "   464        );\r\n" + 
           "\r\n" + 
           "   473  \r\n" + 
           "   474:   // test invertedSort InitailValue=null (OperandValue=0) not used ---expected-> InvalidOperationException\r\n" + 
           "   475:   it('test invertedSort InitailValue=null (OperandValue=0) not used ---expected-> InvalidOperationException', () => {\r\n" + 
           "   476:     expect(() => service.computeOperandOperation(null, null, 0, 'invertedSort')).toThrow(InvalidOperationException);\r\n" + 
           "   477    });\r\n" + 
           "   478  \r\n" + 
           "   479:   // test invertedSort InitailValue=undefined (OperandValue=0) not used---expected-> InvalidOperationException\r\n" + 
           "   480    it(\r\n" + 
           "   481:     'test invertedSort InitailValue=undefined (OperandValue=0) not used---expected->' + 'InvalidOperationException',\r\n" + 
           "   482      () => {\r\n" + 
           "   483        expect(() => service.computeOperandOperation(undefined, null, 0, 'invertedSort')).toThrow(\r\n" + 
           "   484:         InvalidOperationException\r\n" + 
           "   485        );\r\n" + 
           "\r\n" + 
           "   488  \r\n" + 
           "   489:   // test invertedSort InitailValue=bad type {} (OperandValue=0) not used---expected-> InvalidOperationException\r\n" + 
           "   490    it(\r\n" + 
           "   491:     'test invertedSort InitailValue=bad type {} (OperandValue=0)' + 'not used---expected-> InvalidOperationException',\r\n" + 
           "   492      () => {\r\n" + 
           "   493:       expect(() => service.computeOperandOperation({}, null, 0, 'invertedSort')).toThrow(InvalidOperationException);\r\n" + 
           "   494      }\r\n" + 
           "\r\n" + 
           "   507    /* // test invertedSort InitailValue=[3,1,2,4, undefined] (OperandValue=null)\r\n" + 
           "   508:   // not used---expected-> InvalidOperationException\r\n" + 
           "   509    it(\r\n" + 
           "   510      'test invertedSort InitailValue=[3,1,2,4,undefined] (OperandValue=null) ' +\r\n" + 
           "   511:       'not used---expected-> InvalidOperationException',\r\n" + 
           "   512      () => {\r\n" + 
           "   513        expect(() => service.computeOperandOperation([3, 1, 2, 4, undefined], null, 0, 'invertedSort')).toThrow(\r\n" + 
           "   514:         InvalidOperationException\r\n" + 
           "   515        );\r\n" + 
           "\r\n" + 
           "   572    // test merge (InitailValue=null  OperandValue={ \"proriete4\": \"value4\", \"property5\": \"value5\" }\r\n" + 
           "   573:   // ---expected-> InvalidOperationException\r\n" + 
           "   574    it(\r\n" + 
           "   575      'test merge (InitailValue=null OperandValue={ \"proriete4\": \"value4\", \"property5\": \"value5\" } ' +\r\n" + 
           "   576:       '---expected-> InvalidOperationException',\r\n" + 
           "   577      () => {\r\n" + 
           "\r\n" + 
           "   579          service.computeOperandOperation(null, null, { proriete4: 'value4', property5: 'value5' }, 'merge')\r\n" + 
           "   580:       ).toThrow(InvalidOperationException);\r\n" + 
           "   581      }\r\n" + 
           "\r\n" + 
           "   584    // test merge (InitailValue={ \"property1\": \"value1\", \"property2\": \"value2\" } OperandValue=null\r\n" + 
           "   585:   // ---expected->InvalidOperationException  }\r\n" + 
           "   586    it(\r\n" + 
           "   587      'test merge (InitailValue={ \"property1\": \"value1\", \"property2\": \"value2\" } OperandValue=null  ' +\r\n" + 
           "   588:       '---expected-> InvalidOperationException }',\r\n" + 
           "   589      () => {\r\n" + 
           "\r\n" + 
           "   591          service.computeOperandOperation({ property1: 'value1', property2: 'value2' }, null, null, 'merge')\r\n" + 
           "   592:       ).toThrow(InvalidOperationException);\r\n" + 
           "   593      }\r\n" + 
           "\r\n" + 
           "   596    // test merge (InitailValue={ \"property1\": \"value1\", \"property2\": \"value2\" } OperandValue=undefined\r\n" + 
           "   597:   // ---expected->InvalidOperationException  }\r\n" + 
           "   598    it(\r\n" + 
           "   599      'test merge (InitailValue={ \"property1\": \"value1\", \"property2\": \"value2\" } OperandValue=undefined ' +\r\n" + 
           "   600:       ' ---expected-> InvalidOperationException }',\r\n" + 
           "   601      () => {\r\n" + 
           "\r\n" + 
           "   603          service.computeOperandOperation({ property1: 'value1', property2: 'value2' }, null, undefined, 'merge')\r\n" + 
           "   604:       ).toThrow(InvalidOperationException);\r\n" + 
           "   605      }\r\n" + 
           "\r\n" + 
           "   608    // test merge (InitailValue={ \"property1\": \"value1\", \"property2\": \"value2\" }\r\n" + 
           "   609:   // OperandValue={ \"proriete4\": undefined, \"property5\": \"value5\" } ---expected->InvalidOperationException  }\r\n" + 
           "   610    it(\r\n" + 
           "   611      'test merge (InitailValue={ \"property1\": \"value1\", \"property2\": \"value2\" }' +\r\n" + 
           "   612:       'OperandValue={ \"proriete4\": undefined, \"property5\": \"value5\" }  ---expected-> InvalidOperationException }',\r\n" + 
           "   613      () => {\r\n" + 
           "\r\n" + 
           "   620          )\r\n" + 
           "   621:       ).toThrow(InvalidOperationException);\r\n" + 
           "   622      }\r\n" + 
           "\r\n" + 
           "   625    // test merge (InitailValue=undefined OperandValue={ \"proriete4\": \"value4\",\r\n" + 
           "   626:   // \"property5\": \"value5\" }  ---expected-> InvalidOperationException }\r\n" + 
           "   627    it(\r\n" + 
           "   628      'test merge (InitailValue=undefined OperandValue={ \"proriete4\": \"value4\", \"property5\": \"value5\" }' +\r\n" + 
           "   629:       ' ---expected-> InvalidOperationException',\r\n" + 
           "   630      () => {\r\n" + 
           "\r\n" + 
           "   632          service.computeOperandOperation(undefined, null, { proriete4: 'value4', property5: 'value5' }, 'merge')\r\n" + 
           "   633:       ).toThrow(InvalidOperationException);\r\n" + 
           "   634      }\r\n" + 
           "\r\n" + 
           "   637    // test merge (InitailValue={ undefined, \"property2\": \"value2\" }\r\n" + 
           "   638:   // OperandValue={ \"proriete4\": \"value4\", \"property5\": \"value5\" }  ---expected-> InvalidOperationException }\r\n" + 
           "   639    it(\r\n" + 
           "   640      'test merge (InitailValue={ undefined, \"property2\": \"value2\" } ' +\r\n" + 
           "   641:       'OperandValue={ \"proriete4\": \"value4\", \"property5\": \"value5\" }  ---expected-> InvalidOperationException',\r\n" + 
           "   642      () => {\r\n" + 
           "\r\n" + 
           "   649          )\r\n" + 
           "   650:       ).toThrow(InvalidOperationException);\r\n" + 
           "   651      }\r\n" + 
           "\r\n" + 
           "   654    // OperandValue={ \"proriete4\": \"value4\", \"property5\": \"value5\" }\r\n" + 
           "   655:   // ---expected-> InvalidOperationException }\r\n" + 
           "   656    it(\r\n" + 
           "   657      'test merge (InitailValue={ \"property1\": null , \"property2\": \"value2\" }' +\r\n" + 
           "   658:       'OperandValue={ \"proriete4\": \"value4\", \"property5\": \"value5\" }  ---expected-> InvalidOperationException',\r\n" + 
           "   659      () => {\r\n" + 
           "\r\n" + 
           "   666          )\r\n" + 
           "   667:       ).toThrow(InvalidOperationException);\r\n" + 
           "   668      }\r\n" + 
           "\r\n" + 
           "   676  \r\n" + 
           "   677:   // test stringify(InitialValue=null) not used operandValue={ x: undefined, y: 6 } expected InvalidOperationException\r\n" + 
           "   678    /* it(\r\n" + 
           "   679      'test stringify (InitailValue=null) not used (OperandValue={ x: undefined, y: 6 } ) ' +\r\n" + 
           "   680:       '---expected-> InvalidOperationException',\r\n" + 
           "   681      () => {\r\n" + 
           "   682        expect(() => service.computeOperandOperation(null, null, { x: undefined, y: 6 }, 'stringify')).toThrow(\r\n" + 
           "   683:         InvalidOperationException\r\n" + 
           "   684        );\r\n" + 
           "\r\n" + 
           "   687  \r\n" + 
           "   688:   // test stringify(InitialValue=null) not used operandValue={ x: null, y: 6 } expected InvalidOperationException\r\n" + 
           "   689    /* it(\r\n" + 
           "   690      'test stringify (InitailValue=null) not used (OperandValue={ x: null, y: 6 } ) ' +\r\n" + 
           "   691:       '---expected-> InvalidOperationException',\r\n" + 
           "   692      () => {\r\n" + 
           "   693        expect(() => service.computeOperandOperation(null, null, { x: null, y: 6 }, 'stringify')).toThrow(\r\n" + 
           "   694:         InvalidOperationException\r\n" + 
           "   695        );\r\n" + 
           "\r\n" + 
           "   698  \r\n" + 
           "   699:   // test stringify(InitialValue=null) not used operandValue=undefined expected InvalidOperationException\r\n" + 
           "   700    it(\r\n" + 
           "   701      'test stringify (InitailValue=null)' +\r\n" + 
           "   702:       'not used (OperandValue=undefined ) ---expected-> InvalidOperationException ',\r\n" + 
           "   703      () => {\r\n" + 
           "   704        expect(() => service.computeOperandOperation(null, null, undefined, 'stringify')).toThrow(\r\n" + 
           "   705:         InvalidOperationException\r\n" + 
           "   706        );\r\n" + 
           "\r\n" + 
           "   709  \r\n" + 
           "   710:   // test stringify(InitialValue=null) not used operandValue=null expected InvalidOperationException\r\n" + 
           "   711:   it('test stringify (InitailValue=null) not used (OperandValue=null ) ---expected-> InvalidOperationException', () => {\r\n" + 
           "   712:     expect(() => service.computeOperandOperation(null, null, null, 'stringify')).toThrow(InvalidOperationException);\r\n" + 
           "   713    });\r\n" + 
           "\r\n" + 
           "   721    // test parse (InitailValue=null) not used OperandValue=\r\n" + 
           "   722:   // \"[1, 2, 3, 4, ]\" bad format json ---expected-> InvalidOperationException\r\n" + 
           "   723    it(\r\n" + 
           "   724      'test parse (InitailValue=null) not used OperandValue=  \"[1, 2, 3, 4, ]\"' +\r\n" + 
           "   725:       'bad format json ---expected-> InvalidOperationException',\r\n" + 
           "   726      () => {\r\n" + 
           "   727        expect(() => service.computeOperandOperation(null, null, '[1, 2, 3, 4, ]', 'parse')).toThrow(\r\n" + 
           "   728:         InvalidOperationException\r\n" + 
           "   729        );\r\n" + 
           "\r\n" + 
           "   733    // 'test parse (InitailValue=null) not used OperandValue=  \"{ \"test\" : 1, }\"\r\n" + 
           "   734:   // bad format json ---expected-> InvalidOperationException'\r\n" + 
           "   735    it(\r\n" + 
           "   736      'test parse (InitailValue=null) not used OperandValue=' +\r\n" + 
           "   737:       ' \"{ \"test\" : 1, }\"bad format json ---expected-> InvalidOperationException',\r\n" + 
           "   738      () => {\r\n" + 
           "   739        expect(() => service.computeOperandOperation(null, null, \"{ 'test' : 1, }\", 'parse')).toThrow(\r\n" + 
           "   740:         InvalidOperationException\r\n" + 
           "   741        );\r\n" + 
           "\r\n" + 
           "   879    // test parse (InitailValue=null) not used\r\n" + 
           "   880:   // OperandValue= undefined---expected->InvalidOperationException\r\n" + 
           "   881    it(\r\n" + 
           "   882:     'test parse (InitailValue=null) not used OperandValue=' + 'undefined---expected->InvalidOperationException ',\r\n" + 
           "   883      () => {\r\n" + 
           "   884:       expect(() => service.computeOperandOperation(null, null, undefined, 'parse')).toThrow(InvalidOperationException);\r\n" + 
           "   885      }\r\n" + 
           "\r\n" + 
           "   887  \r\n" + 
           "   888:   // test parse (InitailValue=null) not used OperandValue= null---expected->InvalidOperationException\r\n" + 
           "   889:   it('test parse (InitailValue=null) not used OperandValue= null---expected->InvalidOperationException ', () => {\r\n" + 
           "   890:     expect(() => service.computeOperandOperation(null, null, null, 'parse')).toThrow(InvalidOperationException);\r\n" + 
           "   891    });\r\n" + 
           "\r\n" + 
           "  1035    // {dataElem:{key:\"keyX\", id:\"testId\",scope:\"conversation\",type:\"boolean\"}}'+\r\n" + 
           "  1036:   // '(InitailValue=null) not used OperandValue= \"bad type\"---expected->InvalidOperationException'\r\n" + 
           "  1037    it(\r\n" + 
           "\r\n" + 
           "  1039        '{dataElem:{key:\"keyX\", id:\"testId\",scope:\"conversation\",type:\"boolean\"}}' +\r\n" + 
           "  1040:       '(InitailValue=null) not used OperandValue= \"bad type\"---expected->InvalidOperationException',\r\n" + 
           "  1041      () => {\r\n" + 
           "\r\n" + 
           "  1045        expect(() => service.computeOperandOperation(null, content, 'bad type', 'set')).toThrow(\r\n" + 
           "  1046:         InvalidOperationException\r\n" + 
           "  1047        );\r\n" + 
           "\r\n" + 
           "  1052    // {dataElem:{key:\"keyX\", id:\"testId\",scope:\"conversation\",type:\"boolean\"}}'+\r\n" + 
           "  1053:   // '(InitailValue=null) not used OperandValue= [1]---expected->InvalidOperationException'\r\n" + 
           "  1054    it(\r\n" + 
           "\r\n" + 
           "  1056        '{dataElem:{key:\"keyX\", id:\"testId\",scope:\"conversation\",type:\"boolean\"}}' +\r\n" + 
           "  1057:       '(InitailValue=null) not used OperandValue= [3]---expected->InvalidOperationException',\r\n" + 
           "  1058      () => {\r\n" + 
           "\r\n" + 
           "  1061        };\r\n" + 
           "  1062:       expect(() => service.computeOperandOperation(null, content, [3], 'set')).toThrow(InvalidOperationException);\r\n" + 
           "  1063      }\r\n" + 
           "\r\n" + 
           "  1067    // initialContent= {dataElem:{key:\"keyX\", id:\"testId\",scope:\"conversation\",type:\"boolean\"}}'+\r\n" + 
           "  1068:   // '(InitailValue=null) not used OperandValue= {\"p1\":3}---expected->InvalidOperationException'\r\n" + 
           "  1069    it(\r\n" + 
           "\r\n" + 
           "  1071        '{dataElem:{key:\"keyX\", id:\"testId\",scope:\"conversation\",type:\"boolean\"}}' +\r\n" + 
           "  1072:       '(InitailValue=null) not used OperandValue= {\"p1\":3}---expected->InvalidOperationException',\r\n" + 
           "  1073      () => {\r\n" + 
           "\r\n" + 
           "  1076        };\r\n" + 
           "  1077:       expect(() => service.computeOperandOperation(null, content, { p1: 3 }, 'set')).toThrow(InvalidOperationException);\r\n" + 
           "  1078      }\r\n" + 
           "\r\n" + 
           "  1082    // {dataElem:{key:\"keyX\", id:\"testId\",scope:\"conversation\",type:\"boolean\"}}'+\r\n" + 
           "  1083:   // '(InitailValue=null) not used OperandValue= 3---expected->InvalidOperationException'\r\n" + 
           "  1084    it(\r\n" + 
           "  1085      ' test set number to boolean initialContent= {dataElem:{key:\"keyX\", id:\"testId\",scope:\"conversation\",type:\"boolean\"}}' +\r\n" + 
           "  1086:       '(InitailValue=null) not used OperandValue= 3---expected->InvalidOperationException',\r\n" + 
           "  1087      () => {\r\n" + 
           "\r\n" + 
           "  1090        };\r\n" + 
           "  1091:       expect(() => service.computeOperandOperation(null, content, 3, 'set')).toThrow(InvalidOperationException);\r\n" + 
           "  1092      }\r\n" + 
           "\r\n" + 
           "  1112    // initialContent= {dataElem:{key:\"keyX\", id:\"testId\",scope:\"conversation\",type:\"boolean\"}}'+\r\n" + 
           "  1113:   // '(InitailValue=null) not used OperandValue= \"bad type\"---expected->\"InvalidOperationException\"'\r\n" + 
           "  1114    it(\r\n" + 
           "\r\n" + 
           "  1116        ' boolean initialContent= {dataElem:{key:\"keyX\", id:\"testId\",scope:\"conversation\",type:\"boolean\"}}' +\r\n" + 
           "  1117:       '(InitailValue=null) not used OperandValue= \"bad type\"---expected->InvalidOperationException',\r\n" + 
           "  1118      () => {\r\n" + 
           "\r\n" + 
           "  1122        expect(() => service.computeOperandOperation(null, content, 'bad type', 'set')).toThrow(\r\n" + 
           "  1123:         InvalidOperationException\r\n" + 
           "  1124        );\r\n" + 
           "\r\n" + 
           "  1129    // array to boolean initialContent= {dataElem:{key:\"keyX\", id:\"testId\",scope:\"conversation\",type:\"boolean\"}}'+\r\n" + 
           "  1130:   // '(InitailValue=null) not used OperandValue= [1]---expected->InvalidOperationException'\r\n" + 
           "  1131    it(\r\n" + 
           "  1132      ' test set (typeof de computeOperandOperation) for array to boolean initialContent= {dataElem:{key:\"keyX\", id:\"testId\",scope:\"conversation\",type:\"boolean\"}}' +\r\n" + 
           "  1133:       '(InitailValue=null) not used OperandValue= [3]---expected->InvalidOperationException',\r\n" + 
           "  1134      () => {\r\n" + 
           "\r\n" + 
           "  1137        };\r\n" + 
           "  1138:       expect(() => service.computeOperandOperation(null, content, [3], 'set')).toThrow(InvalidOperationException);\r\n" + 
           "  1139      }\r\n" + 
           "\r\n" + 
           "  1143    // object to boolean initialContent= {dataElem:{key:\"keyX\", id:\"testId\",scope:\"conversation\",type:\"boolean\"}}'+\r\n" + 
           "  1144:   // '(InitailValue=null) not used OperandValue= {\"p1\":3}---expected->InvalidOperationException'\r\n" + 
           "  1145    it(\r\n" + 
           "  1146      ' test set (typeof de computeOperandOperation) for object to boolean initialContent= {dataElem:{key:\"keyX\", id:\"testId\",scope:\"conversation\",type:\"boolean\"}}' +\r\n" + 
           "  1147:       '(InitailValue=null) not used OperandValue= {\"p1\":3}---expected->InvalidOperationException',\r\n" + 
           "  1148      () => {\r\n" + 
           "\r\n" + 
           "  1151        };\r\n" + 
           "  1152:       expect(() => service.computeOperandOperation(null, content, { p1: 3 }, 'set')).toThrow(InvalidOperationException);\r\n" + 
           "  1153      }\r\n" + 
           "\r\n" + 
           "  1157    // for number to boolean initialContent= {dataElem:{key:\"keyX\", id:\"testId\",scope:\"conversation\",type:\"boolean\"}}'+\r\n" + 
           "  1158:   // '(InitailValue=null) not used OperandValue= 3---expected->InvalidOperationException'\r\n" + 
           "  1159    it(\r\n" + 
           "\r\n" + 
           "  1161        'to boolean initialContent= {dataElem:{key:\"keyX\", id:\"testId\",scope:\"conversation\",type:\"boolean\"}}' +\r\n" + 
           "  1162:       '(InitailValue=null) not used OperandValue= 3---expected->InvalidOperationException',\r\n" + 
           "  1163      () => {\r\n" + 
           "\r\n" + 
           "  1166        };\r\n" + 
           "  1167:       expect(() => service.computeOperandOperation(null, content, 3, 'set')).toThrow(InvalidOperationException);\r\n" + 
           "  1168      }\r\n" + 
           "\r\n" + 
           "  1203    // {dataElem:{key:\"keyX\", id:\"testId\",scope:\"conversation\",type:\"number\"}}'\r\n" + 
           "  1204:   // '(InitailValue=null) not used OperandValue= true--->InvalidOperationException'\r\n" + 
           "  1205    it(\r\n" + 
           "  1206      ' test set boolean to number initialContent= {dataElem:{key:\"keyX\", id:\"testId\",scope:\"conversation\",type:\"number\"}}' +\r\n" + 
           "  1207:       '(InitailValue=null) not used OperandValue= true---expected->InvalidOperationException',\r\n" + 
           "  1208      () => {\r\n" + 
           "\r\n" + 
           "  1211        };\r\n" + 
           "  1212:       expect(() => service.computeOperandOperation(null, content, true, 'set')).toThrow(InvalidOperationException);\r\n" + 
           "  1213      }\r\n" + 
           "\r\n" + 
           "  1217    // id:\"testId\",scope:\"conversation\",type:\"number\"}}'\r\n" + 
           "  1218:   // '(InitailValue=null) not used OperandValue= [3]--->InvalidOperationException'\r\n" + 
           "  1219    it(\r\n" + 
           "\r\n" + 
           "  1221        ' {dataElem:{key:\"keyX\", id:\"testId\",scope:\"conversation\",type:\"number\"}}' +\r\n" + 
           "  1222:       '(InitailValue=null) not used OperandValue= [3]---expected->InvalidOperationException',\r\n" + 
           "  1223      () => {\r\n" + 
           "\r\n" + 
           "  1226        };\r\n" + 
           "  1227:       expect(() => service.computeOperandOperation(null, content, [3], 'set')).toThrow(InvalidOperationException);\r\n" + 
           "  1228      }\r\n" + 
           "\r\n" + 
           "  1231    // ' test set aray to number initialContent= {dataElem:{key:\"keyX\", id:\"testId\",scope:\"conversation\",type:\"number\"}}'\r\n" + 
           "  1232:   // '(InitailValue=null) not used OperandValue= [3,2]--->InvalidOperationException'\r\n" + 
           "  1233    it(\r\n" + 
           "\r\n" + 
           "  1235        '{dataElem:{key:\"keyX\", id:\"testId\",scope:\"conversation\",type:\"number\"}}' +\r\n" + 
           "  1236:       '(InitailValue=null) not used OperandValue= [3,2]---expected->InvalidOperationException',\r\n" + 
           "  1237      () => {\r\n" + 
           "\r\n" + 
           "  1240        };\r\n" + 
           "  1241:       expect(() => service.computeOperandOperation(null, content, [3, 2], 'set')).toThrow(InvalidOperationException);\r\n" + 
           "  1242      }\r\n" + 
           "\r\n" + 
           "  1246    // {dataElem:{key:\"keyX\", id:\"testId\",scope:\"conversation\",type:\"number\"}}'\r\n" + 
           "  1247:   // '(InitailValue=null) not used OperandValue= {\"property1\":'value1'}--->InvalidOperationException'\r\n" + 
           "  1248    it(\r\n" + 
           "\r\n" + 
           "  1250        '{dataElem:{key:\"keyX\", id:\"testId\",scope:\"conversation\",type:\"number\"}}' +\r\n" + 
           "  1251:       '(InitailValue=null) not used OperandValue= {\"property1\":\"value1\"}---expected->InvalidOperationException',\r\n" + 
           "  1252      () => {\r\n" + 
           "\r\n" + 
           "  1256        expect(() => service.computeOperandOperation(null, content, { property1: 'value1' }, 'set')).toThrow(\r\n" + 
           "  1257:         InvalidOperationException\r\n" + 
           "  1258        );\r\n" + 
           "\r\n" + 
           "  1297    // ' test set number to array initialContent= {dataElem:{key:\"keyX\", id:\"testId\",scope:\"conversation\",type:\"array\"}}'+\r\n" + 
           "  1298:   // '(InitailValue=null) not used OperandValue= 3---expected->InvalidOperationException'\r\n" + 
           "  1299    it(\r\n" + 
           "  1300      ' test set number to array initialContent= {dataElem:{key:\"keyX\", id:\"testId\",scope:\"conversation\",type:\"array\"}}' +\r\n" + 
           "  1301:       '(InitailValue=null) not used OperandValue= 3---expected->InvalidOperationException',\r\n" + 
           "  1302      () => {\r\n" + 
           "\r\n" + 
           "  1305        };\r\n" + 
           "  1306:       expect(() => service.computeOperandOperation(null, content, 3, 'set')).toThrow(InvalidOperationException);\r\n" + 
           "  1307      }\r\n" + 
           "\r\n" + 
           "  1311    // {dataElem:{key:\"keyX\", id:\"testId\",scope:\"conversation\",type:\"array\"}}'+\r\n" + 
           "  1312:   // '(InitailValue=null) not used OperandValue= false---expected->InvalidOperationException'\r\n" + 
           "  1313    it(\r\n" + 
           "\r\n" + 
           "  1315        '{dataElem:{key:\"keyX\", id:\"testId\",scope:\"conversation\",type:\"array\"}}' +\r\n" + 
           "  1316:       '(InitailValue=null) not used OperandValue= false---expected->InvalidOperationException',\r\n" + 
           "  1317      () => {\r\n" + 
           "\r\n" + 
           "  1320        };\r\n" + 
           "  1321:       expect(() => service.computeOperandOperation(null, content, false, 'set')).toThrow(InvalidOperationException);\r\n" + 
           "  1322      }\r\n" + 
           "\r\n" + 
           "  1325    // ' test set object to array initialContent= {dataElem:{key:\"keyX\", id:\"testId\",scope:\"conversation\",type:\"array\"}}'+\r\n" + 
           "  1326:   // '(InitailValue=null) not used OperandValue= {\"p1\":3}---expected->InvalidOperationException'\r\n" + 
           "  1327    it(\r\n" + 
           "  1328      ' test set object to array initialContent= {dataElem:{key:\"keyX\", id:\"testId\",scope:\"conversation\",type:\"array\"}}' +\r\n" + 
           "  1329:       '(InitailValue=null) not used OperandValue= {\"p1\":3}---expected->InvalidOperationException',\r\n" + 
           "  1330      () => {\r\n" + 
           "\r\n" + 
           "  1333        };\r\n" + 
           "  1334:       expect(() => service.computeOperandOperation(null, content, { p1: 3 }, 'set')).toThrow(InvalidOperationException);\r\n" + 
           "  1335      }\r\n" + 
           "\r\n" + 
           "  1338    // ' test set string to array initialContent= {dataElem:{key:\"keyX\", id:\"testId\",scope:\"conversation\",type:\"array\"}}'+\r\n" + 
           "  1339:   // '(InitailValue=null) not used OperandValue= \"bad type\"---expected->InvalidOperationException'\r\n" + 
           "  1340    it(\r\n" + 
           "  1341      ' test set string to array initialContent= {dataElem:{key:\"keyX\", id:\"testId\",scope:\"conversation\",type:\"array\"}}' +\r\n" + 
           "  1342:       '(InitailValue=null) not used OperandValue= \"bad type\"---expected->InvalidOperationException',\r\n" + 
           "  1343      () => {\r\n" + 
           "\r\n" + 
           "  1347        expect(() => service.computeOperandOperation(null, content, 'bad type', 'set')).toThrow(\r\n" + 
           "  1348:         InvalidOperationException\r\n" + 
           "  1349        );\r\n" + 
           "\r\n" + 
           "  1356      ' test set arrray to array initialContent= {dataElem:{key:\"keyX\", id:\"testId\",scope:\"conversation\",type:\"array\"}}' +\r\n" + 
           "  1357:       '(InitailValue=null) not used OperandValue= [3]---expected->InvalidOperationException',\r\n" + 
           "  1358      () => {\r\n" + 
           "\r\n" + 
           "  1403    // {dataElem:{key:\"keyX\", id:\"testId\",scope:\"conversation\",type:\"object\"}}'+\r\n" + 
           "  1404:   // '(InitailValue=null) not used OperandValue= 3---expected->InvalidOperationException'\r\n" + 
           "  1405    it(\r\n" + 
           "\r\n" + 
           "  1407        'id:\"testId\",scope:\"conversation\",type:\"object\"}}' +\r\n" + 
           "  1408:       '(InitailValue=null) not used OperandValue= 3---expected->InvalidOperationException',\r\n" + 
           "  1409      () => {\r\n" + 
           "\r\n" + 
           "  1412        };\r\n" + 
           "  1413:       expect(() => service.computeOperandOperation(null, content, 3, 'set')).toThrow(InvalidOperationException);\r\n" + 
           "  1414      }\r\n" + 
           "\r\n" + 
           "  1418    // {dataElem:{key:\"keyX\", id:\"testId\",scope:\"conversation\",type:\"object\"}}'+\r\n" + 
           "  1419:   // '(InitailValue=null) not used OperandValue= false---expected->InvalidOperationException'\r\n" + 
           "  1420    it(\r\n" + 
           "\r\n" + 
           "  1422        '{dataElem:{key:\"keyX\", id:\"testId\",scope:\"conversation\",type:\"object\"}}' +\r\n" + 
           "  1423:       '(InitailValue=null) not used OperandValue= false---expected->InvalidOperationException',\r\n" + 
           "  1424      () => {\r\n" + 
           "\r\n" + 
           "  1427        };\r\n" + 
           "  1428:       expect(() => service.computeOperandOperation(null, content, false, 'set')).toThrow(InvalidOperationException);\r\n" + 
           "  1429      }\r\n" + 
           "\r\n" + 
           "  1433    // {dataElem:{key:\"keyX\", id:\"testId\",scope:\"conversation\",type:\"object\"}}'+\r\n" + 
           "  1434:   // '(InitailValue=null) not used OperandValue= {\"p1\":3}---expected->InvalidOperationException'\r\n" + 
           "  1435    it(\r\n" + 
           "\r\n" + 
           "  1448    // {dataElem:{key:\"keyX\", id:\"testId\",scope:\"conversation\",type:\"object\"}}'+\r\n" + 
           "  1449:   // '(InitailValue=null) not used OperandValue= \"bad type\"---expected->InvalidOperationException'\r\n" + 
           "  1450    it(\r\n" + 
           "\r\n" + 
           "  1452        '{dataElem:{key:\"keyX\", id:\"testId\",scope:\"conversation\",type:\"object\"}}' +\r\n" + 
           "  1453:       '(InitailValue=null) not used OperandValue= \"bad type\"---expected->InvalidOperationException',\r\n" + 
           "  1454      () => {\r\n" + 
           "\r\n" + 
           "  1458        expect(() => service.computeOperandOperation(null, content, 'bad type', 'set')).toThrow(\r\n" + 
           "  1459:         InvalidOperationException\r\n" + 
           "  1460        );\r\n" + 
           "\r\n" + 
           "  1465    // {dataElem:{key:\"keyX\", id:\"testId\",scope:\"conversation\",type:\"object\"}}'+\r\n" + 
           "  1466:   // '(InitailValue=null) not used OperandValue= [3]---expected->InvalidOperationException'\r\n" + 
           "  1467    it(\r\n" + 
           "\r\n" + 
           "  1469        '{dataElem:{key:\"keyX\", id:\"testId\",scope:\"conversation\",type:\"object\"}}' +\r\n" + 
           "  1470:       '(InitailValue=null) not used OperandValue= [3]---expected->InvalidOperationException',\r\n" + 
           "  1471      () => {\r\n" + 
           "\r\n" + 
           "  1474        };\r\n" + 
           "  1475:       expect(() => service.computeOperandOperation(null, content, [3], 'set')).toThrow(InvalidOperationException);\r\n" + 
           "  1476      }\r\n" + 
           "\r\n" + 
           "  1532      'test encodeB64 computeOperandOperation ' +\r\n" + 
           "  1533:       'operand=undefined operationType=encodeB64----> InvalidOperationException',\r\n" + 
           "  1534      () => {\r\n" + 
           "  1535        expect(() => service.computeOperandOperation(null, null, undefined, 'encodeB64')).toThrow(\r\n" + 
           "  1536:         InvalidOperationException\r\n" + 
           "  1537        );\r\n" + 
           "\r\n" + 
           "  1540    it('test encodeB64 computeOperandOperation ' + 'operand=1 operationType=encodeB64---->Hello, World!', () => {\r\n" + 
           "  1541:     expect(() => service.computeOperandOperation(null, null, 1, 'encodeB64')).toThrow(InvalidOperationException);\r\n" + 
           "  1542    });\r\n" + 
           "  1543    it(\r\n" + 
           "  1544:     'test decodeB64 computeOperandOperation ' + 'operand=[1,2,3] operationType=decodeB64---->InvalidOperationException',\r\n" + 
           "  1545      () => {\r\n" + 
           "  1546        expect(() => service.computeOperandOperation(null, null, [1, 2, 3], 'decodeB64')).toThrow(\r\n" + 
           "  1547:         InvalidOperationException\r\n" + 
           "  1548        );\r\n" + 
           "\r\n" + 
           "  1552      'test encodeB64 computeOperandOperation ' +\r\n" + 
           "  1553:       'operand={prop1:1, prop2:2} operationType=encodeB64---->InvalidOperationException',\r\n" + 
           "  1554      () => {\r\n" + 
           "  1555        expect(() => service.computeOperandOperation(null, null, { prop1: 1, prop2: 2 }, 'encodeB64')).toThrow(\r\n" + 
           "  1556:         InvalidOperationException\r\n" + 
           "  1557        );\r\n" + 
           "\r\n" + 
           "  1569    it(\r\n" + 
           "  1570:     'test decodeB64 computeOperandOperation ' + 'operand=null operationType=decodeB64---->InvalidOperationException',\r\n" + 
           "  1571      () => {\r\n" + 
           "  1572:       expect(() => service.computeOperandOperation(null, null, null, 'decodeB64')).toThrow(InvalidOperationException);\r\n" + 
           "  1573      }\r\n" + 
           "\r\n" + 
           "  1576      'test decodeB64 computeOperandOperation ' +\r\n" + 
           "  1577:       'operand=undefined operationType=decodeB64----> InvalidOperationException',\r\n" + 
           "  1578      () => {\r\n" + 
           "  1579        expect(() => service.computeOperandOperation(null, null, undefined, 'decodeB64')).toThrow(\r\n" + 
           "  1580:         InvalidOperationException\r\n" + 
           "  1581        );\r\n" + 
           "\r\n" + 
           "  1584    it('test decodeB64 computeOperandOperation ' + 'operand=1 operationType=decodeB64---->Hello, World!', () => {\r\n" + 
           "  1585:     expect(() => service.computeOperandOperation(null, null, 1, 'decodeB64')).toThrow(InvalidOperationException);\r\n" + 
           "  1586    });\r\n" + 
           "  1587    it(\r\n" + 
           "  1588:     'test decodeB64 computeOperandOperation ' + 'operand=[1,2,3] operationType=decodeB64---->InvalidOperationException',\r\n" + 
           "  1589      () => {\r\n" + 
           "  1590        expect(() => service.computeOperandOperation(null, null, [1, 2, 3], 'decodeB64')).toThrow(\r\n" + 
           "  1591:         InvalidOperationException\r\n" + 
           "  1592        );\r\n" + 
           "\r\n" + 
           "  1596      'test decodeB64 computeOperandOperation ' +\r\n" + 
           "  1597:       'operand={prop1:1, prop2:2} operationType=decodeB64---->InvalidOperationException',\r\n" + 
           "  1598      () => {\r\n" + 
           "  1599        expect(() => service.computeOperandOperation(null, null, { prop1: 1, prop2: 2 }, 'decodeB64')).toThrow(\r\n" + 
           "  1600:         InvalidOperationException\r\n" + 
           "  1601        );\r\n" + 
           "\r\n" + 
           "  1619    );\r\n" + 
           "  1620:   it('test addtimeToDate initialValue=null,' + 'operand=25H---->InvalidOperationException', () => {\r\n" + 
           "  1621:     expect(() => service.computeOperandOperation(null, null, '25H', 'addTime')).toThrow(InvalidOperationException);\r\n" + 
           "  1622    });\r\n" + 
           "  1623:   it('test addtimeToDate initialValue=2022-07-31T09:30:20.609Z,' + 'operand=null---->InvalidOperationException', () => {\r\n" + 
           "  1624      expect(() => service.computeOperandOperation('2022-07-31T09:30:20.609Z', null, null, 'addTime')).toThrow(\r\n" + 
           "  1625:       InvalidOperationException\r\n" + 
           "  1626      );\r\n" + 
           "\r\n" + 
           "src\\features\\data-operations\\data-operations.oop.spec.ts:\r\n" + 
           "     5  import { DataComparisonsService } from '../data-comparisons/data-comparisons.service';\r\n" + 
           "     6: import { InvalidOperationException } from './exceptions/invalid-operation.exception';\r\n" + 
           "     7  import { DataComparisonsStubService } from '../data-comparisons/data-comparisons.service.stub';\r\n" + 
           "\r\n" + 
           "    17  import { DataRichSegment, DataStore, DataStoreElemType } from 'ideta-library/lib/common/data';\r\n" + 
           "    18: import { InvalidDataValueException } from '../data-processor/exceptions/invalid-data-value.exception';\r\n" + 
           "    19  import { ConversationData } from 'ideta-library/lib/common/conversation';\r\n" + 
           "\r\n" + 
           "   109        '{ type: \"literal\", value: \"10\" } address=test option={ isInteger: true, lowerBound, upperBound } ' +\r\n" + 
           "   110:       '----->InvalidOperationException',\r\n" + 
           "   111      () => {\r\n" + 
           "\r\n" + 
           "   116        expect(() => service.computeOptionsOperation(null, null, 'test', 'random', option, null)).toThrow(\r\n" + 
           "   117:         InvalidOperationException\r\n" + 
           "   118        );\r\n" + 
           "\r\n" + 
           "   123        '{ type: \"literal\", value: \"10\" } address=test ' +\r\n" + 
           "   124:       'option={ isInteger: true, lowerBound, upperBound }  ----->InvalidOperationException',\r\n" + 
           "   125      () => {\r\n" + 
           "\r\n" + 
           "   130        expect(() => service.computeOptionsOperation(undefined, undefined, 'test', 'random', option, null)).toThrow(\r\n" + 
           "   131:         InvalidOperationException\r\n" + 
           "   132        );\r\n" + 
           "\r\n" + 
           "   136      'test random option null { type: \"literal\", value: \"1000\" } ' +\r\n" + 
           "   137:       '{ type: \"literal\", value: \"10\" } address=test  ----->InvalidOperationException',\r\n" + 
           "   138      () => {\r\n" + 
           "\r\n" + 
           "   148          )\r\n" + 
           "   149:       ).toThrow(InvalidOperationException);\r\n" + 
           "   150      }\r\n" + 
           "\r\n" + 
           "   153      'test random option undefined { type: \"literal\", value: \"1000\" }' +\r\n" + 
           "   154:       '{ type: \"literal\", value: \"10\" } address=test  ----->InvalidOperationException',\r\n" + 
           "   155      () => {\r\n" + 
           "\r\n" + 
           "   165          )\r\n" + 
           "   166:       ).toThrow(InvalidOperationException);\r\n" + 
           "   167      }\r\n" + 
           "\r\n" + 
           "   171        'address=test option={ isInteger: true, lowerBound, upperBound }  ' +\r\n" + 
           "   172:       '----->InvalidOperationException',\r\n" + 
           "   173      () => {\r\n" + 
           "\r\n" + 
           "   186          )\r\n" + 
           "   187:       ).toThrow(InvalidOperationException);\r\n" + 
           "   188      }\r\n" + 
           "\r\n" + 
           "   191      'test random  upperBound=undefined lowerBound=10 address=test ' +\r\n" + 
           "   192:       'option={ isInteger: true, lowerBound, upperBound }  ----->InvalidOperationException',\r\n" + 
           "   193      () => {\r\n" + 
           "\r\n" + 
           "   206          )\r\n" + 
           "   207:       ).toThrow(InvalidOperationException);\r\n" + 
           "   208      }\r\n" + 
           "\r\n" + 
           "   211      'test random  upperBound=1000 lowerBound=null address=test option={ isInteger:' +\r\n" + 
           "   212:       'true, lowerBound, upperBound }  ----->InvalidOperationException',\r\n" + 
           "   213      () => {\r\n" + 
           "\r\n" + 
           "   226          )\r\n" + 
           "   227:       ).toThrow(InvalidOperationException);\r\n" + 
           "   228      }\r\n" + 
           "\r\n" + 
           "   232        ' address=test option={ isInteger: true, lowerBound, upperBound }' +\r\n" + 
           "   233:       '  ----->InvalidOperationException',\r\n" + 
           "   234      () => {\r\n" + 
           "\r\n" + 
           "   247          )\r\n" + 
           "   248:       ).toThrow(InvalidOperationException);\r\n" + 
           "   249      }\r\n" + 
           "\r\n" + 
           "   275        'lowerBound={ type: element, value: 10 }address=test' +\r\n" + 
           "   276:       'option={ isInteger: true, lowerBound, upperBound }  ----->InvalidOperationException',\r\n" + 
           "   277      () => {\r\n" + 
           "\r\n" + 
           "   290          )\r\n" + 
           "   291:       ).toThrow(InvalidOperationException);\r\n" + 
           "   292      }\r\n" + 
           "\r\n" + 
           "   296        ' lowerBound={ type: element, value: 10 }address=test' +\r\n" + 
           "   297:       'option={ isInteger: true, lowerBound, upperBound }  ----->InvalidOperationException',\r\n" + 
           "   298      () => {\r\n" + 
           "\r\n" + 
           "   311          )\r\n" + 
           "   312:       ).toThrow(InvalidOperationException);\r\n" + 
           "   313      }\r\n" + 
           "\r\n" + 
           "   317        +' lowerBound={ type: element, value: null }address=test ' +\r\n" + 
           "   318:       'option={ isInteger: true, lowerBound, upperBound }  ----->InvalidOperationException',\r\n" + 
           "   319      () => {\r\n" + 
           "\r\n" + 
           "   334          )\r\n" + 
           "   335:       ).toThrow(InvalidOperationException);\r\n" + 
           "   336      }\r\n" + 
           "\r\n" + 
           "   340        'lowerBound={ type: element, value: undefined }address=test ' +\r\n" + 
           "   341:       'option={ isInteger: true, lowerBound, upperBound }  ----->InvalidOperationException',\r\n" + 
           "   342      () => {\r\n" + 
           "\r\n" + 
           "   355          )\r\n" + 
           "   356:       ).toThrow(InvalidOperationException);\r\n" + 
           "   357      }\r\n" + 
           "\r\n" + 
           "   384        'lowerBound={ type: key, value: null }address=test ' +\r\n" + 
           "   385:       ' option={ isInteger: true, lowerBound, upperBound }  -----> InvalidDataValueException',\r\n" + 
           "   386      () => {\r\n" + 
           "\r\n" + 
           "   401          )\r\n" + 
           "   402:       ).toThrow(InvalidDataValueException);\r\n" + 
           "   403      }\r\n" + 
           "\r\n" + 
           "   407        'lowerBound={ type: key, value: undefined }address=test ' +\r\n" + 
           "   408:       'option={ isInteger: true, lowerBound, upperBound }  ----->InvalidOperationException',\r\n" + 
           "   409      () => {\r\n" + 
           "\r\n" + 
           "   422          )\r\n" + 
           "   423:       ).toThrow(InvalidDataValueException);\r\n" + 
           "   424      }\r\n" + 
           "\r\n" + 
           "   428        'lowerBound={ type: key, value: 10 }address=test' +\r\n" + 
           "   429:       'option={ isInteger: true, lowerBound, upperBound }  ----->InvalidOperationException',\r\n" + 
           "   430      () => {\r\n" + 
           "\r\n" + 
           "   443          )\r\n" + 
           "   444:       ).toThrow(InvalidDataValueException);\r\n" + 
           "   445      }\r\n" + 
           "\r\n" + 
           "   449        ' lowerBound={ type: key, value: 10 }address=test ' +\r\n" + 
           "   450:       'option={ isInteger: true, lowerBound, upperBound }  ----->InvalidOperationException',\r\n" + 
           "   451      () => {\r\n" + 
           "\r\n" + 
           "   464          )\r\n" + 
           "   465:       ).toThrow(InvalidDataValueException);\r\n" + 
           "   466      }\r\n" + 
           "\r\n" + 
           "   500        ' lowerBound={ type: key, value: value1 };address=test ' +\r\n" + 
           "   501:       'option=undefined  ----->InvalidOperationException',\r\n" + 
           "   502      () => {\r\n" + 
           "\r\n" + 
           "   514          )\r\n" + 
           "   515:       ).toThrow(InvalidOperationException);\r\n" + 
           "   516      }\r\n" + 
           "\r\n" + 
           "   520        'lowerBound={ type: key, value: value1 };address=test option=null }' +\r\n" + 
           "   521:       ' ----->InvalidOperationException',\r\n" + 
           "   522      () => {\r\n" + 
           "\r\n" + 
           "   535          )\r\n" + 
           "   536:       ).toThrow(InvalidOperationException);\r\n" + 
           "   537      }\r\n" + 
           "\r\n" + 
           "   566        'lowerBound={ type: key, value: value1=10};address=test' +\r\n" + 
           "   567:       'option={ source: [upperBound, lowerBound] }  ----->InvalidDataValueException',\r\n" + 
           "   568      () => {\r\n" + 
           "\r\n" + 
           "   582          )\r\n" + 
           "   583:       ).toThrow(InvalidDataValueException);\r\n" + 
           "   584      }\r\n" + 
           "\r\n" + 
           "   613        'lowerBound={ type: key, value: value1=null };address=test ' +\r\n" + 
           "   614:       'option=[upperBound, lowerBound, null] } ----->InvalidDataValueException',\r\n" + 
           "   615      () => {\r\n" + 
           "\r\n" + 
           "   629          )\r\n" + 
           "   630:       ).toThrow(InvalidDataValueException);\r\n" + 
           "   631      }\r\n" + 
           "\r\n" + 
           "   636        'lowerBound={ type: key, value: value1=undefined };address=test ' +\r\n" + 
           "   637:       'option=[upperBound, lowerBound, null] } ----->InvalidDataValueException',\r\n" + 
           "   638      () => {\r\n" + 
           "\r\n" + 
           "   652          )\r\n" + 
           "   653:       ).toThrow(InvalidDataValueException);\r\n" + 
           "   654      }\r\n" + 
           "\r\n" + 
           "   683        'lowerBound={ type: key, value: value1=10 };address=test ' +\r\n" + 
           "   684:       'source=null} ----->InvalidOperationException',\r\n" + 
           "   685      () => {\r\n" + 
           "\r\n" + 
           "   699          )\r\n" + 
           "   700:       ).toThrow(InvalidOperationException);\r\n" + 
           "   701      }\r\n" + 
           "\r\n" + 
           "   705        'lowerBound={ type: key, value: value1=10 };address=test ' +\r\n" + 
           "   706:       'source=undefined } -----> InvalidOperationException',\r\n" + 
           "   707      () => {\r\n" + 
           "\r\n" + 
           "   721          )\r\n" + 
           "   722:       ).toThrow(InvalidOperationException);\r\n" + 
           "   723      }\r\n" + 
           "\r\n" + 
           "   754        'lowerBound={ type: key, value: value1=undefined };address=test ' +\r\n" + 
           "   755:       'option=[upperBound, lowerBound, null] } ----->InvalidDataValueException',\r\n" + 
           "   756      () => {\r\n" + 
           "\r\n" + 
           "   770          )\r\n" + 
           "   771:       ).toThrow(InvalidDataValueException);\r\n" + 
           "   772      }\r\n" + 
           "\r\n" + 
           "   776        'lowerBound={ type: key, value: value1=null };address=test ' +\r\n" + 
           "   777:       'option=[upperBound, lowerBound, null] } ----->InvalidDataValueException',\r\n" + 
           "   778      () => {\r\n" + 
           "\r\n" + 
           "   792          )\r\n" + 
           "   793:       ).toThrow(InvalidDataValueException);\r\n" + 
           "   794      }\r\n" + 
           "\r\n" + 
           "   798        'lowerBound={ type: key, value: value1 };' +\r\n" + 
           "   799:       'address=test option=undefined  ----->InvalidOperationException',\r\n" + 
           "   800      () => {\r\n" + 
           "\r\n" + 
           "   811          )\r\n" + 
           "   812:       ).toThrow(InvalidOperationException);\r\n" + 
           "   813      }\r\n" + 
           "\r\n" + 
           "   817        ' lowerBound={ type: key, value: value1 };address=test option=null }' +\r\n" + 
           "   818:       ' ----->InvalidOperationException',\r\n" + 
           "   819      () => {\r\n" + 
           "\r\n" + 
           "   832          )\r\n" + 
           "   833:       ).toThrow(InvalidOperationException);\r\n" + 
           "   834      }\r\n" + 
           "\r\n" + 
           "   862      'test minimum context test upperBound={ type: key, value: value2=null };' +\r\n" + 
           "   863:       +' lowerBound={ type: key, value: value1=10};address=test option={ source: [upperBound, lowerBound] }  ----->InvalidDataValueException',\r\n" + 
           "   864      () => {\r\n" + 
           "\r\n" + 
           "   878          )\r\n" + 
           "   879:       ).toThrow(InvalidDataValueException);\r\n" + 
           "   880      }\r\n" + 
           "\r\n" + 
           "   883      'test minimum context test upperBound={ type: key, value: value2=undefined };' +\r\n" + 
           "   884:       +' lowerBound={ type: key, value: value1=10};address=test option={ source: [upperBound, lowerBound] }  ----->InvalidDataValueException',\r\n" + 
           "   885      () => {\r\n" + 
           "\r\n" + 
           "   899          )\r\n" + 
           "   900:       ).toThrow(InvalidDataValueException);\r\n" + 
           "   901      }\r\n" + 
           "\r\n" + 
           "   905        'lowerBound={ type: key, value: value1=10 };address=test ' +\r\n" + 
           "   906:       'option=[upperBound, lowerBound, null] } ----->InvalidOperationException',\r\n" + 
           "   907      () => {\r\n" + 
           "\r\n" + 
           "   992          )\r\n" + 
           "   993:       ).toThrow(InvalidOperationException);\r\n" + 
           "   994      }\r\n" + 
           "\r\n" + 
           "  1014          )\r\n" + 
           "  1015:       ).toThrow(InvalidOperationException);\r\n" + 
           "  1016      }\r\n" + 
           "\r\n" + 
           "  1020        ' lowerBound={ type: key, value: value1=10 };' +\r\n" + 
           "  1021:       'address=test option=[upperBound, lowerBound, null]} } ----->InvalidOperationException',\r\n" + 
           "  1022      () => {\r\n" + 
           "\r\n" + 
           "  1297    });\r\n" + 
           "  1298:   it('test get option=undefined,  ----->InvalidOperationException', () => {\r\n" + 
           "  1299      // const context: Context = contextBuild(10, 1000, 'number', 'number');\r\n" + 
           "\r\n" + 
           "  1309        )\r\n" + 
           "  1310:     ).toThrow(InvalidOperationException);\r\n" + 
           "  1311    });\r\n" + 
           "  1312:   it('test get option=null,  ----->InvalidOperationException', () => {\r\n" + 
           "  1313      // const context: Context = contextBuild(10, 1000, 'number', 'number');\r\n" + 
           "\r\n" + 
           "  1322        )\r\n" + 
           "  1323:     ).toThrow(InvalidOperationException);\r\n" + 
           "  1324    });\r\n" + 
           "  1325:   it('test get context=null,  ----->InvalidOperationException', () => {\r\n" + 
           "  1326      const source: DataRichSegment = {\r\n" + 
           "\r\n" + 
           "  1337      expect(() => service.computeOptionsOperation(null, null, 'test', 'get', option, null)).toThrow(\r\n" + 
           "  1338:       InvalidOperationException\r\n" + 
           "  1339      );\r\n" + 
           "\r\n" + 
           "  1341  \r\n" + 
           "  1342:   it('test get context=undefined,  ----->InvalidOperationException', () => {\r\n" + 
           "  1343      const source: DataRichSegment = {\r\n" + 
           "\r\n" + 
           "  1354      expect(() => service.computeOptionsOperation(undefined, undefined, 'test', 'get', option, null)).toThrow(\r\n" + 
           "  1355:       InvalidOperationException\r\n" + 
           "  1356      );\r\n" + 
           "  1357    });\r\n" + 
           "  1358:   it('test formula value1=10 formule=2*value1  ----->InvalidOperationException', () => {\r\n" + 
           "  1359      // const context: Context = contextBuild(10, 1000, 'number', 'number');\r\n" + 
           "\r\n" + 
           "  1386    });\r\n" + 
           "  1387:   it('test formula 2*value1 context=undefined source key value1=10  ----->InvalidOperationException', () => {\r\n" + 
           "  1388      const option: DataComposedOperationOptions = {\r\n" + 
           "\r\n" + 
           "  1404      expect(() => service.computeOptionsOperation(undefined, undefined, 'test', 'formula', option, null)).toThrow(\r\n" + 
           "  1405:       InvalidOperationException\r\n" + 
           "  1406      );\r\n" + 
           "  1407    });\r\n" + 
           "  1408:   it('test formula  2*value1 context=null source key value1=10  ----->InvalidOperationException', () => {\r\n" + 
           "  1409      const option: DataComposedOperationOptions = {\r\n" + 
           "\r\n" + 
           "  1425      expect(() => service.computeOptionsOperation(null, null, 'test', 'formula', option, null)).toThrow(\r\n" + 
           "  1426:       InvalidOperationException\r\n" + 
           "  1427      );\r\n" + 
           "\r\n" + 
           "  1518    });\r\n" + 
           "  1519:   it('test split address=null option :source=value1=\"hello bye\" split=\" \" ----->InvalidOperationException', () => {\r\n" + 
           "  1520      // const context: Context = contextBuild('hello bye', [], 'string', 'array');\r\n" + 
           "\r\n" + 
           "  1551    });\r\n" + 
           "  1552:   it('test split  option :null----->InvalidOperationException', () => {\r\n" + 
           "  1553      // const context: Context = contextBuild('hello bye', [], 'string', 'array');\r\n" + 
           "\r\n" + 
           "  1564          )[0]\r\n" + 
           "  1565:     ).toThrow(InvalidOperationException);\r\n" + 
           "  1566    });\r\n" + 
           "  1567:   it('test split  option :undefined----->InvalidOperationException', () => {\r\n" + 
           "  1568      // const context: Context = contextBuild('hello bye', [], 'string', 'array');\r\n" + 
           "\r\n" + 
           "  1578          )[0]\r\n" + 
           "  1579:     ).toThrow(InvalidOperationException);\r\n" + 
           "  1580    });\r\n" + 
           "  1581:   it('test split address[0] option :source= source: null----->InvalidOperationException', () => {\r\n" + 
           "  1582      // const context: Context = contextBuild('hello bye', [], 'string', 'array');\r\n" + 
           "\r\n" + 
           "  1599          )[0]\r\n" + 
           "  1600:     ).toThrow(InvalidOperationException);\r\n" + 
           "  1601    });\r\n" + 
           "  1602:   it('test split address[0] option :source= source: undefined----->InvalidOperationException', () => {\r\n" + 
           "  1603      // const context: Context = contextBuild('hello bye', [], 'string', 'array');\r\n" + 
           "\r\n" + 
           "  1620          )[0]\r\n" + 
           "  1621:     ).toThrow(InvalidOperationException);\r\n" + 
           "  1622    });\r\n" + 
           "\r\n" + 
           "  1624      'test split address[0] option :source=value1=' +\r\n" + 
           "  1625:       '\"hello bye\" separator=split=undefined ----->InvalidOperationException',\r\n" + 
           "  1626      () => {\r\n" + 
           "\r\n" + 
           "  1657            )[0]\r\n" + 
           "  1658:       ).toThrow(InvalidOperationException);\r\n" + 
           "  1659      }\r\n" + 
           "  1660    );\r\n" + 
           "  1661:   it('test split context=null address[0] option :source=value1=\"hello bye\" separator=split=\" \" ----->InvalidOperationException', () => {\r\n" + 
           "  1662      const option: DataComposedOperationOptions = {\r\n" + 
           "\r\n" + 
           "  1682      expect(() => service.computeOptionsOperation(null, null, 'value2', 'split', option, null)[0]).toThrow(\r\n" + 
           "  1683:       InvalidOperationException\r\n" + 
           "  1684      );\r\n" + 
           "  1685    });\r\n" + 
           "  1686:   it('test split context=undefined address[0] option :source=value1=\"hello bye\" separator=split=\" \" ----->InvalidOperationException', () => {\r\n" + 
           "  1687      const option: DataComposedOperationOptions = {\r\n" + 
           "\r\n" + 
           "  1707      expect(() => service.computeOptionsOperation(undefined, undefined, 'value2', 'split', option, null)[0]).toThrow(\r\n" + 
           "  1708:       InvalidOperationException\r\n" + 
           "  1709      );\r\n" + 
           "\r\n" + 
           "  1865    });\r\n" + 
           "  1866:   it('test concatenate  context=null option :source=value1 adrress=value2  ----->InvalidOperationException', () => {\r\n" + 
           "  1867      // const context: Context = null;\r\n" + 
           "\r\n" + 
           "  1885      expect(() => service.computeOptionsOperation(null, null, 'value2', 'concatenate', option, null)).toThrow(\r\n" + 
           "  1886:       InvalidOperationException\r\n" + 
           "  1887      );\r\n" + 
           "\r\n" + 
           "  1889    it(\r\n" + 
           "  1890:     'test concatenate  context=undefined option ' + ':source=value1 adrress=value2  ----->InvalidOperationException',\r\n" + 
           "  1891      () => {\r\n" + 
           "\r\n" + 
           "  1911          service.computeOptionsOperation(undefined, undefined, 'value2', 'concatenate', option, null)\r\n" + 
           "  1912:       ).toThrow(InvalidOperationException);\r\n" + 
           "  1913      }\r\n" + 
           "\r\n" + 
           "  2105    );\r\n" + 
           "  2106:   it('test replace context=value2 option :source=null separator no target of ----->InvalidOperationException', () => {\r\n" + 
           "  2107      // const context: Context = contextBuild('hello bye', 'hi ', 'string', 'string');\r\n" + 
           "\r\n" + 
           "  2128        )\r\n" + 
           "  2129:     ).toThrow(InvalidOperationException);\r\n" + 
           "  2130    });\r\n" + 
           "  2131    it(\r\n" + 
           "  2132:     'test replace context=value2 option :source=undefined separator' + ' no target of ----->InvalidOperationException',\r\n" + 
           "  2133      () => {\r\n" + 
           "\r\n" + 
           "  2156          )\r\n" + 
           "  2157:       ).toThrow(InvalidOperationException);\r\n" + 
           "  2158      }\r\n" + 
           "  2159    );\r\n" + 
           "  2160:   it('test replace context=value2 option :undefined  ----->InvalidOperationException', () => {\r\n" + 
           "  2161      //  const context: Context = contextBuild('hello bye', 'hi ', 'string', 'string');\r\n" + 
           "\r\n" + 
           "  2172        )\r\n" + 
           "  2173:     ).toThrow(InvalidOperationException);\r\n" + 
           "  2174    });\r\n" + 
           "  2175:   it('test replace context=value2 option :null  ----->InvalidOperationException', () => {\r\n" + 
           "  2176      //  const context: Context = contextBuild('hello bye', 'hi ', 'string', 'string');\r\n" + 
           "\r\n" + 
           "  2187        )\r\n" + 
           "  2188:     ).toThrow(InvalidOperationException);\r\n" + 
           "  2189    });\r\n" + 
           "\r\n" + 
           "  2248      'test match context=value2=separator={type:\"literal\",value:null,' +\r\n" + 
           "  2249:       ' source:{type:\"literal\",value:\"test of\"} ----->InvalidOperationException',\r\n" + 
           "  2250      () => {\r\n" + 
           "\r\n" + 
           "  2273          )\r\n" + 
           "  2274:       ).toThrow(InvalidOperationException);\r\n" + 
           "  2275      }\r\n" + 
           "\r\n" + 
           "  2279      'test match context=value2=separator={type:\"literal\",value:undefined ,' +\r\n" + 
           "  2280:       ' source:{type:\"literal\",value:\"test of\"} ----->InvalidOperationException',\r\n" + 
           "  2281      () => {\r\n" + 
           "\r\n" + 
           "  2304          )\r\n" + 
           "  2305:       ).toThrow(InvalidOperationException);\r\n" + 
           "  2306      }\r\n" + 
           "\r\n" + 
           "  2310        ' ,value1=source=null ' +\r\n" + 
           "  2311:       'option:key=value1, key=value2  ----->InvalidDataValueException',\r\n" + 
           "  2312      () => {\r\n" + 
           "\r\n" + 
           "  2335          )\r\n" + 
           "  2336:       ).toThrow(InvalidDataValueException);\r\n" + 
           "  2337      }\r\n" + 
           "\r\n" + 
           "  2340      'test match context=value2=separator=test ' +\r\n" + 
           "  2341:       ',value1=source=undefined option:key=value1, key=value2  ----->InvalidDataValueException',\r\n" + 
           "  2342      () => {\r\n" + 
           "\r\n" + 
           "  2365          )\r\n" + 
           "  2366:       ).toThrow(InvalidDataValueException);\r\n" + 
           "  2367      }\r\n" + 
           "  2368    );\r\n" + 
           "  2369:   it('test match context=null   -----> InvalidOperationException', () => {\r\n" + 
           "  2370      // const context: Context = null;\r\n" + 
           "\r\n" + 
           "  2384      expect(() => service.computeOptionsOperation(null, null, 'notused', 'match', option, null)).toThrow(\r\n" + 
           "  2385:       InvalidOperationException\r\n" + 
           "  2386      );\r\n" + 
           "  2387    });\r\n" + 
           "  2388:   it('test match context=undefined option:key=value1, key=value2  ----->  InvalidOperationException', () => {\r\n" + 
           "  2389      // const context: Context = undefined;\r\n" + 
           "\r\n" + 
           "  2403      expect(() => service.computeOptionsOperation(undefined, undefined, 'notused', 'match', option, null)).toThrow(\r\n" + 
           "  2404:       InvalidOperationException\r\n" + 
           "  2405      );\r\n" + 
           "  2406    });\r\n" + 
           "  2407:   it('test match context option:null  ----->InvalidOperationException', () => {\r\n" + 
           "  2408      // const context: Context = contextBuild('test of', 'test', 'string', 'string');\r\n" + 
           "\r\n" + 
           "  2419        )\r\n" + 
           "  2420:     ).toThrow(InvalidOperationException);\r\n" + 
           "  2421    });\r\n" + 
           "  2422:   it('test match context option:undefined  ----->InvalidOperationException', () => {\r\n" + 
           "  2423      // const context: Context = contextBuild('test of', 'test', 'string', 'string');\r\n" + 
           "\r\n" + 
           "  2434        )\r\n" + 
           "  2435:     ).toThrow(InvalidOperationException);\r\n" + 
           "  2436    });\r\n" + 
           "\r\n" + 
           "  2463    it(\r\n" + 
           "  2464:     'test slice lowerBound=undefined' + ' address=value1=[\"test1\",\"test2\",\"test3\"]  ----->InvalidOperationException',\r\n" + 
           "  2465      () => {\r\n" + 
           "\r\n" + 
           "  2484          )\r\n" + 
           "  2485:       ).toThrow(InvalidOperationException);\r\n" + 
           "  2486      }\r\n" + 
           "  2487    );\r\n" + 
           "  2488:   it('test slice lowerBound=null address=value1=[\"test1\",\"test2\",\"test3\"]  ----->InvalidOperationException', () => {\r\n" + 
           "  2489      // const context: Context = contextBuild(['test0', 'test1', 'test2'], 'not used', 'array', 'string');\r\n" + 
           "\r\n" + 
           "  2507        )\r\n" + 
           "  2508:     ).toThrow(InvalidOperationException);\r\n" + 
           "  2509    });\r\n" + 
           "  2510    it(\r\n" + 
           "  2511:     'test slice upperBound=undefined address=value1=[\"test1\",\"test2\",\"test3\"] ' + '----->InvalidOperationException',\r\n" + 
           "  2512      () => {\r\n" + 
           "\r\n" + 
           "  2531          )\r\n" + 
           "  2532:       ).toThrow(InvalidOperationException);\r\n" + 
           "  2533      }\r\n" + 
           "  2534    );\r\n" + 
           "  2535:   it('test slice upperBound=null address=value1=[\"test1\",\"test2\",\"test3\"]  ----->InvalidOperationException', () => {\r\n" + 
           "  2536      // const context: Context = contextBuild(['test0', 'test1', 'test2'], 'not used', 'array', 'string');\r\n" + 
           "\r\n" + 
           "  2554        )\r\n" + 
           "  2555:     ).toThrow(InvalidOperationException);\r\n" + 
           "  2556    });\r\n" + 
           "  2557:   it('test slice option=null address=value1=[\"test1\",\"test2\",\"test3\"]  ----->InvalidOperationException', () => {\r\n" + 
           "  2558      // const context: Context = contextBuild(['test0', 'test1', 'test2'], 'not used', 'array', 'string');\r\n" + 
           "\r\n" + 
           "  2569        )\r\n" + 
           "  2570:     ).toThrow(InvalidOperationException);\r\n" + 
           "  2571    });\r\n" + 
           "  2572:   it('test slice option=undefined address=value1=[\"test1\",\"test2\",\"test3\"]  ----->InvalidOperationException', () => {\r\n" + 
           "  2573      // const context: Context = contextBuild(['test0', 'test1', 'test2'], 'not used', 'array', 'string');\r\n" + 
           "\r\n" + 
           "  2584        )\r\n" + 
           "  2585:     ).toThrow(InvalidOperationException);\r\n" + 
           "  2586    });\r\n" + 
           "  2587:   it('test slice context=null address=value1=[\"test1\",\"test2\",\"test3\"]  ----->InvalidOperationException', () => {\r\n" + 
           "  2588      const context: Context = null;\r\n" + 
           "\r\n" + 
           "  2601      expect(() => service.computeOptionsOperation(null, null, 'value1', 'slice', option, null)).toThrow(\r\n" + 
           "  2602:       InvalidOperationException\r\n" + 
           "  2603      );\r\n" + 
           "  2604    });\r\n" + 
           "  2605:   it('test slice context=undefined address=value1=[\"test1\",\"test2\",\"test3\"]  ----->InvalidOperationException', () => {\r\n" + 
           "  2606      const context: Context = undefined;\r\n" + 
           "\r\n" + 
           "  2619      expect(() => service.computeOptionsOperation(undefined, undefined, 'value1', 'slice', option, null)).toThrow(\r\n" + 
           "  2620:       InvalidOperationException\r\n" + 
           "  2621      );\r\n" + 
           "\r\n" + 
           "  2656    });\r\n" + 
           "  2657:   it('test find address=value1=[1,2,3] key=\"\" comparator==null ----->InvalidOperationException', () => {\r\n" + 
           "  2658      // const context: Context = contextBuild([1, 2, 3], 'not used', 'array', 'string');\r\n" + 
           "\r\n" + 
           "  2688        )\r\n" + 
           "  2689:     ).toThrow(InvalidOperationException);\r\n" + 
           "  2690    });\r\n" + 
           "  2691:   it('test find address=value1=[1,2,3] key=\"\" comparator==undefined ----->InvalidOperationException', () => {\r\n" + 
           "  2692      // const context: Context = contextBuild([1, 2, 3], 'not used', 'array', 'string');\r\n" + 
           "\r\n" + 
           "  2722        )\r\n" + 
           "  2723:     ).toThrow(InvalidOperationException);\r\n" + 
           "  2724    });\r\n" + 
           "  2725:   it('test find address=value1=null key=\"\" comparator==3 ----->InvalidOperationException', () => {\r\n" + 
           "  2726      // const context: Context = contextBuild(null, 'not used', 'array', 'string');\r\n" + 
           "\r\n" + 
           "  2758    });\r\n" + 
           "  2759:   it('test find address=value1=undefined key=\"\" comparator==3 ----->InvalidOperationException', () => {\r\n" + 
           "  2760      //  const context: Context = contextBuild(undefined, 'not used', 'array', 'string');\r\n" + 
           "\r\n" + 
           "  2792    });\r\n" + 
           "  2793:   it('test find option= null address=value1=[1,2,3]  ----->InvalidOperationException', () => {\r\n" + 
           "  2794      // const context: Context = contextBuild([1, 2, 3], 'not used', 'array', 'string');\r\n" + 
           "\r\n" + 
           "  2804        )\r\n" + 
           "  2805:     ).toThrow(InvalidOperationException);\r\n" + 
           "  2806    });\r\n" + 
           "  2807:   it('test find option= undefined address=value1=[1,2,3]  ----->InvalidOperationException', () => {\r\n" + 
           "  2808      // context: Context = contextBuild([1, 2, 3], 'not used', 'array', 'string');\r\n" + 
           "\r\n" + 
           "  2818        )\r\n" + 
           "  2819:     ).toThrow(InvalidOperationException);\r\n" + 
           "  2820    });\r\n" + 
           "  2821:   it('test find context=null key=\"\" comparator==\"3\" ----->InvalidOperationException', () => {\r\n" + 
           "  2822      const context: Context = null;\r\n" + 
           "\r\n" + 
           "  2844      expect(() => service.computeOptionsOperation(null, null, 'value1', 'find', option, null)).toThrow(\r\n" + 
           "  2845:       InvalidOperationException\r\n" + 
           "  2846      );\r\n" + 
           "  2847    });\r\n" + 
           "  2848:   it('test find context=undefined key=\"\" comparator==\"3\" ----->InvalidOperationException', () => {\r\n" + 
           "  2849      const context: Context = undefined;\r\n" + 
           "\r\n" + 
           "  2871      expect(() => service.computeOptionsOperation(undefined, undefined, 'value1', 'find', option, null)).toThrow(\r\n" + 
           "  2872:       InvalidOperationException\r\n" + 
           "  2873      );\r\n" + 
           "\r\n" + 
           "  2977    });\r\n" + 
           "  2978:   it('test filter adresse=null, value1={property1:1, property2:\"not used1\"}, {property1:2, property2:\"not used 2\"}, {property1:3, property2:\"not used3\"}  comparator>1 --->InvalidOperationException', () => {\r\n" + 
           "  2979      /* const context: Context = contextBuild(\r\n" + 
           "\r\n" + 
           "  3026          )[0]\r\n" + 
           "  3027:     ).toThrow(InvalidOperationException);\r\n" + 
           "  3028    });\r\n" + 
           "  3029:   it('test filter adresse=undefined, value1={property1:1, property2:\"not used1\"}, {property1:2, property2:\"not used 2\"}, {property1:3, property2:\"not used3\"}  comparator>1 --->InvalidOperationException', () => {\r\n" + 
           "  3030      /*  const context: Context = contextBuild(\r\n" + 
           "\r\n" + 
           "  3077          )[0]\r\n" + 
           "  3078:     ).toThrow(InvalidOperationException);\r\n" + 
           "  3079    });\r\n" + 
           "  3080:   it('test filter context=null  --->InvalidOperationException', () => {\r\n" + 
           "  3081      // const context: Context = null;\r\n" + 
           "\r\n" + 
           "  3103      expect(() => service.computeOptionsOperation(null, null, 'value2', 'filter', option, null)[0]).toThrow(\r\n" + 
           "  3104:       InvalidOperationException\r\n" + 
           "  3105      );\r\n" + 
           "\r\n" + 
           "  3130      expect(() => service.computeOptionsOperation(undefined, undefined, 'value2', 'filter', option, null)[0]).toThrow(\r\n" + 
           "  3131:       InvalidOperationException\r\n" + 
           "  3132      );\r\n" + 
           "\r\n" + 
           "  3161        )\r\n" + 
           "  3162:     ).toThrow(InvalidOperationException);\r\n" + 
           "  3163    });\r\n" + 
           "\r\n" + 
           "  3191        )\r\n" + 
           "  3192:     ).toThrow(InvalidOperationException);\r\n" + 
           "  3193    });\r\n" + 
           "\r\n" + 
           "  3228        )\r\n" + 
           "  3229:     ).toThrow(InvalidOperationException);\r\n" + 
           "  3230    });\r\n" + 
           "\r\n" + 
           "  3241        )\r\n" + 
           "  3242:     ).toThrow(InvalidOperationException);\r\n" + 
           "  3243    });\r\n" + 
           "\r\n" + 
           "  3337    });\r\n" + 
           "  3338:   it('test conditionnal context=null ----->   InvalidOperationException', () => {\r\n" + 
           "  3339      const context: Context = null;\r\n" + 
           "\r\n" + 
           "  3363  \r\n" + 
           "  3364:     expect(() => service.computeConditionalOperation(null, null, option)).toThrow(InvalidOperationException);\r\n" + 
           "  3365    });\r\n" + 
           "  3366:   it('test conditionnal context=undefined ----->   InvalidOperationException', () => {\r\n" + 
           "  3367      const context: Context = undefined;\r\n" + 
           "\r\n" + 
           "  3391  \r\n" + 
           "  3392:     expect(() => service.computeConditionalOperation(undefined, undefined, option)).toThrow(InvalidOperationException);\r\n" + 
           "  3393    });\r\n" + 
           "  3394:   it('test conditionnal option =null  value1== 1----->   InvalidOperationException', () => {\r\n" + 
           "  3395      // const context: Context = contextBuild(1, 2, 'number', 'number');\r\n" + 
           "\r\n" + 
           "  3403        service.computeConditionalOperation(datastoreBuild('number', 'number'), conversationDataBuild(1, 2), option)\r\n" + 
           "  3404:     ).toThrow(InvalidOperationException);\r\n" + 
           "  3405    });\r\n" + 
           "  3406:   it('test conditionnal option =undefined  value1== 1----->   InvalidOperationException', () => {\r\n" + 
           "  3407      // const context: Context = contextBuild(1, 2, 'number', 'number');\r\n" + 
           "\r\n" + 
           "  3415        service.computeConditionalOperation(datastoreBuild('number', 'number'), conversationDataBuild(1, 2), option)\r\n" + 
           "  3416:     ).toThrow(InvalidOperationException);\r\n" + 
           "  3417    });\r\n" + 
           "\r\n" + 
           "src\\features\\data-operations\\data-operations.service.ts:\r\n" + 
           "   18  import { DataProcessorService } from '../data-processor/data-processor.service';\r\n" + 
           "   19: import { InvalidDataValueException } from '../data-processor/exceptions/invalid-data-value.exception';\r\n" + 
           "   20  import { DataStoreContent } from '../data-processor/interfaces/data-store-content.interface';\r\n" + 
           "   21  import { SearchOptions } from '../data-processor/interfaces/search-options.interface';\r\n" + 
           "   22: import { InvalidOperationException } from './exceptions/invalid-operation.exception';\r\n" + 
           "   23  \r\n" + 
           "\r\n" + 
           "  102          /* Checking Comparison parameters */\r\n" + 
           "  103:         if (!type) throw new InvalidOperationException(\"Type d'opération manquant\");\r\n" + 
           "  104          else if (type === 'erase') {\r\n" + 
           "  105            return this.dataProcessorService.eraseConversationData(context);\r\n" + 
           "  106:         } else if (!address) throw new InvalidOperationException(\"Clé d'opération manquante\");\r\n" + 
           "  107          // stopping process to only delete a value or get current time\r\n" + 
           "\r\n" + 
           "  111            return this.computeOptionsOperation(dataStore, conversationData, address, type, options, operand);\r\n" + 
           "  112:         } else if (!operand) throw new InvalidOperationException('Opérande manquant');\r\n" + 
           "  113  \r\n" + 
           "\r\n" + 
           "  150        .catch((error: any) => {\r\n" + 
           "  151:         if (error instanceof InvalidDataValueException) {\r\n" + 
           "  152            this.loggerService.debug(chalk`{red.bold Real error: ${error.message} }`);\r\n" + 
           "  153:           throw new InvalidOperationException(\"Variable d'opération invalide\");\r\n" + 
           "  154          } else throw error;\r\n" + 
           "\r\n" + 
           "  186            ) {\r\n" + 
           "  187:             throw new InvalidOperationException('Operand or InitialValue is not valid');\r\n" + 
           "  188            } else {\r\n" + 
           "\r\n" + 
           "  193            if (typeof operandValue !== 'string' || !operandValue) {\r\n" + 
           "  194:             throw new InvalidOperationException('Operand type is not valid');\r\n" + 
           "  195            } else {\r\n" + 
           "\r\n" + 
           "  201            if (typeof operandValue !== 'number') {\r\n" + 
           "  202:             throw new InvalidOperationException('OperandValue is not a number');\r\n" + 
           "  203            }\r\n" + 
           "\r\n" + 
           "  211            if (typeof operandValue !== 'number') {\r\n" + 
           "  212:             throw new InvalidOperationException('OperandValue is not a number');\r\n" + 
           "  213            }\r\n" + 
           "\r\n" + 
           "  221            if (typeof operandValue !== 'number') {\r\n" + 
           "  222:             throw new InvalidOperationException('OperandValue is not a number');\r\n" + 
           "  223            }\r\n" + 
           "  224:           if (operandValue === 0) throw new InvalidOperationException('Division by 0 in operation');\r\n" + 
           "  225            this.loggerService.debug(\r\n" + 
           "\r\n" + 
           "  232            if (typeof operandValue !== 'number') {\r\n" + 
           "  233:             throw new InvalidOperationException('OperandValue is not a number');\r\n" + 
           "  234            }\r\n" + 
           "\r\n" + 
           "  242            if (typeof operandValue !== 'number') {\r\n" + 
           "  243:             throw new InvalidOperationException('OperandValue is not a number');\r\n" + 
           "  244            }\r\n" + 
           "\r\n" + 
           "  259            if (typeof operandValue !== 'string') {\r\n" + 
           "  260:             throw new InvalidOperationException('OperandValue is not a string');\r\n" + 
           "  261            }\r\n" + 
           "\r\n" + 
           "  266            const toNumberResult = Number(operandValue);\r\n" + 
           "  267:           if (isNaN(toNumberResult)) throw new InvalidOperationException('Convertion result is not a number');\r\n" + 
           "  268            return toNumberResult;\r\n" + 
           "\r\n" + 
           "  270            if (!Array.isArray(initialValue)) {\r\n" + 
           "  271:             throw new InvalidOperationException('Selected container is not a list');\r\n" + 
           "  272            }\r\n" + 
           "\r\n" + 
           "  288            if (!Array.isArray(initialValue)) {\r\n" + 
           "  289:             throw new InvalidOperationException('Selected container is not a list');\r\n" + 
           "  290            }\r\n" + 
           "\r\n" + 
           "  305            if (initialValue && (typeof initialValue !== 'object' || Array.isArray(initialValue))) {\r\n" + 
           "  306:             throw new InvalidOperationException('Selected target is not an object');\r\n" + 
           "  307            }\r\n" + 
           "\r\n" + 
           "  329            } catch {\r\n" + 
           "  330:             throw new InvalidOperationException('Unable to parse provided value');\r\n" + 
           "  331            }\r\n" + 
           "\r\n" + 
           "  367  \r\n" + 
           "  368:     throw new InvalidOperationException(\"Types de variables incompatibles au sein d'une opération\");\r\n" + 
           "  369    }\r\n" + 
           "\r\n" + 
           "  387      if (!dataStore) {\r\n" + 
           "  388:       throw new InvalidOperationException('Data in context or in option is not valid');\r\n" + 
           "  389      }\r\n" + 
           "\r\n" + 
           "  393      //   if (!address) {\r\n" + 
           "  394:     //     throw new InvalidOperationException('Address is not valid');\r\n" + 
           "  395      //   }\r\n" + 
           "\r\n" + 
           "  398      if (operationType !== 'concatenate' && operationType !== 'formula' && !options) {\r\n" + 
           "  399:       throw new InvalidOperationException('Options manquantes');\r\n" + 
           "  400      }\r\n" + 
           "\r\n" + 
           "  405        if (!options.lowerBound || !options.upperBound) {\r\n" + 
           "  406:         throw new InvalidOperationException('Bounds are not valid');\r\n" + 
           "  407        }\r\n" + 
           "\r\n" + 
           "  420        if (typeof lowerBound !== 'number' || typeof upperBound !== 'number') {\r\n" + 
           "  421:         throw new InvalidOperationException('La valeur des bornes est invalide');\r\n" + 
           "  422        }\r\n" + 
           "\r\n" + 
           "  438          if (!Array.isArray(initialList)) {\r\n" + 
           "  439:           throw new InvalidOperationException(\"La donnée a découper n'est pas une liste\");\r\n" + 
           "  440          }\r\n" + 
           "\r\n" + 
           "  526            if (!options.source) {\r\n" + 
           "  527:             throw new InvalidOperationException('Source is not valid');\r\n" + 
           "  528            }\r\n" + 
           "\r\n" + 
           "  565            // if (!options.source || !options.separator.value) {\r\n" + 
           "  566:           //   throw new InvalidOperationException('Attribute source or separator are not valid');\r\n" + 
           "  567            // }\r\n" + 
           "\r\n" + 
           "  571            // if (!options.source) {\r\n" + 
           "  572:           //   throw new InvalidOperationException('Attributes are not valid');\r\n" + 
           "  573            // }\r\n" + 
           "\r\n" + 
           "  583            // if (!options.separator || !options.separator.value) {\r\n" + 
           "  584:           //   throw new InvalidOperationException('Separator is not valid');\r\n" + 
           "  585            // }\r\n" + 
           "\r\n" + 
           "  588            if (!Array.isArray(parsedObject)) {\r\n" + 
           "  589:             throw new InvalidOperationException('Composed operation object is not a list');\r\n" + 
           "  590            }\r\n" + 
           "\r\n" + 
           "  592            // if (!options) {\r\n" + 
           "  593:           //   return new InvalidOperationException('Options is not valid');\r\n" + 
           "  594            // }\r\n" + 
           "\r\n" + 
           "  657      // if (!dataStore || !operation.options) {\r\n" + 
           "  658:     //   throw new InvalidOperationException('Context or option is invalid');\r\n" + 
           "  659      // }\r\n" + 
           "\r\n" + 
           "  707      } catch {\r\n" + 
           "  708:       throw new InvalidOperationException(\"Erreur d'éxecution de la formule\");\r\n" + 
           "  709      }\r\n" + 
           "\r\n" + 
           "  725      if (!Array.isArray(keyList)) {\r\n" + 
           "  726:       throw new InvalidOperationException('Liste de clés non définie ou invalide');\r\n" + 
           "  727      }\r\n" + 
           "\r\n" + 
           "  810      ) {\r\n" + 
           "  811:       throw new InvalidOperationException('OperandValue is unknown');\r\n" + 
           "  812      }\r\n" + 
           "\r\n" + 
           "  816      if (types === 'merge' && !initialValue) {\r\n" + 
           "  817:       throw new InvalidOperationException('initialValue is unknown');\r\n" + 
           "  818      }\r\n" + 
           "\r\n" + 
           "  825      } catch (error) {\r\n" + 
           "  826:       throw new InvalidOperationException('Date is not valid : ' + error);\r\n" + 
           "  827      }\r\n" + 
           "\r\n" + 
           "  910      if (!operandValue || !initialValue) {\r\n" + 
           "  911:       throw new InvalidOperationException('Value Unknown');\r\n" + 
           "  912      }\r\n" + 
           "\r\n" + 
           "src\\features\\data-operations\\map-transform-cases.txt:\r\n" + 
           "    4  \r\n" + 
           "    5:           if (isNaN(operandValue)) throw new InvalidOperationException('Operand is not a number');\r\n" + 
           "    6            initialValue.ArrayInitial.forEach(element => {\r\n" + 
           "    7:             if (isNaN(element)) throw new InvalidOperationException('Array is composed by a not number value');\r\n" + 
           "    8            });\r\n" + 
           "\r\n" + 
           "   17            this.valueUnknown(operandValue, initialValue);\r\n" + 
           "   18:           if (isNaN(operandValue)) throw new InvalidOperationException('Operand is not a number');\r\n" + 
           "   19            initialValue.ArrayInitial.forEach(element => {\r\n" + 
           "   20:             if (isNaN(element)) throw new InvalidOperationException('Array is composed by a not number value');\r\n" + 
           "   21            });\r\n" + 
           "\r\n" + 
           "   30            this.valueUnknown(operandValue, initialValue);\r\n" + 
           "   31:           if (isNaN(operandValue)) throw new InvalidOperationException('Operand is not a number');\r\n" + 
           "   32            initialValue.ArrayInitial.forEach(element => {\r\n" + 
           "   33:             if (isNaN(element)) throw new InvalidOperationException('Array is composed by a not number value');\r\n" + 
           "   34            });\r\n" + 
           "\r\n" + 
           "   43            this.valueUnknown(operandValue, initialValue);\r\n" + 
           "   44:           if (operandValue === 0) throw new InvalidOperationException('Division by 0 in operation');\r\n" + 
           "   45  \r\n" + 
           "   46:           if (isNaN(operandValue)) throw new InvalidOperationException('Operand is not a number');\r\n" + 
           "   47            initialValue.ArrayInitial.forEach(element => {\r\n" + 
           "   48:             if (isNaN(element)) throw new InvalidOperationException('Array is composed by a not number value');\r\n" + 
           "   49            });\r\n" + 
           "\r\n" + 
           "   66            this.valueUnknown(operandValue, initialValue);\r\n" + 
           "   67:           if (isNaN(operandValue)) throw new InvalidOperationException('Operand is not a number');\r\n" + 
           "   68            initialValue.ArrayInitial.forEach(element => {\r\n" + 
           "   69:             if (isNaN(element)) throw new InvalidOperationException('Array is composed by a not number value');\r\n" + 
           "   70            });\r\n" + 
           "\r\n" + 
           "   73                if (typeof operandValue !== 'number') {\r\n" + 
           "   74:                 throw new InvalidOperationException('OperandValue is not a number');\r\n" + 
           "   75                }\r\n" + 
           "\r\n" + 
           "   90                if (typeof x !== 'string') {\r\n" + 
           "   91:                 throw new InvalidOperationException('Value is not a string');\r\n" + 
           "   92                }\r\n" + 
           "\r\n" + 
           "  101                if (typeof x !== 'string') {\r\n" + 
           "  102:                 throw new InvalidOperationException('Value is not a string');\r\n" + 
           "  103                }\r\n" + 
           "\r\n" + 
           "  112                const toNumberResult2 = Number(x);\r\n" + 
           "  113:               if (isNaN(toNumberResult2)) throw new InvalidOperationException('Convertion result is not a number');\r\n" + 
           "  114                return toNumberResult2;\r\n" + 
           "\r\n" + 
           "  122                if (!Array.isArray(x)) {\r\n" + 
           "  123:                 throw new InvalidOperationException('Selected container is not a list');\r\n" + 
           "  124                }\r\n" + 
           "\r\n" + 
           "  145                if (!Array.isArray(x)) {\r\n" + 
           "  146:                 throw new InvalidOperationException('Selected container is not a list');\r\n" + 
           "  147                }\r\n" + 
           "\r\n" + 
           "  167                if (x && (typeof x !== 'object' || Array.isArray(x))) {\r\n" + 
           "  168:                 throw new InvalidOperationException('Selected target is not an object');\r\n" + 
           "  169                }\r\n" + 
           "\r\n" + 
           "  203                } catch {\r\n" + 
           "  204:                 throw new InvalidOperationException('Unable to parse provided value');\r\n" + 
           "  205                }\r\n" + 
           "\r\n" + 
           "  266        if (initialValue === null || initialValue === undefined) {\r\n" + 
           "  267:         throw new InvalidOperationException('Value Unknown');\r\n" + 
           "  268        }\r\n" + 
           "\r\n" + 
           "  284    });\r\n" + 
           "  285:   it('maptransformAdd initialValue=null, operandValue=2 --->InvalidOperationException', () => {\r\n" + 
           "  286      const initialValue: any = { ArrayInitial: [1, 2, 3], index: 1 };\r\n" + 
           "\r\n" + 
           "  288      expect(() => service.computeOperandOperation(null, null, operandValue, 'maptransformAdd')).toThrow(\r\n" + 
           "  289:       InvalidOperationException\r\n" + 
           "  290      );\r\n" + 
           "  291    });\r\n" + 
           "  292:   it('maptransformAdd initialValue=undefined, indexElement:1}, operandValue=2 --->InvalidOperationException', () => {\r\n" + 
           "  293      const initialValue: any = { ArrayInitial: [1, 2, 3], index: 1 };\r\n" + 
           "\r\n" + 
           "  295      expect(() => service.computeOperandOperation(undefined, null, operandValue, 'maptransformAdd')).toThrow(\r\n" + 
           "  296:       InvalidOperationException\r\n" + 
           "  297      );\r\n" + 
           "\r\n" + 
           "  299    it('maptransformAdd initialValue={ArrayInitial:[1,2,3], indexElement:1}, '+\r\n" + 
           "  300:   'operandValue=null--->InvalidOperationException', () => {\r\n" + 
           "  301      const initialValue: any = { ArrayInitial: [1, 2, 3], index: 1 };\r\n" + 
           "\r\n" + 
           "  303      expect(() => service.computeOperandOperation(initialValue, null, null, 'maptransformAdd')).toThrow(\r\n" + 
           "  304:       InvalidOperationException\r\n" + 
           "  305      );\r\n" + 
           "\r\n" + 
           "  307    it('maptransformAdd initialValue={ArrayInitial:[1,2,3], indexElement:1}, '+\r\n" + 
           "  308:   'operandValue=null--->InvalidOperationException', () => {\r\n" + 
           "  309      const initialValue: any = { ArrayInitial: [1, 2, 3], index: 1 };\r\n" + 
           "\r\n" + 
           "  311      expect(() => service.computeOperandOperation(initialValue, null, null, 'maptransformAdd')).toThrow(\r\n" + 
           "  312:       InvalidOperationException\r\n" + 
           "  313      );\r\n" + 
           "\r\n" + 
           "  315    it('maptransformAdd initialValue={ArrayInitial:[1,2,3], indexElement:1}, '+\r\n" + 
           "  316:   'operandValue=undefined--->InvalidOperationException', () => {\r\n" + 
           "  317      const initialValue: any = { ArrayInitial: [1, 2, 3], index: 1 };\r\n" + 
           "\r\n" + 
           "  319      expect(() => service.computeOperandOperation(initialValue, null, undefined, 'maptransformAdd')).toThrow(\r\n" + 
           "  320:       InvalidOperationException\r\n" + 
           "  321      );\r\n" + 
           "  322    });\r\n" + 
           "  323:   it('maptransformAdd initialValue=null, operandValue=2--->InvalidOperationException', () => {\r\n" + 
           "  324      const initialValue: any = { ArrayInitial: [1, 2, 3], index: 1 };\r\n" + 
           "\r\n" + 
           "  326      expect(() => service.computeOperandOperation(null, null, operandValue, 'maptransformAdd')).toThrow(\r\n" + 
           "  327:       InvalidOperationException\r\n" + 
           "  328      );\r\n" + 
           "\r\n" + 
           "  330    it('maptransformRemove initialValue={ArrayInitial:[1,2,3], indexElement:1}, '+\r\n" + 
           "  331:   'operandValue=null--->InvalidOperationException', () => {\r\n" + 
           "  332      const initialValue: any = { ArrayInitial: [1, 2, 3], index: 1 };\r\n" + 
           "\r\n" + 
           "  334      expect(() => service.computeOperandOperation(initialValue, null, null, 'maptransformRemove')).toThrow(\r\n" + 
           "  335:       InvalidOperationException\r\n" + 
           "  336      );\r\n" + 
           "\r\n" + 
           "  338    it('maptransformRemove initialValue={ArrayInitial:[1,2,3], indexElement:1}, '+\r\n" + 
           "  339:   'operandValue=undefined--->InvalidOperationException', () => {\r\n" + 
           "  340      const initialValue: any = { ArrayInitial: [1, 2, 3], index: 1 };\r\n" + 
           "\r\n" + 
           "  342      expect(() => service.computeOperandOperation(initialValue, null, undefined, 'maptransformRemove')).toThrow(\r\n" + 
           "  343:       InvalidOperationException\r\n" + 
           "  344      );\r\n" + 
           "  345    });\r\n" + 
           "  346:   it('maptransformRemove initialValue=null, operandValue=2--->InvalidOperationException', () => {\r\n" + 
           "  347      const initialValue: any = { ArrayInitial: [1, 2, 3], index: 1 };\r\n" + 
           "\r\n" + 
           "  349      expect(() => service.computeOperandOperation(null, null, operandValue, 'maptransformRemove')).toThrow(\r\n" + 
           "  350:       InvalidOperationException\r\n" + 
           "  351      );\r\n" + 
           "\r\n" + 
           "  353    it('maptransformRemove initialValue={ArrayInitial:[1,2,3], indexElement:1}, '+\r\n" + 
           "  354:   'operandValue=null--->InvalidOperationException', () => {\r\n" + 
           "  355      const initialValue: any = { ArrayInitial: [1, 2, 3], index: 1 };\r\n" + 
           "\r\n" + 
           "  371    });\r\n" + 
           "  372:   it('maptransformRemove initialValue=null, operandValue=null--->InvalidOperationException', () => {\r\n" + 
           "  373      //const initialValue: any = { ArrayInitial: [1, 2, 3], index: 1 };\r\n" + 
           "\r\n" + 
           "  375      expect(() => service.computeOperandOperation(null, null, operandValue, 'maptransformRemove')).toThrow(\r\n" + 
           "  376:       InvalidOperationException\r\n" + 
           "  377      );\r\n" + 
           "  378    });\r\n" + 
           "  379:   it('maptransformRemove initialValue=undefined, operandValue=null--->InvalidOperationException', () => {\r\n" + 
           "  380      //const initialValue: any = { ArrayInitial: [1, 2, 3], index: 1 };\r\n" + 
           "\r\n" + 
           "  382      expect(() => service.computeOperandOperation(undefined, null, operandValue, 'maptransformRemove')).toThrow(\r\n" + 
           "  383:       InvalidOperationException\r\n" + 
           "  384      );\r\n" + 
           "\r\n" + 
           "  386    it('maptransformDivide initialValue={ArrayInitial:[1,2,3], indexElement:1}, '+\r\n" + 
           "  387:   'operandValue=null--->InvalidOperationException', () => {\r\n" + 
           "  388      const initialValue: any = { ArrayInitial: [1, 2, 3], index: 1 };\r\n" + 
           "\r\n" + 
           "  390      expect(() => service.computeOperandOperation(initialValue, null, null, 'maptransformDivide')).toThrow(\r\n" + 
           "  391:       InvalidOperationException\r\n" + 
           "  392      );\r\n" + 
           "\r\n" + 
           "  394    it('maptransformDivide initialValue={ArrayInitial:[1,2,3], indexElement:1}, '+\r\n" + 
           "  395:   'operandValue=undefined--->InvalidOperationException', () => {\r\n" + 
           "  396      const initialValue: any = { ArrayInitial: [1, 2, 3], index: 1 };\r\n" + 
           "\r\n" + 
           "  398      expect(() => service.computeOperandOperation(initialValue, null, undefined, 'maptransformDivide')).toThrow(\r\n" + 
           "  399:       InvalidOperationException\r\n" + 
           "  400      );\r\n" + 
           "  401    });\r\n" + 
           "  402:   it('maptransformDivide initialValue=null, operandValue=2--->InvalidOperationException', () => {\r\n" + 
           "  403      const initialValue: any = { ArrayInitial: [1, 2, 3], index: 1 };\r\n" + 
           "\r\n" + 
           "  405      expect(() => service.computeOperandOperation(null, null, operandValue, 'maptransformDivide')).toThrow(\r\n" + 
           "  406:       InvalidOperationException\r\n" + 
           "  407      );\r\n" + 
           "\r\n" + 
           "  409    it('maptransformDivide initialValue={ArrayInitial:[1,2,3], indexElement:1}, '+\r\n" + 
           "  410:   'operandValue=undefined--->InvalidOperationException', () => {\r\n" + 
           "  411      const initialValue: any = { ArrayInitial: [1, 2, 3], index: 1 };\r\n" + 
           "\r\n" + 
           "  413      expect(() => service.computeOperandOperation(initialValue, null, undefined, 'maptransformDivide')).toThrow(\r\n" + 
           "  414:       InvalidOperationException\r\n" + 
           "  415      );\r\n" + 
           "\r\n" + 
           "  417    it('maptransformDivide initialValue={ArrayInitial:[1,2,3], indexElement:1}, '+\r\n" + 
           "  418:   'operandValue=null--->InvalidOperationException', () => {\r\n" + 
           "  419      const initialValue: any = { ArrayInitial: [1, 2, 3], index: 1 };\r\n" + 
           "\r\n" + 
           "  421      expect(() => service.computeOperandOperation(initialValue, null, null, 'maptransformDivide')).toThrow(\r\n" + 
           "  422:       InvalidOperationException\r\n" + 
           "  423      );\r\n" + 
           "\r\n" + 
           "  425    it('maptransformMultiply initialValue={ArrayInitial:[1,2,3], indexElement:1}, '+\r\n" + 
           "  426:   'operandValue=null--->InvalidOperationException', () => {\r\n" + 
           "  427      const initialValue: any = { ArrayInitial: [1, 2, 3], index: 1 };\r\n" + 
           "\r\n" + 
           "  429      expect(() => service.computeOperandOperation(initialValue, null, null, 'maptransformMultiply')).toThrow(\r\n" + 
           "  430:       InvalidOperationException\r\n" + 
           "  431      );\r\n" + 
           "\r\n" + 
           "  433    it('maptransformMultiply initialValue={ArrayInitial:[1,2,3], indexElement:1}, '+\r\n" + 
           "  434:   'operandValue=undefined--->InvalidOperationException', () => {\r\n" + 
           "  435      const initialValue: any = { ArrayInitial: [1, 2, 3], index: 1 };\r\n" + 
           "\r\n" + 
           "  437      expect(() => service.computeOperandOperation(initialValue, null, undefined, 'maptransformMultiply')).toThrow(\r\n" + 
           "  438:       InvalidOperationException\r\n" + 
           "  439      );\r\n" + 
           "  440    });\r\n" + 
           "  441:   it('maptransformMultiply initialValue=null, operandValue=2--->InvalidOperationException', () => {\r\n" + 
           "  442      const initialValue: any = { ArrayInitial: [1, 2, 3], index: 1 };\r\n" + 
           "\r\n" + 
           "  444      expect(() => service.computeOperandOperation(null, null, operandValue, 'maptransformMultiply')).toThrow(\r\n" + 
           "  445:       InvalidOperationException\r\n" + 
           "  446      );\r\n" + 
           "  447    });\r\n" + 
           "  448:   it('maptransformMultiply initialValue=undefined, operandValue=2--->InvalidOperationException', () => {\r\n" + 
           "  449      //  const initialValue: any = { ArrayInitial: [1, 2, 3], index: 1 };\r\n" + 
           "\r\n" + 
           "  451      expect(() => service.computeOperandOperation(null, null, operandValue, 'maptransformMultiply')).toThrow(\r\n" + 
           "  452:       InvalidOperationException\r\n" + 
           "  453      );\r\n" + 
           "\r\n" + 
           "  473    });\r\n" + 
           "  474:   it('maptransformRound initialValue=undefined, indexElement:1}, operandValue=1--->InvalidOperationException', () => {\r\n" + 
           "  475      //  const initialValue: any = { ArrayInitial: [1, 0.222, 3.666], index: 2 };\r\n" + 
           "\r\n" + 
           "  477      expect(() => service.computeOperandOperation(undefined, null, operandValue, 'maptransformRound')).toThrow(\r\n" + 
           "  478:       InvalidOperationException\r\n" + 
           "  479      );\r\n" + 
           "  480    });\r\n" + 
           "  481:   it('maptransformRound initialValue=null, indexElement:1}, operandValue=1--->InvalidOperationException', () => {\r\n" + 
           "  482      //const initialValue: any = { ArrayInitial: [1, 0.222, 3.666], index: 2 };\r\n" + 
           "\r\n" + 
           "  484      expect(() => service.computeOperandOperation(null, null, operandValue, 'maptransformRound')).toThrow(\r\n" + 
           "  485:       InvalidOperationException\r\n" + 
           "  486      );\r\n" + 
           "\r\n" + 
           "  500      expect(() => service.computeOperandOperation(null, null, null, 'maptransformToString')).toThrow(\r\n" + 
           "  501:       InvalidOperationException\r\n" + 
           "  502      );\r\n" + 
           "\r\n" + 
           "  508      expect(() => service.computeOperandOperation(undefined, null, null, 'maptransformToString')).toThrow(\r\n" + 
           "  509:       InvalidOperationException\r\n" + 
           "  510      );\r\n" + 
           "\r\n" + 
           "  521    });\r\n" + 
           "  522:   it('maptransformToUpperCase  initialValue=null--->InvalidOperationException', () => {\r\n" + 
           "  523      //  const initialValue: any = { ArrayInitial: ['value1', 'value2', 'value3'], index: 2 };\r\n" + 
           "\r\n" + 
           "  525      expect(() => service.computeOperandOperation(null, null, null, 'maptransformtoUpperCase')).toThrow(\r\n" + 
           "  526:       InvalidOperationException\r\n" + 
           "  527      );\r\n" + 
           "  528    });\r\n" + 
           "  529:   it('maptransformToUpperCase  initialValue=undefined--->InvalidOperationException', () => {\r\n" + 
           "  530      //   const initialValue: any = { ArrayInitial: ['value1', 'value2', 'value3'], index: 2 };\r\n" + 
           "\r\n" + 
           "  532      expect(() => service.computeOperandOperation(undefined, null, null, 'maptransformtoUpperCase')).toThrow(\r\n" + 
           "  533:       InvalidOperationException\r\n" + 
           "  534      );\r\n" + 
           "\r\n" + 
           "  544    });\r\n" + 
           "  545:   it('maptransformtoLowerCase  initialValue=null--->InvalidOperationException', () => {\r\n" + 
           "  546      //const initialValue: any = { ArrayInitial: ['value1', 'value2', 'VALUE3'], index: 2 };\r\n" + 
           "  547      expect(() => service.computeOperandOperation(null, null, null, 'maptransformtoLowerCase')).toThrow(\r\n" + 
           "  548:       InvalidOperationException\r\n" + 
           "  549      );\r\n" + 
           "  550    });\r\n" + 
           "  551:   it('maptransformtoLowerCase  initialValue=undefined--->InvalidOperationException', () => {\r\n" + 
           "  552      // const initialValue: any = { ArrayInitial: ['value1', 'value2', 'VALUE3'], index: 2 };\r\n" + 
           "  553      expect(() => service.computeOperandOperation(undefined, null, null, 'maptransformtoLowerCase')).toThrow(\r\n" + 
           "  554:       InvalidOperationException\r\n" + 
           "  555      );\r\n" + 
           "\r\n" + 
           "  565    });\r\n" + 
           "  566:   it('maptransformtoNumber  initialValue=null, indexElement:2}--->InvalidOperationException', () => {\r\n" + 
           "  567      const initialValue: any = { ArrayInitial: ['value1', 'value2', '3'], index: 2 };\r\n" + 
           "  568      expect(() => service.computeOperandOperation(null, null, null, 'maptransformtoNumber')).toThrow(\r\n" + 
           "  569:       InvalidOperationException\r\n" + 
           "  570      );\r\n" + 
           "  571    });\r\n" + 
           "  572:   it('maptransformtoNumber  initialValue=undefined, indexElement:2}--->InvalidOperationException', () => {\r\n" + 
           "  573      const initialValue: any = { ArrayInitial: ['value1', 'value2', '3'], index: 2 };\r\n" + 
           "  574      expect(() => service.computeOperandOperation(undefined, null, null, 'maptransformtoNumber')).toThrow(\r\n" + 
           "  575:       InvalidOperationException\r\n" + 
           "  576      );\r\n" + 
           "\r\n" + 
           "  586    });\r\n" + 
           "  587:   it('maptransformPush  initialValue=null--->InvalidOperationException', () => {\r\n" + 
           "  588      //const initialValue: any = { ArrayInitial: ['value1', 'value2', [1, 2]], index: 2 };\r\n" + 
           "  589:     expect(() => service.computeOperandOperation(null, null, 3, 'maptransformPush')).toThrow(InvalidOperationException);\r\n" + 
           "  590    });\r\n" + 
           "  591:   it('maptransformPush  initialValue=undefined--->InvalidOperationException', () => {\r\n" + 
           "  592      //const initialValue: any = { ArrayInitial: ['value1', 'value2', [1, 2]], index: 2 };\r\n" + 
           "  593      expect(() => service.computeOperandOperation(undefined, null, 3, 'maptransformPush')).toThrow(\r\n" + 
           "  594:       InvalidOperationException\r\n" + 
           "  595      );\r\n" + 
           "\r\n" + 
           "  605    });\r\n" + 
           "  606:   it('maptransformSort initialValue=null--->InvalidOperationException', () => {\r\n" + 
           "  607      //const initialValue: any = { ArrayInitial: ['value1', 'value2', [1, 3, 2]], index: 2 };\r\n" + 
           "  608      expect(() => service.computeOperandOperation(null, null, null, 'maptransformSort')).toThrow(\r\n" + 
           "  609:       InvalidOperationException\r\n" + 
           "  610      );\r\n" + 
           "  611    });\r\n" + 
           "  612:   it('maptransformSort initialValue=undefined--->InvalidOperationException', () => {\r\n" + 
           "  613      //const initialValue: any = { ArrayInitial: ['value1', 'value2', [1, 3, 2]], index: 2 };\r\n" + 
           "  614      expect(() => service.computeOperandOperation(undefined, null, null, 'maptransformSort')).toThrow(\r\n" + 
           "  615:       InvalidOperationException\r\n" + 
           "  616      );\r\n" + 
           "\r\n" + 
           "  626    });\r\n" + 
           "  627:   it('maptransformInvertedSort initialValue=null--->InvalidOperationException', () => {\r\n" + 
           "  628      const initialValue: any = { ArrayInitial: ['value1', 'value2', [1, 3, 2]], index: 2 };\r\n" + 
           "  629      expect(() => service.computeOperandOperation(null, null, null, 'maptransformInvertedSort')).toThrow(\r\n" + 
           "  630:       InvalidOperationException\r\n" + 
           "  631      );\r\n" + 
           "\r\n" + 
           "  641    });\r\n" + 
           "  642:   it('maptransformInvertedSort initialValue=null ---> InvalidOperationException', () => {\r\n" + 
           "  643      // const initialValue: any = { ArrayInitial: ['value1', 'value2', [1, 3, 2]], index: 2 };\r\n" + 
           "  644      expect(() => service.computeOperandOperation(null, null, null, 'maptransformInvertedSort')).toThrow(\r\n" + 
           "  645:       InvalidOperationException\r\n" + 
           "  646      );\r\n" + 
           "  647    });\r\n" + 
           "  648:   it('maptransformInvertedSort initialValue=undefined ---> InvalidOperationException', () => {\r\n" + 
           "  649      //const initialValue: any = { ArrayInitial: ['value1', 'value2', [1, 3, 2]], index: 2 };\r\n" + 
           "  650      expect(() => service.computeOperandOperation(undefined, null, null, 'maptransformInvertedSort')).toThrow(\r\n" + 
           "  651:       InvalidOperationException\r\n" + 
           "  652      );\r\n" + 
           "\r\n" + 
           "  665    });\r\n" + 
           "  666:   it('maptransformMerge initialValue=null --->InvalidOperationException', () => {\r\n" + 
           "  667      const initialValue: any = { ArrayInitial: ['value1', 'value2', { x: 5, y: 6 }], index: 2 };\r\n" + 
           "  668      expect(() => service.computeOperandOperation(null, null, { x: 5, y: 6 }, 'maptransformMerge')).toThrow(\r\n" + 
           "  669:       InvalidOperationException\r\n" + 
           "  670      );\r\n" + 
           "  671    });\r\n" + 
           "  672:   it('maptransformMerge initialValue=undefined --->InvalidOperationException', () => {\r\n" + 
           "  673      const initialValue: any = { ArrayInitial: ['value1', 'value2', { x: 5, y: 6 }], index: 2 };\r\n" + 
           "  674      expect(() => service.computeOperandOperation(undefined, null, { x: 5, y: 6 }, 'maptransformMerge')).toThrow(\r\n" + 
           "  675:       InvalidOperationException\r\n" + 
           "  676      );\r\n" + 
           "\r\n" + 
           "  686    });\r\n" + 
           "  687:   it('maptranformStringify initialValue=null--->InvalidOperationException', () => {\r\n" + 
           "  688      const initialValue: any = { ArrayInitial: ['value1', 'value2', { x: 5, y: 6 }], index: 2 };\r\n" + 
           "  689      expect(() => service.computeOperandOperation(null, null, { x: 5, y: 6 }, 'maptranformStringify')).toThrow(\r\n" + 
           "  690:       InvalidOperationException\r\n" + 
           "  691      );\r\n" + 
           "  692    });\r\n" + 
           "  693:   it('maptranformStringify initialValue=undefined--->InvalidOperationException', () => {\r\n" + 
           "  694      const initialValue: any = { ArrayInitial: ['value1', 'value2', { x: 5, y: 6 }], index: 2 };\r\n" + 
           "  695      expect(() => service.computeOperandOperation(undefined, null, { x: 5, y: 6 }, 'maptranformStringify')).toThrow(\r\n" + 
           "  696:       InvalidOperationException\r\n" + 
           "  697      );\r\n" + 
           "\r\n" + 
           "  717        '{key:\"keyX\", id:\"testId\",scope:\"conversation\",type:\"number\"}}' +\r\n" + 
           "  718:       '(InitailValue=null operandValue not used ---expected->InvalidOperationException',\r\n" + 
           "  719      () => {\r\n" + 
           "\r\n" + 
           "  724        expect(() => service.computeOperandOperation(null, content, null, 'maptranformSet')).toThrow(\r\n" + 
           "  725:         InvalidOperationException\r\n" + 
           "  726        );\r\n" + 
           "\r\n" + 
           "  731        '{key:\"keyX\", id:\"testId\",scope:\"conversation\",type:\"number\"}}' +\r\n" + 
           "  732:       '(InitailValue=undefined operandValue not used ---expected->InvalidOperationException',\r\n" + 
           "  733      () => {\r\n" + 
           "\r\n" + 
           "  738        expect(() => service.computeOperandOperation(undefined, content, null, 'maptranformSet')).toThrow(\r\n" + 
           "  739:         InvalidOperationException\r\n" + 
           "  740        );\r\n" + 
           "\r\n" + 
           "  751    );\r\n" + 
           "  752:   it('test maptransformParse InitailValue=null ---expected->InvalidOperationException ', () => {\r\n" + 
           "  753      const initialValue: any = { ArrayInitial: ['1', '2', '{\"result\":true, \"count\":42}'], index: 2 };\r\n" + 
           "  754      expect(() => service.computeOperandOperation(null, null, null, 'maptranformParse')).toThrow(\r\n" + 
           "  755:       InvalidOperationException\r\n" + 
           "  756      );\r\n" + 
           "  757    });\r\n" + 
           "  758:   it('test maptransformParse InitailValue=undefined ---expected-> InvalidOperationException', () => {\r\n" + 
           "  759      const initialValue: any = { ArrayInitial: ['1', '2', '{\"result\":true, \"count\":42}'], index: 2 };\r\n" + 
           "  760      expect(() => service.computeOperandOperation(undefined, null, null, 'maptranformParse')).toThrow(\r\n" + 
           "  761:       InvalidOperationException\r\n" + 
           "  762      );\r\n" + 
           "\r\n" + 
           "src\\features\\data-operations\\exceptions\\invalid-operation.exception.ts:\r\n" + 
           "  1: import { UnprocessableEntityException } from '@nestjs/common';\r\n" + 
           "  2  \r\n" + 
           "  3: export class InvalidOperationException extends UnprocessableEntityException {\r\n" + 
           "  4    super(message = 'Invalid operation') {\r\n" + 
           "\r\n" + 
           "src\\features\\data-processor\\data-processor.service.stub.ts:\r\n" + 
           "    9  } from 'ideta-library/lib/common/data';\r\n" + 
           "   10: import { InvalidComparisonException } from '../data-comparisons/exceptions/invalid-comparison.exception';\r\n" + 
           "   11: import { InvalidOperationException } from '../data-operations/exceptions/invalid-operation.exception';\r\n" + 
           "   12: import { InvalidDataValueException } from './exceptions/invalid-data-value.exception';\r\n" + 
           "   13  import { DataStoreContent } from './interfaces/data-store-content.interface';\r\n" + 
           "\r\n" + 
           "   40      } catch (error) {\r\n" + 
           "   41:       if (options.safeSearch && error instanceof InvalidDataValueException) {\r\n" + 
           "   42          return options.safeValue !== undefined ? options.safeValue : error.message;\r\n" + 
           "\r\n" + 
           "   81          throw options.errorType === 'comparison'\r\n" + 
           "   82:           ? new InvalidComparisonException('Clé de comparateur manquante')\r\n" + 
           "   83:           : new InvalidOperationException(\"Clé d'opérande manquante\");\r\n" + 
           "   84        }\r\n" + 
           "\r\n" + 
           "   91          throw options.errorType === 'comparison'\r\n" + 
           "   92:           ? new InvalidComparisonException('Valeur de comparateur introuvable')\r\n" + 
           "   93:           : new InvalidOperationException(\"Valeur d'opérande introuvable\");\r\n" + 
           "   94        }\r\n" + 
           "\r\n" + 
           "  114        if (!keyId) {\r\n" + 
           "  115:         throw new InvalidDataValueException('[Clé introuvable]', subject);\r\n" + 
           "  116        }\r\n" + 
           "\r\n" + 
           "  122        dataElemKey = this.findElementKey(dataElem, property);\r\n" + 
           "  123:       if (!dataElemKey) throw new InvalidDataValueException('[Élement introuvable]', property);\r\n" + 
           "  124      } else if (property && dataElem.type === 'object') {\r\n" + 
           "  125        dataElemKey = this.findPropertyKey(dataElem, property);\r\n" + 
           "  126:       if (!dataElemKey) throw new InvalidDataValueException('[Propriété introuvable]', property);\r\n" + 
           "  127      }\r\n" + 
           "\r\n" + 
           "  140      if (!this.isPrimitive(value)) {\r\n" + 
           "  141:       throw new InvalidDataValueException('Valeur literale invalide');\r\n" + 
           "  142      }\r\n" + 
           "\r\n" + 
           "  146        if (options.enableParsingError) {\r\n" + 
           "  147:         throw new InvalidOperationException('Unable to parse provided value');\r\n" + 
           "  148        }\r\n" + 
           "\r\n" + 
           "  230        const defaultValue = this.getDefaultValue(dataStoreElem, 'value');\r\n" + 
           "  231:       if (defaultValue === null) throw new InvalidDataValueException('[Valeur non définie]', dataStoreElem.key);\r\n" + 
           "  232        return defaultValue;\r\n" + 
           "\r\n" + 
           "  248          if (dataElemKey && dataElemKey.key === 'length') return 0;\r\n" + 
           "  249:         throw new InvalidDataValueException('[Valeur non définie]', dataElem.key);\r\n" + 
           "  250        } else if (!index && !dataElemKey) {\r\n" + 
           "\r\n" + 
           "  252        } else if (!isNaN(+index) && this.isEmpty(convValue[+index])) {\r\n" + 
           "  253:         throw new InvalidDataValueException('[Valeur non définie]', dataElem.key, null, +index);\r\n" + 
           "  254        } else if (dataElemKey) {\r\n" + 
           "\r\n" + 
           "  257          } else if (typeof convValue[+index] !== 'object') {\r\n" + 
           "  258:           throw new InvalidDataValueException('[Valeur non définie]', dataElem.key, dataElemKey.key, +index);\r\n" + 
           "  259          }\r\n" + 
           "\r\n" + 
           "  264          if (value === null) {\r\n" + 
           "  265:           throw new InvalidDataValueException('[Valeur non définie]', dataElem.key, dataElemKey.key, +index);\r\n" + 
           "  266          }\r\n" + 
           "\r\n" + 
           "  274        if (defaultValue === null) {\r\n" + 
           "  275:         throw new InvalidDataValueException('[Valeur non définie]', dataElem.key, dataElemKey && dataElemKey.key);\r\n" + 
           "  276        }\r\n" + 
           "\r\n" + 
           "src\\features\\data-processor\\data-processor.service.ts:\r\n" + 
           "   16  import { BackgroundActionsService } from '../background-actions/background-actions.service';\r\n" + 
           "   17: import { InvalidComparisonException } from '../data-comparisons/exceptions/invalid-comparison.exception';\r\n" + 
           "   18: import { InvalidOperationException } from '../data-operations/exceptions/invalid-operation.exception';\r\n" + 
           "   19  import { DataRepository } from './data.repository';\r\n" + 
           "   20: import { InvalidDataValueException } from './exceptions/invalid-data-value.exception';\r\n" + 
           "   21  import { DataStoreContent } from './interfaces/data-store-content.interface';\r\n" + 
           "\r\n" + 
           "   69      } catch (error) {\r\n" + 
           "   70:       if (options.safeSearch && error instanceof InvalidDataValueException) {\r\n" + 
           "   71          return options.safeValue !== undefined ? options.safeValue : error.message;\r\n" + 
           "\r\n" + 
           "   99      } catch (error) {\r\n" + 
           "  100:       if (options.safeSearch && error instanceof InvalidDataValueException) {\r\n" + 
           "  101          return { value: options.safeValue !== undefined ? options.safeValue : error.message };\r\n" + 
           "\r\n" + 
           "  141      } catch (error) {\r\n" + 
           "  142:       if (error instanceof InvalidDataValueException && bypassChecks) content = { dataElem: { key: subject } };\r\n" + 
           "  143        else throw error;\r\n" + 
           "\r\n" + 
           "  293      } catch (error) {\r\n" + 
           "  294:       if (error instanceof InvalidDataValueException) return false;\r\n" + 
           "  295        else throw error;\r\n" + 
           "\r\n" + 
           "  344      if (!this.isPrimitive(value)) {\r\n" + 
           "  345:       throw new InvalidDataValueException('Valeur literale invalide');\r\n" + 
           "  346      }\r\n" + 
           "\r\n" + 
           "  350        if (options.enableParsingError) {\r\n" + 
           "  351:         throw new InvalidOperationException('Unable to parse provided value');\r\n" + 
           "  352        }\r\n" + 
           "\r\n" + 
           "  395        if (!keyId) {\r\n" + 
           "  396:         throw new InvalidDataValueException('_key not found_', subject);\r\n" + 
           "  397        }\r\n" + 
           "\r\n" + 
           "  403        dataElemKey = this.findElementKey(dataElem, property);\r\n" + 
           "  404:       if (!dataElemKey) throw new InvalidDataValueException('_element not found_', property);\r\n" + 
           "  405      } else if (property && dataElem.type === 'object') {\r\n" + 
           "  406        dataElemKey = this.findPropertyKey(dataElem, property);\r\n" + 
           "  407:       if (!dataElemKey) throw new InvalidDataValueException('_property not found_', property);\r\n" + 
           "  408      }\r\n" + 
           "\r\n" + 
           "  430          throw options.errorType === 'comparison'\r\n" + 
           "  431:           ? new InvalidComparisonException('Clé de comparateur manquante')\r\n" + 
           "  432:           : new InvalidOperationException(\"Clé d'opérande manquante\");\r\n" + 
           "  433        }\r\n" + 
           "\r\n" + 
           "  440          throw options.errorType === 'comparison'\r\n" + 
           "  441:           ? new InvalidComparisonException('Valeur de comparateur introuvable')\r\n" + 
           "  442:           : new InvalidOperationException(\"Valeur d'opérande introuvable\");\r\n" + 
           "  443        }\r\n" + 
           "\r\n" + 
           "  589        const defaultValue = this.getDefaultValue(dataStoreElem, 'value');\r\n" + 
           "  590:       if (defaultValue === null) throw new InvalidDataValueException(this.commonPlaceholder, dataStoreElem.key);\r\n" + 
           "  591        return defaultValue;\r\n" + 
           "\r\n" + 
           "  608          if (dataElemKey && dataElemKey.key === 'length') return 0;\r\n" + 
           "  609:         throw new InvalidDataValueException(this.commonPlaceholder, dataElem.key);\r\n" + 
           "  610        } else if (!index && !dataElemKey) {\r\n" + 
           "\r\n" + 
           "  612        } else if (!isNaN(+index) && this.isEmpty(convValue[+index])) {\r\n" + 
           "  613:         throw new InvalidDataValueException(this.commonPlaceholder, dataElem.key, null, +index);\r\n" + 
           "  614        } else if (dataElemKey) {\r\n" + 
           "\r\n" + 
           "  617          } else if (typeof convValue[+index] !== 'object') {\r\n" + 
           "  618:           throw new InvalidDataValueException(this.commonPlaceholder, dataElem.key, dataElemKey.key, +index);\r\n" + 
           "  619          }\r\n" + 
           "\r\n" + 
           "  624          if (value === null) {\r\n" + 
           "  625:           throw new InvalidDataValueException(this.commonPlaceholder, dataElem.key, dataElemKey.key, +index);\r\n" + 
           "  626          }\r\n" + 
           "\r\n" + 
           "  634        if (defaultValue === null) {\r\n" + 
           "  635:         throw new InvalidDataValueException(this.commonPlaceholder, dataElem.key, dataElemKey && dataElemKey.key);\r\n" + 
           "  636        }\r\n" + 
           "\r\n" + 
           "src\\features\\data-processor\\data.repository.ts:\r\n" + 
           "    5  \r\n" + 
           "    6: import { InvalidDataPathException } from './exceptions/Invalid-data-path.exception';\r\n" + 
           "    7  import { FirebaseRef, FirebaseSnap } from '../../core/providers/firebase-db.provider';\r\n" + 
           "\r\n" + 
           "   68  \r\n" + 
           "   69:     if (!botId || !channel || !conversationId) throw new InvalidDataPathException();\r\n" + 
           "   70  \r\n" + 
           "\r\n" + 
           "   83  \r\n" + 
           "   84:     if (!botId || !channel || !conversationId) throw new InvalidDataPathException();\r\n" + 
           "   85  \r\n" + 
           "\r\n" + 
           "   93  \r\n" + 
           "   94:     if (!botId || !channel || !conversationId) throw new InvalidDataPathException();\r\n" + 
           "   95  \r\n" + 
           "\r\n" + 
           "  105  \r\n" + 
           "  106:     if (!botId || !channel || !conversationId) throw new InvalidDataPathException();\r\n" + 
           "  107  \r\n" + 
           "\r\n" + 
           "  119  \r\n" + 
           "  120:     if (!botId || !channel || !conversationId) throw new InvalidDataPathException();\r\n" + 
           "  121  \r\n" + 
           "\r\n" + 
           "src\\features\\data-processor\\exceptions\\Invalid-data-path.exception.ts:\r\n" + 
           "  1: import { BadRequestException } from '@nestjs/common';\r\n" + 
           "  2  \r\n" + 
           "  3: export class InvalidDataPathException extends BadRequestException {\r\n" + 
           "  4    constructor(message = 'Missing access informations') {\r\n" + 
           "\r\n" + 
           "src\\features\\data-processor\\exceptions\\invalid-data-value.exception.ts:\r\n" + 
           "  1: import { UnprocessableEntityException } from '@nestjs/common';\r\n" + 
           "  2  \r\n" + 
           "  3: export class InvalidDataValueException extends UnprocessableEntityException {\r\n" + 
           "  4    dataKey: string;\r\n" + 
           "\r\n" + 
           "src\\features\\deployments\\business-messages\\exceptions\\business-messages-exceptions.ts:\r\n" + 
           "   1: import { BadRequestException, UnauthorizedException, UnprocessableEntityException } from '@nestjs/common';\r\n" + 
           "   2  \r\n" + 
           "   3: export class BusinessMessagesMissingInformationsException extends BadRequestException {\r\n" + 
           "   4    constructor() {\r\n" + 
           "\r\n" + 
           "   8  \r\n" + 
           "   9: export class BusinessMessagesAuthorizationException extends UnauthorizedException {\r\n" + 
           "  10    constructor() {\r\n" + 
           "\r\n" + 
           "  14  \r\n" + 
           "  15: export class BusinessMessagesRessourceNotFoundException extends UnprocessableEntityException {\r\n" + 
           "  16    constructor(ressource: 'flow' | 'number', id: string) {\r\n" + 
           "\r\n" + 
           "  20  \r\n" + 
           "  21: export class BusinessMessagesMissingCredientialsException extends BadRequestException {\r\n" + 
           "  22    constructor() {\r\n" + 
           "\r\n" + 
           "src\\features\\deployments\\facebook\\facebook.repository.ts:\r\n" + 
           "  6  import { LoggerService } from '../../../core/logger/logger.service';\r\n" + 
           "  7: import { FacebookApiLimitError } from './exceptions/facebook-exceptions';\r\n" + 
           "  8  \r\n" + 
           "\r\n" + 
           "src\\features\\deployments\\facebook\\exceptions\\facebook-exceptions.ts:\r\n" + 
           "  1: import { BadRequestException, UnprocessableEntityException } from '@nestjs/common';\r\n" + 
           "  2  \r\n" + 
           "  3: export class FacebookApiLimitError extends UnprocessableEntityException {\r\n" + 
           "  4    constructor() {\r\n" + 
           "\r\n" + 
           "  8  \r\n" + 
           "  9: export class FacebookMissingTokenException extends BadRequestException {\r\n" + 
           "  10    constructor() {\r\n" + 
           "\r\n" + 
           "src\\features\\deployments\\twilio-voice\\twilio-voice.service.ts:\r\n" + 
           "   7  import {\r\n" + 
           "   8:   TwilioAuthorizationException,\r\n" + 
           "   9:   TwilioMissingCredientialsException,\r\n" + 
           "  10:   TwilioMissingInformationsException,\r\n" + 
           "  11:   TwilioRessourceNotFoundException\r\n" + 
           "  12: } from './exceptions/twilio-exceptions';\r\n" + 
           "  13  import { BotsRepository } from '../../../resources/bots/bots.repository';\r\n" + 
           "\r\n" + 
           "  19    public connectTwilioFlow(botId: string, pageInfos: TwilioPageInfos): Promise<string> {\r\n" + 
           "  20:     if (!pageInfos) throw new TwilioMissingInformationsException();\r\n" + 
           "  21:     if (!pageInfos.accountSID || !pageInfos.authToken) throw new TwilioMissingCredientialsException();\r\n" + 
           "  22  \r\n" + 
           "\r\n" + 
           "  37        .catch(error => {\r\n" + 
           "  38:         if (error.code === 20003) throw new TwilioAuthorizationException();\r\n" + 
           "  39:         if (error.code === 20404) throw new TwilioRessourceNotFoundException('flow', pageInfos.flowId);\r\n" + 
           "  40          throw error;\r\n" + 
           "\r\n" + 
           "  44    public linkTwilioFlow(botId: string, { accountSID, authToken, flowId, numberSID }: TwilioPageInfos) {\r\n" + 
           "  45:     if (!accountSID || !authToken || !flowId || !numberSID) throw new TwilioMissingCredientialsException();\r\n" + 
           "  46  \r\n" + 
           "\r\n" + 
           "  53        .catch(error => {\r\n" + 
           "  54:         if (error.code === 20003) throw new TwilioAuthorizationException();\r\n" + 
           "  55:         if (error.code === 20404) throw new TwilioRessourceNotFoundException('number', numberSID);\r\n" + 
           "  56          throw error;\r\n" + 
           "\r\n" + 
           "src\\features\\deployments\\twilio-voice\\exceptions\\twilio-exceptions.ts:\r\n" + 
           "   1: import { BadRequestException, UnauthorizedException, UnprocessableEntityException } from '@nestjs/common';\r\n" + 
           "   2  \r\n" + 
           "   3: export class TwilioMissingInformationsException extends BadRequestException {\r\n" + 
           "   4    constructor() {\r\n" + 
           "\r\n" + 
           "   8  \r\n" + 
           "   9: export class TwilioAuthorizationException extends UnauthorizedException {\r\n" + 
           "  10    constructor() {\r\n" + 
           "\r\n" + 
           "  14  \r\n" + 
           "  15: export class TwilioRessourceNotFoundException extends UnprocessableEntityException {\r\n" + 
           "  16    constructor(ressource: 'flow' | 'number', id: string) {\r\n" + 
           "\r\n" + 
           "  20  \r\n" + 
           "  21: export class TwilioMissingCredientialsException extends BadRequestException {\r\n" + 
           "  22    constructor() {\r\n" + 
           "\r\n" + 
           "src\\features\\incoming-messages\\incoming-messages.service.ts:\r\n" + 
           "  17  import { LoggerService } from '../../core/logger/logger.service';\r\n" + 
           "  18: import { BotNotFoundException } from '../../resources/bots/exceptions/bot-not-found.exception';\r\n" + 
           "  19: import { NodeNotFoundException } from '../../resources/nodes/exceptions/node-not-found.exception';\r\n" + 
           "  20  import { DataRepository } from '../data-processor/data.repository';\r\n" + 
           "\r\n" + 
           "  65        .catch((error: any) => {\r\n" + 
           "  66:         if (error instanceof BotNotFoundException) {\r\n" + 
           "  67            delete context.message;\r\n" + 
           "\r\n" + 
           "  69            return this.nodesService.handleNode(context, node);\r\n" + 
           "  70:         } else if (error instanceof NodeNotFoundException) {\r\n" + 
           "  71            delete context.message;\r\n" + 
           "\r\n" + 
           "src\\features\\message-sender\\message-sender.repository.ts:\r\n" + 
           "   4  \r\n" + 
           "   5: import { NotDeployedBotException } from '../webhooks/exceptions/not-deployed-bot.exception';\r\n" + 
           "   6  import { FirebaseRef, FirebaseSnap } from '../../core/providers/firebase-db.provider';\r\n" + 
           "\r\n" + 
           "  47          } else {\r\n" + 
           "  48:           throw new NotDeployedBotException(channel);\r\n" + 
           "  49          }\r\n" + 
           "\r\n" + 
           "src\\features\\message-sender\\message-sender.service.ts:\r\n" + 
           "  13  import { ApiService } from './api/api.service';\r\n" + 
           "  14: import { UnknownChannelException } from './exceptions/unknown-channel.exception';\r\n" + 
           "  15: import { MissingAccessTokenException } from './exceptions/missing-access-token.exception';\r\n" + 
           "  16  import { Context } from '../../core/context.entity';\r\n" + 
           "\r\n" + 
           "  39            ? this.facebookService.sendMessage(conversationId, nodeTemplate.parsedTemplate, channelOptions.accessToken)\r\n" + 
           "  40:           : Promise.reject(new MissingAccessTokenException());\r\n" + 
           "  41        case 'google':\r\n" + 
           "\r\n" + 
           "  56              )\r\n" + 
           "  57:           : Promise.reject(new MissingAccessTokenException());\r\n" + 
           "  58        case 'slack':\r\n" + 
           "\r\n" + 
           "  60            ? this.slackService.sendMessage(conversationId, nodeTemplate.parsedTemplate, channelOptions.accessToken)\r\n" + 
           "  61:           : Promise.reject(new MissingAccessTokenException());\r\n" + 
           "  62        case 'twiliovoice':\r\n" + 
           "\r\n" + 
           "  72        default:\r\n" + 
           "  73:         return Promise.reject(new UnknownChannelException());\r\n" + 
           "  74      }\r\n" + 
           "\r\n" + 
           "src\\features\\message-sender\\exceptions\\missing-access-token.exception.ts:\r\n" + 
           "  1: import { UnauthorizedException } from '@nestjs/common';\r\n" + 
           "  2  \r\n" + 
           "  3: export class MissingAccessTokenException extends UnauthorizedException {\r\n" + 
           "  4    constructor(message = 'Missing Access Token') {\r\n" + 
           "\r\n" + 
           "src\\features\\message-sender\\exceptions\\unknown-channel.exception.ts:\r\n" + 
           "  1: import { UnprocessableEntityException } from '@nestjs/common';\r\n" + 
           "  2  \r\n" + 
           "  3: export class UnknownChannelException extends UnprocessableEntityException {\r\n" + 
           "  4    constructor(message = 'Unknown channel') {\r\n" + 
           "\r\n" + 
           "src\\features\\nlp\\lexicons\\lexicons.service.ts:\r\n" + 
           "  12  import { NlpService as AppNlpService } from './interfaces/nlp-service.interface';\r\n" + 
           "  13: import { UnknownNlpServiceException } from './exceptions/unknown-nlp-service.exception';\r\n" + 
           "  14: import { MissingCredentialException } from './exceptions/missing-credential.exception';\r\n" + 
           "  15  import { LexiconsRepository } from './lexicons.repository';\r\n" + 
           "\r\n" + 
           "  37        default:\r\n" + 
           "  38:         throw new UnknownNlpServiceException(service);\r\n" + 
           "  39      }\r\n" + 
           "\r\n" + 
           "  42    isValidDialogflowCredentials(credentials: any): credentials is DialogflowCredentials {\r\n" + 
           "  43:     if (!credentials) throw new MissingCredentialException('Dialogflow');\r\n" + 
           "  44:     if (!credentials.project_id) throw new MissingCredentialException('Dialogflow', 'project_id');\r\n" + 
           "  45      let isOAuthCredentials = true;\r\n" + 
           "\r\n" + 
           "  50        ['private_key', 'client_email'].forEach((key: string) => {\r\n" + 
           "  51:         if (!credentials[key]) throw new MissingCredentialException('Dialogflow', key);\r\n" + 
           "  52        });\r\n" + 
           "\r\n" + 
           "  57    isValidLuisCredentials(credentials: any): credentials is LuisCredentials {\r\n" + 
           "  58:     if (!credentials) throw new MissingCredentialException('Luis');\r\n" + 
           "  59  \r\n" + 
           "  60      ['appId', 'authKey', 'endpointKey'].forEach((key: string) => {\r\n" + 
           "  61:       if (!credentials[key]) throw new MissingCredentialException('Luis', key);\r\n" + 
           "  62      });\r\n" + 
           "\r\n" + 
           "  89        .catch(error => {\r\n" + 
           "  90:         if (error instanceof MissingCredentialException) return false;\r\n" + 
           "  91          throw error;\r\n" + 
           "\r\n" + 
           "src\\features\\nlp\\lexicons\\exceptions\\missing-credential.exception.ts:\r\n" + 
           "  1: import { UnauthorizedException } from '@nestjs/common';\r\n" + 
           "  2  \r\n" + 
           "  3: export class MissingCredentialException extends UnauthorizedException {\r\n" + 
           "  4    constructor(service: string, key?: string) {\r\n" + 
           "\r\n" + 
           "src\\features\\nlp\\lexicons\\exceptions\\not-published.exception.ts:\r\n" + 
           "  1: import { UnprocessableEntityException } from '@nestjs/common';\r\n" + 
           "  2  \r\n" + 
           "  3: export class NotPublishedException extends UnprocessableEntityException {\r\n" + 
           "  4    constructor() {\r\n" + 
           "\r\n" + 
           "src\\features\\nlp\\lexicons\\exceptions\\unknown-nlp-service.exception.ts:\r\n" + 
           "  1: import { UnprocessableEntityException } from '@nestjs/common';\r\n" + 
           "  2  \r\n" + 
           "  3: export class UnknownNlpServiceException extends UnprocessableEntityException {\r\n" + 
           "  4    constructor(name: string) {\r\n" + 
           "\r\n" + 
           "src\\features\\nlp\\lexicons\\luis\\luis.service.ts:\r\n" + 
           "   5  \r\n" + 
           "   6: import { NotPublishedException } from '../exceptions/not-published.exception';\r\n" + 
           "   7  import { LoggerService } from '../../../../core/logger/logger.service';\r\n" + 
           "\r\n" + 
           "  54          if (error && error.statusCode === 410) {\r\n" + 
           "  55:           throw new NotPublishedException();\r\n" + 
           "  56          } else throw error;\r\n" + 
           "\r\n" + 
           "src\\features\\oauth\\oauth.service.ts:\r\n" + 
           "    7  import { OauthRepository } from './oauth.repository';\r\n" + 
           "    8: import { UnknownOAuthServiceException } from './exceptions/unknown-oauth-service.exception';\r\n" + 
           "    9  import { FacebookService as FacebookOauthService } from './facebook/facebook.service';\r\n" + 
           "\r\n" + 
           "   95        default:\r\n" + 
           "   96:         throw new UnknownOAuthServiceException(service);\r\n" + 
           "   97      }\r\n" + 
           "\r\n" + 
           "  106        default:\r\n" + 
           "  107:         throw new UnknownOAuthServiceException(service);\r\n" + 
           "  108      }\r\n" + 
           "\r\n" + 
           "  117        default:\r\n" + 
           "  118:         throw new UnknownOAuthServiceException(service);\r\n" + 
           "  119      }\r\n" + 
           "\r\n" + 
           "src\\features\\oauth\\exceptions\\unknown-oauth-service.exception.ts:\r\n" + 
           "  1: import { UnprocessableEntityException } from '@nestjs/common';\r\n" + 
           "  2  \r\n" + 
           "  3: export class UnknownOAuthServiceException extends UnprocessableEntityException {\r\n" + 
           "  4    constructor(service: string) {\r\n" + 
           "\r\n" + 
           "src\\features\\template-parser\\api\\api.service.ts:\r\n" + 
           "   4  \r\n" + 
           "   5: import { InvalidTemplateException } from '../../template-parser/exceptions/invalid-template.exception';\r\n" + 
           "   6  \r\n" + 
           "\r\n" + 
           "  18      } else {\r\n" + 
           "  19:       return Promise.reject(new InvalidTemplateException(\"Ce type de template n'est pas supporté par le canal API\"));\r\n" + 
           "  20      }\r\n" + 
           "\r\n" + 
           "  34      } else {\r\n" + 
           "  35:       return Promise.reject(new InvalidTemplateException('Le champ texte est vide'));\r\n" + 
           "  36      }\r\n" + 
           "\r\n" + 
           "src\\features\\template-parser\\exceptions\\invalid-template.exception.ts:\r\n" + 
           "  1  // This is an internal error, thus extending Error, not CustomError\r\n" + 
           "  2: export class InvalidTemplateException extends Error {\r\n" + 
           "  3    constructor(message = 'Invalid template') {\r\n" + 
           "\r\n" + 
           "src\\features\\template-parser\\facebook\\facebook.service.ts:\r\n" + 
           "   22  \r\n" + 
           "   23: import { InvalidTemplateException } from '../../template-parser/exceptions/invalid-template.exception';\r\n" + 
           "   24  import { Context } from '../../../core/context.entity';\r\n" + 
           "\r\n" + 
           "   61      } else {\r\n" + 
           "   62:       return Promise.reject(new InvalidTemplateException('Le champ texte est vide'));\r\n" + 
           "   63      }\r\n" + 
           "\r\n" + 
           "   71      } else {\r\n" + 
           "   72:       return Promise.reject(new InvalidTemplateException(\"Le texte d'introduction est vide\"));\r\n" + 
           "   73      }\r\n" + 
           "\r\n" + 
           "   83      } else {\r\n" + 
           "   84:       return Promise.reject(new InvalidTemplateException('La bulle doit contenir entre 1 et 11 Quick Replies'));\r\n" + 
           "   85      }\r\n" + 
           "\r\n" + 
           "   93      } else {\r\n" + 
           "   94:       return Promise.reject(new InvalidTemplateException('Le champ titre du modèle est vide'));\r\n" + 
           "   95      }\r\n" + 
           "\r\n" + 
           "  105      } else {\r\n" + 
           "  106:       return Promise.reject(new InvalidTemplateException('La bulle doit contenir entre 1 et 3 boutons'));\r\n" + 
           "  107      }\r\n" + 
           "\r\n" + 
           "  131      } else {\r\n" + 
           "  132:       return Promise.reject(new InvalidTemplateException('Une bulle Media doit contenir 1 seul élément'));\r\n" + 
           "  133      }\r\n" + 
           "\r\n" + 
           "  157      } else {\r\n" + 
           "  158:       return Promise.reject(new InvalidTemplateException('Une bulle Liste doit contenir entre 2 et 10 éléments'));\r\n" + 
           "  159      }\r\n" + 
           "\r\n" + 
           "  170        } else {\r\n" + 
           "  171:         return Promise.reject(new InvalidTemplateException(\"Une bulle Liste ne peut contenir qu'un seul bouton\"));\r\n" + 
           "  172        }\r\n" + 
           "\r\n" + 
           "  198      } else {\r\n" + 
           "  199:       return Promise.reject(new InvalidTemplateException('Une bulle Carrousel doit contenir entre 1 et 10 éléments'));\r\n" + 
           "  200      }\r\n" + 
           "\r\n" + 
           "  220      } else {\r\n" + 
           "  221:       return Promise.reject(new InvalidTemplateException('Le champ \"Nom du client\" est vide'));\r\n" + 
           "  222      }\r\n" + 
           "\r\n" + 
           "  228      } else {\r\n" + 
           "  229:       return Promise.reject(new InvalidTemplateException('Le champ \"Numéro de commande\" est vide'));\r\n" + 
           "  230      }\r\n" + 
           "\r\n" + 
           "  236      } else {\r\n" + 
           "  237:       return Promise.reject(new InvalidTemplateException('Le champ \"Devise\" est vide'));\r\n" + 
           "  238      }\r\n" + 
           "\r\n" + 
           "  244      } else {\r\n" + 
           "  245:       return Promise.reject(new InvalidTemplateException('Le champ \"Méthode de paiement\" est vide'));\r\n" + 
           "  246      }\r\n" + 
           "\r\n" + 
           "  264        } else {\r\n" + 
           "  265:         return Promise.reject(new InvalidTemplateException('Le champ \"Adresse\" est vide'));\r\n" + 
           "  266        }\r\n" + 
           "\r\n" + 
           "  270        } else {\r\n" + 
           "  271:         return Promise.reject(new InvalidTemplateException('Le champ \"Ville\" est vide'));\r\n" + 
           "  272        }\r\n" + 
           "\r\n" + 
           "  275        } else {\r\n" + 
           "  276:         return Promise.reject(new InvalidTemplateException('Le champ \"Code postal\" est vide'));\r\n" + 
           "  277        }\r\n" + 
           "\r\n" + 
           "  280        } else {\r\n" + 
           "  281:         return Promise.reject(new InvalidTemplateException('Le champ \"Etat/Région\" est vide'));\r\n" + 
           "  282        }\r\n" + 
           "\r\n" + 
           "  285        } else {\r\n" + 
           "  286:         return Promise.reject(new InvalidTemplateException('Le champ \"Pays\" est vide'));\r\n" + 
           "  287        }\r\n" + 
           "\r\n" + 
           "  306        } else {\r\n" + 
           "  307:         return Promise.reject(new InvalidTemplateException('Le champ \"Coût total\" est vide'));\r\n" + 
           "  308        }\r\n" + 
           "\r\n" + 
           "  313      } else {\r\n" + 
           "  314:       return Promise.reject(new InvalidTemplateException('Le champ \"Coût total\" est vide'));\r\n" + 
           "  315      }\r\n" + 
           "\r\n" + 
           "  334        } else {\r\n" + 
           "  335:         return Promise.reject(new InvalidTemplateException('Une transaction ne peut contenir plus de 100 articles'));\r\n" + 
           "  336        }\r\n" + 
           "\r\n" + 
           "  361      } else {\r\n" + 
           "  362:       return Promise.reject(new InvalidTemplateException('Une bulle Open Graph doit contenir 1 seul élément'));\r\n" + 
           "  363      }\r\n" + 
           "\r\n" + 
           "  383      } else {\r\n" + 
           "  384:       return Promise.reject(new InvalidTemplateException(\"Le type d'une réponse n'est pas défini\"));\r\n" + 
           "  385      }\r\n" + 
           "\r\n" + 
           "  392        } else {\r\n" + 
           "  393:         return Promise.reject(new InvalidTemplateException(\"Le titre d'une réponse est vide\"));\r\n" + 
           "  394        }\r\n" + 
           "\r\n" + 
           "  432        } else if (!isDefaultAction) {\r\n" + 
           "  433:         return Promise.reject(new InvalidTemplateException(\"Le titre d'un bouton est vide\"));\r\n" + 
           "  434        }\r\n" + 
           "\r\n" + 
           "  466          } else {\r\n" + 
           "  467:           return Promise.reject(new InvalidTemplateException(\"L'URL d'un bouton est vide\"));\r\n" + 
           "  468          }\r\n" + 
           "\r\n" + 
           "  492            return Promise.reject(\r\n" + 
           "  493:             new InvalidTemplateException(\"Le bouton d'appel n'a pas de numéro de téléphone associé\")\r\n" + 
           "  494            );\r\n" + 
           "\r\n" + 
           "  504      if (element.mediaType !== 'image' && element.mediaType !== 'video') {\r\n" + 
           "  505:       return Promise.reject(new InvalidTemplateException(\"Ce type de Media n'est pas géré par Facebook\"));\r\n" + 
           "  506      } else {\r\n" + 
           "\r\n" + 
           "  524      } else {\r\n" + 
           "  525:       return Promise.reject(new InvalidTemplateException(\"L'URL du media est vide\"));\r\n" + 
           "  526      }\r\n" + 
           "\r\n" + 
           "  537        } else {\r\n" + 
           "  538:         return Promise.reject(new InvalidTemplateException(\"Une bulle Media ne peut contenir qu'un seul bouton\"));\r\n" + 
           "  539        }\r\n" + 
           "\r\n" + 
           "  554          return Promise.reject(\r\n" + 
           "  555:           new InvalidTemplateException(\r\n" + 
           "  556              'Un élément de carrousel ou de liste doit contenir au' +\r\n" + 
           "\r\n" + 
           "  566      } else {\r\n" + 
           "  567:       return Promise.reject(new InvalidTemplateException(\"Le champ Titre d'un élément est vide\"));\r\n" + 
           "  568      }\r\n" + 
           "\r\n" + 
           "  583          return Promise.reject(\r\n" + 
           "  584:           new InvalidTemplateException('L\\'action par défaut des éléments doit être vide ou de type \"Ouvrir URL\"')\r\n" + 
           "  585          );\r\n" + 
           "\r\n" + 
           "  587          return Promise.reject(\r\n" + 
           "  588:           new InvalidTemplateException(\"Le champ URL de l'action par défaut d'un des éléments est vide\")\r\n" + 
           "  589          );\r\n" + 
           "\r\n" + 
           "  610          return Promise.reject(\r\n" + 
           "  611:           new InvalidTemplateException('Un élément de carrousel ou de liste ne peut avoir plus de 3 boutons')\r\n" + 
           "  612          );\r\n" + 
           "\r\n" + 
           "  625      } else {\r\n" + 
           "  626:       return Promise.reject(new InvalidTemplateException('Un article de transaction doit avoir un titre'));\r\n" + 
           "  627      }\r\n" + 
           "\r\n" + 
           "  645      } else {\r\n" + 
           "  646:       return Promise.reject(new InvalidTemplateException('Un article de transaction doit avoir un prix'));\r\n" + 
           "  647      }\r\n" + 
           "\r\n" + 
           "  670      } else {\r\n" + 
           "  671:       return Promise.reject(new InvalidTemplateException(\"Le champ URL de l'élément Open Graph est vide\"));\r\n" + 
           "  672      }\r\n" + 
           "\r\n" + 
           "  683        } else {\r\n" + 
           "  684:         return Promise.reject(new InvalidTemplateException('Une bulle Open Graph ne peut avoir plus de 3 boutons'));\r\n" + 
           "  685        }\r\n" + 
           "\r\n" + 
           "src\\features\\template-parser\\google\\google.service.ts:\r\n" + 
           "   15  \r\n" + 
           "   16: import { InvalidTemplateException } from '../../template-parser/exceptions/invalid-template.exception';\r\n" + 
           "   17  import { LoggerService } from '../../../core/logger/logger.service';\r\n" + 
           "\r\n" + 
           "   40      } else if (template.type === 'receipt') {\r\n" + 
           "   41:       promise = Promise.reject(new InvalidTemplateException('Les modèles de Reçu ne sont pas gérés par Google'));\r\n" + 
           "   42      } else if (template.type === 'open-graph') {\r\n" + 
           "   43:       promise = Promise.reject(new InvalidTemplateException('Les modèles Open Graph ne sont pas gérés par Google'));\r\n" + 
           "   44      }\r\n" + 
           "\r\n" + 
           "   57      } else {\r\n" + 
           "   58:       return Promise.reject(new InvalidTemplateException('Le champ texte est vide'));\r\n" + 
           "   59      }\r\n" + 
           "\r\n" + 
           "  108      } else {\r\n" + 
           "  109:       return Promise.reject(new InvalidTemplateException(\"Le texte d'introduction est vide\"));\r\n" + 
           "  110      }\r\n" + 
           "\r\n" + 
           "  113          if (!quickReply.title) {\r\n" + 
           "  114:           throw new InvalidTemplateException(\"L'une des Quick Replies n'a pas de titre\");\r\n" + 
           "  115          }\r\n" + 
           "\r\n" + 
           "  126      } else {\r\n" + 
           "  127:       return Promise.reject(new InvalidTemplateException('La bulle doit contenir entre 1 et 8 Quick Replies'));\r\n" + 
           "  128      }\r\n" + 
           "\r\n" + 
           "  163      } else {\r\n" + 
           "  164:       return Promise.reject(new InvalidTemplateException('Le champ titre du modèle est vide'));\r\n" + 
           "  165      }\r\n" + 
           "\r\n" + 
           "  168          if (button.type !== 'postback') {\r\n" + 
           "  169:           throw new InvalidTemplateException(\"Les boutons doivent être de type 'Bulle déclenchée'\");\r\n" + 
           "  170          }\r\n" + 
           "  171          if (!button.title) {\r\n" + 
           "  172:           throw new InvalidTemplateException(\"L'un des boutons n'a pas de titre\");\r\n" + 
           "  173          }\r\n" + 
           "\r\n" + 
           "  189      } else {\r\n" + 
           "  190:       return Promise.reject(new InvalidTemplateException('La bulle doit contenir entre 2 et 30 boutons'));\r\n" + 
           "  191      }\r\n" + 
           "\r\n" + 
           "  236      } else {\r\n" + 
           "  237:       return Promise.reject(new InvalidTemplateException(\"Le texte d'introduction est vide\"));\r\n" + 
           "  238      }\r\n" + 
           "\r\n" + 
           "  240      if (mediaElement.mediaType !== 'image' && mediaElement.mediaType !== 'audio') {\r\n" + 
           "  241:       return Promise.reject(new InvalidTemplateException(\"Ce type de Media n'est pas géré par Google\"));\r\n" + 
           "  242      } else if (mediaElement.mediaType === 'image') {\r\n" + 
           "\r\n" + 
           "  256                return Promise.reject(\r\n" + 
           "  257:                 new InvalidTemplateException(\"Le bouton d'une bulle image sur Google doit avoir un titre\")\r\n" + 
           "  258                );\r\n" + 
           "\r\n" + 
           "  261                return Promise.reject(\r\n" + 
           "  262:                 new InvalidTemplateException(\"Le bouton d'une bulle image sur Google doit avoir une URL\")\r\n" + 
           "  263                );\r\n" + 
           "\r\n" + 
           "  274              return Promise.reject(\r\n" + 
           "  275:               new InvalidTemplateException(\"Le bouton d'une bulle image sur Google doit être de type 'Ouvrir URL'\")\r\n" + 
           "  276              );\r\n" + 
           "\r\n" + 
           "  279        } else {\r\n" + 
           "  280:         return Promise.reject(new InvalidTemplateException(\"L'URL du media est vide\"));\r\n" + 
           "  281        }\r\n" + 
           "\r\n" + 
           "  298              return Promise.reject(\r\n" + 
           "  299:               new InvalidTemplateException(\r\n" + 
           "  300                  \"Le bouton d'une bulle audio sur Google doit être de type\" +\r\n" + 
           "\r\n" + 
           "  306              return Promise.reject(\r\n" + 
           "  307:               new InvalidTemplateException(\"Le bouton d'une bulle audio sur Google doit avoir un titre\")\r\n" + 
           "  308              );\r\n" + 
           "\r\n" + 
           "  317            return Promise.reject(\r\n" + 
           "  318:             new InvalidTemplateException(\r\n" + 
           "  319                \"Une bulle audio sur Google doit contenir un bouton de type 'Bulle déclenchée'\"\r\n" + 
           "\r\n" + 
           "  323        } else {\r\n" + 
           "  324:         return Promise.reject(new InvalidTemplateException(\"L'URL du media est vide\"));\r\n" + 
           "  325        }\r\n" + 
           "\r\n" + 
           "  361      } else {\r\n" + 
           "  362:       return Promise.reject(new InvalidTemplateException(\"Le texte d'introduction est vide\"));\r\n" + 
           "  363      }\r\n" + 
           "\r\n" + 
           "  387          return Promise.reject(\r\n" + 
           "  388:           new InvalidTemplateException(\"L'action par défaut d'un élément de carrousel doit être de type 'Ouvrir URL'\")\r\n" + 
           "  389          );\r\n" + 
           "\r\n" + 
           "  391      } else {\r\n" + 
           "  392:       return Promise.reject(new InvalidTemplateException('Le carrousel doit contenir entre 2 et 10 éléments'));\r\n" + 
           "  393      }\r\n" + 
           "\r\n" + 
           "  429      } else {\r\n" + 
           "  430:       return Promise.reject(new InvalidTemplateException(\"Le texte d'introduction est vide\"));\r\n" + 
           "  431      }\r\n" + 
           "\r\n" + 
           "  450          return Promise.reject(\r\n" + 
           "  451:           new InvalidTemplateException(\r\n" + 
           "  452              \"L'action par défaut d'un élément de liste doit être de \" +\r\n" + 
           "\r\n" + 
           "  474      } else {\r\n" + 
           "  475:       return Promise.reject(new InvalidTemplateException('La bulle doit contenir entre 2 et 30 éléments'));\r\n" + 
           "  476      }\r\n" + 
           "\r\n" + 
           "src\\features\\template-parser\\google-business-messages\\google-business-messages.service.ts:\r\n" + 
           "   20  \r\n" + 
           "   21: import { InvalidTemplateException } from '../../template-parser/exceptions/invalid-template.exception';\r\n" + 
           "   22  \r\n" + 
           "\r\n" + 
           "   43        return Promise.reject(\r\n" + 
           "   44:         new InvalidTemplateException(\"Ce type de template n'est pas supporté par Business Messages\")\r\n" + 
           "   45        );\r\n" + 
           "\r\n" + 
           "   60      } else {\r\n" + 
           "   61:       return Promise.reject(new InvalidTemplateException('Le champ texte est vide'));\r\n" + 
           "   62      }\r\n" + 
           "\r\n" + 
           "   74      } else {\r\n" + 
           "   75:       return Promise.reject(new InvalidTemplateException(\"Le texte d'introduction est vide\"));\r\n" + 
           "   76      }\r\n" + 
           "\r\n" + 
           "   86      } else {\r\n" + 
           "   87:       return Promise.reject(new InvalidTemplateException('La bulle doit contenir entre 1 et 13 Quick Replies'));\r\n" + 
           "   88      }\r\n" + 
           "\r\n" + 
           "  100      } else {\r\n" + 
           "  101:       return Promise.reject(new InvalidTemplateException(\"Le titre d'une réponse est vide\"));\r\n" + 
           "  102      }\r\n" + 
           "\r\n" + 
           "  126      } else {\r\n" + 
           "  127:       return Promise.reject(new InvalidTemplateException('La bulle doit contenir entre 1 et 13 suggestions'));\r\n" + 
           "  128      }\r\n" + 
           "\r\n" + 
           "  139      } else {\r\n" + 
           "  140:       return Promise.reject(new InvalidTemplateException('Le champ titre du modèle est vide'));\r\n" + 
           "  141      }\r\n" + 
           "\r\n" + 
           "  161      } else if (!isDefaultAction) {\r\n" + 
           "  162:       return Promise.reject(new InvalidTemplateException(\"Le titre d'un bouton est vide\"));\r\n" + 
           "  163      }\r\n" + 
           "\r\n" + 
           "  184        } else {\r\n" + 
           "  185:         return Promise.reject(new InvalidTemplateException(\"L'URL d'un bouton est vide\"));\r\n" + 
           "  186        }\r\n" + 
           "\r\n" + 
           "  197        } else {\r\n" + 
           "  198:         return Promise.reject(new InvalidTemplateException('Le numéro de téléphone du bouton est vide'));\r\n" + 
           "  199        }\r\n" + 
           "\r\n" + 
           "  201        return Promise.reject(\r\n" + 
           "  202:         new InvalidTemplateException(`Les boutons de types login\r\n" + 
           "  203          ne sont pas pris en charge par Business Messages`)\r\n" + 
           "\r\n" + 
           "  213      if (!template.elements && template.elements.length > 1) {\r\n" + 
           "  214:       return Promise.reject(new InvalidTemplateException('Une bulle Media doit contenir 1 seul élément'));\r\n" + 
           "  215      }\r\n" + 
           "\r\n" + 
           "  220      if (mediaType !== 'image' && mediaType !== 'video') {\r\n" + 
           "  221:       return Promise.reject(new InvalidTemplateException(\"Ce type de Media n'est pas géré par Skype\"));\r\n" + 
           "  222      }\r\n" + 
           "  223      if (!mediaUrl) {\r\n" + 
           "  224:       return Promise.reject(new InvalidTemplateException(\"L'URL du media est vide\"));\r\n" + 
           "  225      }\r\n" + 
           "\r\n" + 
           "  267        return Promise.reject(\r\n" + 
           "  268:         new InvalidTemplateException(\"Le format vidéo n'est pas pris en charge par Google Business Messages\")\r\n" + 
           "  269        );\r\n" + 
           "\r\n" + 
           "  283      } else {\r\n" + 
           "  284:       return Promise.reject(new InvalidTemplateException('Une bulle Carrousel doit contenir entre 1 et 10 éléments'));\r\n" + 
           "  285      }\r\n" + 
           "\r\n" + 
           "  312            return Promise.reject(\r\n" + 
           "  313:             new InvalidTemplateException('Un élément de carrousel ou de liste ne peut avoir plus de 4 boutons')\r\n" + 
           "  314            );\r\n" + 
           "\r\n" + 
           "  346        return Promise.reject(\r\n" + 
           "  347:         new InvalidTemplateException(\r\n" + 
           "  348            'Un élément de carrousel ou de liste doit contenir au' + ' moins un sous-titre ou une image en plus du titre'\r\n" + 
           "\r\n" + 
           "src\\features\\template-parser\\skype\\skype.service.ts:\r\n" + 
           "    2  \r\n" + 
           "    3: import { InvalidTemplateException } from '../../template-parser/exceptions/invalid-template.exception';\r\n" + 
           "    4  \r\n" + 
           "\r\n" + 
           "   40      } else {\r\n" + 
           "   41:       return Promise.reject(new InvalidTemplateException(\"Ce type de template n'est pas supporté par Skype\"));\r\n" + 
           "   42      }\r\n" + 
           "\r\n" + 
           "   51      } else {\r\n" + 
           "   52:       return Promise.reject(new InvalidTemplateException('Le champ texte est vide'));\r\n" + 
           "   53      }\r\n" + 
           "\r\n" + 
           "   61      } else {\r\n" + 
           "   62:       return Promise.reject(new InvalidTemplateException(\"Le texte d'introduction est vide\"));\r\n" + 
           "   63      }\r\n" + 
           "\r\n" + 
           "   75      } else {\r\n" + 
           "   76:       return Promise.reject(new InvalidTemplateException('La bulle doit contenir entre 1 et 6 Quick Replies'));\r\n" + 
           "   77      }\r\n" + 
           "\r\n" + 
           "   88      } else {\r\n" + 
           "   89:       return Promise.reject(new InvalidTemplateException(\"Le type d'une réponse n'est pas défini\"));\r\n" + 
           "   90      }\r\n" + 
           "\r\n" + 
           "   97        } else {\r\n" + 
           "   98:         return Promise.reject(new InvalidTemplateException(\"Le titre d'une réponse est vide\"));\r\n" + 
           "   99        }\r\n" + 
           "\r\n" + 
           "  123      } else {\r\n" + 
           "  124:       return Promise.reject(new InvalidTemplateException('La bulle doit contenir entre 1 et 3 boutons'));\r\n" + 
           "  125      }\r\n" + 
           "\r\n" + 
           "  143      } else {\r\n" + 
           "  144:       return Promise.reject(new InvalidTemplateException('Le champ titre du modèle est vide'));\r\n" + 
           "  145      }\r\n" + 
           "\r\n" + 
           "  156      } else if (!isDefaultAction) {\r\n" + 
           "  157:       return Promise.reject(new InvalidTemplateException(\"Le titre d'un bouton est vide\"));\r\n" + 
           "  158      }\r\n" + 
           "\r\n" + 
           "  183        } else {\r\n" + 
           "  184:         return Promise.reject(new InvalidTemplateException(\"L'URL d'un bouton est vide\"));\r\n" + 
           "  185        }\r\n" + 
           "\r\n" + 
           "  187        return Promise.reject(\r\n" + 
           "  188:         new InvalidTemplateException(\"Les boutons de type 'call' se sont pas pris en compte par Skype\")\r\n" + 
           "  189        );\r\n" + 
           "\r\n" + 
           "  191        return Promise.reject(\r\n" + 
           "  192:         new InvalidTemplateException(\"Les boutons de types 'login' ne sont pas pris en charge par Skype\")\r\n" + 
           "  193        );\r\n" + 
           "\r\n" + 
           "  202      if (!template.elements && template.elements.length > 1) {\r\n" + 
           "  203:       return Promise.reject(new InvalidTemplateException('Une bulle Media doit contenir 1 seul élément'));\r\n" + 
           "  204      }\r\n" + 
           "\r\n" + 
           "  209      if (mediaType !== 'image' && mediaType !== 'video') {\r\n" + 
           "  210:       return Promise.reject(new InvalidTemplateException(\"Ce type de Media n'est pas géré par Skype\"));\r\n" + 
           "  211      }\r\n" + 
           "  212      if (!mediaUrl) {\r\n" + 
           "  213:       return Promise.reject(new InvalidTemplateException(\"L'URL du media est vide\"));\r\n" + 
           "  214      }\r\n" + 
           "\r\n" + 
           "  248        if (template.elements[0].buttons && template.elements[0].buttons.length > 0) {\r\n" + 
           "  249:         return Promise.reject(new InvalidTemplateException(\"Les vidéos n'acceptent pas de bouton sur Skype\"));\r\n" + 
           "  250        } else {\r\n" + 
           "\r\n" + 
           "src\\features\\template-parser\\slack\\slack.service.ts:\r\n" + 
           "    4  \r\n" + 
           "    5: import { InvalidTemplateException } from '../../template-parser/exceptions/invalid-template.exception';\r\n" + 
           "    6  import { LoggerService } from '../../../core/logger/logger.service';\r\n" + 
           "\r\n" + 
           "   29      } else {\r\n" + 
           "   30:       return Promise.reject(new InvalidTemplateException(`Modèle de bulle [${template.type}] incompatible avec Slack`));\r\n" + 
           "   31      }\r\n" + 
           "\r\n" + 
           "   42  \r\n" + 
           "   43:     if (!text) return Promise.reject(new InvalidTemplateException('Le champ texte est vide'));\r\n" + 
           "   44  \r\n" + 
           "\r\n" + 
           "   57        return Promise.reject(\r\n" + 
           "   58:         new InvalidTemplateException(\"Une bulle de réponse rapide doit avoir un texte d'introduction\")\r\n" + 
           "   59        );\r\n" + 
           "\r\n" + 
           "   61        return Promise.reject(\r\n" + 
           "   62:         new InvalidTemplateException('Une bulle de réponse rapide doit contenir entre 1 et 5 réponses')\r\n" + 
           "   63        );\r\n" + 
           "\r\n" + 
           "   77      if (!text) {\r\n" + 
           "   78:       return Promise.reject(new InvalidTemplateException(\"Un bouton doit avoir un texte d'introduction\"));\r\n" + 
           "   79      } else if (!buttons || buttons.length < 1 || buttons.length > 3) {\r\n" + 
           "   80:       return Promise.reject(new InvalidTemplateException('Une bulle de boutons doit contenir entre 1 et 3 boutons'));\r\n" + 
           "   81      }\r\n" + 
           "\r\n" + 
           "   95      if (!elements || elements.length !== 1) {\r\n" + 
           "   96:       return Promise.reject(new InvalidTemplateException('Une bulle Media doit contenir 1 seul élément'));\r\n" + 
           "   97      }\r\n" + 
           "\r\n" + 
           "  117      if (!elements || elements.length < 2 || elements.length > 10) {\r\n" + 
           "  118:       return Promise.reject(new InvalidTemplateException('Une bulle Liste doit contenir entre 2 et 10 éléments'));\r\n" + 
           "  119      }\r\n" + 
           "\r\n" + 
           "  176      if (mediaType !== 'image') {\r\n" + 
           "  177:       return Promise.reject(new InvalidTemplateException(\"Slack ne gère que les media de type 'image'\"));\r\n" + 
           "  178:     } else if (!url) return Promise.reject(new InvalidTemplateException('Url de media manquante'));\r\n" + 
           "  179:     else if (url.length > 3000) return Promise.reject(new InvalidTemplateException('Url de media trop longue'));\r\n" + 
           "  180  \r\n" + 
           "\r\n" + 
           "  225      if (contentType && !title) {\r\n" + 
           "  226:       return Promise.reject(new InvalidTemplateException('Les réponses rapides doivent avoir un titre'));\r\n" + 
           "  227      } else if (type && !title) {\r\n" + 
           "  228:       return Promise.reject(new InvalidTemplateException('Les boutons doivent avoir un titre'));\r\n" + 
           "  229      } else if (contentType && contentType !== 'text') {\r\n" + 
           "  230:       return Promise.reject(new InvalidTemplateException(\"Les réponses rapides doivent être de type 'text'\"));\r\n" + 
           "  231      } else if (contentType && !targetNode) {\r\n" + 
           "  232:       return Promise.reject(new InvalidTemplateException('Les réponses rapides doivent avoir une bulle cible'));\r\n" + 
           "  233      } else if (type && type !== 'postback' && type !== 'url') {\r\n" + 
           "  234        return Promise.reject(\r\n" + 
           "  235:         new InvalidTemplateException(\"Les boutons doivent être de type 'Bulle déclenchée' ou 'Web url'\")\r\n" + 
           "  236        );\r\n" + 
           "\r\n" + 
           "  238        return Promise.reject(\r\n" + 
           "  239:         new InvalidTemplateException(\"Les boutons de type 'Bulle déclenchée' doivent avoir une bulle cible\")\r\n" + 
           "  240        );\r\n" + 
           "  241      } else if (type === 'url' && !url) {\r\n" + 
           "  242:       return Promise.reject(new InvalidTemplateException(\"Les boutons de type 'Web url' doivent avoir une url\"));\r\n" + 
           "  243      }\r\n" + 
           "\r\n" + 
           "  258        const value = JSON.stringify(payload);\r\n" + 
           "  259:       if (value.length > 2000) return Promise.reject(new InvalidTemplateException('Payload trop longue'));\r\n" + 
           "  260        button = { ...button, value };\r\n" + 
           "\r\n" + 
           "  272      if (!title) {\r\n" + 
           "  273:       return Promise.reject(new InvalidTemplateException('Un élément de liste doit avoir un titre'));\r\n" + 
           "  274      }\r\n" + 
           "\r\n" + 
           "src\\features\\template-parser\\smooch\\smooch.service.ts:\r\n" + 
           "   22  \r\n" + 
           "   23: import { InvalidTemplateException } from '../../template-parser/exceptions/invalid-template.exception';\r\n" + 
           "   24  import { LoggerService } from '../../../core/logger/logger.service';\r\n" + 
           "\r\n" + 
           "  123      } else {\r\n" + 
           "  124:       return Promise.reject(new InvalidTemplateException('Le champ texte est vide'));\r\n" + 
           "  125      }\r\n" + 
           "\r\n" + 
           "  133      } else {\r\n" + 
           "  134:       return Promise.reject(new InvalidTemplateException(\"Le texte d'introduction est vide\"));\r\n" + 
           "  135      }\r\n" + 
           "\r\n" + 
           "  145      } else {\r\n" + 
           "  146:       return Promise.reject(new InvalidTemplateException('La bulle doit contenir entre 1 et 11 Quick Replies'));\r\n" + 
           "  147      }\r\n" + 
           "\r\n" + 
           "  155      } else {\r\n" + 
           "  156:       return Promise.reject(new InvalidTemplateException('Le champ titre du modèle est vide'));\r\n" + 
           "  157      }\r\n" + 
           "\r\n" + 
           "  165      } else {\r\n" + 
           "  166:       return Promise.reject(new InvalidTemplateException('La bulle doit contenir entre 1 et 3 boutons'));\r\n" + 
           "  167      }\r\n" + 
           "\r\n" + 
           "  189      } else {\r\n" + 
           "  190:       return Promise.reject(new InvalidTemplateException('Une bulle Media doit contenir 1 seul élément'));\r\n" + 
           "  191      }\r\n" + 
           "\r\n" + 
           "  213      } else {\r\n" + 
           "  214:       return Promise.reject(new InvalidTemplateException('Une bulle Liste doit contenir entre 2 et 4 éléments'));\r\n" + 
           "  215      }\r\n" + 
           "\r\n" + 
           "  224        } else {\r\n" + 
           "  225:         return Promise.reject(new InvalidTemplateException(\"Une bulle Liste ne peut contenir qu'un seul bouton\"));\r\n" + 
           "  226        }\r\n" + 
           "\r\n" + 
           "  250      } else {\r\n" + 
           "  251:       return Promise.reject(new InvalidTemplateException('Une bulle Carrousel doit contenir entre 1 et 10 éléments'));\r\n" + 
           "  252      }\r\n" + 
           "\r\n" + 
           "  272      } else {\r\n" + 
           "  273:       return Promise.reject(new InvalidTemplateException('Le champ \"Nom du client\" est vide'));\r\n" + 
           "  274      }\r\n" + 
           "\r\n" + 
           "  280      } else {\r\n" + 
           "  281:       return Promise.reject(new InvalidTemplateException('Le champ \"Numéro de commande\" est vide'));\r\n" + 
           "  282      }\r\n" + 
           "\r\n" + 
           "  288      } else {\r\n" + 
           "  289:       return Promise.reject(new InvalidTemplateException('Le champ \"Devise\" est vide'));\r\n" + 
           "  290      }\r\n" + 
           "\r\n" + 
           "  296      } else {\r\n" + 
           "  297:       return Promise.reject(new InvalidTemplateException('Le champ \"Méthode de paiement\" est vide'));\r\n" + 
           "  298      }\r\n" + 
           "\r\n" + 
           "  319        } else {\r\n" + 
           "  320:         return Promise.reject(new InvalidTemplateException('Le champ \"Adresse\" est vide'));\r\n" + 
           "  321        }\r\n" + 
           "\r\n" + 
           "  325        } else {\r\n" + 
           "  326:         return Promise.reject(new InvalidTemplateException('Le champ \"Ville\" est vide'));\r\n" + 
           "  327        }\r\n" + 
           "\r\n" + 
           "  330        } else {\r\n" + 
           "  331:         return Promise.reject(new InvalidTemplateException('Le champ \"Code postal\" est vide'));\r\n" + 
           "  332        }\r\n" + 
           "\r\n" + 
           "  335        } else {\r\n" + 
           "  336:         return Promise.reject(new InvalidTemplateException('Le champ \"Etat/Région\" est vide'));\r\n" + 
           "  337        }\r\n" + 
           "\r\n" + 
           "  340        } else {\r\n" + 
           "  341:         return Promise.reject(new InvalidTemplateException('Le champ \"Pays\" est vide'));\r\n" + 
           "  342        }\r\n" + 
           "\r\n" + 
           "  361        } else {\r\n" + 
           "  362:         return Promise.reject(new InvalidTemplateException('Le champ \"Coût total\" est vide'));\r\n" + 
           "  363        }\r\n" + 
           "\r\n" + 
           "  368      } else {\r\n" + 
           "  369:       return Promise.reject(new InvalidTemplateException('Le champ \"Coût total\" est vide'));\r\n" + 
           "  370      }\r\n" + 
           "\r\n" + 
           "  389        } else {\r\n" + 
           "  390:         return Promise.reject(new InvalidTemplateException('Une transaction ne peut contenir plus de 100 articles'));\r\n" + 
           "  391        }\r\n" + 
           "\r\n" + 
           "  414      } else {\r\n" + 
           "  415:       return Promise.reject(new InvalidTemplateException('Une bulle Open Graph doit contenir 1 seul élément'));\r\n" + 
           "  416      }\r\n" + 
           "\r\n" + 
           "  436      } else {\r\n" + 
           "  437:       return Promise.reject(new InvalidTemplateException(\"Le type d'une réponse n'est pas défini\"));\r\n" + 
           "  438      }\r\n" + 
           "\r\n" + 
           "  445        } else {\r\n" + 
           "  446:         return Promise.reject(new InvalidTemplateException(\"Le titre d'une réponse est vide\"));\r\n" + 
           "  447        }\r\n" + 
           "\r\n" + 
           "  481        } else if (!isDefaultAction) {\r\n" + 
           "  482:         return Promise.reject(new InvalidTemplateException(\"Le titre d'un bouton est vide\"));\r\n" + 
           "  483        }\r\n" + 
           "\r\n" + 
           "  515          } else {\r\n" + 
           "  516:           return Promise.reject(new InvalidTemplateException(\"L'URL d'un bouton est vide\"));\r\n" + 
           "  517          }\r\n" + 
           "\r\n" + 
           "  541            return Promise.reject(\r\n" + 
           "  542:             new InvalidTemplateException(\"Le bouton d'appel n'a pas de numéro de téléphone associé\")\r\n" + 
           "  543            );\r\n" + 
           "\r\n" + 
           "  553      if (element.mediaType !== 'image' && element.mediaType !== 'video') {\r\n" + 
           "  554:       return Promise.reject(new InvalidTemplateException(\"Ce type de Media n'est pas géré par Facebook\"));\r\n" + 
           "  555      } else {\r\n" + 
           "\r\n" + 
           "  570      } else {\r\n" + 
           "  571:       return Promise.reject(new InvalidTemplateException(\"L'URL du media est vide\"));\r\n" + 
           "  572      }*/\r\n" + 
           "\r\n" + 
           "  581        } else {\r\n" + 
           "  582:         return Promise.reject(new InvalidTemplateException(\"Une bulle Media ne peut contenir qu'un seul bouton\"));\r\n" + 
           "  583        }\r\n" + 
           "\r\n" + 
           "  598          return Promise.reject(\r\n" + 
           "  599:           new InvalidTemplateException(\r\n" + 
           "  600              'Un élément de carrousel ou de liste doit contenir au' +\r\n" + 
           "\r\n" + 
           "  610      } else {\r\n" + 
           "  611:       return Promise.reject(new InvalidTemplateException(\"Le champ Titre d'un élément est vide\"));\r\n" + 
           "  612      }\r\n" + 
           "\r\n" + 
           "  627          return Promise.reject(\r\n" + 
           "  628:           new InvalidTemplateException('L\\'action par défaut des éléments doit être vide ou de type \"Ouvrir URL\"')\r\n" + 
           "  629          );\r\n" + 
           "\r\n" + 
           "  631          return Promise.reject(\r\n" + 
           "  632:           new InvalidTemplateException(\"Le champ URL de l'action par défaut d'un des éléments est vide\")\r\n" + 
           "  633          );\r\n" + 
           "\r\n" + 
           "  652          return Promise.reject(\r\n" + 
           "  653:           new InvalidTemplateException('Un élément de carrousel ou de liste ne peut avoir plus de 3 boutons')\r\n" + 
           "  654          );\r\n" + 
           "\r\n" + 
           "  667      } else {\r\n" + 
           "  668:       return Promise.reject(new InvalidTemplateException('Un article de transaction doit avoir un titre'));\r\n" + 
           "  669      }\r\n" + 
           "\r\n" + 
           "  687      } else {\r\n" + 
           "  688:       return Promise.reject(new InvalidTemplateException('Un article de transaction doit avoir un prix'));\r\n" + 
           "  689      }\r\n" + 
           "\r\n" + 
           "  712      } else {\r\n" + 
           "  713:       return Promise.reject(new InvalidTemplateException(\"Le champ URL de l'élément Open Graph est vide\"));\r\n" + 
           "  714      }\r\n" + 
           "\r\n" + 
           "  723        } else {\r\n" + 
           "  724:         return Promise.reject(new InvalidTemplateException('Une bulle Open Graph ne peut avoir plus de 3 boutons'));\r\n" + 
           "  725        }\r\n" + 
           "\r\n" + 
           "src\\features\\template-parser\\twilio-voice\\twilio-voice.service.ts:\r\n" + 
           "   4  \r\n" + 
           "   5: import { InvalidTemplateException } from '../../template-parser/exceptions/invalid-template.exception';\r\n" + 
           "   6  \r\n" + 
           "\r\n" + 
           "  29      } else {\r\n" + 
           "  30:       return Promise.reject(new InvalidTemplateException('Le champ texte est vide'));\r\n" + 
           "  31      }\r\n" + 
           "\r\n" + 
           "src\\features\\template-parser\\whatsapp\\whatsapp.service.ts:\r\n" + 
           "  11  \r\n" + 
           "  12: import { InvalidTemplateException } from '../../template-parser/exceptions/invalid-template.exception';\r\n" + 
           "  13  \r\n" + 
           "\r\n" + 
           "  27      } else {\r\n" + 
           "  28:       return Promise.reject(new InvalidTemplateException(\"Ce type de template n'est pas supporté par Whatsapp\"));\r\n" + 
           "  29      }\r\n" + 
           "\r\n" + 
           "  38      } else {\r\n" + 
           "  39:       return Promise.reject(new InvalidTemplateException('Le champ texte est vide'));\r\n" + 
           "  40      }\r\n" + 
           "\r\n" + 
           "  47      if (!template.elements && template.elements.length > 1) {\r\n" + 
           "  48:       return Promise.reject(new InvalidTemplateException('Une bulle Media doit contenir 1 seul élément'));\r\n" + 
           "  49      }\r\n" + 
           "\r\n" + 
           "  54      if (mediaType !== 'image') {\r\n" + 
           "  55:       return Promise.reject(new InvalidTemplateException(\"Ce type de Media n'est pas géré par Whatsapp\"));\r\n" + 
           "  56      }\r\n" + 
           "  57      if (!mediaUrl) {\r\n" + 
           "  58:       return Promise.reject(new InvalidTemplateException(\"L'URL du media est vide\"));\r\n" + 
           "  59      }\r\n" + 
           "\r\n" + 
           "src\\features\\webhooks\\api\\api.service.ts:\r\n" + 
           "   2  import { Context } from '../../../core/context.entity';\r\n" + 
           "   3: import { DoNothingException } from '../../../core/exceptions/do-nothing.exception';\r\n" + 
           "   4  import { DataProcessorService } from '../../../features/data-processor/data-processor.service';\r\n" + 
           "\r\n" + 
           "  43        .catch(error => {\r\n" + 
           "  44:         if (error instanceof DoNothingException) res.sendStatus(200);\r\n" + 
           "  45          else next(error);\r\n" + 
           "\r\n" + 
           "src\\features\\webhooks\\exceptions\\empty-request.exception.ts:\r\n" + 
           "  1: import { UnprocessableEntityException } from '@nestjs/common';\r\n" + 
           "  2  \r\n" + 
           "  3: export class EmptyRequestException extends UnprocessableEntityException {\r\n" + 
           "  4    constructor() {\r\n" + 
           "\r\n" + 
           "src\\features\\webhooks\\exceptions\\not-deployed-bot.exception.ts:\r\n" + 
           "  1: import { UnprocessableEntityException } from '@nestjs/common';\r\n" + 
           "  2  \r\n" + 
           "\r\n" + 
           "  4  \r\n" + 
           "  5: export class NotDeployedBotException extends UnprocessableEntityException {\r\n" + 
           "  6    constructor(channel: Channel) {\r\n" + 
           "\r\n" + 
           "src\\features\\webhooks\\google\\google.controller.ts:\r\n" + 
           "   6  import { Context } from '../../../core/context.entity';\r\n" + 
           "   7: import { DoNothingException } from '../../../core/exceptions/do-nothing.exception';\r\n" + 
           "   8  import { ConversationsService } from '../../../resources/conversations/conversations.service';\r\n" + 
           "\r\n" + 
           "  42        .catch(error => {\r\n" + 
           "  43:         if (error instanceof DoNothingException) res.sendStatus(200);\r\n" + 
           "  44          else next(error);\r\n" + 
           "\r\n" + 
           "src\\features\\webhooks\\google\\google.service.ts:\r\n" + 
           "   9  import { LoggerService } from '../../../core/logger/logger.service';\r\n" + 
           "  10: import { DoNothingException } from '../../../core/exceptions/do-nothing.exception';\r\n" + 
           "  11  import { DataProcessorService } from '../../../features/data-processor/data-processor.service';\r\n" + 
           "\r\n" + 
           "  45  \r\n" + 
           "  46:     if (!newContext.message) throw new DoNothingException();\r\n" + 
           "  47  \r\n" + 
           "\r\n" + 
           "src\\features\\webhooks\\google-business-messages\\google-business-messages.controller.ts:\r\n" + 
           "   6  import { LoggerService } from '../../../core/logger/logger.service';\r\n" + 
           "   7: import { DoNothingException } from '../../../core/exceptions/do-nothing.exception';\r\n" + 
           "   8  import { ConversationsService } from '../../../resources/conversations/conversations.service';\r\n" + 
           "\r\n" + 
           "  41        .catch(error => {\r\n" + 
           "  42:         if (error instanceof DoNothingException) res.sendStatus(200);\r\n" + 
           "  43          else next(error);\r\n" + 
           "\r\n" + 
           "src\\features\\webhooks\\google-business-messages\\google-business-messages.service.ts:\r\n" + 
           "   7  import { DataProcessorService } from '../../../features/data-processor/data-processor.service';\r\n" + 
           "   8: import { DoNothingException } from '../../../core/exceptions/do-nothing.exception';\r\n" + 
           "   9  import { MessageSenderRepository } from '../../message-sender/message-sender.repository';\r\n" + 
           "\r\n" + 
           "  33      if (googleSignature !== generatedSignature) {\r\n" + 
           "  34:       throw Promise.reject(new DoNothingException('Signature mismatch'));\r\n" + 
           "  35      }\r\n" + 
           "\r\n" + 
           "  73        return new Promise((resolve, reject) => {\r\n" + 
           "  74:         if (!text) reject(new DoNothingException('Empty text'));\r\n" + 
           "  75          newContext.message = new IncomingMessage({ type: 'text', text });\r\n" + 
           "\r\n" + 
           "src\\features\\webhooks\\skype\\skype.controller.ts:\r\n" + 
           "   6  import { LoggerService } from '../../../core/logger/logger.service';\r\n" + 
           "   7: import { DoNothingException } from '../../../core/exceptions/do-nothing.exception';\r\n" + 
           "   8  import { ConversationsService } from '../../../resources/conversations/conversations.service';\r\n" + 
           "\r\n" + 
           "  46        .catch(error => {\r\n" + 
           "  47:         if (error instanceof DoNothingException) res.sendStatus(200);\r\n" + 
           "  48          else next(error);\r\n" + 
           "\r\n" + 
           "src\\features\\webhooks\\skype\\skype.service.ts:\r\n" + 
           "   8  import { DataProcessorService } from '../../../features/data-processor/data-processor.service';\r\n" + 
           "   9: import { DoNothingException } from '../../../core/exceptions/do-nothing.exception';\r\n" + 
           "  10  import { MessageSenderRepository } from '../../message-sender/message-sender.repository';\r\n" + 
           "\r\n" + 
           "  47        return new Promise((resolve, reject) => {\r\n" + 
           "  48:         if (!text) reject(new DoNothingException('Empty text'));\r\n" + 
           "  49          newContext.message = new IncomingMessage({ type: 'text', text });\r\n" + 
           "\r\n" + 
           "src\\features\\webhooks\\slack\\slack.controller.ts:\r\n" + 
           "   4  import { SlackService } from './slack.service';\r\n" + 
           "   5: import { EmptyRequestException } from '../exceptions/empty-request.exception';\r\n" + 
           "   6  import { LoggerService } from '../../../core/logger/logger.service';\r\n" + 
           "   7  import { Context } from '../../../core/context.entity';\r\n" + 
           "   8: import { DoNothingException } from '../../../core/exceptions/do-nothing.exception';\r\n" + 
           "   9  import { ConversationsService } from '../../../resources/conversations/conversations.service';\r\n" + 
           "\r\n" + 
           "  32      // Slack requires that we do not respond to empty requests\r\n" + 
           "  33:     if (!req.body || Object.keys(req.body).length === 0) throw new EmptyRequestException();\r\n" + 
           "  34  \r\n" + 
           "\r\n" + 
           "  53          .catch(error => {\r\n" + 
           "  54:           if (error instanceof DoNothingException) res.sendStatus(200);\r\n" + 
           "  55            else next(error);\r\n" + 
           "\r\n" + 
           "src\\features\\webhooks\\slack\\slack.repository.ts:\r\n" + 
           "   2  \r\n" + 
           "   3: import { NotConnectedBotException } from './exceptions/not-connected-bot.exception';\r\n" + 
           "   4  import { FirebaseRef, FirebaseSnap } from '../../../core/providers/firebase-db.provider';\r\n" + 
           "\r\n" + 
           "  37          if (botId) return botId;\r\n" + 
           "  38:         else throw new NotConnectedBotException();\r\n" + 
           "  39        });\r\n" + 
           "\r\n" + 
           "src\\features\\webhooks\\slack\\slack.service.ts:\r\n" + 
           "    7  import { SlackRepository } from './slack.repository';\r\n" + 
           "    8: import { MissingSigningSecretException } from './exceptions/missing-signing-secret.exception';\r\n" + 
           "    9: import { RequestSigningException } from './exceptions/request-signing.exception';\r\n" + 
           "   10  import { Context } from '../../../core/context.entity';\r\n" + 
           "   11  import { ConversationsRepository } from '../../../resources/conversations/conversations.repository';\r\n" + 
           "   12: import { DoNothingException } from '../../../core/exceptions/do-nothing.exception';\r\n" + 
           "   13  import { LoggerService } from '../../../core/logger/logger.service';\r\n" + 
           "\r\n" + 
           "  104    filterEmptyRequests(message: IncomingMessage, body: any, context: Context) {\r\n" + 
           "  105:     if (!message) throw new DoNothingException();\r\n" + 
           "  106      else if (get(body, 'event.type') === 'app_home_opened') {\r\n" + 
           "\r\n" + 
           "  110        return this.conversationsRepository.checkIfConversationExists(context).then(convExists => {\r\n" + 
           "  111:         if (convExists) throw new DoNothingException();\r\n" + 
           "  112        });\r\n" + 
           "\r\n" + 
           "  133            return;\r\n" + 
           "  134:         } else throw new RequestSigningException();\r\n" + 
           "  135        } else {\r\n" + 
           "  136          res.sendStatus(200);\r\n" + 
           "  137:         throw new MissingSigningSecretException();\r\n" + 
           "  138        }\r\n" + 
           "\r\n" + 
           "src\\features\\webhooks\\slack\\exceptions\\missing-signing-secret.exception.ts:\r\n" + 
           "  1: import { UnauthorizedException } from '@nestjs/common';\r\n" + 
           "  2  \r\n" + 
           "  3: export class MissingSigningSecretException extends UnauthorizedException {\r\n" + 
           "  4    constructor() {\r\n" + 
           "\r\n" + 
           "src\\features\\webhooks\\slack\\exceptions\\not-connected-bot.exception.ts:\r\n" + 
           "  1: import { UnprocessableEntityException } from '@nestjs/common';\r\n" + 
           "  2  \r\n" + 
           "  3: export class NotConnectedBotException extends UnprocessableEntityException {\r\n" + 
           "  4    constructor() {\r\n" + 
           "\r\n" + 
           "src\\features\\webhooks\\slack\\exceptions\\request-signing.exception.ts:\r\n" + 
           "  1: import { UnauthorizedException } from '@nestjs/common';\r\n" + 
           "  2  \r\n" + 
           "  3: export class RequestSigningException extends UnauthorizedException {\r\n" + 
           "  4    constructor() {\r\n" + 
           "\r\n" + 
           "src\\features\\webhooks\\twilio-voice\\twilio-voice.controller.ts:\r\n" + 
           "   7  import { LoggerService } from '../../../core/logger/logger.service';\r\n" + 
           "   8: import { DoNothingException } from '../../../core/exceptions/do-nothing.exception';\r\n" + 
           "   9  import { ConversationsService } from '../../../resources/conversations/conversations.service';\r\n" + 
           "\r\n" + 
           "  43        .catch(error => {\r\n" + 
           "  44:         if (error instanceof DoNothingException) res.sendStatus(200);\r\n" + 
           "  45          else next(error);\r\n" + 
           "\r\n" + 
           "src\\features\\webhooks\\twilio-voice\\twilio-voice.service.ts:\r\n" + 
           "   6  import { DataProcessorService } from '../../../features/data-processor/data-processor.service';\r\n" + 
           "   7: import { DoNothingException } from '../../../core/exceptions/do-nothing.exception';\r\n" + 
           "   8  \r\n" + 
           "\r\n" + 
           "  21  \r\n" + 
           "  22:       if (!text) reject(new DoNothingException('Empty text'));\r\n" + 
           "  23  \r\n" + 
           "\r\n" + 
           "src\\features\\webhooks\\whatsapp\\whatsapp.controller.ts:\r\n" + 
           "   7  import { LoggerService } from '../../../core/logger/logger.service';\r\n" + 
           "   8: import { DoNothingException } from '../../../core/exceptions/do-nothing.exception';\r\n" + 
           "   9  import { ConversationsService } from '../../../resources/conversations/conversations.service';\r\n" + 
           "\r\n" + 
           "  42        .catch(error => {\r\n" + 
           "  43:         if (error instanceof DoNothingException) res.sendStatus(200);\r\n" + 
           "  44          else next(error);\r\n" + 
           "\r\n" + 
           "src\\features\\webhooks\\whatsapp\\whatsapp.service.ts:\r\n" + 
           "   8  import { DataProcessorService } from '../../../features/data-processor/data-processor.service';\r\n" + 
           "   9: import { DoNothingException } from '../../../core/exceptions/do-nothing.exception';\r\n" + 
           "  10  import { MessageSenderRepository } from '../../message-sender/message-sender.repository';\r\n" + 
           "\r\n" + 
           "  47        return new Promise((resolve, reject) => {\r\n" + 
           "  48:         if (!text) reject(new DoNothingException('Empty text'));\r\n" + 
           "  49          newContext.message = new IncomingMessage({ type: 'text', text });\r\n" + 
           "\r\n" + 
           "src\\resources\\bots\\bots.controller.ts:\r\n" + 
           "  3  import { Response } from 'express';\r\n" + 
           "  4: import { InvalidBotTokenException } from './exceptions/invalid-bot-token.exception';\r\n" + 
           "  5  \r\n" + 
           "\r\n" + 
           "src\\resources\\bots\\bots.service.ts:\r\n" + 
           "   3  import { BotsRepository } from './bots.repository';\r\n" + 
           "   4: import { InvalidBotTokenException } from './exceptions/invalid-bot-token.exception';\r\n" + 
           "   5  import { LoggerService } from '../../core/logger/logger.service';\r\n" + 
           "\r\n" + 
           "  15  \r\n" + 
           "  16:     if (typeof token !== 'string' || !token) throw new InvalidBotTokenException();\r\n" + 
           "  17  \r\n" + 
           "\r\n" + 
           "  20      return this.botRepository.getBotToken(botId).then((botToken: string) => {\r\n" + 
           "  21:       if (botToken !== parsedToken) throw new InvalidBotTokenException();\r\n" + 
           "  22      });\r\n" + 
           "\r\n" + 
           "src\\resources\\bots\\exceptions\\bot-not-found.exception.ts:\r\n" + 
           "  1: import { NotFoundException } from '@nestjs/common';\r\n" + 
           "  2  \r\n" + 
           "  3: export class BotNotFoundException extends NotFoundException {\r\n" + 
           "  4    constructor(botId: string) {\r\n" + 
           "\r\n" + 
           "src\\resources\\bots\\exceptions\\invalid-bot-token.exception.ts:\r\n" + 
           "  1: import { UnauthorizedException } from '@nestjs/common';\r\n" + 
           "  2  \r\n" + 
           "  3: export class InvalidBotTokenException extends UnauthorizedException {}\r\n" + 
           "\r\n" + 
           "src\\resources\\conversations\\conversations.controller.ts:\r\n" + 
           "    1: import { Controller, Post, Res, Next, Param, Body, BadRequestException } from '@nestjs/common';\r\n" + 
           "    2  import { Response, NextFunction } from 'express';\r\n" + 
           "\r\n" + 
           "  125      });\r\n" + 
           "  126:     if (!botId || !context.conversationId || !message) throw new BadRequestException();\r\n" + 
           "  127  \r\n" + 
           "\r\n" + 
           "src\\resources\\conversations\\exceptions\\invalid-conversation-path.exception.ts:\r\n" + 
           "  1: import { UnprocessableEntityException } from '@nestjs/common';\r\n" + 
           "  2  \r\n" + 
           "  3: export class InvalidConversationPathException extends UnprocessableEntityException {}\r\n" + 
           "\r\n" + 
           "src\\resources\\messages\\messages.controller.ts:\r\n" + 
           "   1: import { Controller, Post, Req, Res, Next, Param, BadRequestException, Body, Get } from '@nestjs/common';\r\n" + 
           "   2  import { Request, Response, NextFunction } from 'express';\r\n" + 
           "\r\n" + 
           "  40        res.redirect(307, `/facebook/receive-message?body=${encodeURI(JSON.stringify(req.query))}`);\r\n" + 
           "  41:     } else throw new BadRequestException();\r\n" + 
           "  42    }\r\n" + 
           "\r\n" + 
           "  84      } else {\r\n" + 
           "  85:       throw new BadRequestException();\r\n" + 
           "  86      }\r\n" + 
           "\r\n" + 
           "src\\resources\\messages\\messages.service.ts:\r\n" + 
           "  14  import { MessagesRepository } from './messages.repository';\r\n" + 
           "  15: import { BotNotFoundException } from '../bots/exceptions/bot-not-found.exception';\r\n" + 
           "  16: import { NodeNotFoundException } from '../nodes/exceptions/node-not-found.exception';\r\n" + 
           "  17  \r\n" + 
           "\r\n" + 
           "  65        .catch((error: any) => {\r\n" + 
           "  66:         if (error instanceof BotNotFoundException) {\r\n" + 
           "  67            delete context.message;\r\n" + 
           "\r\n" + 
           "  69            return this.nodesService.handleNode(context, node);\r\n" + 
           "  70:         } else if (error instanceof NodeNotFoundException) {\r\n" + 
           "  71            delete context.message;\r\n" + 
           "\r\n" + 
           "src\\resources\\nodes\\nodes.controller.ts:\r\n" + 
           "  1: import { Controller, Post, Req, Res, Next, Param, BadRequestException, Body, Get, Query } from '@nestjs/common';\r\n" + 
           "  2  import { Request, Response, NextFunction } from 'express';\r\n" + 
           "\r\n" + 
           "src\\resources\\nodes\\nodes.repository.ts:\r\n" + 
           "   5  \r\n" + 
           "   6: import { NodeNotFoundException } from './exceptions/node-not-found.exception';\r\n" + 
           "   7: import { BotNotFoundException } from '../bots/exceptions/bot-not-found.exception';\r\n" + 
           "   8  import { FirebaseRef, FirebaseSnap } from '../../core/providers/firebase-db.provider';\r\n" + 
           "\r\n" + 
           "  75          if (!snap.exists()) {\r\n" + 
           "  76:           throw nodeId === 'noeud_0' ? new BotNotFoundException(botId) : new NodeNotFoundException(nodeId);\r\n" + 
           "  77          }\r\n" + 
           "\r\n" + 
           "  87          if (!snap.exists()) {\r\n" + 
           "  88:           throw new BotNotFoundException(botId);\r\n" + 
           "  89          }\r\n" + 
           "\r\n" + 
           "src\\resources\\nodes\\nodes.service.ts:\r\n" + 
           "    8  import { LoggerService } from '../../core/logger/logger.service';\r\n" + 
           "    9: import { NodeNotFoundException } from './exceptions/node-not-found.exception';\r\n" + 
           "   10  import { NodesRepository } from './nodes.repository';\r\n" + 
           "   11: import { BotNotFoundException } from '../bots/exceptions/bot-not-found.exception';\r\n" + 
           "   12: import { InvalidDynamicTemplateException } from './node-template/exceptions/invalid-dynamic-template.exception';\r\n" + 
           "   13  import { EmulatedMessagesService } from '../../features/emulated-messages/emulated-messages.service';\r\n" + 
           "\r\n" + 
           "   16  import { MappingSwitchService } from './node-mapping/mapping-switch/mapping-switch.service';\r\n" + 
           "   17: import { InfiniteLoopException } from './exceptions/infinite-loop.exception';\r\n" + 
           "   18  import { BackgroundActionsService } from '../../features/background-actions/background-actions.service';\r\n" + 
           "\r\n" + 
           "  108            .catch((error: any) => {\r\n" + 
           "  109:             if (error instanceof InvalidDynamicTemplateException && error.fallbackNode) {\r\n" + 
           "  110                return this.moveTo(context, node, error.fallbackNode);\r\n" + 
           "\r\n" + 
           "  152            // if using an alias and no valid key is found for the targetNode\r\n" + 
           "  153:           return Promise.reject(new NodeNotFoundException());\r\n" + 
           "  154          } else if (finalNode.toLowerCase() === 'none') {\r\n" + 
           "\r\n" + 
           "  174            return Promise.resolve();\r\n" + 
           "  175:         } else if (error instanceof BotNotFoundException) {\r\n" + 
           "  176            delete context.message;\r\n" + 
           "\r\n" + 
           "  178            return this.handleNode(context, node);\r\n" + 
           "  179:         } else if (error instanceof NodeNotFoundException) {\r\n" + 
           "  180            delete context.message;\r\n" + 
           "\r\n" + 
           "  276          } else {\r\n" + 
           "  277:           throw new InfiniteLoopException('Current node sequence caused an infinite loop');\r\n" + 
           "  278          }\r\n" + 
           "\r\n" + 
           "src\\resources\\nodes\\exceptions\\infinite-loop.exception.ts:\r\n" + 
           "  1: import { UnprocessableEntityException } from '@nestjs/common';\r\n" + 
           "  2  \r\n" + 
           "  3: export class InfiniteLoopException extends UnprocessableEntityException {\r\n" + 
           "  4    constructor(message = 'Infinite loop') {\r\n" + 
           "\r\n" + 
           "src\\resources\\nodes\\exceptions\\node-not-found.exception.ts:\r\n" + 
           "  1: import { NotFoundException } from '@nestjs/common';\r\n" + 
           "  2  \r\n" + 
           "  3: export class NodeNotFoundException extends NotFoundException {\r\n" + 
           "  4    constructor(nodeId?: string) {\r\n" + 
           "\r\n" + 
           "src\\resources\\nodes\\node-mapping\\mapping-data-input\\mapping-data-input.service.ts:\r\n" + 
           "   19  import { DataProcessorService } from './../../../../features/data-processor/data-processor.service';\r\n" + 
           "   20: import { FormatCheckFailureException } from './exceptions/format-check-failure.exception';\r\n" + 
           "   21  import { LoggerService } from '../../../../core/logger/logger.service';\r\n" + 
           "\r\n" + 
           "  105        .catch((error: any) => {\r\n" + 
           "  106:         if (error instanceof FormatCheckFailureException && targetNodeIfCheckFails) {\r\n" + 
           "  107            return targetNodeIfCheckFails;\r\n" + 
           "\r\n" + 
           "  153      } else {\r\n" + 
           "  154:       throw new FormatCheckFailureException(formatCheck);\r\n" + 
           "  155      }\r\n" + 
           "\r\n" + 
           "src\\resources\\nodes\\node-mapping\\mapping-data-input\\exceptions\\format-check-failure.exception.ts:\r\n" + 
           "  1: import { UnprocessableEntityException } from '@nestjs/common';\r\n" + 
           "  2  \r\n" + 
           "  3: export class FormatCheckFailureException extends UnprocessableEntityException {\r\n" + 
           "  4    constructor(type: string) {\r\n" + 
           "\r\n" + 
           "src\\resources\\nodes\\node-mapping\\mapping-go-to-node\\mapping-go-to-node.service.ts:\r\n" + 
           "   5  \r\n" + 
           "   6: import { InfiniteLoopException } from '../../exceptions/infinite-loop.exception';\r\n" + 
           "   7  import { Context } from '../../../../core/context.entity';\r\n" + 
           "\r\n" + 
           "  29          ? targetNode\r\n" + 
           "  30:         : Promise.reject(new InfiniteLoopException('node ' + currentNode.name + ' generates an infinite loop.'))\r\n" + 
           "  31      );\r\n" + 
           "\r\n" + 
           "src\\resources\\nodes\\node-mapping\\mapping-switch\\mapping-switch.service.ts:\r\n" + 
           "   16  import { DataProcessorService } from './../../../../features/data-processor/data-processor.service';\r\n" + 
           "   17: import { InvalidApiConfigException } from './exceptions/invalid-api-config.exception';\r\n" + 
           "   18: import { InvalidApiMappingException } from './exceptions/invalid-api-mapping.exception';\r\n" + 
           "   19: import { ApiRequestFailureException } from './exceptions/api-request-failure.exception';\r\n" + 
           "   20: import { InfiniteLoopException } from '../../exceptions/infinite-loop.exception';\r\n" + 
           "   21  import { LoggerService } from '../../../../core/logger/logger.service';\r\n" + 
           "\r\n" + 
           "   24  import { DataOperationsService } from '../../../../features/data-operations/data-operations.service';\r\n" + 
           "   25: import { InvalidDataValueException } from '../../../../features/data-processor/exceptions/invalid-data-value.exception';\r\n" + 
           "   26: import { InvalidOperationsConfigException } from './exceptions/invalid-operations-config.exception';\r\n" + 
           "   27  \r\n" + 
           "\r\n" + 
           "   50      if (!sendToExternalApi || !sendToExternalApi.options) {\r\n" + 
           "   51:       throw new InvalidApiConfigException(`A parameter is missing in the API bubble -> ${currentNode.name}`);\r\n" + 
           "   52      }\r\n" + 
           "\r\n" + 
           "   76        .then(([headers, url, body, data]: [string, string, any, any]) => {\r\n" + 
           "   77:         if (!url) throw new InvalidApiConfigException(\"L'url de l'API est vide\");\r\n" + 
           "   78  \r\n" + 
           "\r\n" + 
           "  100            // this.loggerService.debug(`Response ${inspect(error)}`);\r\n" + 
           "  101:           throw new ApiRequestFailureException(\r\n" + 
           "  102              `Request failed with code ${get(error, 'response.statusCode', (error as any).statusCode)} -> ${get(\r\n" + 
           "\r\n" + 
           "  125                    }\r\n" + 
           "  126:                   throw new InvalidApiConfigException('Le type de mapping est invalide');\r\n" + 
           "  127                  }\r\n" + 
           "  128:                 throw new InvalidApiConfigException(\"La structure de stockage n'a pas été définie\");\r\n" + 
           "  129                }\r\n" + 
           "  130:               throw new InvalidApiConfigException('La clé de stockage est invalide');\r\n" + 
           "  131              });\r\n" + 
           "  132            }\r\n" + 
           "  133:           throw new InvalidApiConfigException(\"La clé de stockage n'a pas été définie\");\r\n" + 
           "  134          }\r\n" + 
           "\r\n" + 
           "  141            : Promise.reject(\r\n" + 
           "  142:               new InfiniteLoopException(\r\n" + 
           "  143                  'La configuration du noeud ' + currentNode.name + ' provoque une boucle infinie.'\r\n" + 
           "\r\n" + 
           "  148          if (\r\n" + 
           "  149:           error instanceof ApiRequestFailureException ||\r\n" + 
           "  150:           error instanceof InvalidApiMappingException ||\r\n" + 
           "  151:           error instanceof InvalidDataValueException\r\n" + 
           "  152          ) {\r\n" + 
           "  153            error.message =\r\n" + 
           "  154:             error instanceof InvalidDataValueException\r\n" + 
           "  155                ? `La clé \"${error.dataKey}\" ne possède pas de valeur`\r\n" + 
           "\r\n" + 
           "  181      if (isBodyRequest && !body) {\r\n" + 
           "  182:       throw new InvalidApiConfigException('Le corps de la requête est vide');\r\n" + 
           "  183      }\r\n" + 
           "\r\n" + 
           "  218        return Promise.reject(\r\n" + 
           "  219:         new InvalidApiMappingException(\r\n" + 
           "  220            \"Une erreur s'est produite lors du stockage de la réponse dans une chaîne de caractère\"\r\n" + 
           "\r\n" + 
           "  239        return Promise.reject(\r\n" + 
           "  240:         new InvalidApiMappingException(\"Une erreur s'est produite lors de la lecture des valeurs dans la réponse\")\r\n" + 
           "  241        );\r\n" + 
           "\r\n" + 
           "  273      } catch (error) {\r\n" + 
           "  274:       throw new InvalidApiMappingException(error);\r\n" + 
           "  275      }\r\n" + 
           "\r\n" + 
           "  305      } catch (error) {\r\n" + 
           "  306:       throw new InvalidApiConfigException('An error occured during the build of your API certificates');\r\n" + 
           "  307      }\r\n" + 
           "\r\n" + 
           "  313      if (!performOperations || !performOperations.options) {\r\n" + 
           "  314:       throw new InvalidOperationsConfigException(\r\n" + 
           "  315          `A parameter is missing in the operations bubble -> ${currentNode.name}`\r\n" + 
           "\r\n" + 
           "  327          : Promise.reject(\r\n" + 
           "  328:             new InfiniteLoopException('La configuration du noeud ' + currentNode.name + ' provoque une boucle infinie.')\r\n" + 
           "  329            )\r\n" + 
           "\r\n" + 
           "src\\resources\\nodes\\node-mapping\\mapping-switch\\exceptions\\api-request-failure.exception.ts:\r\n" + 
           "  1: import { UnprocessableEntityException } from '@nestjs/common';\r\n" + 
           "  2  \r\n" + 
           "  3: export class ApiRequestFailureException extends UnprocessableEntityException {\r\n" + 
           "  4    constructor(message = \"La requête a échoué, je le savais qu'elle allait échouer !\") {\r\n" + 
           "\r\n" + 
           "src\\resources\\nodes\\node-mapping\\mapping-switch\\exceptions\\invalid-api-config.exception.ts:\r\n" + 
           "  1: import { UnprocessableEntityException } from '@nestjs/common';\r\n" + 
           "  2  \r\n" + 
           "  3: export class InvalidApiConfigException extends UnprocessableEntityException {\r\n" + 
           "  4    constructor(message = \"Un paramètre de configuration à provoqué une erreur lors de l'envoi vers une API\") {\r\n" + 
           "\r\n" + 
           "src\\resources\\nodes\\node-mapping\\mapping-switch\\exceptions\\invalid-api-mapping.exception.ts:\r\n" + 
           "  1: import { UnprocessableEntityException } from '@nestjs/common';\r\n" + 
           "  2  \r\n" + 
           "  3: export class InvalidApiMappingException extends UnprocessableEntityException {\r\n" + 
           "  4    constructor(message = \"La réponse n'a pas pu être stockée dans les données du bot\") {\r\n" + 
           "\r\n" + 
           "src\\resources\\nodes\\node-mapping\\mapping-switch\\exceptions\\invalid-operations-config.exception.ts:\r\n" + 
           "  1: import { UnprocessableEntityException } from '@nestjs/common';\r\n" + 
           "  2  \r\n" + 
           "  3: // This exception is different from the InvalidOperation in data-operations.service\r\n" + 
           "  4  // as it describe a missing parameter in the PerfomOperations.options object\r\n" + 
           "  5: export class InvalidOperationsConfigException extends UnprocessableEntityException {\r\n" + 
           "  6    constructor(message = \"Un paramètre de configuration est invalide dans la bulle d'opérations\") {\r\n" + 
           "\r\n" + 
           "src\\resources\\nodes\\node-template\\node-template.service.ts:\r\n" + 
           "    8  import { TemplateGenericService } from './template-generic/template-generic.service';\r\n" + 
           "    9: import { InvalidTemplateConfigException } from './exceptions/invalid-template-config.exception';\r\n" + 
           "   10  import { Context } from '../../../core/context.entity';\r\n" + 
           "\r\n" + 
           "   46        ? Promise.resolve()\r\n" + 
           "   47:       : Promise.reject(new InvalidTemplateConfigException('Bulle manquante ou modèle de bulle invalide.'));\r\n" + 
           "   48    }\r\n" + 
           "\r\n" + 
           "  116      if (!template || template.error) {\r\n" + 
           "  117:       throw new InvalidTemplateConfigException(template.error || 'No template to store');\r\n" + 
           "  118      }\r\n" + 
           "\r\n" + 
           "src\\resources\\nodes\\node-template\\exceptions\\invalid-dynamic-template.exception.ts:\r\n" + 
           "  1: import { UnprocessableEntityException } from '@nestjs/common';\r\n" + 
           "  2  \r\n" + 
           "  3: export class InvalidDynamicTemplateException extends UnprocessableEntityException {\r\n" + 
           "  4    fallbackNode: string;\r\n" + 
           "\r\n" + 
           "src\\resources\\nodes\\node-template\\exceptions\\invalid-template-config.exception.ts:\r\n" + 
           "  1: import { UnprocessableEntityException } from '@nestjs/common';\r\n" + 
           "  2  \r\n" + 
           "  3: export class InvalidTemplateConfigException extends UnprocessableEntityException {\r\n" + 
           "  4    constructor(message = 'Invalid template configuration') {\r\n" + 
           "\r\n" + 
           "src\\resources\\nodes\\node-template\\template-generic\\template-generic.service.ts:\r\n" + 
           "   4  \r\n" + 
           "   5: import { InvalidDynamicTemplateException } from '../exceptions/invalid-dynamic-template.exception';\r\n" + 
           "   6  import { DataProcessorService } from '../../../../features/data-processor/data-processor.service';\r\n" + 
           "\r\n" + 
           "  14      if (!template.autoOptions) {\r\n" + 
           "  15:       return Promise.reject(new InvalidDynamicTemplateException('Missing auto generation config'));\r\n" + 
           "  16      }\r\n" + 
           "\r\n" + 
           "  21      if (!listKey) {\r\n" + 
           "  22:       return Promise.reject(new InvalidDynamicTemplateException('Missing list key', template.autoOptions.fallbackNode));\r\n" + 
           "  23      }\r\n" + 
           "\r\n" + 
           "  38            if (!Array.isArray(listData) || !listData.length) {\r\n" + 
           "  39:             throw new InvalidDynamicTemplateException('Missing list in data');\r\n" + 
           "  40            }\r\n" + 
           "\r\n" + 
           "  45              if (!listElement || typeof listElement !== 'object') {\r\n" + 
           "  46:               throw new InvalidDynamicTemplateException('Empty or non-object list element');\r\n" + 
           "  47              }\r\n" + 
           "\r\n" + 
           "  61          } catch (error) {\r\n" + 
           "  62:           return Promise.reject(new InvalidDynamicTemplateException(error, template.autoOptions.fallbackNode));\r\n" + 
           "  63          }\r\n" + 
           "\r\n" + 
           "  70      if (!title) {\r\n" + 
           "  71:       throw new InvalidDynamicTemplateException('Missing title key');\r\n" + 
           "  72      }\r\n" + 
           "\r\n" + 
           "src\\resources\\nodes\\node-template\\template-quick-replies\\template-quick-replies.service.ts:\r\n" + 
           "   4  \r\n" + 
           "   5: import { InvalidDynamicTemplateException } from '../exceptions/invalid-dynamic-template.exception';\r\n" + 
           "   6  import { DataProcessorService } from '../../../../features/data-processor/data-processor.service';\r\n" + 
           "\r\n" + 
           "  14      if (!template.autoOptions) {\r\n" + 
           "  15:       return Promise.reject(new InvalidDynamicTemplateException('Missing auto generation config'));\r\n" + 
           "  16      }\r\n" + 
           "\r\n" + 
           "  21      if (!listKey) {\r\n" + 
           "  22:       return Promise.reject(new InvalidDynamicTemplateException('Missing list key', template.autoOptions.fallbackNode));\r\n" + 
           "  23      }\r\n" + 
           "\r\n" + 
           "  40            if (!Array.isArray(listData) || !listData.length) {\r\n" + 
           "  41:             throw new InvalidDynamicTemplateException('Missing list in data');\r\n" + 
           "  42            }\r\n" + 
           "\r\n" + 
           "  47              if (!listElement) {\r\n" + 
           "  48:               throw new InvalidDynamicTemplateException('Empty list element');\r\n" + 
           "  49              }\r\n" + 
           "\r\n" + 
           "  64          } catch (error) {\r\n" + 
           "  65:           return Promise.reject(new InvalidDynamicTemplateException(error, template.autoOptions.fallbackNode));\r\n" + 
           "  66          }\r\n" + 
           "\r\n" + 
           "  73      if (!title) {\r\n" + 
           "  74:       throw new InvalidDynamicTemplateException('Missing title key');\r\n" + 
           "  75      }\r\n" + 
           "\r\n" + 
           "src\\resources\\user\\user.controller.ts:\r\n" + 
           "    1: import { Body, Controller, Get, Headers, Param, Patch, Post, PreconditionFailedException, Res } from '@nestjs/common';\r\n" + 
           "    2  import { Response } from 'express';\r\n" + 
           "\r\n" + 
           "    7  import { UserService } from './user.service';\r\n" + 
           "    8: import { UserCreationException } from './exceptions/user-creation-exception';\r\n" + 
           "    9  \r\n" + 
           "\r\n" + 
           "   33      if (!email) {\r\n" + 
           "   34:       res.status(412).json(new UserCreationException('Invalid email', '40.1.1'));\r\n" + 
           "   35      } else {\r\n" + 
           "\r\n" + 
           "  138      if (!email) {\r\n" + 
           "  139:       res.status(412).json(new UserCreationException('Invalid email', '40.1.1'));\r\n" + 
           "  140      } else {\r\n" + 
           "\r\n" + 
           "src\\resources\\user\\user.service.ts:\r\n" + 
           "    1  import {\r\n" + 
           "    2:   ForbiddenException,\r\n" + 
           "    3    Inject,\r\n" + 
           "    4    Injectable,\r\n" + 
           "    5:   InternalServerErrorException,\r\n" + 
           "    6:   UnauthorizedException\r\n" + 
           "    7  } from '@nestjs/common';\r\n" + 
           "\r\n" + 
           "   13  import { FirebaseApp } from '../../core/providers/firebase-app.provider';\r\n" + 
           "   14: import { UserCreationException } from './exceptions/user-creation-exception';\r\n" + 
           "   15  import { UserRepository } from './user.repository';\r\n" + 
           "\r\n" + 
           "   40              ? Promise.resolve(user)\r\n" + 
           "   41:             : Promise.reject(new ForbiddenException('User is not authorized to execute this action'))\r\n" + 
           "   42          )\r\n" + 
           "\r\n" + 
           "   45              ? Promise.resolve(user)\r\n" + 
           "   46:             : Promise.reject(new ForbiddenException('User is not authorized to execute this action'))\r\n" + 
           "   47          );\r\n" + 
           "\r\n" + 
           "   55        if (error && error.code === 'auth/argument-error') {\r\n" + 
           "   56:         throw new UnauthorizedException();\r\n" + 
           "   57        }\r\n" + 
           "\r\n" + 
           "   69          if (error.code === 'auth/invalid-email') {\r\n" + 
           "   70:           throw new UserCreationException('Invalid email', '40.1.1');\r\n" + 
           "   71          }\r\n" + 
           "   72          if (error.code === 'auth/email-already-exists') {\r\n" + 
           "   73:           throw new UserCreationException('Provided email is already in use', '40.1.2');\r\n" + 
           "   74          }\r\n" + 
           "   75:         throw new InternalServerErrorException();\r\n" + 
           "   76        });\r\n" + 
           "\r\n" + 
           "   91        if (matchingPasswords.find(result => !!result)) {\r\n" + 
           "   92:         throw new UserCreationException('New Password cannot be one of the previously used passwords', '40.2.3');\r\n" + 
           "   93        } else {\r\n" + 
           "\r\n" + 
           "  120      if (!password || typeof password !== 'string')\r\n" + 
           "  121:       throw new UserCreationException('A password must be provided', '40.2.1');\r\n" + 
           "  122  \r\n" + 
           "\r\n" + 
           "  131        if (c6) return true;\r\n" + 
           "  132:       throw new UserCreationException('This password cannot be used', '40.2.4');\r\n" + 
           "  133      }\r\n" + 
           "  134:     throw new UserCreationException('Password is not valid', '40.2.2');\r\n" + 
           "  135    }\r\n" + 
           "\r\n" + 
           "src\\resources\\user\\exceptions\\user-creation-exception.ts:\r\n" + 
           "  1: import { PreconditionFailedException } from '@nestjs/common';\r\n" + 
           "  2  \r\n" + 
           "  3: export class UserCreationException extends PreconditionFailedException {\r\n" + 
           "  4    constructor(message: string, code: string) {\r\n" + 
           "";
   

           let dataobject=[
               {
                 "Controller": "api-djam.controller",
                 "Exception": "MissingInformationException",
                 "Parent Class Exception": "BadRequestException",
                 "Folder": "dajm",
                 "Message": "\"\"",
                 "File": "api-djam.controller.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 1,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "djam",
                 "Index of Exception": 1,
                 "Final_category": 1,
                 "Sub_category": 1,
                 "numerotation": 1
               },
               {
                 "Controller": "api-djam.controller",
                 "Exception": "ForbiddenException",
                 "Parent Class Exception": "HttpException",
                 "Folder": "dajm",
                 "Message": "\"\"",
                 "File": "api-djam.controller.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 1,
                 "Number of the Exception in Category": 2,
                 "Colonne1": "djam",
                 "Index of Exception": 2,
                 "Final_category": 1,
                 "Sub_category": 1,
                 "numerotation": 2
               },
               {
                 "Controller": "api-profideo.controller.ts",
                 "Exception": "MissingInformationException",
                 "Parent Class Exception": "BadRequestException",
                 "Folder": "profideo",
                 "Message": "\"\"",
                 "File": "api-profideo.controlleur.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 2,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "profideo",
                 "Index of Exception": 1,
                 "Final_category": 1,
                 "Sub_category": 2,
                 "numerotation": 1
               },
               {
                 "Controller": "api-profideo.controlleur.ts",
                 "Exception": "ForbiddenException",
                 "Parent Class Exception": "HttpException",
                 "Folder": "profideo",
                 "Message": "\"\"",
                 "File": "api-profideo.controlleur.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 2,
                 "Number of the Exception in Category": 2,
                 "Colonne1": "profideo",
                 "Index of Exception": 1,
                 "Final_category": 1,
                 "Sub_category": 2,
                 "numerotation": 2
               },
               {
                 "Controller": "api-profideo.controller.ts",
                 "Exception": "BadRequestException",
                 "Parent Class Exception": "HttpException",
                 "Folder": "profideo",
                 "Message": "\"\"",
                 "File": "api-profideo.controlleur.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 2,
                 "Number of the Exception in Category": 2,
                 "Colonne1": "profideo",
                 "Index of Exception": 2,
                 "Final_category": 1,
                 "Sub_category": 2,
                 "numerotation": 3
               },
               {
                 "Controller": "analytics.controller.ts",
                 "Exception": "BadRequestException",
                 "Parent Class Exception": "HttpException",
                 "Folder": "features/analytics",
                 "Message": "Unknown collection",
                 "File": "analytics.factory.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 3,
                 "Number of the Exception in Category": 2,
                 "Colonne1": "analytics",
                 "Index of Exception": 1,
                 "Final_category": 2,
                 "numerotation": 1
               },
               {
                 "Controller": "analytics.controller.ts",
                 "Exception": "BadRequestException",
                 "Parent Class Exception": "HttpException",
                 "Folder": "features/analytics",
                 "Message": "Invalid TimeSerie Granularity",
                 "File": "analytics.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 3,
                 "Number of the Exception in Category": 2,
                 "Colonne1": "analytics",
                 "Index of Exception": 2,
                 "Final_category": 2,
                 "numerotation": 2
               },
               {
                 "Controller": "analytics.controller.ts",
                 "Exception": "BadRequestException",
                 "Parent Class Exception": "HttpException",
                 "Folder": "features/analytics",
                 "Message": "Invalid Collection Name",
                 "File": "analytics.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 3,
                 "Number of the Exception in Category": 2,
                 "Colonne1": "analytics",
                 "Index of Exception": 3,
                 "Final_category": 2,
                 "numerotation": 3
               },
               {
                 "Controller": "auto-replies.controller.ts",
                 "Exception": "NotFoundException",
                 "Parent Class Exception": "HttpException",
                 "Folder": "auto-replies",
                 "Message": "This page id : ${pageId} does not have any related infos",
                 "File": "auto-replies.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 4,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "autoreplies",
                 "Index of Exception": 1,
                 "Final_category": 3,
                 "numerotation": 1
               },
               {
                 "Controller": "broadcast.controller.ts",
                 "Exception": "BroadcastCreationException",
                 "Parent Class Exception": "InternalServerErrorException",
                 "Folder": "broadcast/channel/facebook",
                 "Message": "An error occured during Message Creative creation",
                 "File": "facebook.services.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 5,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "broadcast",
                 "Index of Exception": 2,
                 "Final_category": 4,
                 "numerotation": 1
               },
               {
                 "Controller": "broadcast.controller.ts",
                 "Exception": "BroadcastCreationException",
                 "Parent Class Exception": "InternalServerErrorException",
                 "Folder": "broadcast/channel/facebook",
                 "Message": "An error occured during Broadcast creation",
                 "File": "facebook.services.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 5,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "broadcast",
                 "Index of Exception": 3,
                 "Final_category": 4,
                 "numerotation": 2
               },
               {
                 "Controller": "broadcast.controller.ts",
                 "Exception": "BroadcastCreationException",
                 "Parent Class Exception": "InternalServerErrorException",
                 "Folder": "broadcast/channel/facebook",
                 "Message": "get(reqError, 'error.error')",
                 "File": "facebook.services.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 5,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "broadcast",
                 "Index of Exception": 4,
                 "Final_category": 4,
                 "numerotation": 3
               },
               {
                 "Controller": "broadcast.controller.ts",
                 "Exception": "BroadcastCreationException",
                 "Parent Class Exception": "InternalServerErrorException",
                 "Folder": "broadcast/channel/facebook",
                 "Message": "reqError.error.error",
                 "File": "facebook.services.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 5,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "broadcast",
                 "Index of Exception": 5,
                 "Final_category": 4,
                 "numerotation": 4
               },
               {
                 "Controller": "broadcast.controller.ts",
                 "Exception": "BroadcastCreationException",
                 "Parent Class Exception": "InternalServerErrorException",
                 "Folder": "broadcast/exceptions",
                 "Message": "An error occured during the broadcast creation",
                 "File": "broadcast-creation.exception.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 5,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "broadcast",
                 "Index of Exception": 6,
                 "Final_category": 4,
                 "numerotation": 5
               },
               {
                 "Controller": "broadcast.controller.ts",
                 "Exception": "Error",
                 "Parent Class Exception": "HttpException",
                 "Folder": "broadcast",
                 "Message": "Missing informations",
                 "File": "broadcast.controller.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 5,
                 "Number of the Exception in Category": 2,
                 "Colonne1": "broadcast",
                 "Index of Exception": 1,
                 "Final_category": 4,
                 "numerotation": 6
               },
               {
                 "Controller": "broadcast.controller.ts",
                 "Exception": "BroadcastCreationException",
                 "Parent Class Exception": "InternalServerErrorException",
                 "Folder": "broadcast",
                 "Message": "An error occured during broadcast saving",
                 "File": "broadcast.controller.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 5,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "broadcast",
                 "Index of Exception": 7,
                 "Final_category": 4,
                 "numerotation": 7
               },
               {
                 "Controller": "pas de controlleur dans data-comparisons",
                 "Exception": "invalid-coparison.exception.ts",
                 "Parent Class Exception": "InvalidComparisonException",
                 "Folder": "datacompariosns/exceptions",
                 "Message": "Invalid comparison",
                 "File": "InvalidComparisonException.ts",
                 "Type Exception": "class Exception",
                 "Nummber of Category": 6,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "comparison",
                 "Index of Exception": 1,
                 "Final_category": 5,
                 "Sub_category": 1,
                 "numerotation": 1
               },
               {
                 "Controller": "pas de controlleur dans data-comparisons",
                 "Exception": "invalid-coparison.exception.ts",
                 "Parent Class Exception": "InvalidComparisonException",
                 "Folder": "datacomparison",
                 "Message": "Missing next comparison",
                 "File": "data-comparison.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 6,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "comparison",
                 "Index of Exception": 2,
                 "Final_category": 5,
                 "Sub_category": 1,
                 "numerotation": 2
               },
               {
                 "Controller": "pas de controlleur dans data-comparisons",
                 "Exception": "InfiniteLoopException",
                 "Parent Class Exception": "UnprocessableEntityException",
                 "Folder": "datacomparison",
                 "Message": "La configuration du noeud ' + context.currentNode.name + ' provoque une boucle infinie.",
                 "File": "data-comparison.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 6,
                 "Number of the Exception in Category": 2,
                 "Colonne1": "comparison",
                 "Index of Exception": 1,
                 "Final_category": 5,
                 "Sub_category": 1,
                 "numerotation": 3
               },
               {
                 "Controller": "pas de controlleur dans data-comparisons",
                 "Exception": "InvalidComparisonException",
                 "Parent Class Exception": "UnprocessableEntityException",
                 "Folder": "datacomparison",
                 "Message": "Type de comparaison manquant",
                 "File": "data-comparison.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 6,
                 "Number of the Exception in Category": 3,
                 "Colonne1": "comparison",
                 "Index of Exception": 1,
                 "Final_category": 5,
                 "Sub_category": 1,
                 "numerotation": 4
               },
               {
                 "Controller": "pas de controlleur dans data-comparisons",
                 "Exception": "InvalidComparisonException",
                 "Parent Class Exception": "UnprocessableEntityException",
                 "Folder": "datacomparison",
                 "Message": "Clé de comparaison manquante",
                 "File": "data-comparison.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 6,
                 "Number of the Exception in Category": 3,
                 "Colonne1": "comparison",
                 "Index of Exception": 2,
                 "Final_category": 5,
                 "Sub_category": 1,
                 "numerotation": 5
               },
               {
                 "Controller": "pas de controlleur dans data-comparisons",
                 "Exception": "InvalidComparisonException",
                 "Parent Class Exception": "UnprocessableEntityException",
                 "Folder": "datacomparison",
                 "Message": "Comparateur manquant",
                 "File": "data-comparison.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 6,
                 "Number of the Exception in Category": 3,
                 "Colonne1": "comparison",
                 "Index of Exception": 3,
                 "Final_category": 5,
                 "Sub_category": 1,
                 "numerotation": 6
               },
               {
                 "Controller": "pas de controlleur dans data-comparisons",
                 "Exception": "InvalidComparisonException",
                 "Parent Class Exception": "UnprocessableEntityException",
                 "Folder": "datacomparison",
                 "Message": "Action si Vrai manquante",
                 "File": "data-comparison.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 6,
                 "Number of the Exception in Category": 3,
                 "Colonne1": "comparison",
                 "Index of Exception": 4,
                 "Final_category": 5,
                 "Sub_category": 1,
                 "numerotation": 7
               },
               {
                 "Controller": "pas de controlleur dans data-comparisons",
                 "Exception": "InvalidComparisonException",
                 "Parent Class Exception": "UnprocessableEntityException",
                 "Folder": "datacomparison",
                 "Message": "Action si Faux manquante",
                 "File": "data-comparison.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 6,
                 "Number of the Exception in Category": 3,
                 "Colonne1": "comparison",
                 "Index of Exception": 5,
                 "Final_category": 5,
                 "Sub_category": 1,
                 "numerotation": 8
               },
               {
                 "Controller": "pas de controlleur dans data-comparisons",
                 "Exception": "InvalidComparisonException",
                 "Parent Class Exception": "UnprocessableEntityException",
                 "Folder": "datacomparison",
                 "Message": "Variable de comparaison invalide",
                 "File": "data-comparison.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 6,
                 "Number of the Exception in Category": 3,
                 "Colonne1": "comparison",
                 "Index of Exception": 6,
                 "Final_category": 5,
                 "Sub_category": 1,
                 "numerotation": 9
               },
               {
                 "Controller": "pas de controlleur dans data-comparisons",
                 "Exception": "InvalidComparisonException",
                 "Parent Class Exception": "UnprocessableEntityException",
                 "Folder": "datacomparison",
                 "Message": "Type de comparaison invalide",
                 "File": "data-comparison.service.ts",
                 "Type Exception": "leve exception",
                 "Colonne1": "comparison",
                 "Final_category": 5,
                 "Sub_category": 1,
                 "numerotation": 10
               },
               {
                 "Controller": "pas de controlleur dans data_operation",
                 "Exception": "InvalidOperationException",
                 "Parent Class Exception": "UnprocessableEntityException",
                 "Folder": "data-operations",
                 "Message": "Type d'opération manquant",
                 "File": "data-operation.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 7,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "data-operation",
                 "Index of Exception": 2,
                 "Final_category": 5,
                 "Sub_category": 2,
                 "numerotation": 1
               },
               {
                 "Controller": "pas de controlleur dans data_operation",
                 "Exception": "InvalidOperationException",
                 "Parent Class Exception": "UnprocessableEntityException",
                 "Folder": "data-operations",
                 "Message": "Clé d'opération manquante",
                 "File": "data-operation.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 7,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "data-operation",
                 "Index of Exception": 3,
                 "Final_category": 5,
                 "Sub_category": 2,
                 "numerotation": 2
               },
               {
                 "Controller": "pas de controlleur dans data_operation",
                 "Exception": "InvalidOperationException",
                 "Parent Class Exception": "UnprocessableEntityException",
                 "Folder": "data-operations",
                 "Message": "Opérande manquant",
                 "File": "data-operation.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 7,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "data-operation",
                 "Index of Exception": 4,
                 "Final_category": 5,
                 "Sub_category": 2,
                 "numerotation": 3
               },
               {
                 "Controller": "pas de controlleur dans data_operation",
                 "Exception": "InvalidOperationException",
                 "Parent Class Exception": "UnprocessableEntityException",
                 "Folder": "data-operations",
                 "Message": "Variable d'opération invalide",
                 "File": "data-operation.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 7,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "data-operation",
                 "Index of Exception": 5,
                 "Final_category": 5,
                 "Sub_category": 2,
                 "numerotation": 4
               },
               {
                 "Controller": "pas de controlleur dans data_operation",
                 "Exception": "InvalidOperationException",
                 "Parent Class Exception": "UnprocessableEntityException",
                 "Folder": "data-operations",
                 "Message": "Operand type is not valid",
                 "File": "data-operation.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 7,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "data-operation",
                 "Index of Exception": 6,
                 "Final_category": 5,
                 "Sub_category": 2,
                 "numerotation": 5
               },
               {
                 "Controller": "pas de controlleur dans data_operation",
                 "Exception": "InvalidOperationException",
                 "Parent Class Exception": "UnprocessableEntityException",
                 "Folder": "data-operations",
                 "Message": "OperandValue is not a number",
                 "File": "data-operation.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 7,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "data-operation",
                 "Index of Exception": 7,
                 "Final_category": 5,
                 "Sub_category": 2,
                 "numerotation": 6
               },
               {
                 "Controller": "pas de controlleur dans data_operation",
                 "Exception": "InvalidOperationException",
                 "Parent Class Exception": "UnprocessableEntityException",
                 "Folder": "data-operations",
                 "Message": "OperandValue is not a string",
                 "File": "data-operation.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 7,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "data-operation",
                 "Index of Exception": 8,
                 "Final_category": 5,
                 "Sub_category": 2,
                 "numerotation": 7
               },
               {
                 "Controller": "pas de controlleur dans data_operation",
                 "Exception": "InvalidOperationException",
                 "Parent Class Exception": "UnprocessableEntityException",
                 "Folder": "data-operations",
                 "Message": "Selected container is not a list",
                 "File": "data-operation.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 7,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "data-operation",
                 "Index of Exception": 9,
                 "Final_category": 5,
                 "Sub_category": 2,
                 "numerotation": 8
               },
               {
                 "Controller": "pas de controlleur dans data_operation",
                 "Exception": "InvalidOperationException",
                 "Parent Class Exception": "UnprocessableEntityException",
                 "Folder": "data-operations",
                 "Message": "Selected target is not an object",
                 "File": "data-operation.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 7,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "data-operation",
                 "Index of Exception": 10,
                 "Final_category": 5,
                 "Sub_category": 2,
                 "numerotation": 9
               },
               {
                 "Controller": "pas de controlleur dans data_operation",
                 "Exception": "InvalidOperationException",
                 "Parent Class Exception": "UnprocessableEntityException",
                 "Folder": "data-operations",
                 "Message": "Unable to parse provided value",
                 "File": "data-operation.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 7,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "data-operation",
                 "Index of Exception": 11,
                 "Final_category": 5,
                 "Sub_category": 2,
                 "numerotation": 10
               },
               {
                 "Controller": "pas de controlleur dans data_operation",
                 "Exception": "InvalidOperationException",
                 "Parent Class Exception": "UnprocessableEntityException",
                 "Folder": "data-operations",
                 "Message": "Types de variables incompatibles au sein d'une opération",
                 "File": "data-operation.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 7,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "data-operation",
                 "Index of Exception": 12,
                 "Final_category": 5,
                 "Sub_category": 2,
                 "numerotation": 11
               },
               {
                 "Controller": "pas de controlleur dans data_operation",
                 "Exception": "InvalidOperationException",
                 "Parent Class Exception": "UnprocessableEntityException",
                 "Folder": "data-operations",
                 "Message": "Data in context or in option is not valid",
                 "File": "data-operation.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 7,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "data-operation",
                 "Index of Exception": 13,
                 "Final_category": 5,
                 "Sub_category": 2,
                 "numerotation": 12
               },
               {
                 "Controller": "pas de controlleur dans data_operation",
                 "Exception": "InvalidOperationException",
                 "Parent Class Exception": "UnprocessableEntityException",
                 "Folder": "data-operations",
                 "Message": "Missing options",
                 "File": "data-operation.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 7,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "data-operation",
                 "Index of Exception": 14,
                 "Final_category": 5,
                 "Sub_category": 2,
                 "numerotation": 13
               },
               {
                 "Controller": "pas de controlleur dans data_operation",
                 "Exception": "InvalidOperationException",
                 "Parent Class Exception": "UnprocessableEntityException",
                 "Folder": "data-operations",
                 "Message": "InvalidOperationException",
                 "File": "data-operation.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 7,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "data-operation",
                 "Index of Exception": 15,
                 "Final_category": 5,
                 "Sub_category": 2,
                 "numerotation": 14
               },
               {
                 "Controller": "pas de controlleur dans data_operation",
                 "Exception": "InvalidOperationException",
                 "Parent Class Exception": "UnprocessableEntityException",
                 "Folder": "data-operations",
                 "Message": "La valeur des bornes est invalide",
                 "File": "data-operation.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 7,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "data-operation",
                 "Index of Exception": 16,
                 "Final_category": 5,
                 "Sub_category": 2,
                 "numerotation": 15
               },
               {
                 "Controller": "pas de controlleur dans data_operation",
                 "Exception": "InvalidOperationException",
                 "Parent Class Exception": "UnprocessableEntityException",
                 "Folder": "data-operations",
                 "Message": "La donnée a découper n'est pas une liste",
                 "File": "data-operation.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 7,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "data-operation",
                 "Index of Exception": 17,
                 "Final_category": 5,
                 "Sub_category": 2,
                 "numerotation": 16
               },
               {
                 "Controller": "pas de controlleur dans data_operation",
                 "Exception": "InvalidOperationException",
                 "Parent Class Exception": "UnprocessableEntityException",
                 "Folder": "data-operations",
                 "Message": "Source is not valid",
                 "File": "data-operation.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 7,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "data-operation",
                 "Index of Exception": 18,
                 "Final_category": 5,
                 "Sub_category": 2,
                 "numerotation": 17
               },
               {
                 "Controller": "pas de controlleur dans data_operation",
                 "Exception": "InvalidOperationException",
                 "Parent Class Exception": "UnprocessableEntityException",
                 "Folder": "data-operations",
                 "Message": "Attribute source or separator are not valid",
                 "File": "data-operation.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 7,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "data-operation",
                 "Index of Exception": 19,
                 "Final_category": 5,
                 "Sub_category": 2,
                 "numerotation": 18
               },
               {
                 "Controller": "pas de controlleur dans data_operation",
                 "Exception": "InvalidOperationException",
                 "Parent Class Exception": "UnprocessableEntityException",
                 "Folder": "data-operations",
                 "Message": "Attributes are not valid",
                 "File": "data-operation.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 7,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "data-operation",
                 "Index of Exception": 20,
                 "Final_category": 5,
                 "Sub_category": 2,
                 "numerotation": 19
               },
               {
                 "Controller": "pas de controlleur dans data_operation",
                 "Exception": "InvalidOperationException",
                 "Parent Class Exception": "UnprocessableEntityException",
                 "Folder": "data-operations",
                 "Message": "Separator is not valid",
                 "File": "data-operation.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 7,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "data-operation",
                 "Index of Exception": 21,
                 "Final_category": 5,
                 "Sub_category": 2,
                 "numerotation": 20
               },
               {
                 "Controller": "pas de controlleur dans data_operation",
                 "Exception": "InvalidOperationException",
                 "Parent Class Exception": "UnprocessableEntityException",
                 "Folder": "data-operations",
                 "Message": "Composed operation object is not a list",
                 "File": "data-operation.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 7,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "data-operation",
                 "Index of Exception": 22,
                 "Final_category": 5,
                 "Sub_category": 2,
                 "numerotation": 21
               },
               {
                 "Controller": "pas de controlleur dans data_operation",
                 "Exception": "InvalidOperationException",
                 "Parent Class Exception": "UnprocessableEntityException",
                 "Folder": "data-operations",
                 "Message": "Options is not valid",
                 "File": "data-operation.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 7,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "data-operation",
                 "Index of Exception": 23,
                 "Final_category": 5,
                 "Sub_category": 2,
                 "numerotation": 22
               },
               {
                 "Controller": "pas de controlleur dans data_operation",
                 "Exception": "InvalidOperationException",
                 "Parent Class Exception": "UnprocessableEntityException",
                 "Folder": "data-operations",
                 "Message": "Add time options values are not valid",
                 "File": "data-operation.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 7,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "data-operation",
                 "Index of Exception": 24,
                 "Final_category": 5,
                 "Sub_category": 2,
                 "numerotation": 23
               },
               {
                 "Controller": "pas de controlleur dans data_operation",
                 "Exception": "InvalidOperationException",
                 "Parent Class Exception": "UnprocessableEntityException",
                 "Folder": "data-operations",
                 "Message": "Context or option is invalid",
                 "File": "data-operation.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 7,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "data-operation",
                 "Index of Exception": 25,
                 "Final_category": 5,
                 "Sub_category": 2,
                 "numerotation": 24
               },
               {
                 "Controller": "pas de controlleur dans data_operation",
                 "Exception": "InvalidOperationException",
                 "Parent Class Exception": "UnprocessableEntityException",
                 "Folder": "data-operations",
                 "Message": "Erreur d'éxecution de la formule",
                 "File": "data-operation.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 7,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "data-operation",
                 "Index of Exception": 26,
                 "Final_category": 5,
                 "Sub_category": 2,
                 "numerotation": 25
               },
               {
                 "Controller": "pas de controlleur dans data_operation",
                 "Exception": "InvalidOperationException",
                 "Parent Class Exception": "UnprocessableEntityException",
                 "Folder": "data-operations",
                 "Message": "Liste de clés non définie ou invalide",
                 "File": "data-operation.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 7,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "data-operation",
                 "Index of Exception": 27,
                 "Final_category": 5,
                 "Sub_category": 2,
                 "numerotation": 26
               },
               {
                 "Controller": "pas de controlleur dans data_operation",
                 "Exception": "InvalidOperationException",
                 "Parent Class Exception": "UnprocessableEntityException",
                 "Folder": "data-operations",
                 "Message": "OperandValue is unknown",
                 "File": "data-operation.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 7,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "data-operation",
                 "Index of Exception": 28,
                 "Final_category": 5,
                 "Sub_category": 2,
                 "numerotation": 27
               },
               {
                 "Controller": "pas de controlleur dans data_operation",
                 "Exception": "InvalidOperationException",
                 "Parent Class Exception": "UnprocessableEntityException",
                 "Folder": "data-operations",
                 "Message": "initialValue is unknown",
                 "File": "data-operation.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 7,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "data-operation",
                 "Index of Exception": 29,
                 "Final_category": 5,
                 "Sub_category": 2,
                 "numerotation": 28
               },
               {
                 "Controller": "pas de controlleur dans data_operation",
                 "Exception": "InvalidOperationException",
                 "Parent Class Exception": "UnprocessableEntityException",
                 "Folder": "data-operations",
                 "Message": "InitialValue is not valid",
                 "File": "data-operation.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 7,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "data-operation",
                 "Index of Exception": 30,
                 "Final_category": 5,
                 "Sub_category": 2,
                 "numerotation": 29
               },
               {
                 "Controller": "pas de controlleur dans data_operation",
                 "Exception": "InvalidOperationException",
                 "Parent Class Exception": "UnprocessableEntityException",
                 "Folder": "data-operations",
                 "Message": "A type is not valid",
                 "File": "data-operation.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 7,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "data-operation",
                 "Index of Exception": 31,
                 "Final_category": 5,
                 "Sub_category": 2,
                 "numerotation": 30
               },
               {
                 "Controller": "pas de controlleur dans data_operation",
                 "Exception": "InvalidOperationException",
                 "Parent Class Exception": "UnprocessableEntityException",
                 "Folder": "data-operations",
                 "Message": "A value is null and can\\'t be divide",
                 "File": "data-operation.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 7,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "data-operation",
                 "Index of Exception": 32,
                 "Final_category": 5,
                 "Sub_category": 2,
                 "numerotation": 31
               },
               {
                 "Controller": "pas de controlleur dans data_operation",
                 "Exception": "InvalidOperationException",
                 "Parent Class Exception": "UnprocessableEntityException",
                 "Folder": "data-operations",
                 "Message": "Convertion result is not a number",
                 "File": "data-operation.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 7,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "data-operation",
                 "Index of Exception": 33,
                 "Final_category": 5,
                 "Sub_category": 2,
                 "numerotation": 32
               },
               {
                 "Controller": "pas de controlleur dans data_operation",
                 "Exception": "InvalidOperationException",
                 "Parent Class Exception": "UnprocessableEntityException",
                 "Folder": "data-operations",
                 "Message": "Types de variables incompatibles au sein d'une opération",
                 "File": "data-operation.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 7,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "data-operation",
                 "Index of Exception": 34,
                 "Final_category": 5,
                 "Sub_category": 2,
                 "numerotation": 33
               },
               {
                 "Controller": "pas de controlleur dans data_operation",
                 "Exception": "InvalidOperationException",
                 "Parent Class Exception": "UnprocessableEntityException",
                 "Folder": "data-operations",
                 "Message": "Operand or InitialValue is not valid",
                 "File": "data-operation.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 7,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "data-operation",
                 "Index of Exception": 34,
                 "Final_category": 5,
                 "Sub_category": 2,
                 "numerotation": 34
               },
               {
                 "Controller": "pas de controlleur dans data_operation",
                 "Exception": "InvalidOperationException",
                 "Parent Class Exception": "UnprocessableEntityException",
                 "Folder": "data-operations",
                 "Message": "Division by 0 in operation",
                 "File": "data-operation.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 7,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "data-operation",
                 "Index of Exception": 34,
                 "Final_category": 5,
                 "Sub_category": 2,
                 "numerotation": 35
               },
               {
                 "Controller": "pas de controlleur dans data_operation",
                 "Exception": "InvalidOperationException",
                 "Parent Class Exception": "UnprocessableEntityException",
                 "Folder": "data-operations",
                 "Message": "Address is not valid",
                 "File": "data-operation.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 7,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "data-operation",
                 "Index of Exception": 34,
                 "Final_category": 5,
                 "Sub_category": 2,
                 "numerotation": 36
               },
               {
                 "Controller": "data-processor.controller.ts",
                 "Exception": "InvalidDataPathException",
                 "Parent Class Exception": "BadRequestException",
                 "Folder": "data-processor",
                 "Message": "\"\"",
                 "File": "data.repository.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 8,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "data-processor",
                 "Index of Exception": 2,
                 "Final_category": 5,
                 "Sub_category": 3,
                 "numerotation": 1
               },
               {
                 "Controller": "data-processor.controller.ts",
                 "Exception": "InvalidDataValueException",
                 "Parent Class Exception": "BadRequestException",
                 "Folder": "data-processor",
                 "Message": "Valeur literale invalide",
                 "File": "data-processor-service",
                 "Type Exception": "leve exception",
                 "Colonne1": "data-processor.service",
                 "Final_category": 5,
                 "Sub_category": 3,
                 "numerotation": 2
               },
               {
                 "Controller": "data-processor.controller.ts",
                 "Exception": "InvalidOperationException",
                 "Parent Class Exception": "BadRequestException",
                 "Folder": "data-processor",
                 "Message": "Unable to parse provided value",
                 "File": "data-processor-service",
                 "Type Exception": "leve exception",
                 "Colonne1": "data-processor.service",
                 "Final_category": 5,
                 "Sub_category": 3,
                 "numerotation": 3
               },
               {
                 "Controller": "data-processor.controller.ts",
                 "Exception": "InvalidDataValueException",
                 "Parent Class Exception": "BadRequestException",
                 "Folder": "data-processor",
                 "Message": "'_key not found_', subject",
                 "File": "data-processor-service",
                 "Type Exception": "leve exception",
                 "Colonne1": "data-processor.service",
                 "Final_category": 5,
                 "Sub_category": 3,
                 "numerotation": 4
               },
               {
                 "Controller": "data-processor.controller.ts",
                 "Exception": "InvalidDataValueException",
                 "Parent Class Exception": "BadRequestException",
                 "Folder": "data-processor",
                 "Message": "_element not found_', property",
                 "File": "data-processor-service",
                 "Type Exception": "leve exception",
                 "Colonne1": "data-processor.service",
                 "Final_category": 5,
                 "Sub_category": 3,
                 "numerotation": 5
               },
               {
                 "Controller": "data-processor.controller.ts",
                 "Exception": "InvalidComparisonException",
                 "Parent Class Exception": "UnprocessableEntityException",
                 "Folder": "data-processor",
                 "Message": "Clé de comparateur manquante",
                 "File": "data-processor-service",
                 "Type Exception": "leve exception",
                 "Colonne1": "data-processor.service",
                 "Final_category": 5,
                 "Sub_category": 3,
                 "numerotation": 6
               },
               {
                 "Controller": "data-processor.controller.ts",
                 "Exception": "InvalidOperationException",
                 "Parent Class Exception": "UnprocessableEntityException",
                 "Folder": "data-processor",
                 "Message": "Clé d'opérande manquante",
                 "File": "data-processor-service",
                 "Type Exception": "leve exception",
                 "Colonne1": "data-processor.service",
                 "Final_category": 5,
                 "Sub_category": 3,
                 "numerotation": 7
               },
               {
                 "Controller": "data-processor.controller.ts",
                 "Exception": "InvalidComparisonException",
                 "Parent Class Exception": "UnprocessableEntityException",
                 "Folder": "data-processor",
                 "Message": "Valeur de comparateur introuvable",
                 "File": "data-processor-service",
                 "Type Exception": "leve exception",
                 "Colonne1": "data-processor.service",
                 "Final_category": 5,
                 "Sub_category": 3,
                 "numerotation": 8
               },
               {
                 "Controller": "data-processor.controller.ts",
                 "Exception": "InvalidOperationException",
                 "Parent Class Exception": "UnprocessableEntityException",
                 "Folder": "data-processor",
                 "Message": "Valeur d'opérande introuvable",
                 "File": "data-processor-service",
                 "Type Exception": "leve exception",
                 "Colonne1": "data-processor.service",
                 "Final_category": 5,
                 "Sub_category": 3,
                 "numerotation": 9
               },
               {
                 "Controller": "data-processor.controller.ts",
                 "Exception": "InvalidDataValueException",
                 "Parent Class Exception": "BadRequestException",
                 "Folder": "data-processor",
                 "Message": "this.commonPlaceholder, dataStoreElem.key",
                 "File": "data-processor-service",
                 "Type Exception": "leve exception",
                 "Colonne1": "data-processor.service",
                 "Final_category": 5,
                 "Sub_category": 3,
                 "numerotation": 10
               },
               {
                 "Controller": "data-processor.controller.ts",
                 "Exception": "InvalidDataValueException",
                 "Parent Class Exception": "BadRequestException",
                 "Folder": "data-processor",
                 "Message": "this.commonPlaceholder, dataElem.key, null, +index",
                 "File": "data-processor-service",
                 "Type Exception": "leve exception",
                 "Colonne1": "data-processor.service",
                 "Final_category": 5,
                 "Sub_category": 3,
                 "numerotation": 11
               },
               {
                 "Controller": "data-processor.controller.ts",
                 "Exception": "InvalidDataValueException",
                 "Parent Class Exception": "BadRequestException",
                 "Folder": "data-processor",
                 "Message": "this.commonPlaceholder, dataElem.key, dataElemKey.key, +index",
                 "File": "data-processor-service",
                 "Type Exception": "leve exception",
                 "Colonne1": "data-processor.service",
                 "Final_category": 5,
                 "Sub_category": 3,
                 "numerotation": 12
               },
               {
                 "Controller": "data-processor.controller.ts",
                 "Exception": "InvalidDataValueException",
                 "Parent Class Exception": "BadRequestException",
                 "Folder": "data-processor",
                 "Message": "this.commonPlaceholder, dataElem.key, dataElemKey.key, +index",
                 "File": "data-processor-service",
                 "Type Exception": "leve exception",
                 "Colonne1": "data-processor.service",
                 "Final_category": 5,
                 "Sub_category": 3,
                 "numerotation": 13
               },
               {
                 "Controller": "data-processor.controller.ts",
                 "Exception": "InvalidDataValueException",
                 "Parent Class Exception": "BadRequestException",
                 "Folder": "data-processor",
                 "Message": "this.commonPlaceholder, dataElem.key, dataElemKey && dataElemKey.key",
                 "File": "data-processor-service",
                 "Type Exception": "leve exception",
                 "Colonne1": "data-processor.service",
                 "Final_category": 5,
                 "Sub_category": 3,
                 "numerotation": 14
               },
               {
                 "Controller": "deployments.controller",
                 "Exception": "TwilioAuthorizationException",
                 "Parent Class Exception": "UnauthorizedException",
                 "Folder": "deployments/twilio-voice",
                 "Message": "\"\"",
                 "File": "twilio-voice.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 9,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "deployment",
                 "Index of Exception": 1,
                 "Final_category": 6,
                 "numerotation": 1
               },
               {
                 "Controller": "deployments.controller",
                 "Exception": "TwilioAuthorizationException",
                 "Parent Class Exception": "UnauthorizedException",
                 "Folder": "deployments/twilio-voice",
                 "Message": "flow', pageInfos.flowId",
                 "File": "twilio-voice.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 9,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "deployment",
                 "Index of Exception": 2,
                 "Final_category": 6,
                 "numerotation": 2
               },
               {
                 "Controller": "deployments.controller",
                 "Exception": "TwilioAuthorizationException",
                 "Parent Class Exception": "UnauthorizedException",
                 "Folder": "deployments/twilio-voice",
                 "Message": "number', numberSID",
                 "File": "twilio-voice.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 9,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "deployment",
                 "Index of Exception": 3,
                 "Final_category": 6,
                 "numerotation": 3
               },
               {
                 "Controller": "lexicons.controller.ts",
                 "Exception": "UnknownNlpServiceException",
                 "Parent Class Exception": "UnprocessableEntityException",
                 "Folder": "nlp/lexicons",
                 "Message": "variable :service",
                 "File": "lexicons.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 11,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "lexicon",
                 "Index of Exception": 1,
                 "Final_category": 7,
                 "numerotation": 1
               },
               {
                 "Controller": "lexicons.controller.ts",
                 "Exception": "MissingCredentialException",
                 "Parent Class Exception": "UnauthorizedException",
                 "Folder": "nlp/lexicons",
                 "Message": "Dialogflow",
                 "File": "lexicons.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 11,
                 "Number of the Exception in Category": 2,
                 "Colonne1": "lexicon",
                 "Index of Exception": 1,
                 "Final_category": 7,
                 "numerotation": 2
               },
               {
                 "Controller": "lexicons.controller.ts",
                 "Exception": "MissingCredentialException",
                 "Parent Class Exception": "UnauthorizedException",
                 "Folder": "nlp/lexicons",
                 "Message": "Dialogflow', 'project_id",
                 "File": "lexicons.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 11,
                 "Number of the Exception in Category": 2,
                 "Colonne1": "lexicon",
                 "Index of Exception": 2,
                 "Final_category": 7,
                 "numerotation": 3
               },
               {
                 "Controller": "lexicons.controller.ts",
                 "Exception": "MissingCredentialException",
                 "Parent Class Exception": "UnauthorizedException",
                 "Folder": "nlp/lexicons",
                 "Message": "Dialogflow', key",
                 "File": "lexicons.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 11,
                 "Number of the Exception in Category": 2,
                 "Colonne1": "lexicon",
                 "Index of Exception": 3,
                 "Final_category": 7,
                 "numerotation": 4
               },
               {
                 "Controller": "lexicons.controller.ts",
                 "Exception": "MissingCredentialException",
                 "Parent Class Exception": "UnauthorizedException",
                 "Folder": "nlp/lexicons",
                 "Message": "Luis'",
                 "File": "lexicons.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 11,
                 "Number of the Exception in Category": 2,
                 "Colonne1": "lexicon",
                 "Index of Exception": 4,
                 "Final_category": 7,
                 "numerotation": 5
               },
               {
                 "Controller": "lexicons.controller.ts",
                 "Exception": "MissingCredentialException",
                 "Parent Class Exception": "UnauthorizedException",
                 "Folder": "nlp/lexicons",
                 "Message": "Luis', key",
                 "File": "lexicons.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 11,
                 "Number of the Exception in Category": 2,
                 "Colonne1": "lexicon",
                 "Index of Exception": 5,
                 "Final_category": 7,
                 "numerotation": 6
               },
               {
                 "Controller": "lexicons.controller.ts",
                 "Exception": "NotPublishedException",
                 "Parent Class Exception": "UnprocessableEntityException",
                 "Folder": "nlp/lexicons/luis",
                 "Message": "\"\"",
                 "File": "luis.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 11,
                 "Number of the Exception in Category": 3,
                 "Colonne1": "lexicon",
                 "Index of Exception": 1,
                 "Final_category": 7,
                 "numerotation": 7
               },
               {
                 "Controller": "oauth.controller.ts",
                 "Exception": "UnknownOAuthServiceException",
                 "Parent Class Exception": "UnprocessableEntityException",
                 "Folder": "oauth/google",
                 "Message": "variable service",
                 "File": "oauth.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 12,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "oath",
                 "Index of Exception": 1,
                 "Final_category": 8,
                 "numerotation": 1
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/api",
                 "Message": "Ce type de template n'est pas supporté par le canal API",
                 "File": "api.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 1,
                 "Final_category": 9,
                 "Sub_category": 1,
                 "numerotation": 1
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/api",
                 "Message": "Le champ texte est vide",
                 "File": "api.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 2,
                 "Final_category": 9,
                 "Sub_category": 1,
                 "numerotation": 2
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/facebook",
                 "Message": "Le champ texte est vide",
                 "File": "facebook.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 3,
                 "Final_category": 9,
                 "Sub_category": 2,
                 "numerotation": 1
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/facebook",
                 "Message": "Le texte d'introduction est vide",
                 "File": "facebook.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 4,
                 "Final_category": 9,
                 "Sub_category": 2,
                 "numerotation": 2
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/facebook",
                 "Message": "La bulle doit contenir entre 1 et 11 Quick Replies",
                 "File": "facebook.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 5,
                 "Final_category": 9,
                 "Sub_category": 2,
                 "numerotation": 3
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/facebook",
                 "Message": "Le champ titre du modèle est vide",
                 "File": "facebook.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 6,
                 "Final_category": 9,
                 "Sub_category": 2,
                 "numerotation": 4
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/facebook",
                 "Message": "La bulle doit contenir entre 1 et 3 boutons",
                 "File": "facebook.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 7,
                 "Final_category": 9,
                 "Sub_category": 2,
                 "numerotation": 5
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/facebook",
                 "Message": "Une bulle Media doit contenir 1 seul élément",
                 "File": "facebook.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 8,
                 "Final_category": 9,
                 "Sub_category": 2,
                 "numerotation": 6
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/facebook",
                 "Message": "Une bulle Liste doit contenir entre 2 et 10 éléments",
                 "File": "facebook.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 9,
                 "Final_category": 9,
                 "Sub_category": 2,
                 "numerotation": 7
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/facebook",
                 "Message": "Une bulle Liste ne peut contenir qu'un seul bouton",
                 "File": "facebook.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 10,
                 "Final_category": 9,
                 "Sub_category": 2,
                 "numerotation": 8
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/facebook",
                 "Message": "Une bulle Carrousel doit contenir entre 1 et 10 éléments",
                 "File": "facebook.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 11,
                 "Final_category": 9,
                 "Sub_category": 2,
                 "numerotation": 9
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/facebook",
                 "Message": "Le champ \"Nom du client\" est vide",
                 "File": "facebook.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 12,
                 "Final_category": 9,
                 "Sub_category": 2,
                 "numerotation": 10
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/facebook",
                 "Message": "Le champ \"Numéro de commande\" est vide",
                 "File": "facebook.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 13,
                 "Final_category": 9,
                 "Sub_category": 2,
                 "numerotation": 11
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/facebook",
                 "Message": "Le champ \"Devise\" est vide",
                 "File": "facebook.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 14,
                 "Final_category": 9,
                 "Sub_category": 2,
                 "numerotation": 12
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/facebook",
                 "Message": "Le champ \"Méthode de paiement\" est vide",
                 "File": "facebook.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 15,
                 "Final_category": 9,
                 "Sub_category": 2,
                 "numerotation": 13
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/facebook",
                 "Message": "Le champ \"Adresse\" est vide",
                 "File": "facebook.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 16,
                 "Final_category": 9,
                 "Sub_category": 2,
                 "numerotation": 14
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/facebook",
                 "Message": "Le champ \"Ville\" est vide",
                 "File": "facebook.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 17,
                 "Final_category": 9,
                 "Sub_category": 2,
                 "numerotation": 15
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/facebook",
                 "Message": "Le champ \"Code postal\" est vide",
                 "File": "facebook.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 18,
                 "Final_category": 9,
                 "Sub_category": 2,
                 "numerotation": 16
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/facebook",
                 "Message": "Le champ \"Etat/Région\" est vide",
                 "File": "facebook.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 19,
                 "Final_category": 9,
                 "Sub_category": 2,
                 "numerotation": 17
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/facebook",
                 "Message": "Le champ \"Pays\" est vide",
                 "File": "facebook.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 20,
                 "Final_category": 9,
                 "Sub_category": 2,
                 "numerotation": 18
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/facebook",
                 "Message": "Le champ \"Coût total\" est vide",
                 "File": "facebook.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 21,
                 "Final_category": 9,
                 "Sub_category": 2,
                 "numerotation": 19
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/facebook",
                 "Message": "Le champ \"Coût total\" est vide",
                 "File": "facebook.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 22,
                 "Final_category": 9,
                 "Sub_category": 2,
                 "numerotation": 20
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/facebook",
                 "Message": "Une transaction ne peut contenir plus de 100 articles",
                 "File": "facebook.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 23,
                 "Final_category": 9,
                 "Sub_category": 2,
                 "numerotation": 21
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/facebook",
                 "Message": "Une bulle Open Graph doit contenir 1 seul élément",
                 "File": "facebook.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 24,
                 "Final_category": 9,
                 "Sub_category": 2,
                 "numerotation": 22
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/facebook",
                 "Message": "Le type d'une réponse n'est pas défini",
                 "File": "facebook.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 25,
                 "Final_category": 9,
                 "Sub_category": 2,
                 "numerotation": 23
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/facebook",
                 "Message": "Le titre d'une réponse est vide",
                 "File": "facebook.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 26,
                 "Final_category": 9,
                 "Sub_category": 2,
                 "numerotation": 24
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/facebook",
                 "Message": "Le titre d'un bouton est vide",
                 "File": "facebook.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 27,
                 "Final_category": 9,
                 "Sub_category": 2,
                 "numerotation": 25
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/facebook",
                 "Message": "L'URL d'un bouton est vide",
                 "File": "facebook.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 28,
                 "Final_category": 9,
                 "Sub_category": 2,
                 "numerotation": 26
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/facebook",
                 "Message": "Le bouton d'appel n'a pas de numéro de téléphone associé",
                 "File": "facebook.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 29,
                 "Final_category": 9,
                 "Sub_category": 2,
                 "numerotation": 27
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/facebook",
                 "Message": "Ce type de Media n'est pas géré par Facebook",
                 "File": "facebook.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 30,
                 "Final_category": 9,
                 "Sub_category": 2,
                 "numerotation": 28
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/facebook",
                 "Message": "L'URL du media est vide",
                 "File": "facebook.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 31,
                 "Final_category": 9,
                 "Sub_category": 2,
                 "numerotation": 29
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/facebook",
                 "Message": "Une bulle Media ne peut contenir qu'un seul bouton",
                 "File": "facebook.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 32,
                 "Final_category": 9,
                 "Sub_category": 2,
                 "numerotation": 30
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/facebook",
                 "Message": "Le champ Titre d'un élément est vide",
                 "File": "facebook.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 33,
                 "Final_category": 9,
                 "Sub_category": 2,
                 "numerotation": 31
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/facebook",
                 "Message": "L\\'action par défaut des éléments doit être vide ou de type \"Ouvrir URL\"",
                 "File": "facebook.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 34,
                 "Final_category": 9,
                 "Sub_category": 2,
                 "numerotation": 32
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/facebook",
                 "Message": "Le champ URL de l'action par défaut d'un des éléments est vide",
                 "File": "facebook.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 35,
                 "Final_category": 9,
                 "Sub_category": 2,
                 "numerotation": 33
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/facebook",
                 "Message": "Un élément de carrousel ou de liste ne peut avoir plus de 3 boutons",
                 "File": "facebook.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 36,
                 "Final_category": 9,
                 "Sub_category": 2,
                 "numerotation": 34
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/facebook",
                 "Message": "Un article de transaction doit avoir un titre",
                 "File": "facebook.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 37,
                 "Final_category": 9,
                 "Sub_category": 2,
                 "numerotation": 35
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/facebook",
                 "Message": "Un article de transaction doit avoir un prix",
                 "File": "facebook.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 38,
                 "Final_category": 9,
                 "Sub_category": 2,
                 "numerotation": 36
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/facebook",
                 "Message": "Le champ URL de l'élément Open Graph est vide",
                 "File": "facebook.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 39,
                 "Final_category": 9,
                 "Sub_category": 2,
                 "numerotation": 37
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/facebook",
                 "Message": "Une bulle Open Graph ne peut avoir plus de 3 boutons",
                 "File": "facebook.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 40,
                 "Final_category": 9,
                 "Sub_category": 2,
                 "numerotation": 38
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/google-business-messages.services",
                 "Message": "Le titre d'une réponse est vide",
                 "File": "google-business-messages.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 41,
                 "Final_category": 9,
                 "Sub_category": 3,
                 "numerotation": 1
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/google-business-messages.services",
                 "Message": "La bulle doit contenir entre 1 et 13 suggestions",
                 "File": "google-business-messages.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 42,
                 "Final_category": 9,
                 "Sub_category": 3,
                 "numerotation": 2
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/google-business-messages.services",
                 "Message": "Le champ titre du modèle est vide",
                 "File": "google-business-messages.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 43,
                 "Final_category": 9,
                 "Sub_category": 3,
                 "numerotation": 3
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/google-business-messages.services",
                 "Message": "Le titre d'un bouton est vide",
                 "File": "google-business-messages.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 44,
                 "Final_category": 9,
                 "Sub_category": 3,
                 "numerotation": 4
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/google-business-messages.services",
                 "Message": "L'URL d'un bouton est vide",
                 "File": "google-business-messages.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 45,
                 "Final_category": 9,
                 "Sub_category": 3,
                 "numerotation": 5
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/google-business-messages.services",
                 "Message": "Le numéro de téléphone du bouton est vide",
                 "File": "google-business-messages.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 46,
                 "Final_category": 9,
                 "Sub_category": 3,
                 "numerotation": 6
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/google-business-messages.services",
                 "Message": "Une bulle Media doit contenir 1 seul élément",
                 "File": "google-business-messages.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 47,
                 "Final_category": 9,
                 "Sub_category": 3,
                 "numerotation": 7
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/google-business-messages.services",
                 "Message": "Ce type de Media n'est pas géré par Skype",
                 "File": "google-business-messages.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 48,
                 "Final_category": 9,
                 "Sub_category": 3,
                 "numerotation": 8
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/google-business-messages.services",
                 "Message": "L'URL du media est vide",
                 "File": "google-business-messages.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 49,
                 "Final_category": 9,
                 "Sub_category": 3,
                 "numerotation": 9
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/google-business-messages.services",
                 "Message": "Le format vidéo n'est pas pris en charge par Google Business Messages",
                 "File": "google-business-messages.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 50,
                 "Final_category": 9,
                 "Sub_category": 3,
                 "numerotation": 10
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/google-business-messages.services",
                 "Message": "Une bulle Carrousel doit contenir entre 1 et 10 éléments",
                 "File": "google-business-messages.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 51,
                 "Final_category": 9,
                 "Sub_category": 3,
                 "numerotation": 11
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/google-business-messages.services",
                 "Message": "Un élément de carrousel ou de liste ne peut avoir plus de 4 boutons",
                 "File": "google-business-messages.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 52,
                 "Final_category": 9,
                 "Sub_category": 3,
                 "numerotation": 12
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/skype.service.ts",
                 "Message": "Ce type de template n'est pas supporté par Skype",
                 "File": "skype.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 53,
                 "Final_category": 9,
                 "Sub_category": 4,
                 "numerotation": 1
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/skype.service.ts",
                 "Message": "Le champ texte est vide",
                 "File": "skype.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 54,
                 "Final_category": 9,
                 "Sub_category": 4,
                 "numerotation": 2
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/skype.service.ts",
                 "Message": "Le texte d'introduction est vide",
                 "File": "skype.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 55,
                 "Final_category": 9,
                 "Sub_category": 4,
                 "numerotation": 3
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/skype.service.ts",
                 "Message": "La bulle doit contenir entre 1 et 6 Quick Replies",
                 "File": "skype.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 56,
                 "Final_category": 9,
                 "Sub_category": 4,
                 "numerotation": 4
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/skype.service.ts",
                 "Message": "Le type d'une réponse n'est pas défini",
                 "File": "skype.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 57,
                 "Final_category": 9,
                 "Sub_category": 4,
                 "numerotation": 5
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/skype.service.ts",
                 "Message": "Le titre d'une réponse est vide",
                 "File": "skype.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 58,
                 "Final_category": 9,
                 "Sub_category": 4,
                 "numerotation": 6
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/skype.service.ts",
                 "Message": "La bulle doit contenir entre 1 et 3 boutons",
                 "File": "skype.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 59,
                 "Final_category": 9,
                 "Sub_category": 4,
                 "numerotation": 7
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/skype.service.ts",
                 "Message": "Le champ titre du modèle est vide",
                 "File": "skype.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 60,
                 "Final_category": 9,
                 "Sub_category": 4,
                 "numerotation": 8
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/skype.service.ts",
                 "Message": "Le titre d'un bouton est vide",
                 "File": "skype.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 61,
                 "Final_category": 9,
                 "Sub_category": 4,
                 "numerotation": 9
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/skype.service.ts",
                 "Message": "L'URL d'un bouton est vide",
                 "File": "skype.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 62,
                 "Final_category": 9,
                 "Sub_category": 4,
                 "numerotation": 10
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/skype.service.ts",
                 "Message": "Les boutons de type 'call' se sont pas pris en compte par Skype",
                 "File": "skype.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 63,
                 "Final_category": 9,
                 "Sub_category": 4,
                 "numerotation": 11
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/skype.service.ts",
                 "Message": "Les boutons de types 'login' ne sont pas pris en charge par Skype",
                 "File": "skype.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 64,
                 "Final_category": 9,
                 "Sub_category": 4,
                 "numerotation": 12
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/skype.service.ts",
                 "Message": "Une bulle Media doit contenir 1 seul élément",
                 "File": "skype.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 65,
                 "Final_category": 9,
                 "Sub_category": 4,
                 "numerotation": 13
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/skype.service.ts",
                 "Message": "Ce type de Media n'est pas géré par Skype",
                 "File": "skype.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 66,
                 "Final_category": 9,
                 "Sub_category": 4,
                 "numerotation": 14
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/skype.service.ts",
                 "Message": "L'URL du media est vide",
                 "File": "skype.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 67,
                 "Final_category": 9,
                 "Sub_category": 4,
                 "numerotation": 15
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/skype.service.ts",
                 "Message": "Les vidéos n'acceptent pas de bouton sur Skype",
                 "File": "skype.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 68,
                 "Final_category": 9,
                 "Sub_category": 4,
                 "numerotation": 16
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/slack.services",
                 "Message": "`Modèle de bulle [${template.type}] incompatible avec Slack`",
                 "File": "slack.services.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 69,
                 "Final_category": 9,
                 "Sub_category": 5,
                 "numerotation": 1
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/slack.services",
                 "Message": "Le champ texte est vide",
                 "File": "slack.services.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 70,
                 "Final_category": 9,
                 "Sub_category": 5,
                 "numerotation": 2
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/slack.services",
                 "Message": "Une bulle de réponse rapide doit avoir un texte d'introduction",
                 "File": "slack.services.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 71,
                 "Final_category": 9,
                 "Sub_category": 5,
                 "numerotation": 3
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/slack.services",
                 "Message": "Une bulle de réponse rapide doit contenir entre 1 et 5 réponses",
                 "File": "slack.services.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 72,
                 "Final_category": 9,
                 "Sub_category": 5,
                 "numerotation": 4
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/slack.services",
                 "Message": "Un bouton doit avoir un texte d'introduction",
                 "File": "slack.services.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 73,
                 "Final_category": 9,
                 "Sub_category": 5,
                 "numerotation": 5
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/slack.services",
                 "Message": "Une bulle de boutons doit contenir entre 1 et 3 boutons",
                 "File": "slack.services.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 74,
                 "Final_category": 9,
                 "Sub_category": 5,
                 "numerotation": 6
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/slack.services",
                 "Message": "Une bulle Media doit contenir 1 seul élément",
                 "File": "slack.services.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 75,
                 "Final_category": 9,
                 "Sub_category": 5,
                 "numerotation": 7
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/slack.services",
                 "Message": "Une bulle Liste doit contenir entre 2 et 10 éléments",
                 "File": "slack.services.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 76,
                 "Final_category": 9,
                 "Sub_category": 5,
                 "numerotation": 8
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/slack.services",
                 "Message": "Slack ne gère que les media de type 'image'\"",
                 "File": "slack.services.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 77,
                 "Final_category": 9,
                 "Sub_category": 5,
                 "numerotation": 9
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/slack.services",
                 "Message": "Url de media manquante",
                 "File": "slack.services.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 78,
                 "Final_category": 9,
                 "Sub_category": 5,
                 "numerotation": 10
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/slack.services",
                 "Message": "Url de media trop longue",
                 "File": "slack.services.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 79,
                 "Final_category": 9,
                 "Sub_category": 5,
                 "numerotation": 11
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/slack.services",
                 "Message": "Les réponses rapides doivent avoir un titre",
                 "File": "slack.services.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 80,
                 "Final_category": 9,
                 "Sub_category": 5,
                 "numerotation": 12
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/slack.services",
                 "Message": "Les boutons doivent avoir un titre",
                 "File": "slack.services.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 81,
                 "Final_category": 9,
                 "Sub_category": 5,
                 "numerotation": 13
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/slack.services",
                 "Message": "Les réponses rapides doivent être de type 'text'",
                 "File": "slack.services.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 82,
                 "Final_category": 9,
                 "Sub_category": 5,
                 "numerotation": 14
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/slack.services",
                 "Message": "Les réponses rapides doivent avoir une bulle cible",
                 "File": "slack.services.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 83,
                 "Final_category": 9,
                 "Sub_category": 5,
                 "numerotation": 15
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/slack.services",
                 "Message": "Les boutons doivent être de type 'Bulle déclenchée' ou 'Web url",
                 "File": "slack.services.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 84,
                 "Final_category": 9,
                 "Sub_category": 5,
                 "numerotation": 16
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/slack.services",
                 "Message": "Les boutons de type 'Bulle déclenchée' doivent avoir une bulle cible",
                 "File": "slack.services.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 85,
                 "Final_category": 9,
                 "Sub_category": 5,
                 "numerotation": 17
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/slack.services",
                 "Message": "Les boutons de type 'Web url' doivent avoir une url",
                 "File": "slack.services.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 86,
                 "Final_category": 9,
                 "Sub_category": 5,
                 "numerotation": 18
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/slack.services",
                 "Message": "Un élément de liste doit avoir un titre",
                 "File": "slack.services.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 87,
                 "Final_category": 9,
                 "Sub_category": 5,
                 "numerotation": 19
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/smooch.service.ts",
                 "Message": "Le texte d'introduction est vide",
                 "File": "smooch.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 88,
                 "Final_category": 9,
                 "Sub_category": 6,
                 "numerotation": 1
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/smooch.service.ts",
                 "Message": "La bulle doit contenir entre 1 et 11 Quick Replies",
                 "File": "smooch.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 89,
                 "Final_category": 9,
                 "Sub_category": 6,
                 "numerotation": 2
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/smooch.service.ts",
                 "Message": "Le champ titre du modèle est vide",
                 "File": "smooch.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 90,
                 "Final_category": 9,
                 "Sub_category": 6,
                 "numerotation": 3
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/smooch.service.ts",
                 "Message": "La bulle doit contenir entre 1 et 3 boutons",
                 "File": "smooch.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 91,
                 "Final_category": 9,
                 "Sub_category": 6,
                 "numerotation": 4
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/smooch.service.ts",
                 "Message": "Une bulle Media doit contenir 1 seul élément",
                 "File": "smooch.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 92,
                 "Final_category": 9,
                 "Sub_category": 6,
                 "numerotation": 5
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/smooch.service.ts",
                 "Message": "Une bulle Liste doit contenir entre 2 et 4 éléments",
                 "File": "smooch.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 93,
                 "Final_category": 9,
                 "Sub_category": 6,
                 "numerotation": 6
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/smooch.service.ts",
                 "Message": "Une bulle Liste ne peut contenir qu'un seul bouton",
                 "File": "smooch.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 94,
                 "Final_category": 9,
                 "Sub_category": 6,
                 "numerotation": 7
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/smooch.service.ts",
                 "Message": "Une bulle Carrousel doit contenir entre 1 et 10 éléments",
                 "File": "smooch.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 95,
                 "Final_category": 9,
                 "Sub_category": 6,
                 "numerotation": 8
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/smooch.service.ts",
                 "Message": "Le champ \"Nom du client\" est vide",
                 "File": "smooch.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 96,
                 "Final_category": 9,
                 "Sub_category": 6,
                 "numerotation": 9
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/smooch.service.ts",
                 "Message": "Le champ \"Numéro de commande\" est vide",
                 "File": "smooch.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 97,
                 "Final_category": 9,
                 "Sub_category": 6,
                 "numerotation": 10
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/smooch.service.ts",
                 "Message": "Le champ \"Devise\" est vide",
                 "File": "smooch.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 98,
                 "Final_category": 9,
                 "Sub_category": 6,
                 "numerotation": 11
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/smooch.service.ts",
                 "Message": "Le champ \"Méthode de paiement\" est vide",
                 "File": "smooch.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 99,
                 "Final_category": 9,
                 "Sub_category": 6,
                 "numerotation": 12
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/smooch.service.ts",
                 "Message": "Le champ \"Adresse\" est vide",
                 "File": "smooch.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 100,
                 "Final_category": 9,
                 "Sub_category": 6,
                 "numerotation": 13
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/smooch.service.ts",
                 "Message": "Le champ \"Ville\" est vide",
                 "File": "smooch.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 101,
                 "Final_category": 9,
                 "Sub_category": 6,
                 "numerotation": 14
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/smooch.service.ts",
                 "Message": "Le champ \"Code postal\" est vide",
                 "File": "smooch.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 102,
                 "Final_category": 9,
                 "Sub_category": 6,
                 "numerotation": 15
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/smooch.service.ts",
                 "Message": "Le champ \"Etat/Région\" est vide",
                 "File": "smooch.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 103,
                 "Final_category": 9,
                 "Sub_category": 6,
                 "numerotation": 16
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/smooch.service.ts",
                 "Message": "Le champ \"Pays\" est vide",
                 "File": "smooch.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 104,
                 "Final_category": 9,
                 "Sub_category": 6,
                 "numerotation": 17
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/smooch.service.ts",
                 "Message": "Le champ \"Coût total\" est vide",
                 "File": "smooch.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 105,
                 "Final_category": 9,
                 "Sub_category": 6,
                 "numerotation": 18
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/smooch.service.ts",
                 "Message": "Le champ \"Coût total\" est vide",
                 "File": "smooch.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 106,
                 "Final_category": 9,
                 "Sub_category": 6,
                 "numerotation": 19
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/smooch.service.ts",
                 "Message": "Une transaction ne peut contenir plus de 100 articles",
                 "File": "smooch.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 107,
                 "Final_category": 9,
                 "Sub_category": 6,
                 "numerotation": 20
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/smooch.service.ts",
                 "Message": "Une bulle Open Graph doit contenir 1 seul élément",
                 "File": "smooch.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 108,
                 "Final_category": 9,
                 "Sub_category": 6,
                 "numerotation": 21
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/smooch.service.ts",
                 "Message": "Le type d'une réponse n'est pas défini",
                 "File": "smooch.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 109,
                 "Final_category": 9,
                 "Sub_category": 6,
                 "numerotation": 22
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/smooch.service.ts",
                 "Message": "Le titre d'une réponse est vide",
                 "File": "smooch.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 110,
                 "Final_category": 9,
                 "Sub_category": 6,
                 "numerotation": 23
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/smooch.service.ts",
                 "Message": "Le titre d'un bouton est vide",
                 "File": "smooch.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 111,
                 "Final_category": 9,
                 "Sub_category": 6,
                 "numerotation": 24
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/smooch.service.ts",
                 "Message": "L'URL d'un bouton est vide",
                 "File": "smooch.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 112,
                 "Final_category": 9,
                 "Sub_category": 6,
                 "numerotation": 25
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/smooch.service.ts",
                 "Message": "Le bouton d'appel n'a pas de numéro de téléphone associé",
                 "File": "smooch.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 113,
                 "Final_category": 9,
                 "Sub_category": 6,
                 "numerotation": 26
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/smooch.service.ts",
                 "Message": "Ce type de Media n'est pas géré par Facebook",
                 "File": "smooch.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 114,
                 "Final_category": 9,
                 "Sub_category": 6,
                 "numerotation": 27
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/smooch.service.ts",
                 "Message": "Une bulle Media ne peut contenir qu'un seul bouton",
                 "File": "smooch.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 115,
                 "Final_category": 9,
                 "Sub_category": 6,
                 "numerotation": 28
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/smooch.service.ts",
                 "Message": "Un élément de carrousel ou de liste doit contenir au' +\n' moins un sous-titre ou une image en plus du titre'",
                 "File": "smooch.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 116,
                 "Final_category": 9,
                 "Sub_category": 6,
                 "numerotation": 29
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/smooch.service.ts",
                 "Message": "Le champ Titre d'un élément est vide",
                 "File": "smooch.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 117,
                 "Final_category": 9,
                 "Sub_category": 6,
                 "numerotation": 30
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/smooch.service.ts",
                 "Message": "L\\'action par défaut des éléments doit être vide ou de type \"Ouvrir URL",
                 "File": "smooch.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 118,
                 "Final_category": 9,
                 "Sub_category": 6,
                 "numerotation": 31
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/smooch.service.ts",
                 "Message": "Le champ URL de l'action par défaut d'un des éléments est vide",
                 "File": "smooch.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 119,
                 "Final_category": 9,
                 "Sub_category": 6,
                 "numerotation": 32
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/smooch.service.ts",
                 "Message": "Un élément de carrousel ou de liste ne peut avoir plus de 3 boutons",
                 "File": "smooch.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 120,
                 "Final_category": 9,
                 "Sub_category": 6,
                 "numerotation": 33
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/smooch.service.ts",
                 "Message": "Un article de transaction doit avoir un titre",
                 "File": "smooch.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 121,
                 "Final_category": 9,
                 "Sub_category": 6,
                 "numerotation": 34
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/smooch.service.ts",
                 "Message": "Un article de transaction doit avoir un prix",
                 "File": "smooch.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 122,
                 "Final_category": 9,
                 "Sub_category": 6,
                 "numerotation": 35
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/smooch.service.ts",
                 "Message": "Le champ URL de l'élément Open Graph est vide",
                 "File": "smooch.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 123,
                 "Final_category": 9,
                 "Sub_category": 6,
                 "numerotation": 36
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/smooch.service.ts",
                 "Message": "Une bulle Open Graph ne peut avoir plus de 3 boutons",
                 "File": "smooch.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 124,
                 "Final_category": 9,
                 "Sub_category": 6,
                 "numerotation": 37
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/twilio-voice",
                 "Message": "Le champ texte est vide",
                 "File": "twilio-voice.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 125,
                 "Final_category": 9,
                 "Sub_category": 7,
                 "numerotation": 1
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/whatsapp",
                 "Message": "Ce type de template n'est pas supporté par Whatsapp",
                 "File": "whatsapp.services.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 126,
                 "Final_category": 9,
                 "Sub_category": 8,
                 "numerotation": 1
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/whatsapp",
                 "Message": "Le champ texte est vide",
                 "File": "whatsapp.services.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 127,
                 "Final_category": 9,
                 "Sub_category": 8,
                 "numerotation": 2
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/whatsapp",
                 "Message": "Une bulle Media doit contenir 1 seul élément",
                 "File": "whatsapp.services.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 128,
                 "Final_category": 9,
                 "Sub_category": 8,
                 "numerotation": 3
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/whatsapp",
                 "Message": "Ce type de Media n'est pas géré par Whatsapp",
                 "File": "whatsapp.services.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 129,
                 "Final_category": 9,
                 "Sub_category": 8,
                 "numerotation": 4
               },
               {
                 "Controller": "pas de controller dans template-parser",
                 "Exception": "InvalidTemplateException",
                 "Parent Class Exception": "Error",
                 "Folder": "template-parser/whatsapp",
                 "Message": "L'URL du media est vide",
                 "File": "whatsapp.services.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 13,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "parser",
                 "Index of Exception": 130,
                 "Final_category": 9,
                 "Sub_category": 8,
                 "numerotation": 5
               },
               {
                 "Controller": "google-business-messages.controller",
                 "Exception": "DoNothingException",
                 "Parent Class Exception": "Error",
                 "Folder": "webhooks/google-business-messages",
                 "Message": "Empty text",
                 "File": "google-business-messages.service",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 14,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "webhook",
                 "Index of Exception": 1,
                 "Final_category": 10,
                 "Sub_category": 1,
                 "numerotation": 1
               },
               {
                 "Controller": "skypeController.ts",
                 "Exception": "DoNothingException",
                 "Parent Class Exception": "Error",
                 "Folder": "webhook/skype",
                 "Message": "Empty text",
                 "File": "skype.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 14,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "webhook",
                 "Index of Exception": 2,
                 "Final_category": 10,
                 "Sub_category": 2,
                 "numerotation": 1
               },
               {
                 "Controller": "slack.controller.ts",
                 "Exception": "NotConnectedBotException",
                 "Parent Class Exception": "UnprocessableEntityException",
                 "Folder": "webhook/slack",
                 "Message": "\"\"",
                 "File": "slack.repository.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 14,
                 "Number of the Exception in Category": 2,
                 "Colonne1": "webhook",
                 "Index of Exception": 1,
                 "Final_category": 10,
                 "Sub_category": 3,
                 "numerotation": 1
               },
               {
                 "Controller": "slack.controller.ts",
                 "Exception": "EmptyRequestException",
                 "Parent Class Exception": "UnprocessableEntityException",
                 "Folder": "webhook/slack",
                 "Message": "\"\"",
                 "File": "slack.controller",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 14,
                 "Number of the Exception in Category": 3,
                 "Colonne1": "webhook",
                 "Index of Exception": 1,
                 "Final_category": 10,
                 "Sub_category": 3,
                 "numerotation": 2
               },
               {
                 "Controller": "slack.controller.ts",
                 "Exception": "DoNothingException",
                 "Parent Class Exception": "Error",
                 "Folder": "webhook/slack",
                 "Message": "\"\"",
                 "File": "slack.services.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 14,
                 "Number of the Exception in Category": 4,
                 "Colonne1": "webhook",
                 "Index of Exception": 1,
                 "Final_category": 10,
                 "Sub_category": 3,
                 "numerotation": 3
               },
               {
                 "Controller": "twilio-voice-controller",
                 "Exception": "DoNothingException",
                 "Parent Class Exception": "error",
                 "Folder": "webhook/twilio-voice",
                 "Message": "Empty text",
                 "File": "twilio-voice.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 14,
                 "Number of the Exception in Category": 4,
                 "Colonne1": "webhook",
                 "Index of Exception": 2,
                 "Final_category": 10,
                 "Sub_category": 4,
                 "numerotation": 1
               },
               {
                 "Controller": "whatsapp.controller.ts",
                 "Exception": "DoNothingException",
                 "Parent Class Exception": "Error",
                 "Folder": "webhook/whatsapp",
                 "Message": "Empty text",
                 "File": "whatsapp.services.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 14,
                 "Number of the Exception in Category": 4,
                 "Colonne1": "webhook",
                 "Index of Exception": 3,
                 "Final_category": 10,
                 "Sub_category": 5,
                 "numerotation": 1
               },
               {
                 "Controller": "conversations.controller",
                 "Exception": "BadRequestException",
                 "Parent Class Exception": "HttpException",
                 "Folder": "conversations",
                 "Message": "\"\"",
                 "File": "conversations.controller.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 16,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "conversation",
                 "Index of Exception": 1,
                 "Final_category": 10,
                 "Sub_category": 6,
                 "numerotation": 1
               },
               {
                 "Controller": "messages.controller",
                 "Exception": "BadRequestException",
                 "Parent Class Exception": "HttpException",
                 "Folder": "conversations/messages",
                 "Message": "\"\"",
                 "File": "message.controller.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 16,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "conversation",
                 "Index of Exception": 2,
                 "Final_category": 10,
                 "Sub_category": 6,
                 "numerotation": 2
               },
               {
                 "Controller": "messages.controller",
                 "Exception": "BotNotFoundException",
                 "Parent Class Exception": "NotFoundException",
                 "Folder": "conversations/messages",
                 "Message": "\"\"",
                 "File": "message.services.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 16,
                 "Number of the Exception in Category": 2,
                 "Colonne1": "conversation",
                 "Index of Exception": 1,
                 "Final_category": 10,
                 "Sub_category": 6,
                 "numerotation": 3
               },
               {
                 "Controller": "messages.controller",
                 "Exception": "NodeNotFoundException",
                 "Parent Class Exception": "NotFoundException",
                 "Folder": "conversations/messages",
                 "Message": "\"\"",
                 "File": "message.services.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 16,
                 "Number of the Exception in Category": 3,
                 "Colonne1": "conversation",
                 "Index of Exception": 1,
                 "Final_category": 10,
                 "Sub_category": 6,
                 "numerotation": 4
               },
               {
                 "Controller": "pas de controller",
                 "Exception": "ApiRequestFailureException",
                 "Parent Class Exception": "UnprocessableEntityException",
                 "Folder": "node/mapping-switch",
                 "Message": "Le type de mapping est invalide",
                 "File": "mapping-switch.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 17,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "node",
                 "Index of Exception": 1,
                 "Final_category": 10,
                 "Sub_category": 7,
                 "numerotation": 1
               },
               {
                 "Controller": "pas de controller",
                 "Exception": "FormatCheckFailureException",
                 "Parent Class Exception": "UnprocessableEntityException",
                 "Folder": "nodes/node-mapping/mapping-data-input",
                 "Message": "\"\"",
                 "File": "mappping-data-input.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 17,
                 "Number of the Exception in Category": 3,
                 "Colonne1": "node",
                 "Index of Exception": 1,
                 "Final_category": 10,
                 "Sub_category": 7,
                 "numerotation": 2
               },
               {
                 "Controller": "pas de controller",
                 "Exception": "FormatCheckFailureException",
                 "Parent Class Exception": "UnprocessableEntityException",
                 "Folder": "nodes/node-mapping/mapping-data-input",
                 "Message": "formatCheck variable",
                 "File": "mappping-data-input.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 17,
                 "Number of the Exception in Category": 3,
                 "Colonne1": "node",
                 "Index of Exception": 2,
                 "Final_category": 10,
                 "Sub_category": 7,
                 "numerotation": 3
               },
               {
                 "Controller": "pas de controller",
                 "Exception": "InfiniteLoopException",
                 "Parent Class Exception": "UnprocessableEntityException",
                 "Folder": "nodes/mapping-go-to-node",
                 "Message": "A parameter is missing in the API bubble -> ${currentNode.name}",
                 "File": "mapping-go-to-node.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 17,
                 "Number of the Exception in Category": 4,
                 "Colonne1": "node",
                 "Index of Exception": 1,
                 "Final_category": 10,
                 "Sub_category": 7,
                 "numerotation": 4
               },
               {
                 "Controller": "pas de controller",
                 "Exception": "InfiniteLoopException",
                 "Parent Class Exception": "UnprocessableEntityException",
                 "Folder": "node/mapping-switch",
                 "Message": "La configuration du noeud ' + currentNode.name + ' provoque une boucle infinie.",
                 "File": "mapping-switch.service.ts",
                 "Type Exception": "mapping-switch.service.ts",
                 "Nummber of Category": 17,
                 "Number of the Exception in Category": 4,
                 "Colonne1": "node",
                 "Index of Exception": 2,
                 "Final_category": 10,
                 "Sub_category": 7,
                 "numerotation": 5
               },
               {
                 "Controller": "pas de controller",
                 "Exception": "InvalidApiConfigException",
                 "Parent Class Exception": "UnprocessableEntityException",
                 "Folder": "node/mapping-switch",
                 "Message": "L'url de l'API est vide",
                 "File": "mapping-switch.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 17,
                 "Number of the Exception in Category": 5,
                 "Colonne1": "node",
                 "Index of Exception": 1,
                 "Final_category": 10,
                 "Sub_category": 7,
                 "numerotation": 6
               },
               {
                 "Controller": "pas de controller",
                 "Exception": "InvalidApiConfigException",
                 "Parent Class Exception": "UnprocessableEntityException",
                 "Folder": "node/mapping-switch",
                 "Message": "`Request failed with code ${get(error, 'response.statusCode', (error as any).statusCode)} -> ${get(\nerror,\n'response.statusMessage',\nerror.message",
                 "File": "mapping-switch.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 17,
                 "Number of the Exception in Category": 6,
                 "Colonne1": "node",
                 "Index of Exception": 1,
                 "Final_category": 10,
                 "Sub_category": 7,
                 "numerotation": 7
               },
               {
                 "Controller": "pas de controller",
                 "Exception": "InvalidApiConfigException",
                 "Parent Class Exception": "UnprocessableEntityException",
                 "Folder": "node/mapping-switch",
                 "Message": "La structure de stockage n'a pas été définie",
                 "File": "mapping-switch.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 17,
                 "Number of the Exception in Category": 7,
                 "Colonne1": "node",
                 "Index of Exception": 1,
                 "Final_category": 10,
                 "Sub_category": 7,
                 "numerotation": 8
               },
               {
                 "Controller": "pas de controller",
                 "Exception": "InvalidApiConfigException",
                 "Parent Class Exception": "UnprocessableEntityException",
                 "Folder": "node/mapping-switch",
                 "Message": "La clé de stockage est invalide",
                 "File": "mapping-switch.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 17,
                 "Number of the Exception in Category": 7,
                 "Colonne1": "node",
                 "Index of Exception": 2,
                 "Final_category": 10,
                 "Sub_category": 7,
                 "numerotation": 9
               },
               {
                 "Controller": "pas de controller",
                 "Exception": "InvalidApiConfigException",
                 "Parent Class Exception": "UnprocessableEntityException",
                 "Folder": "node/mapping-switch",
                 "Message": "La clé de stockage n'a pas été définie",
                 "File": "mapping-switch.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 17,
                 "Number of the Exception in Category": 7,
                 "Colonne1": "node",
                 "Index of Exception": 3,
                 "Final_category": 10,
                 "Sub_category": 7,
                 "numerotation": 10
               },
               {
                 "Controller": "pas de controller",
                 "Exception": "InvalidApiConfigException",
                 "Parent Class Exception": "UnprocessableEntityException",
                 "Folder": "node/mapping-switch",
                 "Message": "Le corps de la requête est vide",
                 "File": "mapping-switch.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 17,
                 "Number of the Exception in Category": 7,
                 "Colonne1": "node",
                 "Index of Exception": 4,
                 "Final_category": 10,
                 "Sub_category": 7,
                 "numerotation": 11
               },
               {
                 "Controller": "pas de controller",
                 "Exception": "InvalidApiConfigException",
                 "Parent Class Exception": "UnprocessableEntityException",
                 "Folder": "node/mapping-switch",
                 "Message": "\"Une erreur s'est produite lors du stockage de la réponse dans une chaîne de caractère\"",
                 "File": "mapping-switch.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 17,
                 "Number of the Exception in Category": 7,
                 "Colonne1": "node",
                 "Index of Exception": 5,
                 "Final_category": 10,
                 "Sub_category": 7,
                 "numerotation": 12
               },
               {
                 "Controller": "pas de controller",
                 "Exception": "InvalidApiConfigException",
                 "Parent Class Exception": "UnprocessableEntityException",
                 "Folder": "node/mapping-switch",
                 "Message": "An error occured during the build of your API certificates",
                 "File": "mapping-switch.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 17,
                 "Number of the Exception in Category": 7,
                 "Colonne1": "node",
                 "Index of Exception": 6,
                 "Final_category": 10,
                 "Sub_category": 7,
                 "numerotation": 13
               },
               {
                 "Controller": "pas de controller",
                 "Exception": "InvalidApiMappingException",
                 "Parent Class Exception": "UnprocessableEntityException",
                 "Folder": "node/mapping-switch",
                 "Message": "formatCheck variable",
                 "File": "mapping-switch.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 17,
                 "Number of the Exception in Category": 8,
                 "Colonne1": "node",
                 "Index of Exception": 1,
                 "Final_category": 10,
                 "Sub_category": 7,
                 "numerotation": 14
               },
               {
                 "Controller": "pas de controller",
                 "Exception": "InvalidOperationsConfigException",
                 "Parent Class Exception": "UnprocessableEntityException",
                 "Folder": "node/mapping-switch",
                 "Message": "`A parameter is missing in the operations bubble -> ${currentNode.name}`",
                 "File": "mapping-switch.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 17,
                 "Number of the Exception in Category": 9,
                 "Colonne1": "node",
                 "Index of Exception": 7,
                 "Final_category": 10,
                 "Sub_category": 7,
                 "numerotation": 15
               },
               {
                 "Controller": "pas de controller",
                 "Exception": "InvalidApiMappingException",
                 "Parent Class Exception": "UnprocessableEntityException",
                 "Folder": "node/mapping-switch",
                 "Message": "variable error",
                 "File": "mapping-switch.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 17,
                 "Number of the Exception in Category": 8,
                 "Colonne1": "node",
                 "Index of Exception": 2,
                 "Final_category": 10,
                 "Sub_category": 7,
                 "numerotation": 16
               },
               {
                 "Controller": "pas de controller",
                 "Exception": "InvalidDynamicTemplateException",
                 "Parent Class Exception": "UnprocessableEntityException",
                 "Folder": "node-template/template-generic",
                 "Message": "Missing auto generation config'",
                 "File": "template-generic.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 17,
                 "Number of the Exception in Category": 9,
                 "Colonne1": "node",
                 "Index of Exception": 1,
                 "Final_category": 10,
                 "Sub_category": 8,
                 "numerotation": 1
               },
               {
                 "Controller": "pas de controller",
                 "Exception": "BotNotFoundException",
                 "Parent Class Exception": "NotFoundException",
                 "Folder": "node-template",
                 "Message": "botId variable",
                 "File": "node.repository.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 17,
                 "Number of the Exception in Category": 2,
                 "Colonne1": "node",
                 "Index of Exception": 1,
                 "Final_category": 10,
                 "Sub_category": 8,
                 "numerotation": 2
               },
               {
                 "Controller": "pas de controller",
                 "Exception": "InfiniteLoopException",
                 "Parent Class Exception": "UnprocessableEntityException",
                 "Folder": "node-template",
                 "Message": "Current node sequence caused an infinite loop'",
                 "File": "nodes.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 17,
                 "Number of the Exception in Category": 4,
                 "Colonne1": "node",
                 "Index of Exception": 3,
                 "Final_category": 10,
                 "Sub_category": 8,
                 "numerotation": 3
               },
               {
                 "Controller": "pas de controller",
                 "Exception": "InvalidDynamicTemplateException",
                 "Parent Class Exception": "UnprocessableEntityException",
                 "Folder": "node-template/template-generic",
                 "Message": "Missing list key', template.autoOptions.fallbackNode)",
                 "File": "template-generic.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 17,
                 "Number of the Exception in Category": 9,
                 "Colonne1": "node",
                 "Index of Exception": 2,
                 "Final_category": 10,
                 "Sub_category": 8,
                 "numerotation": 4
               },
               {
                 "Controller": "pas de controller",
                 "Exception": "InvalidDynamicTemplateException",
                 "Parent Class Exception": "UnprocessableEntityException",
                 "Folder": "node-template/template-generic",
                 "Message": "Missing list in data",
                 "File": "template-generic.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 17,
                 "Number of the Exception in Category": 9,
                 "Colonne1": "node",
                 "Index of Exception": 3,
                 "Final_category": 10,
                 "Sub_category": 8,
                 "numerotation": 5
               },
               {
                 "Controller": "pas de controller",
                 "Exception": "InvalidDynamicTemplateException",
                 "Parent Class Exception": "UnprocessableEntityException",
                 "Folder": "node-template/template-generic",
                 "Message": "Empty or non-object list element",
                 "File": "template-generic.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 17,
                 "Number of the Exception in Category": 9,
                 "Colonne1": "node",
                 "Index of Exception": 4,
                 "Final_category": 10,
                 "Sub_category": 8,
                 "numerotation": 6
               },
               {
                 "Controller": "pas de controller",
                 "Exception": "InvalidDynamicTemplateException",
                 "Parent Class Exception": "UnprocessableEntityException",
                 "Folder": "node-template/template-generic",
                 "Message": "Missing title key",
                 "File": "template-generic.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 17,
                 "Number of the Exception in Category": 9,
                 "Colonne1": "node",
                 "Index of Exception": 5,
                 "Final_category": 10,
                 "Sub_category": 8,
                 "numerotation": 7
               },
               {
                 "Controller": "pas de controller",
                 "Exception": "InvalidDynamicTemplateException",
                 "Parent Class Exception": "UnprocessableEntityException",
                 "Folder": "node-template",
                 "Message": "variable error",
                 "File": "nodes.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 17,
                 "Number of the Exception in Category": 9,
                 "Colonne1": "node",
                 "Index of Exception": 6,
                 "Final_category": 10,
                 "Sub_category": 8,
                 "numerotation": 8
               },
               {
                 "Controller": "pas de controller",
                 "Exception": "InvalidTemplateConfigException",
                 "Parent Class Exception": "UnprocessableEntityException",
                 "Folder": "node-template",
                 "Message": "Bulle manquante ou modèle de bulle invalide.",
                 "File": "node-template.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 17,
                 "Number of the Exception in Category": 9,
                 "Colonne1": "node",
                 "Index of Exception": 8,
                 "Final_category": 10,
                 "Sub_category": 8,
                 "numerotation": 9
               },
               {
                 "Controller": "pas de controller",
                 "Exception": "NodeNotFoundException",
                 "Parent Class Exception": "NotFoundException",
                 "Folder": "node-template",
                 "Message": "nodeId variable",
                 "File": "node.repository.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 17,
                 "Number of the Exception in Category": 10,
                 "Colonne1": "node",
                 "Index of Exception": 1,
                 "Final_category": 10,
                 "Sub_category": 8,
                 "numerotation": 10
               },
               {
                 "Controller": "pas de controller",
                 "Exception": "NodeNotFoundException",
                 "Parent Class Exception": "NotFoundException",
                 "Folder": "node-template",
                 "Message": "\"\"",
                 "File": "nodes.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 17,
                 "Number of the Exception in Category": 10,
                 "Colonne1": "node",
                 "Index of Exception": 2,
                 "Final_category": 10,
                 "Sub_category": 8,
                 "numerotation": 11
               },
               {
                 "Controller": "pas de controller dans incoming-message",
                 "Exception": "BotNotFoundException",
                 "Parent Class Exception": "NotFoundException",
                 "Folder": "incoming-messages",
                 "Message": "\"\"",
                 "File": "incoming-message.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 10,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "incoming",
                 "Index of Exception": 1,
                 "Final_category": 10,
                 "Sub_category": 9,
                 "numerotation": 1
               },
               {
                 "Controller": "pas de controller dans incoming-message",
                 "Exception": "NodeNotFoundException",
                 "Parent Class Exception": "NotFoundException",
                 "Folder": "incoming-messages",
                 "Message": "\"\"",
                 "File": "incoming-message.service.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 10,
                 "Number of the Exception in Category": 2,
                 "Colonne1": "incoming",
                 "Index of Exception": 1,
                 "Final_category": 10,
                 "Sub_category": 9,
                 "numerotation": 2
               },
               {
                 "Controller": "bot.controller.ts",
                 "Exception": "InvalidBotTokenException",
                 "Parent Class Exception": "UnauthorizedException",
                 "Folder": "ressources/bots",
                 "Message": "\"\"",
                 "File": "bots.services.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 15,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "bot",
                 "Index of Exception": 1,
                 "Final_category": 11,
                 "Sub_category": 1,
                 "numerotation": 1
               },
               {
                 "Exception": "UserCreationException",
                 "Parent Class Exception": "PreconditionFailedException ",
                 "Folder": "user",
                 "Message": "Invalid email",
                 "File": "user.services.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 40,
                 "Colonne1": "user",
                 "Final_category": 40,
                 "Sub_category": 1,
                 "numerotation": 1
               },
               {
                 "Exception": "UserCreationException",
                 "Parent Class Exception": "PreconditionFailedException ",
                 "Folder": "user",
                 "Message": "Provided email is already in use",
                 "File": "user.services.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 40,
                 "Colonne1": "user",
                 "Final_category": 40,
                 "Sub_category": 1,
                 "numerotation": 2
               },
               {
                 "Exception": "UserCreationException",
                 "Parent Class Exception": "PreconditionFailedException ",
                 "Folder": "user",
                 "Message": "New Password cannot be one of the previously used passwords",
                 "File": "user.services.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 40,
                 "Colonne1": "user",
                 "Final_category": 40,
                 "Sub_category": 1,
                 "numerotation": 3
               },
               {
                 "Parent Class Exception": "PreconditionFailedException ",
                 "Folder": "user",
                 "Message": "This password cannot be used",
                 "File": "user.services.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 40,
                 "Colonne1": "user",
                 "Final_category": 40,
                 "Sub_category": 1,
                 "numerotation": 4
               },
               {
                 "Exception": "ForbiddenException",
                 "Parent Class Exception": "HttpException",
                 "Folder": "user",
                 "Message": "User is not authorized to execute this action",
                 "File": "user.services.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 40,
                 "Colonne1": "user",
                 "Final_category": 40,
                 "Sub_category": 2,
                 "numerotation": 1
               },
               {
                 "Controller": "user.controller.ts",
                 "Exception": "UnauthorizedException",
                 "Parent Class Exception": "HttpException",
                 "Folder": "user",
                 "Message": "\"\"",
                 "File": "user.services.ts",
                 "Type Exception": "leve exception",
                 "Nummber of Category": 40,
                 "Number of the Exception in Category": 1,
                 "Colonne1": "user",
                 "Index of Exception": 1,
                 "Final_category": 40,
                 "Sub_category": 3,
                 "numerotation": 1
               }
             ]
           
             let exception=[];
            


             let strarray=str.split("\n");

             let repet=false;
             let repet2="";
             
             strarray.forEach(element => {
                 repet2=element;
                dataobject.forEach(tableau=>{
             
                 
               if(element.indexOf("src")!==-1 && element.split("\\")[(element.split("\\").length-2)].indexOf(tableau.Folder)!==-1){
                   
                     console.log("--------------------------------------");
                         console.log("\n/////////////////////"+element.split("\\")[(element.split("\\").length-3)]+"\\"+element.split("\\")[(element.split("\\").length-2)]+"\\"+element.split("\\")[(element.split("\\").length-1)]);
                         console.log("Dossier parentn n-2: "+element.split("\\")[(element.split("\\").length-3)]);
                         console.log("Dossier n-1 : "+element.split("\\")[(element.split("\\").length-2)]);
                         console.log("Fichier: "+element.split("\\")[(element.split("\\").length-1)]);
               
                     }
                 else if( element.indexOf("Exception")!==-1){ 
                 
             
                     
                     if(element.split('("')[1]!==undefined&&element.split('("')[1].split('")')[0]!==undefined){  
                      
                         if(element.split('("')[1].split('")')[0].toLowerCase().indexOf((tableau.Message+"").toLowerCase())!==-1){
                                console.log("Ligne Exception: "+element);
                     console.log("Message: "+element.split('("')[1].split('")')[0]===""?"Tableau code: "+tableau.Final_category+" , "+tableau.Sub_category+","+tableau.numerotation+" "+ tableau.Message +" Message: "+element.split('("')[1].split('")')[0]:"Tableau code: "+tableau.Final_category+" , "+tableau.Sub_category+","+tableau.numerotation+" "+ tableau.Message +" Message: "+element.split('("')[1].split('")')[0]);
               
                           exception.push("Tableau code: "+tableau.Final_category+" , "+tableau.Sub_category+","+tableau.numerotation+" "+ tableau.Message +" Message: "+element.split('("')[1].split('")')[0]);
                    
                 }
                 else{
if(repet2===element){
                           console.log("!!!!!!"+element);
                           repet2="";
                       }
                     
                 }
                 
                     }
             
                      else if(element.split("('")[1]!==undefined&&element.split("('")[1].split("')")[0]!==undefined){
                         if(element.split("('")[1].split("')")[0].toLowerCase().indexOf(((tableau.Message)+"").toLowerCase())!==-1){
                             console.log("Ligne Exception: "+element);
                         console.log("Message: "+element.split("('")[1].split("')")[0]===""?"Tableau: "+tableau.Final_category+" , "+tableau.Sub_category+","+tableau.numerotation+" " +tableau.Message+"Message: "+element.split("('")[1].split("')")[0]:"Tableau: "+tableau.Final_category+" , "+tableau.Sub_category+","+tableau.numerotation+" " +tableau.Message+"Message: "+element.split("('")[1].split("')")[0]);
                         exception.push("Tableau: "+tableau.Final_category+" , "+tableau.Sub_category+","+tableau.numerotation+" " +tableau.Message+"Message: "+element.split("('")[1].split("')")[0])
                           
                     }
                     else{
                           if(repet2===element){
                               console.log("!!!!!!!!!!!"+element);
                               repet2="";
                           }
                         }
                         
             
                         }
                         else{
                       
                               if(repet2===element){
                                  // console.log("element : "+element);
                                   repet2="";
                               }
                             
                         }
                         
                     }
                 })
              })
           