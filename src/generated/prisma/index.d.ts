
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Otp
 * 
 */
export type Otp = $Result.DefaultSelection<Prisma.$OtpPayload>
/**
 * Model Charity
 * 
 */
export type Charity = $Result.DefaultSelection<Prisma.$CharityPayload>
/**
 * Model CharityImage
 * 
 */
export type CharityImage = $Result.DefaultSelection<Prisma.$CharityImagePayload>
/**
 * Model UserCharity
 * 
 */
export type UserCharity = $Result.DefaultSelection<Prisma.$UserCharityPayload>
/**
 * Model GolfScore
 * 
 */
export type GolfScore = $Result.DefaultSelection<Prisma.$GolfScorePayload>
/**
 * Model SubscriptionModel
 * 
 */
export type SubscriptionModel = $Result.DefaultSelection<Prisma.$SubscriptionModelPayload>
/**
 * Model SubscriptionOrder
 * 
 */
export type SubscriptionOrder = $Result.DefaultSelection<Prisma.$SubscriptionOrderPayload>
/**
 * Model Draw
 * 
 */
export type Draw = $Result.DefaultSelection<Prisma.$DrawPayload>
/**
 * Model Winner
 * 
 */
export type Winner = $Result.DefaultSelection<Prisma.$WinnerPayload>
/**
 * Model Participant
 * 
 */
export type Participant = $Result.DefaultSelection<Prisma.$ParticipantPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const PaymentStatus: {
  PENDING: 'PENDING',
  PROCESSING: 'PROCESSING',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED',
  REFUNDED: 'REFUNDED',
  CANCELLED: 'CANCELLED',
  EXPIRED: 'EXPIRED'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]


export const PaymentGateway: {
  STRIPE: 'STRIPE',
  MANUAL: 'MANUAL'
};

export type PaymentGateway = (typeof PaymentGateway)[keyof typeof PaymentGateway]


export const UserRole: {
  VIEWER: 'VIEWER',
  ADMIN: 'ADMIN',
  SUBSCRIBER: 'SUBSCRIBER'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const AuthProvider: {
  EMAIL: 'EMAIL',
  GOOGLE: 'GOOGLE',
  FACEBOOK: 'FACEBOOK'
};

export type AuthProvider = (typeof AuthProvider)[keyof typeof AuthProvider]


export const CharityContributionType: {
  SUBSCRIPTION_PERCENTAGE: 'SUBSCRIPTION_PERCENTAGE',
  INDEPENDENT_DONATION: 'INDEPENDENT_DONATION'
};

export type CharityContributionType = (typeof CharityContributionType)[keyof typeof CharityContributionType]


export const CharityStatus: {
  PENDING: 'PENDING',
  PAID: 'PAID'
};

export type CharityStatus = (typeof CharityStatus)[keyof typeof CharityStatus]


export const DrawStatus: {
  active: 'active',
  completed: 'completed',
  cancelled: 'cancelled'
};

export type DrawStatus = (typeof DrawStatus)[keyof typeof DrawStatus]


export const WinnerType: {
  fiveMatch: 'fiveMatch',
  fourMatch: 'fourMatch',
  threeMatch: 'threeMatch'
};

export type WinnerType = (typeof WinnerType)[keyof typeof WinnerType]


export const VerificationStatus: {
  pending: 'pending',
  approved: 'approved',
  rejected: 'rejected'
};

export type VerificationStatus = (typeof VerificationStatus)[keyof typeof VerificationStatus]


export const WinnerPaymentStatus: {
  pending: 'pending',
  paid: 'paid',
  failed: 'failed'
};

export type WinnerPaymentStatus = (typeof WinnerPaymentStatus)[keyof typeof WinnerPaymentStatus]

}

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

export type PaymentGateway = $Enums.PaymentGateway

export const PaymentGateway: typeof $Enums.PaymentGateway

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type AuthProvider = $Enums.AuthProvider

export const AuthProvider: typeof $Enums.AuthProvider

export type CharityContributionType = $Enums.CharityContributionType

export const CharityContributionType: typeof $Enums.CharityContributionType

export type CharityStatus = $Enums.CharityStatus

export const CharityStatus: typeof $Enums.CharityStatus

export type DrawStatus = $Enums.DrawStatus

export const DrawStatus: typeof $Enums.DrawStatus

export type WinnerType = $Enums.WinnerType

export const WinnerType: typeof $Enums.WinnerType

export type VerificationStatus = $Enums.VerificationStatus

export const VerificationStatus: typeof $Enums.VerificationStatus

export type WinnerPaymentStatus = $Enums.WinnerPaymentStatus

export const WinnerPaymentStatus: typeof $Enums.WinnerPaymentStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.otp`: Exposes CRUD operations for the **Otp** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Otps
    * const otps = await prisma.otp.findMany()
    * ```
    */
  get otp(): Prisma.OtpDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.charity`: Exposes CRUD operations for the **Charity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Charities
    * const charities = await prisma.charity.findMany()
    * ```
    */
  get charity(): Prisma.CharityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.charityImage`: Exposes CRUD operations for the **CharityImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CharityImages
    * const charityImages = await prisma.charityImage.findMany()
    * ```
    */
  get charityImage(): Prisma.CharityImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userCharity`: Exposes CRUD operations for the **UserCharity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserCharities
    * const userCharities = await prisma.userCharity.findMany()
    * ```
    */
  get userCharity(): Prisma.UserCharityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.golfScore`: Exposes CRUD operations for the **GolfScore** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GolfScores
    * const golfScores = await prisma.golfScore.findMany()
    * ```
    */
  get golfScore(): Prisma.GolfScoreDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subscriptionModel`: Exposes CRUD operations for the **SubscriptionModel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SubscriptionModels
    * const subscriptionModels = await prisma.subscriptionModel.findMany()
    * ```
    */
  get subscriptionModel(): Prisma.SubscriptionModelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subscriptionOrder`: Exposes CRUD operations for the **SubscriptionOrder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SubscriptionOrders
    * const subscriptionOrders = await prisma.subscriptionOrder.findMany()
    * ```
    */
  get subscriptionOrder(): Prisma.SubscriptionOrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.draw`: Exposes CRUD operations for the **Draw** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Draws
    * const draws = await prisma.draw.findMany()
    * ```
    */
  get draw(): Prisma.DrawDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.winner`: Exposes CRUD operations for the **Winner** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Winners
    * const winners = await prisma.winner.findMany()
    * ```
    */
  get winner(): Prisma.WinnerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.participant`: Exposes CRUD operations for the **Participant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Participants
    * const participants = await prisma.participant.findMany()
    * ```
    */
  get participant(): Prisma.ParticipantDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.7.0
   * Query Engine version: 75cbdc1eb7150937890ad5465d861175c6624711
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Otp: 'Otp',
    Charity: 'Charity',
    CharityImage: 'CharityImage',
    UserCharity: 'UserCharity',
    GolfScore: 'GolfScore',
    SubscriptionModel: 'SubscriptionModel',
    SubscriptionOrder: 'SubscriptionOrder',
    Draw: 'Draw',
    Winner: 'Winner',
    Participant: 'Participant'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "otp" | "charity" | "charityImage" | "userCharity" | "golfScore" | "subscriptionModel" | "subscriptionOrder" | "draw" | "winner" | "participant"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Otp: {
        payload: Prisma.$OtpPayload<ExtArgs>
        fields: Prisma.OtpFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OtpFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OtpFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>
          }
          findFirst: {
            args: Prisma.OtpFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OtpFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>
          }
          findMany: {
            args: Prisma.OtpFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>[]
          }
          create: {
            args: Prisma.OtpCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>
          }
          createMany: {
            args: Prisma.OtpCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OtpCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>[]
          }
          delete: {
            args: Prisma.OtpDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>
          }
          update: {
            args: Prisma.OtpUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>
          }
          deleteMany: {
            args: Prisma.OtpDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OtpUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OtpUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>[]
          }
          upsert: {
            args: Prisma.OtpUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>
          }
          aggregate: {
            args: Prisma.OtpAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOtp>
          }
          groupBy: {
            args: Prisma.OtpGroupByArgs<ExtArgs>
            result: $Utils.Optional<OtpGroupByOutputType>[]
          }
          count: {
            args: Prisma.OtpCountArgs<ExtArgs>
            result: $Utils.Optional<OtpCountAggregateOutputType> | number
          }
        }
      }
      Charity: {
        payload: Prisma.$CharityPayload<ExtArgs>
        fields: Prisma.CharityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CharityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CharityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharityPayload>
          }
          findFirst: {
            args: Prisma.CharityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CharityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharityPayload>
          }
          findMany: {
            args: Prisma.CharityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharityPayload>[]
          }
          create: {
            args: Prisma.CharityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharityPayload>
          }
          createMany: {
            args: Prisma.CharityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CharityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharityPayload>[]
          }
          delete: {
            args: Prisma.CharityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharityPayload>
          }
          update: {
            args: Prisma.CharityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharityPayload>
          }
          deleteMany: {
            args: Prisma.CharityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CharityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CharityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharityPayload>[]
          }
          upsert: {
            args: Prisma.CharityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharityPayload>
          }
          aggregate: {
            args: Prisma.CharityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCharity>
          }
          groupBy: {
            args: Prisma.CharityGroupByArgs<ExtArgs>
            result: $Utils.Optional<CharityGroupByOutputType>[]
          }
          count: {
            args: Prisma.CharityCountArgs<ExtArgs>
            result: $Utils.Optional<CharityCountAggregateOutputType> | number
          }
        }
      }
      CharityImage: {
        payload: Prisma.$CharityImagePayload<ExtArgs>
        fields: Prisma.CharityImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CharityImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharityImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CharityImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharityImagePayload>
          }
          findFirst: {
            args: Prisma.CharityImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharityImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CharityImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharityImagePayload>
          }
          findMany: {
            args: Prisma.CharityImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharityImagePayload>[]
          }
          create: {
            args: Prisma.CharityImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharityImagePayload>
          }
          createMany: {
            args: Prisma.CharityImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CharityImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharityImagePayload>[]
          }
          delete: {
            args: Prisma.CharityImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharityImagePayload>
          }
          update: {
            args: Prisma.CharityImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharityImagePayload>
          }
          deleteMany: {
            args: Prisma.CharityImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CharityImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CharityImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharityImagePayload>[]
          }
          upsert: {
            args: Prisma.CharityImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharityImagePayload>
          }
          aggregate: {
            args: Prisma.CharityImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCharityImage>
          }
          groupBy: {
            args: Prisma.CharityImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<CharityImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.CharityImageCountArgs<ExtArgs>
            result: $Utils.Optional<CharityImageCountAggregateOutputType> | number
          }
        }
      }
      UserCharity: {
        payload: Prisma.$UserCharityPayload<ExtArgs>
        fields: Prisma.UserCharityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserCharityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCharityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserCharityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCharityPayload>
          }
          findFirst: {
            args: Prisma.UserCharityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCharityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserCharityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCharityPayload>
          }
          findMany: {
            args: Prisma.UserCharityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCharityPayload>[]
          }
          create: {
            args: Prisma.UserCharityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCharityPayload>
          }
          createMany: {
            args: Prisma.UserCharityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCharityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCharityPayload>[]
          }
          delete: {
            args: Prisma.UserCharityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCharityPayload>
          }
          update: {
            args: Prisma.UserCharityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCharityPayload>
          }
          deleteMany: {
            args: Prisma.UserCharityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserCharityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserCharityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCharityPayload>[]
          }
          upsert: {
            args: Prisma.UserCharityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCharityPayload>
          }
          aggregate: {
            args: Prisma.UserCharityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserCharity>
          }
          groupBy: {
            args: Prisma.UserCharityGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserCharityGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCharityCountArgs<ExtArgs>
            result: $Utils.Optional<UserCharityCountAggregateOutputType> | number
          }
        }
      }
      GolfScore: {
        payload: Prisma.$GolfScorePayload<ExtArgs>
        fields: Prisma.GolfScoreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GolfScoreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GolfScorePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GolfScoreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GolfScorePayload>
          }
          findFirst: {
            args: Prisma.GolfScoreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GolfScorePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GolfScoreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GolfScorePayload>
          }
          findMany: {
            args: Prisma.GolfScoreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GolfScorePayload>[]
          }
          create: {
            args: Prisma.GolfScoreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GolfScorePayload>
          }
          createMany: {
            args: Prisma.GolfScoreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GolfScoreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GolfScorePayload>[]
          }
          delete: {
            args: Prisma.GolfScoreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GolfScorePayload>
          }
          update: {
            args: Prisma.GolfScoreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GolfScorePayload>
          }
          deleteMany: {
            args: Prisma.GolfScoreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GolfScoreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GolfScoreUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GolfScorePayload>[]
          }
          upsert: {
            args: Prisma.GolfScoreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GolfScorePayload>
          }
          aggregate: {
            args: Prisma.GolfScoreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGolfScore>
          }
          groupBy: {
            args: Prisma.GolfScoreGroupByArgs<ExtArgs>
            result: $Utils.Optional<GolfScoreGroupByOutputType>[]
          }
          count: {
            args: Prisma.GolfScoreCountArgs<ExtArgs>
            result: $Utils.Optional<GolfScoreCountAggregateOutputType> | number
          }
        }
      }
      SubscriptionModel: {
        payload: Prisma.$SubscriptionModelPayload<ExtArgs>
        fields: Prisma.SubscriptionModelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubscriptionModelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionModelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubscriptionModelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionModelPayload>
          }
          findFirst: {
            args: Prisma.SubscriptionModelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionModelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubscriptionModelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionModelPayload>
          }
          findMany: {
            args: Prisma.SubscriptionModelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionModelPayload>[]
          }
          create: {
            args: Prisma.SubscriptionModelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionModelPayload>
          }
          createMany: {
            args: Prisma.SubscriptionModelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubscriptionModelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionModelPayload>[]
          }
          delete: {
            args: Prisma.SubscriptionModelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionModelPayload>
          }
          update: {
            args: Prisma.SubscriptionModelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionModelPayload>
          }
          deleteMany: {
            args: Prisma.SubscriptionModelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubscriptionModelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubscriptionModelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionModelPayload>[]
          }
          upsert: {
            args: Prisma.SubscriptionModelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionModelPayload>
          }
          aggregate: {
            args: Prisma.SubscriptionModelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubscriptionModel>
          }
          groupBy: {
            args: Prisma.SubscriptionModelGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionModelGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubscriptionModelCountArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionModelCountAggregateOutputType> | number
          }
        }
      }
      SubscriptionOrder: {
        payload: Prisma.$SubscriptionOrderPayload<ExtArgs>
        fields: Prisma.SubscriptionOrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubscriptionOrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionOrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubscriptionOrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionOrderPayload>
          }
          findFirst: {
            args: Prisma.SubscriptionOrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionOrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubscriptionOrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionOrderPayload>
          }
          findMany: {
            args: Prisma.SubscriptionOrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionOrderPayload>[]
          }
          create: {
            args: Prisma.SubscriptionOrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionOrderPayload>
          }
          createMany: {
            args: Prisma.SubscriptionOrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubscriptionOrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionOrderPayload>[]
          }
          delete: {
            args: Prisma.SubscriptionOrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionOrderPayload>
          }
          update: {
            args: Prisma.SubscriptionOrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionOrderPayload>
          }
          deleteMany: {
            args: Prisma.SubscriptionOrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubscriptionOrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubscriptionOrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionOrderPayload>[]
          }
          upsert: {
            args: Prisma.SubscriptionOrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionOrderPayload>
          }
          aggregate: {
            args: Prisma.SubscriptionOrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubscriptionOrder>
          }
          groupBy: {
            args: Prisma.SubscriptionOrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionOrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubscriptionOrderCountArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionOrderCountAggregateOutputType> | number
          }
        }
      }
      Draw: {
        payload: Prisma.$DrawPayload<ExtArgs>
        fields: Prisma.DrawFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DrawFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrawPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DrawFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrawPayload>
          }
          findFirst: {
            args: Prisma.DrawFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrawPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DrawFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrawPayload>
          }
          findMany: {
            args: Prisma.DrawFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrawPayload>[]
          }
          create: {
            args: Prisma.DrawCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrawPayload>
          }
          createMany: {
            args: Prisma.DrawCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DrawCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrawPayload>[]
          }
          delete: {
            args: Prisma.DrawDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrawPayload>
          }
          update: {
            args: Prisma.DrawUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrawPayload>
          }
          deleteMany: {
            args: Prisma.DrawDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DrawUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DrawUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrawPayload>[]
          }
          upsert: {
            args: Prisma.DrawUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrawPayload>
          }
          aggregate: {
            args: Prisma.DrawAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDraw>
          }
          groupBy: {
            args: Prisma.DrawGroupByArgs<ExtArgs>
            result: $Utils.Optional<DrawGroupByOutputType>[]
          }
          count: {
            args: Prisma.DrawCountArgs<ExtArgs>
            result: $Utils.Optional<DrawCountAggregateOutputType> | number
          }
        }
      }
      Winner: {
        payload: Prisma.$WinnerPayload<ExtArgs>
        fields: Prisma.WinnerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WinnerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WinnerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WinnerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WinnerPayload>
          }
          findFirst: {
            args: Prisma.WinnerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WinnerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WinnerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WinnerPayload>
          }
          findMany: {
            args: Prisma.WinnerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WinnerPayload>[]
          }
          create: {
            args: Prisma.WinnerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WinnerPayload>
          }
          createMany: {
            args: Prisma.WinnerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WinnerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WinnerPayload>[]
          }
          delete: {
            args: Prisma.WinnerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WinnerPayload>
          }
          update: {
            args: Prisma.WinnerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WinnerPayload>
          }
          deleteMany: {
            args: Prisma.WinnerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WinnerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WinnerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WinnerPayload>[]
          }
          upsert: {
            args: Prisma.WinnerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WinnerPayload>
          }
          aggregate: {
            args: Prisma.WinnerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWinner>
          }
          groupBy: {
            args: Prisma.WinnerGroupByArgs<ExtArgs>
            result: $Utils.Optional<WinnerGroupByOutputType>[]
          }
          count: {
            args: Prisma.WinnerCountArgs<ExtArgs>
            result: $Utils.Optional<WinnerCountAggregateOutputType> | number
          }
        }
      }
      Participant: {
        payload: Prisma.$ParticipantPayload<ExtArgs>
        fields: Prisma.ParticipantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParticipantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParticipantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>
          }
          findFirst: {
            args: Prisma.ParticipantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParticipantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>
          }
          findMany: {
            args: Prisma.ParticipantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>[]
          }
          create: {
            args: Prisma.ParticipantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>
          }
          createMany: {
            args: Prisma.ParticipantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ParticipantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>[]
          }
          delete: {
            args: Prisma.ParticipantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>
          }
          update: {
            args: Prisma.ParticipantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>
          }
          deleteMany: {
            args: Prisma.ParticipantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParticipantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ParticipantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>[]
          }
          upsert: {
            args: Prisma.ParticipantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>
          }
          aggregate: {
            args: Prisma.ParticipantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParticipant>
          }
          groupBy: {
            args: Prisma.ParticipantGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParticipantGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParticipantCountArgs<ExtArgs>
            result: $Utils.Optional<ParticipantCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    otp?: OtpOmit
    charity?: CharityOmit
    charityImage?: CharityImageOmit
    userCharity?: UserCharityOmit
    golfScore?: GolfScoreOmit
    subscriptionModel?: SubscriptionModelOmit
    subscriptionOrder?: SubscriptionOrderOmit
    draw?: DrawOmit
    winner?: WinnerOmit
    participant?: ParticipantOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    scores: number
    userCharities: number
    subcriptions: number
    draws: number
    winners: number
    participants: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scores?: boolean | UserCountOutputTypeCountScoresArgs
    userCharities?: boolean | UserCountOutputTypeCountUserCharitiesArgs
    subcriptions?: boolean | UserCountOutputTypeCountSubcriptionsArgs
    draws?: boolean | UserCountOutputTypeCountDrawsArgs
    winners?: boolean | UserCountOutputTypeCountWinnersArgs
    participants?: boolean | UserCountOutputTypeCountParticipantsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountScoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GolfScoreWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserCharitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserCharityWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSubcriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionOrderWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDrawsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DrawWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWinnersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WinnerWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountParticipantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParticipantWhereInput
  }


  /**
   * Count Type CharityCountOutputType
   */

  export type CharityCountOutputType = {
    images: number
    userCharities: number
  }

  export type CharityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | CharityCountOutputTypeCountImagesArgs
    userCharities?: boolean | CharityCountOutputTypeCountUserCharitiesArgs
  }

  // Custom InputTypes
  /**
   * CharityCountOutputType without action
   */
  export type CharityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharityCountOutputType
     */
    select?: CharityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CharityCountOutputType without action
   */
  export type CharityCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CharityImageWhereInput
  }

  /**
   * CharityCountOutputType without action
   */
  export type CharityCountOutputTypeCountUserCharitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserCharityWhereInput
  }


  /**
   * Count Type SubscriptionModelCountOutputType
   */

  export type SubscriptionModelCountOutputType = {
    subscriptionOrders: number
  }

  export type SubscriptionModelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscriptionOrders?: boolean | SubscriptionModelCountOutputTypeCountSubscriptionOrdersArgs
  }

  // Custom InputTypes
  /**
   * SubscriptionModelCountOutputType without action
   */
  export type SubscriptionModelCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionModelCountOutputType
     */
    select?: SubscriptionModelCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubscriptionModelCountOutputType without action
   */
  export type SubscriptionModelCountOutputTypeCountSubscriptionOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionOrderWhereInput
  }


  /**
   * Count Type SubscriptionOrderCountOutputType
   */

  export type SubscriptionOrderCountOutputType = {
    userCharities: number
  }

  export type SubscriptionOrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userCharities?: boolean | SubscriptionOrderCountOutputTypeCountUserCharitiesArgs
  }

  // Custom InputTypes
  /**
   * SubscriptionOrderCountOutputType without action
   */
  export type SubscriptionOrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionOrderCountOutputType
     */
    select?: SubscriptionOrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubscriptionOrderCountOutputType without action
   */
  export type SubscriptionOrderCountOutputTypeCountUserCharitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserCharityWhereInput
  }


  /**
   * Count Type DrawCountOutputType
   */

  export type DrawCountOutputType = {
    rolledOverTo: number
    winners: number
    participants: number
  }

  export type DrawCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rolledOverTo?: boolean | DrawCountOutputTypeCountRolledOverToArgs
    winners?: boolean | DrawCountOutputTypeCountWinnersArgs
    participants?: boolean | DrawCountOutputTypeCountParticipantsArgs
  }

  // Custom InputTypes
  /**
   * DrawCountOutputType without action
   */
  export type DrawCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrawCountOutputType
     */
    select?: DrawCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DrawCountOutputType without action
   */
  export type DrawCountOutputTypeCountRolledOverToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DrawWhereInput
  }

  /**
   * DrawCountOutputType without action
   */
  export type DrawCountOutputTypeCountWinnersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WinnerWhereInput
  }

  /**
   * DrawCountOutputType without action
   */
  export type DrawCountOutputTypeCountParticipantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParticipantWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    loginAttempts: number | null
  }

  export type UserSumAggregateOutputType = {
    loginAttempts: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    publicId: string | null
    email: string | null
    password: string | null
    role: $Enums.UserRole | null
    authProvider: $Enums.AuthProvider | null
    googleId: string | null
    resetPasswordToken: string | null
    resetPasswordTokenExpires: Date | null
    twoFactorSecret: string | null
    twoFactorEnabled: boolean | null
    profilePicture: string | null
    userName: string | null
    firstName: string | null
    lastName: string | null
    phoneNumber: string | null
    dateOfBirth: Date | null
    lastLoginAt: Date | null
    lastLoginIp: string | null
    loginAttempts: number | null
    lockedUntil: Date | null
    isActive: boolean | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    publicId: string | null
    email: string | null
    password: string | null
    role: $Enums.UserRole | null
    authProvider: $Enums.AuthProvider | null
    googleId: string | null
    resetPasswordToken: string | null
    resetPasswordTokenExpires: Date | null
    twoFactorSecret: string | null
    twoFactorEnabled: boolean | null
    profilePicture: string | null
    userName: string | null
    firstName: string | null
    lastName: string | null
    phoneNumber: string | null
    dateOfBirth: Date | null
    lastLoginAt: Date | null
    lastLoginIp: string | null
    loginAttempts: number | null
    lockedUntil: Date | null
    isActive: boolean | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    publicId: number
    email: number
    password: number
    role: number
    authProvider: number
    googleId: number
    resetPasswordToken: number
    resetPasswordTokenExpires: number
    twoFactorSecret: number
    twoFactorEnabled: number
    profilePicture: number
    userName: number
    firstName: number
    lastName: number
    phoneNumber: number
    dateOfBirth: number
    lastLoginAt: number
    lastLoginIp: number
    loginAttempts: number
    lockedUntil: number
    isActive: number
    deletedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    loginAttempts?: true
  }

  export type UserSumAggregateInputType = {
    loginAttempts?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    publicId?: true
    email?: true
    password?: true
    role?: true
    authProvider?: true
    googleId?: true
    resetPasswordToken?: true
    resetPasswordTokenExpires?: true
    twoFactorSecret?: true
    twoFactorEnabled?: true
    profilePicture?: true
    userName?: true
    firstName?: true
    lastName?: true
    phoneNumber?: true
    dateOfBirth?: true
    lastLoginAt?: true
    lastLoginIp?: true
    loginAttempts?: true
    lockedUntil?: true
    isActive?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    publicId?: true
    email?: true
    password?: true
    role?: true
    authProvider?: true
    googleId?: true
    resetPasswordToken?: true
    resetPasswordTokenExpires?: true
    twoFactorSecret?: true
    twoFactorEnabled?: true
    profilePicture?: true
    userName?: true
    firstName?: true
    lastName?: true
    phoneNumber?: true
    dateOfBirth?: true
    lastLoginAt?: true
    lastLoginIp?: true
    loginAttempts?: true
    lockedUntil?: true
    isActive?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    publicId?: true
    email?: true
    password?: true
    role?: true
    authProvider?: true
    googleId?: true
    resetPasswordToken?: true
    resetPasswordTokenExpires?: true
    twoFactorSecret?: true
    twoFactorEnabled?: true
    profilePicture?: true
    userName?: true
    firstName?: true
    lastName?: true
    phoneNumber?: true
    dateOfBirth?: true
    lastLoginAt?: true
    lastLoginIp?: true
    loginAttempts?: true
    lockedUntil?: true
    isActive?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    publicId: string
    email: string
    password: string | null
    role: $Enums.UserRole
    authProvider: $Enums.AuthProvider
    googleId: string | null
    resetPasswordToken: string | null
    resetPasswordTokenExpires: Date | null
    twoFactorSecret: string | null
    twoFactorEnabled: boolean
    profilePicture: string | null
    userName: string
    firstName: string | null
    lastName: string | null
    phoneNumber: string | null
    dateOfBirth: Date | null
    lastLoginAt: Date | null
    lastLoginIp: string | null
    loginAttempts: number
    lockedUntil: Date | null
    isActive: boolean
    deletedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    publicId?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    authProvider?: boolean
    googleId?: boolean
    resetPasswordToken?: boolean
    resetPasswordTokenExpires?: boolean
    twoFactorSecret?: boolean
    twoFactorEnabled?: boolean
    profilePicture?: boolean
    userName?: boolean
    firstName?: boolean
    lastName?: boolean
    phoneNumber?: boolean
    dateOfBirth?: boolean
    lastLoginAt?: boolean
    lastLoginIp?: boolean
    loginAttempts?: boolean
    lockedUntil?: boolean
    isActive?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    scores?: boolean | User$scoresArgs<ExtArgs>
    userCharities?: boolean | User$userCharitiesArgs<ExtArgs>
    subcriptions?: boolean | User$subcriptionsArgs<ExtArgs>
    draws?: boolean | User$drawsArgs<ExtArgs>
    winners?: boolean | User$winnersArgs<ExtArgs>
    participants?: boolean | User$participantsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    publicId?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    authProvider?: boolean
    googleId?: boolean
    resetPasswordToken?: boolean
    resetPasswordTokenExpires?: boolean
    twoFactorSecret?: boolean
    twoFactorEnabled?: boolean
    profilePicture?: boolean
    userName?: boolean
    firstName?: boolean
    lastName?: boolean
    phoneNumber?: boolean
    dateOfBirth?: boolean
    lastLoginAt?: boolean
    lastLoginIp?: boolean
    loginAttempts?: boolean
    lockedUntil?: boolean
    isActive?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    publicId?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    authProvider?: boolean
    googleId?: boolean
    resetPasswordToken?: boolean
    resetPasswordTokenExpires?: boolean
    twoFactorSecret?: boolean
    twoFactorEnabled?: boolean
    profilePicture?: boolean
    userName?: boolean
    firstName?: boolean
    lastName?: boolean
    phoneNumber?: boolean
    dateOfBirth?: boolean
    lastLoginAt?: boolean
    lastLoginIp?: boolean
    loginAttempts?: boolean
    lockedUntil?: boolean
    isActive?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    publicId?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    authProvider?: boolean
    googleId?: boolean
    resetPasswordToken?: boolean
    resetPasswordTokenExpires?: boolean
    twoFactorSecret?: boolean
    twoFactorEnabled?: boolean
    profilePicture?: boolean
    userName?: boolean
    firstName?: boolean
    lastName?: boolean
    phoneNumber?: boolean
    dateOfBirth?: boolean
    lastLoginAt?: boolean
    lastLoginIp?: boolean
    loginAttempts?: boolean
    lockedUntil?: boolean
    isActive?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "publicId" | "email" | "password" | "role" | "authProvider" | "googleId" | "resetPasswordToken" | "resetPasswordTokenExpires" | "twoFactorSecret" | "twoFactorEnabled" | "profilePicture" | "userName" | "firstName" | "lastName" | "phoneNumber" | "dateOfBirth" | "lastLoginAt" | "lastLoginIp" | "loginAttempts" | "lockedUntil" | "isActive" | "deletedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scores?: boolean | User$scoresArgs<ExtArgs>
    userCharities?: boolean | User$userCharitiesArgs<ExtArgs>
    subcriptions?: boolean | User$subcriptionsArgs<ExtArgs>
    draws?: boolean | User$drawsArgs<ExtArgs>
    winners?: boolean | User$winnersArgs<ExtArgs>
    participants?: boolean | User$participantsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      scores: Prisma.$GolfScorePayload<ExtArgs>[]
      userCharities: Prisma.$UserCharityPayload<ExtArgs>[]
      subcriptions: Prisma.$SubscriptionOrderPayload<ExtArgs>[]
      draws: Prisma.$DrawPayload<ExtArgs>[]
      winners: Prisma.$WinnerPayload<ExtArgs>[]
      participants: Prisma.$ParticipantPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      publicId: string
      email: string
      password: string | null
      role: $Enums.UserRole
      authProvider: $Enums.AuthProvider
      googleId: string | null
      resetPasswordToken: string | null
      resetPasswordTokenExpires: Date | null
      twoFactorSecret: string | null
      twoFactorEnabled: boolean
      profilePicture: string | null
      userName: string
      firstName: string | null
      lastName: string | null
      phoneNumber: string | null
      dateOfBirth: Date | null
      lastLoginAt: Date | null
      lastLoginIp: string | null
      loginAttempts: number
      lockedUntil: Date | null
      isActive: boolean
      deletedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    scores<T extends User$scoresArgs<ExtArgs> = {}>(args?: Subset<T, User$scoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GolfScorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userCharities<T extends User$userCharitiesArgs<ExtArgs> = {}>(args?: Subset<T, User$userCharitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCharityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    subcriptions<T extends User$subcriptionsArgs<ExtArgs> = {}>(args?: Subset<T, User$subcriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    draws<T extends User$drawsArgs<ExtArgs> = {}>(args?: Subset<T, User$drawsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DrawPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    winners<T extends User$winnersArgs<ExtArgs> = {}>(args?: Subset<T, User$winnersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WinnerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    participants<T extends User$participantsArgs<ExtArgs> = {}>(args?: Subset<T, User$participantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly publicId: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly authProvider: FieldRef<"User", 'AuthProvider'>
    readonly googleId: FieldRef<"User", 'String'>
    readonly resetPasswordToken: FieldRef<"User", 'String'>
    readonly resetPasswordTokenExpires: FieldRef<"User", 'DateTime'>
    readonly twoFactorSecret: FieldRef<"User", 'String'>
    readonly twoFactorEnabled: FieldRef<"User", 'Boolean'>
    readonly profilePicture: FieldRef<"User", 'String'>
    readonly userName: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly phoneNumber: FieldRef<"User", 'String'>
    readonly dateOfBirth: FieldRef<"User", 'DateTime'>
    readonly lastLoginAt: FieldRef<"User", 'DateTime'>
    readonly lastLoginIp: FieldRef<"User", 'String'>
    readonly loginAttempts: FieldRef<"User", 'Int'>
    readonly lockedUntil: FieldRef<"User", 'DateTime'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly deletedAt: FieldRef<"User", 'DateTime'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.scores
   */
  export type User$scoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GolfScore
     */
    select?: GolfScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GolfScore
     */
    omit?: GolfScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GolfScoreInclude<ExtArgs> | null
    where?: GolfScoreWhereInput
    orderBy?: GolfScoreOrderByWithRelationInput | GolfScoreOrderByWithRelationInput[]
    cursor?: GolfScoreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GolfScoreScalarFieldEnum | GolfScoreScalarFieldEnum[]
  }

  /**
   * User.userCharities
   */
  export type User$userCharitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCharity
     */
    select?: UserCharitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCharity
     */
    omit?: UserCharityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCharityInclude<ExtArgs> | null
    where?: UserCharityWhereInput
    orderBy?: UserCharityOrderByWithRelationInput | UserCharityOrderByWithRelationInput[]
    cursor?: UserCharityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserCharityScalarFieldEnum | UserCharityScalarFieldEnum[]
  }

  /**
   * User.subcriptions
   */
  export type User$subcriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionOrder
     */
    select?: SubscriptionOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionOrder
     */
    omit?: SubscriptionOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionOrderInclude<ExtArgs> | null
    where?: SubscriptionOrderWhereInput
    orderBy?: SubscriptionOrderOrderByWithRelationInput | SubscriptionOrderOrderByWithRelationInput[]
    cursor?: SubscriptionOrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubscriptionOrderScalarFieldEnum | SubscriptionOrderScalarFieldEnum[]
  }

  /**
   * User.draws
   */
  export type User$drawsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Draw
     */
    select?: DrawSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Draw
     */
    omit?: DrawOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrawInclude<ExtArgs> | null
    where?: DrawWhereInput
    orderBy?: DrawOrderByWithRelationInput | DrawOrderByWithRelationInput[]
    cursor?: DrawWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DrawScalarFieldEnum | DrawScalarFieldEnum[]
  }

  /**
   * User.winners
   */
  export type User$winnersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Winner
     */
    select?: WinnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Winner
     */
    omit?: WinnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WinnerInclude<ExtArgs> | null
    where?: WinnerWhereInput
    orderBy?: WinnerOrderByWithRelationInput | WinnerOrderByWithRelationInput[]
    cursor?: WinnerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WinnerScalarFieldEnum | WinnerScalarFieldEnum[]
  }

  /**
   * User.participants
   */
  export type User$participantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    where?: ParticipantWhereInput
    orderBy?: ParticipantOrderByWithRelationInput | ParticipantOrderByWithRelationInput[]
    cursor?: ParticipantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParticipantScalarFieldEnum | ParticipantScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Otp
   */

  export type AggregateOtp = {
    _count: OtpCountAggregateOutputType | null
    _min: OtpMinAggregateOutputType | null
    _max: OtpMaxAggregateOutputType | null
  }

  export type OtpMinAggregateOutputType = {
    id: string | null
    email: string | null
    otp: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type OtpMaxAggregateOutputType = {
    id: string | null
    email: string | null
    otp: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type OtpCountAggregateOutputType = {
    id: number
    email: number
    otp: number
    expiresAt: number
    createdAt: number
    _all: number
  }


  export type OtpMinAggregateInputType = {
    id?: true
    email?: true
    otp?: true
    expiresAt?: true
    createdAt?: true
  }

  export type OtpMaxAggregateInputType = {
    id?: true
    email?: true
    otp?: true
    expiresAt?: true
    createdAt?: true
  }

  export type OtpCountAggregateInputType = {
    id?: true
    email?: true
    otp?: true
    expiresAt?: true
    createdAt?: true
    _all?: true
  }

  export type OtpAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Otp to aggregate.
     */
    where?: OtpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Otps to fetch.
     */
    orderBy?: OtpOrderByWithRelationInput | OtpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OtpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Otps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Otps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Otps
    **/
    _count?: true | OtpCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OtpMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OtpMaxAggregateInputType
  }

  export type GetOtpAggregateType<T extends OtpAggregateArgs> = {
        [P in keyof T & keyof AggregateOtp]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOtp[P]>
      : GetScalarType<T[P], AggregateOtp[P]>
  }




  export type OtpGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OtpWhereInput
    orderBy?: OtpOrderByWithAggregationInput | OtpOrderByWithAggregationInput[]
    by: OtpScalarFieldEnum[] | OtpScalarFieldEnum
    having?: OtpScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OtpCountAggregateInputType | true
    _min?: OtpMinAggregateInputType
    _max?: OtpMaxAggregateInputType
  }

  export type OtpGroupByOutputType = {
    id: string
    email: string
    otp: string
    expiresAt: Date
    createdAt: Date
    _count: OtpCountAggregateOutputType | null
    _min: OtpMinAggregateOutputType | null
    _max: OtpMaxAggregateOutputType | null
  }

  type GetOtpGroupByPayload<T extends OtpGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OtpGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OtpGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OtpGroupByOutputType[P]>
            : GetScalarType<T[P], OtpGroupByOutputType[P]>
        }
      >
    >


  export type OtpSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    otp?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["otp"]>

  export type OtpSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    otp?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["otp"]>

  export type OtpSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    otp?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["otp"]>

  export type OtpSelectScalar = {
    id?: boolean
    email?: boolean
    otp?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }

  export type OtpOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "otp" | "expiresAt" | "createdAt", ExtArgs["result"]["otp"]>

  export type $OtpPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Otp"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      otp: string
      expiresAt: Date
      createdAt: Date
    }, ExtArgs["result"]["otp"]>
    composites: {}
  }

  type OtpGetPayload<S extends boolean | null | undefined | OtpDefaultArgs> = $Result.GetResult<Prisma.$OtpPayload, S>

  type OtpCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OtpFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OtpCountAggregateInputType | true
    }

  export interface OtpDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Otp'], meta: { name: 'Otp' } }
    /**
     * Find zero or one Otp that matches the filter.
     * @param {OtpFindUniqueArgs} args - Arguments to find a Otp
     * @example
     * // Get one Otp
     * const otp = await prisma.otp.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OtpFindUniqueArgs>(args: SelectSubset<T, OtpFindUniqueArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Otp that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OtpFindUniqueOrThrowArgs} args - Arguments to find a Otp
     * @example
     * // Get one Otp
     * const otp = await prisma.otp.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OtpFindUniqueOrThrowArgs>(args: SelectSubset<T, OtpFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Otp that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpFindFirstArgs} args - Arguments to find a Otp
     * @example
     * // Get one Otp
     * const otp = await prisma.otp.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OtpFindFirstArgs>(args?: SelectSubset<T, OtpFindFirstArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Otp that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpFindFirstOrThrowArgs} args - Arguments to find a Otp
     * @example
     * // Get one Otp
     * const otp = await prisma.otp.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OtpFindFirstOrThrowArgs>(args?: SelectSubset<T, OtpFindFirstOrThrowArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Otps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Otps
     * const otps = await prisma.otp.findMany()
     * 
     * // Get first 10 Otps
     * const otps = await prisma.otp.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const otpWithIdOnly = await prisma.otp.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OtpFindManyArgs>(args?: SelectSubset<T, OtpFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Otp.
     * @param {OtpCreateArgs} args - Arguments to create a Otp.
     * @example
     * // Create one Otp
     * const Otp = await prisma.otp.create({
     *   data: {
     *     // ... data to create a Otp
     *   }
     * })
     * 
     */
    create<T extends OtpCreateArgs>(args: SelectSubset<T, OtpCreateArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Otps.
     * @param {OtpCreateManyArgs} args - Arguments to create many Otps.
     * @example
     * // Create many Otps
     * const otp = await prisma.otp.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OtpCreateManyArgs>(args?: SelectSubset<T, OtpCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Otps and returns the data saved in the database.
     * @param {OtpCreateManyAndReturnArgs} args - Arguments to create many Otps.
     * @example
     * // Create many Otps
     * const otp = await prisma.otp.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Otps and only return the `id`
     * const otpWithIdOnly = await prisma.otp.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OtpCreateManyAndReturnArgs>(args?: SelectSubset<T, OtpCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Otp.
     * @param {OtpDeleteArgs} args - Arguments to delete one Otp.
     * @example
     * // Delete one Otp
     * const Otp = await prisma.otp.delete({
     *   where: {
     *     // ... filter to delete one Otp
     *   }
     * })
     * 
     */
    delete<T extends OtpDeleteArgs>(args: SelectSubset<T, OtpDeleteArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Otp.
     * @param {OtpUpdateArgs} args - Arguments to update one Otp.
     * @example
     * // Update one Otp
     * const otp = await prisma.otp.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OtpUpdateArgs>(args: SelectSubset<T, OtpUpdateArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Otps.
     * @param {OtpDeleteManyArgs} args - Arguments to filter Otps to delete.
     * @example
     * // Delete a few Otps
     * const { count } = await prisma.otp.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OtpDeleteManyArgs>(args?: SelectSubset<T, OtpDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Otps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Otps
     * const otp = await prisma.otp.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OtpUpdateManyArgs>(args: SelectSubset<T, OtpUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Otps and returns the data updated in the database.
     * @param {OtpUpdateManyAndReturnArgs} args - Arguments to update many Otps.
     * @example
     * // Update many Otps
     * const otp = await prisma.otp.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Otps and only return the `id`
     * const otpWithIdOnly = await prisma.otp.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OtpUpdateManyAndReturnArgs>(args: SelectSubset<T, OtpUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Otp.
     * @param {OtpUpsertArgs} args - Arguments to update or create a Otp.
     * @example
     * // Update or create a Otp
     * const otp = await prisma.otp.upsert({
     *   create: {
     *     // ... data to create a Otp
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Otp we want to update
     *   }
     * })
     */
    upsert<T extends OtpUpsertArgs>(args: SelectSubset<T, OtpUpsertArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Otps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpCountArgs} args - Arguments to filter Otps to count.
     * @example
     * // Count the number of Otps
     * const count = await prisma.otp.count({
     *   where: {
     *     // ... the filter for the Otps we want to count
     *   }
     * })
    **/
    count<T extends OtpCountArgs>(
      args?: Subset<T, OtpCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OtpCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Otp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OtpAggregateArgs>(args: Subset<T, OtpAggregateArgs>): Prisma.PrismaPromise<GetOtpAggregateType<T>>

    /**
     * Group by Otp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OtpGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OtpGroupByArgs['orderBy'] }
        : { orderBy?: OtpGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OtpGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOtpGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Otp model
   */
  readonly fields: OtpFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Otp.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OtpClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Otp model
   */
  interface OtpFieldRefs {
    readonly id: FieldRef<"Otp", 'String'>
    readonly email: FieldRef<"Otp", 'String'>
    readonly otp: FieldRef<"Otp", 'String'>
    readonly expiresAt: FieldRef<"Otp", 'DateTime'>
    readonly createdAt: FieldRef<"Otp", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Otp findUnique
   */
  export type OtpFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * Filter, which Otp to fetch.
     */
    where: OtpWhereUniqueInput
  }

  /**
   * Otp findUniqueOrThrow
   */
  export type OtpFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * Filter, which Otp to fetch.
     */
    where: OtpWhereUniqueInput
  }

  /**
   * Otp findFirst
   */
  export type OtpFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * Filter, which Otp to fetch.
     */
    where?: OtpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Otps to fetch.
     */
    orderBy?: OtpOrderByWithRelationInput | OtpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Otps.
     */
    cursor?: OtpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Otps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Otps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Otps.
     */
    distinct?: OtpScalarFieldEnum | OtpScalarFieldEnum[]
  }

  /**
   * Otp findFirstOrThrow
   */
  export type OtpFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * Filter, which Otp to fetch.
     */
    where?: OtpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Otps to fetch.
     */
    orderBy?: OtpOrderByWithRelationInput | OtpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Otps.
     */
    cursor?: OtpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Otps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Otps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Otps.
     */
    distinct?: OtpScalarFieldEnum | OtpScalarFieldEnum[]
  }

  /**
   * Otp findMany
   */
  export type OtpFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * Filter, which Otps to fetch.
     */
    where?: OtpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Otps to fetch.
     */
    orderBy?: OtpOrderByWithRelationInput | OtpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Otps.
     */
    cursor?: OtpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Otps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Otps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Otps.
     */
    distinct?: OtpScalarFieldEnum | OtpScalarFieldEnum[]
  }

  /**
   * Otp create
   */
  export type OtpCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * The data needed to create a Otp.
     */
    data: XOR<OtpCreateInput, OtpUncheckedCreateInput>
  }

  /**
   * Otp createMany
   */
  export type OtpCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Otps.
     */
    data: OtpCreateManyInput | OtpCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Otp createManyAndReturn
   */
  export type OtpCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * The data used to create many Otps.
     */
    data: OtpCreateManyInput | OtpCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Otp update
   */
  export type OtpUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * The data needed to update a Otp.
     */
    data: XOR<OtpUpdateInput, OtpUncheckedUpdateInput>
    /**
     * Choose, which Otp to update.
     */
    where: OtpWhereUniqueInput
  }

  /**
   * Otp updateMany
   */
  export type OtpUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Otps.
     */
    data: XOR<OtpUpdateManyMutationInput, OtpUncheckedUpdateManyInput>
    /**
     * Filter which Otps to update
     */
    where?: OtpWhereInput
    /**
     * Limit how many Otps to update.
     */
    limit?: number
  }

  /**
   * Otp updateManyAndReturn
   */
  export type OtpUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * The data used to update Otps.
     */
    data: XOR<OtpUpdateManyMutationInput, OtpUncheckedUpdateManyInput>
    /**
     * Filter which Otps to update
     */
    where?: OtpWhereInput
    /**
     * Limit how many Otps to update.
     */
    limit?: number
  }

  /**
   * Otp upsert
   */
  export type OtpUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * The filter to search for the Otp to update in case it exists.
     */
    where: OtpWhereUniqueInput
    /**
     * In case the Otp found by the `where` argument doesn't exist, create a new Otp with this data.
     */
    create: XOR<OtpCreateInput, OtpUncheckedCreateInput>
    /**
     * In case the Otp was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OtpUpdateInput, OtpUncheckedUpdateInput>
  }

  /**
   * Otp delete
   */
  export type OtpDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * Filter which Otp to delete.
     */
    where: OtpWhereUniqueInput
  }

  /**
   * Otp deleteMany
   */
  export type OtpDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Otps to delete
     */
    where?: OtpWhereInput
    /**
     * Limit how many Otps to delete.
     */
    limit?: number
  }

  /**
   * Otp without action
   */
  export type OtpDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
  }


  /**
   * Model Charity
   */

  export type AggregateCharity = {
    _count: CharityCountAggregateOutputType | null
    _min: CharityMinAggregateOutputType | null
    _max: CharityMaxAggregateOutputType | null
  }

  export type CharityMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    description: string | null
    logoUrl: string | null
    websiteUrl: string | null
    isFeatured: boolean | null
    isActive: boolean | null
    country: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CharityMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    description: string | null
    logoUrl: string | null
    websiteUrl: string | null
    isFeatured: boolean | null
    isActive: boolean | null
    country: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CharityCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    description: number
    logoUrl: number
    websiteUrl: number
    isFeatured: number
    isActive: number
    country: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CharityMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    logoUrl?: true
    websiteUrl?: true
    isFeatured?: true
    isActive?: true
    country?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CharityMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    logoUrl?: true
    websiteUrl?: true
    isFeatured?: true
    isActive?: true
    country?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CharityCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    logoUrl?: true
    websiteUrl?: true
    isFeatured?: true
    isActive?: true
    country?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CharityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Charity to aggregate.
     */
    where?: CharityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Charities to fetch.
     */
    orderBy?: CharityOrderByWithRelationInput | CharityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CharityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Charities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Charities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Charities
    **/
    _count?: true | CharityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CharityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CharityMaxAggregateInputType
  }

  export type GetCharityAggregateType<T extends CharityAggregateArgs> = {
        [P in keyof T & keyof AggregateCharity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCharity[P]>
      : GetScalarType<T[P], AggregateCharity[P]>
  }




  export type CharityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CharityWhereInput
    orderBy?: CharityOrderByWithAggregationInput | CharityOrderByWithAggregationInput[]
    by: CharityScalarFieldEnum[] | CharityScalarFieldEnum
    having?: CharityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CharityCountAggregateInputType | true
    _min?: CharityMinAggregateInputType
    _max?: CharityMaxAggregateInputType
  }

  export type CharityGroupByOutputType = {
    id: string
    name: string
    slug: string
    description: string
    logoUrl: string | null
    websiteUrl: string | null
    isFeatured: boolean
    isActive: boolean
    country: string | null
    createdAt: Date
    updatedAt: Date
    _count: CharityCountAggregateOutputType | null
    _min: CharityMinAggregateOutputType | null
    _max: CharityMaxAggregateOutputType | null
  }

  type GetCharityGroupByPayload<T extends CharityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CharityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CharityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CharityGroupByOutputType[P]>
            : GetScalarType<T[P], CharityGroupByOutputType[P]>
        }
      >
    >


  export type CharitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    logoUrl?: boolean
    websiteUrl?: boolean
    isFeatured?: boolean
    isActive?: boolean
    country?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    images?: boolean | Charity$imagesArgs<ExtArgs>
    userCharities?: boolean | Charity$userCharitiesArgs<ExtArgs>
    _count?: boolean | CharityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["charity"]>

  export type CharitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    logoUrl?: boolean
    websiteUrl?: boolean
    isFeatured?: boolean
    isActive?: boolean
    country?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["charity"]>

  export type CharitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    logoUrl?: boolean
    websiteUrl?: boolean
    isFeatured?: boolean
    isActive?: boolean
    country?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["charity"]>

  export type CharitySelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    logoUrl?: boolean
    websiteUrl?: boolean
    isFeatured?: boolean
    isActive?: boolean
    country?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CharityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "description" | "logoUrl" | "websiteUrl" | "isFeatured" | "isActive" | "country" | "createdAt" | "updatedAt", ExtArgs["result"]["charity"]>
  export type CharityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | Charity$imagesArgs<ExtArgs>
    userCharities?: boolean | Charity$userCharitiesArgs<ExtArgs>
    _count?: boolean | CharityCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CharityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CharityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CharityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Charity"
    objects: {
      images: Prisma.$CharityImagePayload<ExtArgs>[]
      userCharities: Prisma.$UserCharityPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      description: string
      logoUrl: string | null
      websiteUrl: string | null
      isFeatured: boolean
      isActive: boolean
      country: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["charity"]>
    composites: {}
  }

  type CharityGetPayload<S extends boolean | null | undefined | CharityDefaultArgs> = $Result.GetResult<Prisma.$CharityPayload, S>

  type CharityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CharityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CharityCountAggregateInputType | true
    }

  export interface CharityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Charity'], meta: { name: 'Charity' } }
    /**
     * Find zero or one Charity that matches the filter.
     * @param {CharityFindUniqueArgs} args - Arguments to find a Charity
     * @example
     * // Get one Charity
     * const charity = await prisma.charity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CharityFindUniqueArgs>(args: SelectSubset<T, CharityFindUniqueArgs<ExtArgs>>): Prisma__CharityClient<$Result.GetResult<Prisma.$CharityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Charity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CharityFindUniqueOrThrowArgs} args - Arguments to find a Charity
     * @example
     * // Get one Charity
     * const charity = await prisma.charity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CharityFindUniqueOrThrowArgs>(args: SelectSubset<T, CharityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CharityClient<$Result.GetResult<Prisma.$CharityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Charity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharityFindFirstArgs} args - Arguments to find a Charity
     * @example
     * // Get one Charity
     * const charity = await prisma.charity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CharityFindFirstArgs>(args?: SelectSubset<T, CharityFindFirstArgs<ExtArgs>>): Prisma__CharityClient<$Result.GetResult<Prisma.$CharityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Charity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharityFindFirstOrThrowArgs} args - Arguments to find a Charity
     * @example
     * // Get one Charity
     * const charity = await prisma.charity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CharityFindFirstOrThrowArgs>(args?: SelectSubset<T, CharityFindFirstOrThrowArgs<ExtArgs>>): Prisma__CharityClient<$Result.GetResult<Prisma.$CharityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Charities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Charities
     * const charities = await prisma.charity.findMany()
     * 
     * // Get first 10 Charities
     * const charities = await prisma.charity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const charityWithIdOnly = await prisma.charity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CharityFindManyArgs>(args?: SelectSubset<T, CharityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Charity.
     * @param {CharityCreateArgs} args - Arguments to create a Charity.
     * @example
     * // Create one Charity
     * const Charity = await prisma.charity.create({
     *   data: {
     *     // ... data to create a Charity
     *   }
     * })
     * 
     */
    create<T extends CharityCreateArgs>(args: SelectSubset<T, CharityCreateArgs<ExtArgs>>): Prisma__CharityClient<$Result.GetResult<Prisma.$CharityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Charities.
     * @param {CharityCreateManyArgs} args - Arguments to create many Charities.
     * @example
     * // Create many Charities
     * const charity = await prisma.charity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CharityCreateManyArgs>(args?: SelectSubset<T, CharityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Charities and returns the data saved in the database.
     * @param {CharityCreateManyAndReturnArgs} args - Arguments to create many Charities.
     * @example
     * // Create many Charities
     * const charity = await prisma.charity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Charities and only return the `id`
     * const charityWithIdOnly = await prisma.charity.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CharityCreateManyAndReturnArgs>(args?: SelectSubset<T, CharityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Charity.
     * @param {CharityDeleteArgs} args - Arguments to delete one Charity.
     * @example
     * // Delete one Charity
     * const Charity = await prisma.charity.delete({
     *   where: {
     *     // ... filter to delete one Charity
     *   }
     * })
     * 
     */
    delete<T extends CharityDeleteArgs>(args: SelectSubset<T, CharityDeleteArgs<ExtArgs>>): Prisma__CharityClient<$Result.GetResult<Prisma.$CharityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Charity.
     * @param {CharityUpdateArgs} args - Arguments to update one Charity.
     * @example
     * // Update one Charity
     * const charity = await prisma.charity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CharityUpdateArgs>(args: SelectSubset<T, CharityUpdateArgs<ExtArgs>>): Prisma__CharityClient<$Result.GetResult<Prisma.$CharityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Charities.
     * @param {CharityDeleteManyArgs} args - Arguments to filter Charities to delete.
     * @example
     * // Delete a few Charities
     * const { count } = await prisma.charity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CharityDeleteManyArgs>(args?: SelectSubset<T, CharityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Charities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Charities
     * const charity = await prisma.charity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CharityUpdateManyArgs>(args: SelectSubset<T, CharityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Charities and returns the data updated in the database.
     * @param {CharityUpdateManyAndReturnArgs} args - Arguments to update many Charities.
     * @example
     * // Update many Charities
     * const charity = await prisma.charity.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Charities and only return the `id`
     * const charityWithIdOnly = await prisma.charity.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CharityUpdateManyAndReturnArgs>(args: SelectSubset<T, CharityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Charity.
     * @param {CharityUpsertArgs} args - Arguments to update or create a Charity.
     * @example
     * // Update or create a Charity
     * const charity = await prisma.charity.upsert({
     *   create: {
     *     // ... data to create a Charity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Charity we want to update
     *   }
     * })
     */
    upsert<T extends CharityUpsertArgs>(args: SelectSubset<T, CharityUpsertArgs<ExtArgs>>): Prisma__CharityClient<$Result.GetResult<Prisma.$CharityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Charities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharityCountArgs} args - Arguments to filter Charities to count.
     * @example
     * // Count the number of Charities
     * const count = await prisma.charity.count({
     *   where: {
     *     // ... the filter for the Charities we want to count
     *   }
     * })
    **/
    count<T extends CharityCountArgs>(
      args?: Subset<T, CharityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CharityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Charity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CharityAggregateArgs>(args: Subset<T, CharityAggregateArgs>): Prisma.PrismaPromise<GetCharityAggregateType<T>>

    /**
     * Group by Charity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CharityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CharityGroupByArgs['orderBy'] }
        : { orderBy?: CharityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CharityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCharityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Charity model
   */
  readonly fields: CharityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Charity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CharityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    images<T extends Charity$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Charity$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharityImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userCharities<T extends Charity$userCharitiesArgs<ExtArgs> = {}>(args?: Subset<T, Charity$userCharitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCharityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Charity model
   */
  interface CharityFieldRefs {
    readonly id: FieldRef<"Charity", 'String'>
    readonly name: FieldRef<"Charity", 'String'>
    readonly slug: FieldRef<"Charity", 'String'>
    readonly description: FieldRef<"Charity", 'String'>
    readonly logoUrl: FieldRef<"Charity", 'String'>
    readonly websiteUrl: FieldRef<"Charity", 'String'>
    readonly isFeatured: FieldRef<"Charity", 'Boolean'>
    readonly isActive: FieldRef<"Charity", 'Boolean'>
    readonly country: FieldRef<"Charity", 'String'>
    readonly createdAt: FieldRef<"Charity", 'DateTime'>
    readonly updatedAt: FieldRef<"Charity", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Charity findUnique
   */
  export type CharityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charity
     */
    select?: CharitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Charity
     */
    omit?: CharityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharityInclude<ExtArgs> | null
    /**
     * Filter, which Charity to fetch.
     */
    where: CharityWhereUniqueInput
  }

  /**
   * Charity findUniqueOrThrow
   */
  export type CharityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charity
     */
    select?: CharitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Charity
     */
    omit?: CharityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharityInclude<ExtArgs> | null
    /**
     * Filter, which Charity to fetch.
     */
    where: CharityWhereUniqueInput
  }

  /**
   * Charity findFirst
   */
  export type CharityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charity
     */
    select?: CharitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Charity
     */
    omit?: CharityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharityInclude<ExtArgs> | null
    /**
     * Filter, which Charity to fetch.
     */
    where?: CharityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Charities to fetch.
     */
    orderBy?: CharityOrderByWithRelationInput | CharityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Charities.
     */
    cursor?: CharityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Charities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Charities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Charities.
     */
    distinct?: CharityScalarFieldEnum | CharityScalarFieldEnum[]
  }

  /**
   * Charity findFirstOrThrow
   */
  export type CharityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charity
     */
    select?: CharitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Charity
     */
    omit?: CharityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharityInclude<ExtArgs> | null
    /**
     * Filter, which Charity to fetch.
     */
    where?: CharityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Charities to fetch.
     */
    orderBy?: CharityOrderByWithRelationInput | CharityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Charities.
     */
    cursor?: CharityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Charities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Charities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Charities.
     */
    distinct?: CharityScalarFieldEnum | CharityScalarFieldEnum[]
  }

  /**
   * Charity findMany
   */
  export type CharityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charity
     */
    select?: CharitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Charity
     */
    omit?: CharityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharityInclude<ExtArgs> | null
    /**
     * Filter, which Charities to fetch.
     */
    where?: CharityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Charities to fetch.
     */
    orderBy?: CharityOrderByWithRelationInput | CharityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Charities.
     */
    cursor?: CharityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Charities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Charities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Charities.
     */
    distinct?: CharityScalarFieldEnum | CharityScalarFieldEnum[]
  }

  /**
   * Charity create
   */
  export type CharityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charity
     */
    select?: CharitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Charity
     */
    omit?: CharityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharityInclude<ExtArgs> | null
    /**
     * The data needed to create a Charity.
     */
    data: XOR<CharityCreateInput, CharityUncheckedCreateInput>
  }

  /**
   * Charity createMany
   */
  export type CharityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Charities.
     */
    data: CharityCreateManyInput | CharityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Charity createManyAndReturn
   */
  export type CharityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charity
     */
    select?: CharitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Charity
     */
    omit?: CharityOmit<ExtArgs> | null
    /**
     * The data used to create many Charities.
     */
    data: CharityCreateManyInput | CharityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Charity update
   */
  export type CharityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charity
     */
    select?: CharitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Charity
     */
    omit?: CharityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharityInclude<ExtArgs> | null
    /**
     * The data needed to update a Charity.
     */
    data: XOR<CharityUpdateInput, CharityUncheckedUpdateInput>
    /**
     * Choose, which Charity to update.
     */
    where: CharityWhereUniqueInput
  }

  /**
   * Charity updateMany
   */
  export type CharityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Charities.
     */
    data: XOR<CharityUpdateManyMutationInput, CharityUncheckedUpdateManyInput>
    /**
     * Filter which Charities to update
     */
    where?: CharityWhereInput
    /**
     * Limit how many Charities to update.
     */
    limit?: number
  }

  /**
   * Charity updateManyAndReturn
   */
  export type CharityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charity
     */
    select?: CharitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Charity
     */
    omit?: CharityOmit<ExtArgs> | null
    /**
     * The data used to update Charities.
     */
    data: XOR<CharityUpdateManyMutationInput, CharityUncheckedUpdateManyInput>
    /**
     * Filter which Charities to update
     */
    where?: CharityWhereInput
    /**
     * Limit how many Charities to update.
     */
    limit?: number
  }

  /**
   * Charity upsert
   */
  export type CharityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charity
     */
    select?: CharitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Charity
     */
    omit?: CharityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharityInclude<ExtArgs> | null
    /**
     * The filter to search for the Charity to update in case it exists.
     */
    where: CharityWhereUniqueInput
    /**
     * In case the Charity found by the `where` argument doesn't exist, create a new Charity with this data.
     */
    create: XOR<CharityCreateInput, CharityUncheckedCreateInput>
    /**
     * In case the Charity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CharityUpdateInput, CharityUncheckedUpdateInput>
  }

  /**
   * Charity delete
   */
  export type CharityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charity
     */
    select?: CharitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Charity
     */
    omit?: CharityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharityInclude<ExtArgs> | null
    /**
     * Filter which Charity to delete.
     */
    where: CharityWhereUniqueInput
  }

  /**
   * Charity deleteMany
   */
  export type CharityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Charities to delete
     */
    where?: CharityWhereInput
    /**
     * Limit how many Charities to delete.
     */
    limit?: number
  }

  /**
   * Charity.images
   */
  export type Charity$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharityImage
     */
    select?: CharityImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CharityImage
     */
    omit?: CharityImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharityImageInclude<ExtArgs> | null
    where?: CharityImageWhereInput
    orderBy?: CharityImageOrderByWithRelationInput | CharityImageOrderByWithRelationInput[]
    cursor?: CharityImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CharityImageScalarFieldEnum | CharityImageScalarFieldEnum[]
  }

  /**
   * Charity.userCharities
   */
  export type Charity$userCharitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCharity
     */
    select?: UserCharitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCharity
     */
    omit?: UserCharityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCharityInclude<ExtArgs> | null
    where?: UserCharityWhereInput
    orderBy?: UserCharityOrderByWithRelationInput | UserCharityOrderByWithRelationInput[]
    cursor?: UserCharityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserCharityScalarFieldEnum | UserCharityScalarFieldEnum[]
  }

  /**
   * Charity without action
   */
  export type CharityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Charity
     */
    select?: CharitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Charity
     */
    omit?: CharityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharityInclude<ExtArgs> | null
  }


  /**
   * Model CharityImage
   */

  export type AggregateCharityImage = {
    _count: CharityImageCountAggregateOutputType | null
    _avg: CharityImageAvgAggregateOutputType | null
    _sum: CharityImageSumAggregateOutputType | null
    _min: CharityImageMinAggregateOutputType | null
    _max: CharityImageMaxAggregateOutputType | null
  }

  export type CharityImageAvgAggregateOutputType = {
    order: number | null
  }

  export type CharityImageSumAggregateOutputType = {
    order: number | null
  }

  export type CharityImageMinAggregateOutputType = {
    id: string | null
    charityId: string | null
    url: string | null
    altText: string | null
    order: number | null
    createdAt: Date | null
  }

  export type CharityImageMaxAggregateOutputType = {
    id: string | null
    charityId: string | null
    url: string | null
    altText: string | null
    order: number | null
    createdAt: Date | null
  }

  export type CharityImageCountAggregateOutputType = {
    id: number
    charityId: number
    url: number
    altText: number
    order: number
    createdAt: number
    _all: number
  }


  export type CharityImageAvgAggregateInputType = {
    order?: true
  }

  export type CharityImageSumAggregateInputType = {
    order?: true
  }

  export type CharityImageMinAggregateInputType = {
    id?: true
    charityId?: true
    url?: true
    altText?: true
    order?: true
    createdAt?: true
  }

  export type CharityImageMaxAggregateInputType = {
    id?: true
    charityId?: true
    url?: true
    altText?: true
    order?: true
    createdAt?: true
  }

  export type CharityImageCountAggregateInputType = {
    id?: true
    charityId?: true
    url?: true
    altText?: true
    order?: true
    createdAt?: true
    _all?: true
  }

  export type CharityImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CharityImage to aggregate.
     */
    where?: CharityImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CharityImages to fetch.
     */
    orderBy?: CharityImageOrderByWithRelationInput | CharityImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CharityImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CharityImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CharityImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CharityImages
    **/
    _count?: true | CharityImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CharityImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CharityImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CharityImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CharityImageMaxAggregateInputType
  }

  export type GetCharityImageAggregateType<T extends CharityImageAggregateArgs> = {
        [P in keyof T & keyof AggregateCharityImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCharityImage[P]>
      : GetScalarType<T[P], AggregateCharityImage[P]>
  }




  export type CharityImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CharityImageWhereInput
    orderBy?: CharityImageOrderByWithAggregationInput | CharityImageOrderByWithAggregationInput[]
    by: CharityImageScalarFieldEnum[] | CharityImageScalarFieldEnum
    having?: CharityImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CharityImageCountAggregateInputType | true
    _avg?: CharityImageAvgAggregateInputType
    _sum?: CharityImageSumAggregateInputType
    _min?: CharityImageMinAggregateInputType
    _max?: CharityImageMaxAggregateInputType
  }

  export type CharityImageGroupByOutputType = {
    id: string
    charityId: string
    url: string
    altText: string | null
    order: number
    createdAt: Date
    _count: CharityImageCountAggregateOutputType | null
    _avg: CharityImageAvgAggregateOutputType | null
    _sum: CharityImageSumAggregateOutputType | null
    _min: CharityImageMinAggregateOutputType | null
    _max: CharityImageMaxAggregateOutputType | null
  }

  type GetCharityImageGroupByPayload<T extends CharityImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CharityImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CharityImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CharityImageGroupByOutputType[P]>
            : GetScalarType<T[P], CharityImageGroupByOutputType[P]>
        }
      >
    >


  export type CharityImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    charityId?: boolean
    url?: boolean
    altText?: boolean
    order?: boolean
    createdAt?: boolean
    charity?: boolean | CharityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["charityImage"]>

  export type CharityImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    charityId?: boolean
    url?: boolean
    altText?: boolean
    order?: boolean
    createdAt?: boolean
    charity?: boolean | CharityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["charityImage"]>

  export type CharityImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    charityId?: boolean
    url?: boolean
    altText?: boolean
    order?: boolean
    createdAt?: boolean
    charity?: boolean | CharityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["charityImage"]>

  export type CharityImageSelectScalar = {
    id?: boolean
    charityId?: boolean
    url?: boolean
    altText?: boolean
    order?: boolean
    createdAt?: boolean
  }

  export type CharityImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "charityId" | "url" | "altText" | "order" | "createdAt", ExtArgs["result"]["charityImage"]>
  export type CharityImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    charity?: boolean | CharityDefaultArgs<ExtArgs>
  }
  export type CharityImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    charity?: boolean | CharityDefaultArgs<ExtArgs>
  }
  export type CharityImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    charity?: boolean | CharityDefaultArgs<ExtArgs>
  }

  export type $CharityImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CharityImage"
    objects: {
      charity: Prisma.$CharityPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      charityId: string
      url: string
      altText: string | null
      order: number
      createdAt: Date
    }, ExtArgs["result"]["charityImage"]>
    composites: {}
  }

  type CharityImageGetPayload<S extends boolean | null | undefined | CharityImageDefaultArgs> = $Result.GetResult<Prisma.$CharityImagePayload, S>

  type CharityImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CharityImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CharityImageCountAggregateInputType | true
    }

  export interface CharityImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CharityImage'], meta: { name: 'CharityImage' } }
    /**
     * Find zero or one CharityImage that matches the filter.
     * @param {CharityImageFindUniqueArgs} args - Arguments to find a CharityImage
     * @example
     * // Get one CharityImage
     * const charityImage = await prisma.charityImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CharityImageFindUniqueArgs>(args: SelectSubset<T, CharityImageFindUniqueArgs<ExtArgs>>): Prisma__CharityImageClient<$Result.GetResult<Prisma.$CharityImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CharityImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CharityImageFindUniqueOrThrowArgs} args - Arguments to find a CharityImage
     * @example
     * // Get one CharityImage
     * const charityImage = await prisma.charityImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CharityImageFindUniqueOrThrowArgs>(args: SelectSubset<T, CharityImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CharityImageClient<$Result.GetResult<Prisma.$CharityImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CharityImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharityImageFindFirstArgs} args - Arguments to find a CharityImage
     * @example
     * // Get one CharityImage
     * const charityImage = await prisma.charityImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CharityImageFindFirstArgs>(args?: SelectSubset<T, CharityImageFindFirstArgs<ExtArgs>>): Prisma__CharityImageClient<$Result.GetResult<Prisma.$CharityImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CharityImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharityImageFindFirstOrThrowArgs} args - Arguments to find a CharityImage
     * @example
     * // Get one CharityImage
     * const charityImage = await prisma.charityImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CharityImageFindFirstOrThrowArgs>(args?: SelectSubset<T, CharityImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__CharityImageClient<$Result.GetResult<Prisma.$CharityImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CharityImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharityImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CharityImages
     * const charityImages = await prisma.charityImage.findMany()
     * 
     * // Get first 10 CharityImages
     * const charityImages = await prisma.charityImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const charityImageWithIdOnly = await prisma.charityImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CharityImageFindManyArgs>(args?: SelectSubset<T, CharityImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharityImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CharityImage.
     * @param {CharityImageCreateArgs} args - Arguments to create a CharityImage.
     * @example
     * // Create one CharityImage
     * const CharityImage = await prisma.charityImage.create({
     *   data: {
     *     // ... data to create a CharityImage
     *   }
     * })
     * 
     */
    create<T extends CharityImageCreateArgs>(args: SelectSubset<T, CharityImageCreateArgs<ExtArgs>>): Prisma__CharityImageClient<$Result.GetResult<Prisma.$CharityImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CharityImages.
     * @param {CharityImageCreateManyArgs} args - Arguments to create many CharityImages.
     * @example
     * // Create many CharityImages
     * const charityImage = await prisma.charityImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CharityImageCreateManyArgs>(args?: SelectSubset<T, CharityImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CharityImages and returns the data saved in the database.
     * @param {CharityImageCreateManyAndReturnArgs} args - Arguments to create many CharityImages.
     * @example
     * // Create many CharityImages
     * const charityImage = await prisma.charityImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CharityImages and only return the `id`
     * const charityImageWithIdOnly = await prisma.charityImage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CharityImageCreateManyAndReturnArgs>(args?: SelectSubset<T, CharityImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharityImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CharityImage.
     * @param {CharityImageDeleteArgs} args - Arguments to delete one CharityImage.
     * @example
     * // Delete one CharityImage
     * const CharityImage = await prisma.charityImage.delete({
     *   where: {
     *     // ... filter to delete one CharityImage
     *   }
     * })
     * 
     */
    delete<T extends CharityImageDeleteArgs>(args: SelectSubset<T, CharityImageDeleteArgs<ExtArgs>>): Prisma__CharityImageClient<$Result.GetResult<Prisma.$CharityImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CharityImage.
     * @param {CharityImageUpdateArgs} args - Arguments to update one CharityImage.
     * @example
     * // Update one CharityImage
     * const charityImage = await prisma.charityImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CharityImageUpdateArgs>(args: SelectSubset<T, CharityImageUpdateArgs<ExtArgs>>): Prisma__CharityImageClient<$Result.GetResult<Prisma.$CharityImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CharityImages.
     * @param {CharityImageDeleteManyArgs} args - Arguments to filter CharityImages to delete.
     * @example
     * // Delete a few CharityImages
     * const { count } = await prisma.charityImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CharityImageDeleteManyArgs>(args?: SelectSubset<T, CharityImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CharityImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharityImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CharityImages
     * const charityImage = await prisma.charityImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CharityImageUpdateManyArgs>(args: SelectSubset<T, CharityImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CharityImages and returns the data updated in the database.
     * @param {CharityImageUpdateManyAndReturnArgs} args - Arguments to update many CharityImages.
     * @example
     * // Update many CharityImages
     * const charityImage = await prisma.charityImage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CharityImages and only return the `id`
     * const charityImageWithIdOnly = await prisma.charityImage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CharityImageUpdateManyAndReturnArgs>(args: SelectSubset<T, CharityImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharityImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CharityImage.
     * @param {CharityImageUpsertArgs} args - Arguments to update or create a CharityImage.
     * @example
     * // Update or create a CharityImage
     * const charityImage = await prisma.charityImage.upsert({
     *   create: {
     *     // ... data to create a CharityImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CharityImage we want to update
     *   }
     * })
     */
    upsert<T extends CharityImageUpsertArgs>(args: SelectSubset<T, CharityImageUpsertArgs<ExtArgs>>): Prisma__CharityImageClient<$Result.GetResult<Prisma.$CharityImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CharityImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharityImageCountArgs} args - Arguments to filter CharityImages to count.
     * @example
     * // Count the number of CharityImages
     * const count = await prisma.charityImage.count({
     *   where: {
     *     // ... the filter for the CharityImages we want to count
     *   }
     * })
    **/
    count<T extends CharityImageCountArgs>(
      args?: Subset<T, CharityImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CharityImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CharityImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharityImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CharityImageAggregateArgs>(args: Subset<T, CharityImageAggregateArgs>): Prisma.PrismaPromise<GetCharityImageAggregateType<T>>

    /**
     * Group by CharityImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharityImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CharityImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CharityImageGroupByArgs['orderBy'] }
        : { orderBy?: CharityImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CharityImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCharityImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CharityImage model
   */
  readonly fields: CharityImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CharityImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CharityImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    charity<T extends CharityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CharityDefaultArgs<ExtArgs>>): Prisma__CharityClient<$Result.GetResult<Prisma.$CharityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CharityImage model
   */
  interface CharityImageFieldRefs {
    readonly id: FieldRef<"CharityImage", 'String'>
    readonly charityId: FieldRef<"CharityImage", 'String'>
    readonly url: FieldRef<"CharityImage", 'String'>
    readonly altText: FieldRef<"CharityImage", 'String'>
    readonly order: FieldRef<"CharityImage", 'Int'>
    readonly createdAt: FieldRef<"CharityImage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CharityImage findUnique
   */
  export type CharityImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharityImage
     */
    select?: CharityImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CharityImage
     */
    omit?: CharityImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharityImageInclude<ExtArgs> | null
    /**
     * Filter, which CharityImage to fetch.
     */
    where: CharityImageWhereUniqueInput
  }

  /**
   * CharityImage findUniqueOrThrow
   */
  export type CharityImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharityImage
     */
    select?: CharityImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CharityImage
     */
    omit?: CharityImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharityImageInclude<ExtArgs> | null
    /**
     * Filter, which CharityImage to fetch.
     */
    where: CharityImageWhereUniqueInput
  }

  /**
   * CharityImage findFirst
   */
  export type CharityImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharityImage
     */
    select?: CharityImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CharityImage
     */
    omit?: CharityImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharityImageInclude<ExtArgs> | null
    /**
     * Filter, which CharityImage to fetch.
     */
    where?: CharityImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CharityImages to fetch.
     */
    orderBy?: CharityImageOrderByWithRelationInput | CharityImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CharityImages.
     */
    cursor?: CharityImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CharityImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CharityImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CharityImages.
     */
    distinct?: CharityImageScalarFieldEnum | CharityImageScalarFieldEnum[]
  }

  /**
   * CharityImage findFirstOrThrow
   */
  export type CharityImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharityImage
     */
    select?: CharityImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CharityImage
     */
    omit?: CharityImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharityImageInclude<ExtArgs> | null
    /**
     * Filter, which CharityImage to fetch.
     */
    where?: CharityImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CharityImages to fetch.
     */
    orderBy?: CharityImageOrderByWithRelationInput | CharityImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CharityImages.
     */
    cursor?: CharityImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CharityImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CharityImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CharityImages.
     */
    distinct?: CharityImageScalarFieldEnum | CharityImageScalarFieldEnum[]
  }

  /**
   * CharityImage findMany
   */
  export type CharityImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharityImage
     */
    select?: CharityImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CharityImage
     */
    omit?: CharityImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharityImageInclude<ExtArgs> | null
    /**
     * Filter, which CharityImages to fetch.
     */
    where?: CharityImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CharityImages to fetch.
     */
    orderBy?: CharityImageOrderByWithRelationInput | CharityImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CharityImages.
     */
    cursor?: CharityImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CharityImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CharityImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CharityImages.
     */
    distinct?: CharityImageScalarFieldEnum | CharityImageScalarFieldEnum[]
  }

  /**
   * CharityImage create
   */
  export type CharityImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharityImage
     */
    select?: CharityImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CharityImage
     */
    omit?: CharityImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharityImageInclude<ExtArgs> | null
    /**
     * The data needed to create a CharityImage.
     */
    data: XOR<CharityImageCreateInput, CharityImageUncheckedCreateInput>
  }

  /**
   * CharityImage createMany
   */
  export type CharityImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CharityImages.
     */
    data: CharityImageCreateManyInput | CharityImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CharityImage createManyAndReturn
   */
  export type CharityImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharityImage
     */
    select?: CharityImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CharityImage
     */
    omit?: CharityImageOmit<ExtArgs> | null
    /**
     * The data used to create many CharityImages.
     */
    data: CharityImageCreateManyInput | CharityImageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharityImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CharityImage update
   */
  export type CharityImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharityImage
     */
    select?: CharityImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CharityImage
     */
    omit?: CharityImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharityImageInclude<ExtArgs> | null
    /**
     * The data needed to update a CharityImage.
     */
    data: XOR<CharityImageUpdateInput, CharityImageUncheckedUpdateInput>
    /**
     * Choose, which CharityImage to update.
     */
    where: CharityImageWhereUniqueInput
  }

  /**
   * CharityImage updateMany
   */
  export type CharityImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CharityImages.
     */
    data: XOR<CharityImageUpdateManyMutationInput, CharityImageUncheckedUpdateManyInput>
    /**
     * Filter which CharityImages to update
     */
    where?: CharityImageWhereInput
    /**
     * Limit how many CharityImages to update.
     */
    limit?: number
  }

  /**
   * CharityImage updateManyAndReturn
   */
  export type CharityImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharityImage
     */
    select?: CharityImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CharityImage
     */
    omit?: CharityImageOmit<ExtArgs> | null
    /**
     * The data used to update CharityImages.
     */
    data: XOR<CharityImageUpdateManyMutationInput, CharityImageUncheckedUpdateManyInput>
    /**
     * Filter which CharityImages to update
     */
    where?: CharityImageWhereInput
    /**
     * Limit how many CharityImages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharityImageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CharityImage upsert
   */
  export type CharityImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharityImage
     */
    select?: CharityImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CharityImage
     */
    omit?: CharityImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharityImageInclude<ExtArgs> | null
    /**
     * The filter to search for the CharityImage to update in case it exists.
     */
    where: CharityImageWhereUniqueInput
    /**
     * In case the CharityImage found by the `where` argument doesn't exist, create a new CharityImage with this data.
     */
    create: XOR<CharityImageCreateInput, CharityImageUncheckedCreateInput>
    /**
     * In case the CharityImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CharityImageUpdateInput, CharityImageUncheckedUpdateInput>
  }

  /**
   * CharityImage delete
   */
  export type CharityImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharityImage
     */
    select?: CharityImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CharityImage
     */
    omit?: CharityImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharityImageInclude<ExtArgs> | null
    /**
     * Filter which CharityImage to delete.
     */
    where: CharityImageWhereUniqueInput
  }

  /**
   * CharityImage deleteMany
   */
  export type CharityImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CharityImages to delete
     */
    where?: CharityImageWhereInput
    /**
     * Limit how many CharityImages to delete.
     */
    limit?: number
  }

  /**
   * CharityImage without action
   */
  export type CharityImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharityImage
     */
    select?: CharityImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CharityImage
     */
    omit?: CharityImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharityImageInclude<ExtArgs> | null
  }


  /**
   * Model UserCharity
   */

  export type AggregateUserCharity = {
    _count: UserCharityCountAggregateOutputType | null
    _avg: UserCharityAvgAggregateOutputType | null
    _sum: UserCharitySumAggregateOutputType | null
    _min: UserCharityMinAggregateOutputType | null
    _max: UserCharityMaxAggregateOutputType | null
  }

  export type UserCharityAvgAggregateOutputType = {
    percentage: Decimal | null
    amount: Decimal | null
    month: number | null
    year: number | null
  }

  export type UserCharitySumAggregateOutputType = {
    percentage: Decimal | null
    amount: Decimal | null
    month: number | null
    year: number | null
  }

  export type UserCharityMinAggregateOutputType = {
    id: string | null
    userId: string | null
    charityId: string | null
    subscriptionId: string | null
    type: $Enums.CharityContributionType | null
    percentage: Decimal | null
    amount: Decimal | null
    currency: string | null
    month: number | null
    year: number | null
    status: $Enums.CharityStatus | null
    paidAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCharityMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    charityId: string | null
    subscriptionId: string | null
    type: $Enums.CharityContributionType | null
    percentage: Decimal | null
    amount: Decimal | null
    currency: string | null
    month: number | null
    year: number | null
    status: $Enums.CharityStatus | null
    paidAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCharityCountAggregateOutputType = {
    id: number
    userId: number
    charityId: number
    subscriptionId: number
    type: number
    percentage: number
    amount: number
    currency: number
    month: number
    year: number
    status: number
    paidAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserCharityAvgAggregateInputType = {
    percentage?: true
    amount?: true
    month?: true
    year?: true
  }

  export type UserCharitySumAggregateInputType = {
    percentage?: true
    amount?: true
    month?: true
    year?: true
  }

  export type UserCharityMinAggregateInputType = {
    id?: true
    userId?: true
    charityId?: true
    subscriptionId?: true
    type?: true
    percentage?: true
    amount?: true
    currency?: true
    month?: true
    year?: true
    status?: true
    paidAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCharityMaxAggregateInputType = {
    id?: true
    userId?: true
    charityId?: true
    subscriptionId?: true
    type?: true
    percentage?: true
    amount?: true
    currency?: true
    month?: true
    year?: true
    status?: true
    paidAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCharityCountAggregateInputType = {
    id?: true
    userId?: true
    charityId?: true
    subscriptionId?: true
    type?: true
    percentage?: true
    amount?: true
    currency?: true
    month?: true
    year?: true
    status?: true
    paidAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserCharityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserCharity to aggregate.
     */
    where?: UserCharityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCharities to fetch.
     */
    orderBy?: UserCharityOrderByWithRelationInput | UserCharityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserCharityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCharities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCharities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserCharities
    **/
    _count?: true | UserCharityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserCharityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserCharitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserCharityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserCharityMaxAggregateInputType
  }

  export type GetUserCharityAggregateType<T extends UserCharityAggregateArgs> = {
        [P in keyof T & keyof AggregateUserCharity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserCharity[P]>
      : GetScalarType<T[P], AggregateUserCharity[P]>
  }




  export type UserCharityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserCharityWhereInput
    orderBy?: UserCharityOrderByWithAggregationInput | UserCharityOrderByWithAggregationInput[]
    by: UserCharityScalarFieldEnum[] | UserCharityScalarFieldEnum
    having?: UserCharityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCharityCountAggregateInputType | true
    _avg?: UserCharityAvgAggregateInputType
    _sum?: UserCharitySumAggregateInputType
    _min?: UserCharityMinAggregateInputType
    _max?: UserCharityMaxAggregateInputType
  }

  export type UserCharityGroupByOutputType = {
    id: string
    userId: string
    charityId: string
    subscriptionId: string
    type: $Enums.CharityContributionType
    percentage: Decimal | null
    amount: Decimal
    currency: string
    month: number | null
    year: number | null
    status: $Enums.CharityStatus
    paidAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: UserCharityCountAggregateOutputType | null
    _avg: UserCharityAvgAggregateOutputType | null
    _sum: UserCharitySumAggregateOutputType | null
    _min: UserCharityMinAggregateOutputType | null
    _max: UserCharityMaxAggregateOutputType | null
  }

  type GetUserCharityGroupByPayload<T extends UserCharityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserCharityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserCharityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserCharityGroupByOutputType[P]>
            : GetScalarType<T[P], UserCharityGroupByOutputType[P]>
        }
      >
    >


  export type UserCharitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    charityId?: boolean
    subscriptionId?: boolean
    type?: boolean
    percentage?: boolean
    amount?: boolean
    currency?: boolean
    month?: boolean
    year?: boolean
    status?: boolean
    paidAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subscription?: boolean | SubscriptionOrderDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    charity?: boolean | CharityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userCharity"]>

  export type UserCharitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    charityId?: boolean
    subscriptionId?: boolean
    type?: boolean
    percentage?: boolean
    amount?: boolean
    currency?: boolean
    month?: boolean
    year?: boolean
    status?: boolean
    paidAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subscription?: boolean | SubscriptionOrderDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    charity?: boolean | CharityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userCharity"]>

  export type UserCharitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    charityId?: boolean
    subscriptionId?: boolean
    type?: boolean
    percentage?: boolean
    amount?: boolean
    currency?: boolean
    month?: boolean
    year?: boolean
    status?: boolean
    paidAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subscription?: boolean | SubscriptionOrderDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    charity?: boolean | CharityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userCharity"]>

  export type UserCharitySelectScalar = {
    id?: boolean
    userId?: boolean
    charityId?: boolean
    subscriptionId?: boolean
    type?: boolean
    percentage?: boolean
    amount?: boolean
    currency?: boolean
    month?: boolean
    year?: boolean
    status?: boolean
    paidAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserCharityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "charityId" | "subscriptionId" | "type" | "percentage" | "amount" | "currency" | "month" | "year" | "status" | "paidAt" | "createdAt" | "updatedAt", ExtArgs["result"]["userCharity"]>
  export type UserCharityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscription?: boolean | SubscriptionOrderDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    charity?: boolean | CharityDefaultArgs<ExtArgs>
  }
  export type UserCharityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscription?: boolean | SubscriptionOrderDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    charity?: boolean | CharityDefaultArgs<ExtArgs>
  }
  export type UserCharityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscription?: boolean | SubscriptionOrderDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    charity?: boolean | CharityDefaultArgs<ExtArgs>
  }

  export type $UserCharityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserCharity"
    objects: {
      subscription: Prisma.$SubscriptionOrderPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      charity: Prisma.$CharityPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      charityId: string
      subscriptionId: string
      type: $Enums.CharityContributionType
      percentage: Prisma.Decimal | null
      amount: Prisma.Decimal
      currency: string
      month: number | null
      year: number | null
      status: $Enums.CharityStatus
      paidAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userCharity"]>
    composites: {}
  }

  type UserCharityGetPayload<S extends boolean | null | undefined | UserCharityDefaultArgs> = $Result.GetResult<Prisma.$UserCharityPayload, S>

  type UserCharityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserCharityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCharityCountAggregateInputType | true
    }

  export interface UserCharityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserCharity'], meta: { name: 'UserCharity' } }
    /**
     * Find zero or one UserCharity that matches the filter.
     * @param {UserCharityFindUniqueArgs} args - Arguments to find a UserCharity
     * @example
     * // Get one UserCharity
     * const userCharity = await prisma.userCharity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserCharityFindUniqueArgs>(args: SelectSubset<T, UserCharityFindUniqueArgs<ExtArgs>>): Prisma__UserCharityClient<$Result.GetResult<Prisma.$UserCharityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserCharity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserCharityFindUniqueOrThrowArgs} args - Arguments to find a UserCharity
     * @example
     * // Get one UserCharity
     * const userCharity = await prisma.userCharity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserCharityFindUniqueOrThrowArgs>(args: SelectSubset<T, UserCharityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserCharityClient<$Result.GetResult<Prisma.$UserCharityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserCharity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCharityFindFirstArgs} args - Arguments to find a UserCharity
     * @example
     * // Get one UserCharity
     * const userCharity = await prisma.userCharity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserCharityFindFirstArgs>(args?: SelectSubset<T, UserCharityFindFirstArgs<ExtArgs>>): Prisma__UserCharityClient<$Result.GetResult<Prisma.$UserCharityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserCharity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCharityFindFirstOrThrowArgs} args - Arguments to find a UserCharity
     * @example
     * // Get one UserCharity
     * const userCharity = await prisma.userCharity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserCharityFindFirstOrThrowArgs>(args?: SelectSubset<T, UserCharityFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserCharityClient<$Result.GetResult<Prisma.$UserCharityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserCharities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCharityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserCharities
     * const userCharities = await prisma.userCharity.findMany()
     * 
     * // Get first 10 UserCharities
     * const userCharities = await prisma.userCharity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userCharityWithIdOnly = await prisma.userCharity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserCharityFindManyArgs>(args?: SelectSubset<T, UserCharityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCharityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserCharity.
     * @param {UserCharityCreateArgs} args - Arguments to create a UserCharity.
     * @example
     * // Create one UserCharity
     * const UserCharity = await prisma.userCharity.create({
     *   data: {
     *     // ... data to create a UserCharity
     *   }
     * })
     * 
     */
    create<T extends UserCharityCreateArgs>(args: SelectSubset<T, UserCharityCreateArgs<ExtArgs>>): Prisma__UserCharityClient<$Result.GetResult<Prisma.$UserCharityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserCharities.
     * @param {UserCharityCreateManyArgs} args - Arguments to create many UserCharities.
     * @example
     * // Create many UserCharities
     * const userCharity = await prisma.userCharity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCharityCreateManyArgs>(args?: SelectSubset<T, UserCharityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserCharities and returns the data saved in the database.
     * @param {UserCharityCreateManyAndReturnArgs} args - Arguments to create many UserCharities.
     * @example
     * // Create many UserCharities
     * const userCharity = await prisma.userCharity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserCharities and only return the `id`
     * const userCharityWithIdOnly = await prisma.userCharity.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCharityCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCharityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCharityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserCharity.
     * @param {UserCharityDeleteArgs} args - Arguments to delete one UserCharity.
     * @example
     * // Delete one UserCharity
     * const UserCharity = await prisma.userCharity.delete({
     *   where: {
     *     // ... filter to delete one UserCharity
     *   }
     * })
     * 
     */
    delete<T extends UserCharityDeleteArgs>(args: SelectSubset<T, UserCharityDeleteArgs<ExtArgs>>): Prisma__UserCharityClient<$Result.GetResult<Prisma.$UserCharityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserCharity.
     * @param {UserCharityUpdateArgs} args - Arguments to update one UserCharity.
     * @example
     * // Update one UserCharity
     * const userCharity = await prisma.userCharity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserCharityUpdateArgs>(args: SelectSubset<T, UserCharityUpdateArgs<ExtArgs>>): Prisma__UserCharityClient<$Result.GetResult<Prisma.$UserCharityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserCharities.
     * @param {UserCharityDeleteManyArgs} args - Arguments to filter UserCharities to delete.
     * @example
     * // Delete a few UserCharities
     * const { count } = await prisma.userCharity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserCharityDeleteManyArgs>(args?: SelectSubset<T, UserCharityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserCharities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCharityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserCharities
     * const userCharity = await prisma.userCharity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserCharityUpdateManyArgs>(args: SelectSubset<T, UserCharityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserCharities and returns the data updated in the database.
     * @param {UserCharityUpdateManyAndReturnArgs} args - Arguments to update many UserCharities.
     * @example
     * // Update many UserCharities
     * const userCharity = await prisma.userCharity.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserCharities and only return the `id`
     * const userCharityWithIdOnly = await prisma.userCharity.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserCharityUpdateManyAndReturnArgs>(args: SelectSubset<T, UserCharityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCharityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserCharity.
     * @param {UserCharityUpsertArgs} args - Arguments to update or create a UserCharity.
     * @example
     * // Update or create a UserCharity
     * const userCharity = await prisma.userCharity.upsert({
     *   create: {
     *     // ... data to create a UserCharity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserCharity we want to update
     *   }
     * })
     */
    upsert<T extends UserCharityUpsertArgs>(args: SelectSubset<T, UserCharityUpsertArgs<ExtArgs>>): Prisma__UserCharityClient<$Result.GetResult<Prisma.$UserCharityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserCharities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCharityCountArgs} args - Arguments to filter UserCharities to count.
     * @example
     * // Count the number of UserCharities
     * const count = await prisma.userCharity.count({
     *   where: {
     *     // ... the filter for the UserCharities we want to count
     *   }
     * })
    **/
    count<T extends UserCharityCountArgs>(
      args?: Subset<T, UserCharityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCharityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserCharity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCharityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserCharityAggregateArgs>(args: Subset<T, UserCharityAggregateArgs>): Prisma.PrismaPromise<GetUserCharityAggregateType<T>>

    /**
     * Group by UserCharity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCharityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserCharityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserCharityGroupByArgs['orderBy'] }
        : { orderBy?: UserCharityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserCharityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserCharityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserCharity model
   */
  readonly fields: UserCharityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserCharity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserCharityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subscription<T extends SubscriptionOrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubscriptionOrderDefaultArgs<ExtArgs>>): Prisma__SubscriptionOrderClient<$Result.GetResult<Prisma.$SubscriptionOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    charity<T extends CharityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CharityDefaultArgs<ExtArgs>>): Prisma__CharityClient<$Result.GetResult<Prisma.$CharityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserCharity model
   */
  interface UserCharityFieldRefs {
    readonly id: FieldRef<"UserCharity", 'String'>
    readonly userId: FieldRef<"UserCharity", 'String'>
    readonly charityId: FieldRef<"UserCharity", 'String'>
    readonly subscriptionId: FieldRef<"UserCharity", 'String'>
    readonly type: FieldRef<"UserCharity", 'CharityContributionType'>
    readonly percentage: FieldRef<"UserCharity", 'Decimal'>
    readonly amount: FieldRef<"UserCharity", 'Decimal'>
    readonly currency: FieldRef<"UserCharity", 'String'>
    readonly month: FieldRef<"UserCharity", 'Int'>
    readonly year: FieldRef<"UserCharity", 'Int'>
    readonly status: FieldRef<"UserCharity", 'CharityStatus'>
    readonly paidAt: FieldRef<"UserCharity", 'DateTime'>
    readonly createdAt: FieldRef<"UserCharity", 'DateTime'>
    readonly updatedAt: FieldRef<"UserCharity", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserCharity findUnique
   */
  export type UserCharityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCharity
     */
    select?: UserCharitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCharity
     */
    omit?: UserCharityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCharityInclude<ExtArgs> | null
    /**
     * Filter, which UserCharity to fetch.
     */
    where: UserCharityWhereUniqueInput
  }

  /**
   * UserCharity findUniqueOrThrow
   */
  export type UserCharityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCharity
     */
    select?: UserCharitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCharity
     */
    omit?: UserCharityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCharityInclude<ExtArgs> | null
    /**
     * Filter, which UserCharity to fetch.
     */
    where: UserCharityWhereUniqueInput
  }

  /**
   * UserCharity findFirst
   */
  export type UserCharityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCharity
     */
    select?: UserCharitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCharity
     */
    omit?: UserCharityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCharityInclude<ExtArgs> | null
    /**
     * Filter, which UserCharity to fetch.
     */
    where?: UserCharityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCharities to fetch.
     */
    orderBy?: UserCharityOrderByWithRelationInput | UserCharityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserCharities.
     */
    cursor?: UserCharityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCharities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCharities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserCharities.
     */
    distinct?: UserCharityScalarFieldEnum | UserCharityScalarFieldEnum[]
  }

  /**
   * UserCharity findFirstOrThrow
   */
  export type UserCharityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCharity
     */
    select?: UserCharitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCharity
     */
    omit?: UserCharityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCharityInclude<ExtArgs> | null
    /**
     * Filter, which UserCharity to fetch.
     */
    where?: UserCharityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCharities to fetch.
     */
    orderBy?: UserCharityOrderByWithRelationInput | UserCharityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserCharities.
     */
    cursor?: UserCharityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCharities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCharities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserCharities.
     */
    distinct?: UserCharityScalarFieldEnum | UserCharityScalarFieldEnum[]
  }

  /**
   * UserCharity findMany
   */
  export type UserCharityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCharity
     */
    select?: UserCharitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCharity
     */
    omit?: UserCharityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCharityInclude<ExtArgs> | null
    /**
     * Filter, which UserCharities to fetch.
     */
    where?: UserCharityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCharities to fetch.
     */
    orderBy?: UserCharityOrderByWithRelationInput | UserCharityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserCharities.
     */
    cursor?: UserCharityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCharities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCharities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserCharities.
     */
    distinct?: UserCharityScalarFieldEnum | UserCharityScalarFieldEnum[]
  }

  /**
   * UserCharity create
   */
  export type UserCharityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCharity
     */
    select?: UserCharitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCharity
     */
    omit?: UserCharityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCharityInclude<ExtArgs> | null
    /**
     * The data needed to create a UserCharity.
     */
    data: XOR<UserCharityCreateInput, UserCharityUncheckedCreateInput>
  }

  /**
   * UserCharity createMany
   */
  export type UserCharityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserCharities.
     */
    data: UserCharityCreateManyInput | UserCharityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserCharity createManyAndReturn
   */
  export type UserCharityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCharity
     */
    select?: UserCharitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserCharity
     */
    omit?: UserCharityOmit<ExtArgs> | null
    /**
     * The data used to create many UserCharities.
     */
    data: UserCharityCreateManyInput | UserCharityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCharityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserCharity update
   */
  export type UserCharityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCharity
     */
    select?: UserCharitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCharity
     */
    omit?: UserCharityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCharityInclude<ExtArgs> | null
    /**
     * The data needed to update a UserCharity.
     */
    data: XOR<UserCharityUpdateInput, UserCharityUncheckedUpdateInput>
    /**
     * Choose, which UserCharity to update.
     */
    where: UserCharityWhereUniqueInput
  }

  /**
   * UserCharity updateMany
   */
  export type UserCharityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserCharities.
     */
    data: XOR<UserCharityUpdateManyMutationInput, UserCharityUncheckedUpdateManyInput>
    /**
     * Filter which UserCharities to update
     */
    where?: UserCharityWhereInput
    /**
     * Limit how many UserCharities to update.
     */
    limit?: number
  }

  /**
   * UserCharity updateManyAndReturn
   */
  export type UserCharityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCharity
     */
    select?: UserCharitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserCharity
     */
    omit?: UserCharityOmit<ExtArgs> | null
    /**
     * The data used to update UserCharities.
     */
    data: XOR<UserCharityUpdateManyMutationInput, UserCharityUncheckedUpdateManyInput>
    /**
     * Filter which UserCharities to update
     */
    where?: UserCharityWhereInput
    /**
     * Limit how many UserCharities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCharityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserCharity upsert
   */
  export type UserCharityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCharity
     */
    select?: UserCharitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCharity
     */
    omit?: UserCharityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCharityInclude<ExtArgs> | null
    /**
     * The filter to search for the UserCharity to update in case it exists.
     */
    where: UserCharityWhereUniqueInput
    /**
     * In case the UserCharity found by the `where` argument doesn't exist, create a new UserCharity with this data.
     */
    create: XOR<UserCharityCreateInput, UserCharityUncheckedCreateInput>
    /**
     * In case the UserCharity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserCharityUpdateInput, UserCharityUncheckedUpdateInput>
  }

  /**
   * UserCharity delete
   */
  export type UserCharityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCharity
     */
    select?: UserCharitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCharity
     */
    omit?: UserCharityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCharityInclude<ExtArgs> | null
    /**
     * Filter which UserCharity to delete.
     */
    where: UserCharityWhereUniqueInput
  }

  /**
   * UserCharity deleteMany
   */
  export type UserCharityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserCharities to delete
     */
    where?: UserCharityWhereInput
    /**
     * Limit how many UserCharities to delete.
     */
    limit?: number
  }

  /**
   * UserCharity without action
   */
  export type UserCharityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCharity
     */
    select?: UserCharitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCharity
     */
    omit?: UserCharityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCharityInclude<ExtArgs> | null
  }


  /**
   * Model GolfScore
   */

  export type AggregateGolfScore = {
    _count: GolfScoreCountAggregateOutputType | null
    _avg: GolfScoreAvgAggregateOutputType | null
    _sum: GolfScoreSumAggregateOutputType | null
    _min: GolfScoreMinAggregateOutputType | null
    _max: GolfScoreMaxAggregateOutputType | null
  }

  export type GolfScoreAvgAggregateOutputType = {
    score: number | null
  }

  export type GolfScoreSumAggregateOutputType = {
    score: number | null
  }

  export type GolfScoreMinAggregateOutputType = {
    id: string | null
    userId: string | null
    score: number | null
    playedOn: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GolfScoreMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    score: number | null
    playedOn: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GolfScoreCountAggregateOutputType = {
    id: number
    userId: number
    score: number
    playedOn: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GolfScoreAvgAggregateInputType = {
    score?: true
  }

  export type GolfScoreSumAggregateInputType = {
    score?: true
  }

  export type GolfScoreMinAggregateInputType = {
    id?: true
    userId?: true
    score?: true
    playedOn?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GolfScoreMaxAggregateInputType = {
    id?: true
    userId?: true
    score?: true
    playedOn?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GolfScoreCountAggregateInputType = {
    id?: true
    userId?: true
    score?: true
    playedOn?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GolfScoreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GolfScore to aggregate.
     */
    where?: GolfScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GolfScores to fetch.
     */
    orderBy?: GolfScoreOrderByWithRelationInput | GolfScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GolfScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GolfScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GolfScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GolfScores
    **/
    _count?: true | GolfScoreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GolfScoreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GolfScoreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GolfScoreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GolfScoreMaxAggregateInputType
  }

  export type GetGolfScoreAggregateType<T extends GolfScoreAggregateArgs> = {
        [P in keyof T & keyof AggregateGolfScore]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGolfScore[P]>
      : GetScalarType<T[P], AggregateGolfScore[P]>
  }




  export type GolfScoreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GolfScoreWhereInput
    orderBy?: GolfScoreOrderByWithAggregationInput | GolfScoreOrderByWithAggregationInput[]
    by: GolfScoreScalarFieldEnum[] | GolfScoreScalarFieldEnum
    having?: GolfScoreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GolfScoreCountAggregateInputType | true
    _avg?: GolfScoreAvgAggregateInputType
    _sum?: GolfScoreSumAggregateInputType
    _min?: GolfScoreMinAggregateInputType
    _max?: GolfScoreMaxAggregateInputType
  }

  export type GolfScoreGroupByOutputType = {
    id: string
    userId: string
    score: number
    playedOn: Date
    createdAt: Date
    updatedAt: Date
    _count: GolfScoreCountAggregateOutputType | null
    _avg: GolfScoreAvgAggregateOutputType | null
    _sum: GolfScoreSumAggregateOutputType | null
    _min: GolfScoreMinAggregateOutputType | null
    _max: GolfScoreMaxAggregateOutputType | null
  }

  type GetGolfScoreGroupByPayload<T extends GolfScoreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GolfScoreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GolfScoreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GolfScoreGroupByOutputType[P]>
            : GetScalarType<T[P], GolfScoreGroupByOutputType[P]>
        }
      >
    >


  export type GolfScoreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    score?: boolean
    playedOn?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["golfScore"]>

  export type GolfScoreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    score?: boolean
    playedOn?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["golfScore"]>

  export type GolfScoreSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    score?: boolean
    playedOn?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["golfScore"]>

  export type GolfScoreSelectScalar = {
    id?: boolean
    userId?: boolean
    score?: boolean
    playedOn?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GolfScoreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "score" | "playedOn" | "createdAt" | "updatedAt", ExtArgs["result"]["golfScore"]>
  export type GolfScoreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GolfScoreIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GolfScoreIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $GolfScorePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GolfScore"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      score: number
      playedOn: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["golfScore"]>
    composites: {}
  }

  type GolfScoreGetPayload<S extends boolean | null | undefined | GolfScoreDefaultArgs> = $Result.GetResult<Prisma.$GolfScorePayload, S>

  type GolfScoreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GolfScoreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GolfScoreCountAggregateInputType | true
    }

  export interface GolfScoreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GolfScore'], meta: { name: 'GolfScore' } }
    /**
     * Find zero or one GolfScore that matches the filter.
     * @param {GolfScoreFindUniqueArgs} args - Arguments to find a GolfScore
     * @example
     * // Get one GolfScore
     * const golfScore = await prisma.golfScore.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GolfScoreFindUniqueArgs>(args: SelectSubset<T, GolfScoreFindUniqueArgs<ExtArgs>>): Prisma__GolfScoreClient<$Result.GetResult<Prisma.$GolfScorePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GolfScore that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GolfScoreFindUniqueOrThrowArgs} args - Arguments to find a GolfScore
     * @example
     * // Get one GolfScore
     * const golfScore = await prisma.golfScore.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GolfScoreFindUniqueOrThrowArgs>(args: SelectSubset<T, GolfScoreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GolfScoreClient<$Result.GetResult<Prisma.$GolfScorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GolfScore that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GolfScoreFindFirstArgs} args - Arguments to find a GolfScore
     * @example
     * // Get one GolfScore
     * const golfScore = await prisma.golfScore.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GolfScoreFindFirstArgs>(args?: SelectSubset<T, GolfScoreFindFirstArgs<ExtArgs>>): Prisma__GolfScoreClient<$Result.GetResult<Prisma.$GolfScorePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GolfScore that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GolfScoreFindFirstOrThrowArgs} args - Arguments to find a GolfScore
     * @example
     * // Get one GolfScore
     * const golfScore = await prisma.golfScore.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GolfScoreFindFirstOrThrowArgs>(args?: SelectSubset<T, GolfScoreFindFirstOrThrowArgs<ExtArgs>>): Prisma__GolfScoreClient<$Result.GetResult<Prisma.$GolfScorePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GolfScores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GolfScoreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GolfScores
     * const golfScores = await prisma.golfScore.findMany()
     * 
     * // Get first 10 GolfScores
     * const golfScores = await prisma.golfScore.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const golfScoreWithIdOnly = await prisma.golfScore.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GolfScoreFindManyArgs>(args?: SelectSubset<T, GolfScoreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GolfScorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GolfScore.
     * @param {GolfScoreCreateArgs} args - Arguments to create a GolfScore.
     * @example
     * // Create one GolfScore
     * const GolfScore = await prisma.golfScore.create({
     *   data: {
     *     // ... data to create a GolfScore
     *   }
     * })
     * 
     */
    create<T extends GolfScoreCreateArgs>(args: SelectSubset<T, GolfScoreCreateArgs<ExtArgs>>): Prisma__GolfScoreClient<$Result.GetResult<Prisma.$GolfScorePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GolfScores.
     * @param {GolfScoreCreateManyArgs} args - Arguments to create many GolfScores.
     * @example
     * // Create many GolfScores
     * const golfScore = await prisma.golfScore.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GolfScoreCreateManyArgs>(args?: SelectSubset<T, GolfScoreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GolfScores and returns the data saved in the database.
     * @param {GolfScoreCreateManyAndReturnArgs} args - Arguments to create many GolfScores.
     * @example
     * // Create many GolfScores
     * const golfScore = await prisma.golfScore.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GolfScores and only return the `id`
     * const golfScoreWithIdOnly = await prisma.golfScore.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GolfScoreCreateManyAndReturnArgs>(args?: SelectSubset<T, GolfScoreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GolfScorePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GolfScore.
     * @param {GolfScoreDeleteArgs} args - Arguments to delete one GolfScore.
     * @example
     * // Delete one GolfScore
     * const GolfScore = await prisma.golfScore.delete({
     *   where: {
     *     // ... filter to delete one GolfScore
     *   }
     * })
     * 
     */
    delete<T extends GolfScoreDeleteArgs>(args: SelectSubset<T, GolfScoreDeleteArgs<ExtArgs>>): Prisma__GolfScoreClient<$Result.GetResult<Prisma.$GolfScorePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GolfScore.
     * @param {GolfScoreUpdateArgs} args - Arguments to update one GolfScore.
     * @example
     * // Update one GolfScore
     * const golfScore = await prisma.golfScore.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GolfScoreUpdateArgs>(args: SelectSubset<T, GolfScoreUpdateArgs<ExtArgs>>): Prisma__GolfScoreClient<$Result.GetResult<Prisma.$GolfScorePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GolfScores.
     * @param {GolfScoreDeleteManyArgs} args - Arguments to filter GolfScores to delete.
     * @example
     * // Delete a few GolfScores
     * const { count } = await prisma.golfScore.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GolfScoreDeleteManyArgs>(args?: SelectSubset<T, GolfScoreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GolfScores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GolfScoreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GolfScores
     * const golfScore = await prisma.golfScore.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GolfScoreUpdateManyArgs>(args: SelectSubset<T, GolfScoreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GolfScores and returns the data updated in the database.
     * @param {GolfScoreUpdateManyAndReturnArgs} args - Arguments to update many GolfScores.
     * @example
     * // Update many GolfScores
     * const golfScore = await prisma.golfScore.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GolfScores and only return the `id`
     * const golfScoreWithIdOnly = await prisma.golfScore.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GolfScoreUpdateManyAndReturnArgs>(args: SelectSubset<T, GolfScoreUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GolfScorePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GolfScore.
     * @param {GolfScoreUpsertArgs} args - Arguments to update or create a GolfScore.
     * @example
     * // Update or create a GolfScore
     * const golfScore = await prisma.golfScore.upsert({
     *   create: {
     *     // ... data to create a GolfScore
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GolfScore we want to update
     *   }
     * })
     */
    upsert<T extends GolfScoreUpsertArgs>(args: SelectSubset<T, GolfScoreUpsertArgs<ExtArgs>>): Prisma__GolfScoreClient<$Result.GetResult<Prisma.$GolfScorePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GolfScores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GolfScoreCountArgs} args - Arguments to filter GolfScores to count.
     * @example
     * // Count the number of GolfScores
     * const count = await prisma.golfScore.count({
     *   where: {
     *     // ... the filter for the GolfScores we want to count
     *   }
     * })
    **/
    count<T extends GolfScoreCountArgs>(
      args?: Subset<T, GolfScoreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GolfScoreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GolfScore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GolfScoreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GolfScoreAggregateArgs>(args: Subset<T, GolfScoreAggregateArgs>): Prisma.PrismaPromise<GetGolfScoreAggregateType<T>>

    /**
     * Group by GolfScore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GolfScoreGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GolfScoreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GolfScoreGroupByArgs['orderBy'] }
        : { orderBy?: GolfScoreGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GolfScoreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGolfScoreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GolfScore model
   */
  readonly fields: GolfScoreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GolfScore.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GolfScoreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GolfScore model
   */
  interface GolfScoreFieldRefs {
    readonly id: FieldRef<"GolfScore", 'String'>
    readonly userId: FieldRef<"GolfScore", 'String'>
    readonly score: FieldRef<"GolfScore", 'Int'>
    readonly playedOn: FieldRef<"GolfScore", 'DateTime'>
    readonly createdAt: FieldRef<"GolfScore", 'DateTime'>
    readonly updatedAt: FieldRef<"GolfScore", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GolfScore findUnique
   */
  export type GolfScoreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GolfScore
     */
    select?: GolfScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GolfScore
     */
    omit?: GolfScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GolfScoreInclude<ExtArgs> | null
    /**
     * Filter, which GolfScore to fetch.
     */
    where: GolfScoreWhereUniqueInput
  }

  /**
   * GolfScore findUniqueOrThrow
   */
  export type GolfScoreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GolfScore
     */
    select?: GolfScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GolfScore
     */
    omit?: GolfScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GolfScoreInclude<ExtArgs> | null
    /**
     * Filter, which GolfScore to fetch.
     */
    where: GolfScoreWhereUniqueInput
  }

  /**
   * GolfScore findFirst
   */
  export type GolfScoreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GolfScore
     */
    select?: GolfScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GolfScore
     */
    omit?: GolfScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GolfScoreInclude<ExtArgs> | null
    /**
     * Filter, which GolfScore to fetch.
     */
    where?: GolfScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GolfScores to fetch.
     */
    orderBy?: GolfScoreOrderByWithRelationInput | GolfScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GolfScores.
     */
    cursor?: GolfScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GolfScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GolfScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GolfScores.
     */
    distinct?: GolfScoreScalarFieldEnum | GolfScoreScalarFieldEnum[]
  }

  /**
   * GolfScore findFirstOrThrow
   */
  export type GolfScoreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GolfScore
     */
    select?: GolfScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GolfScore
     */
    omit?: GolfScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GolfScoreInclude<ExtArgs> | null
    /**
     * Filter, which GolfScore to fetch.
     */
    where?: GolfScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GolfScores to fetch.
     */
    orderBy?: GolfScoreOrderByWithRelationInput | GolfScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GolfScores.
     */
    cursor?: GolfScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GolfScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GolfScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GolfScores.
     */
    distinct?: GolfScoreScalarFieldEnum | GolfScoreScalarFieldEnum[]
  }

  /**
   * GolfScore findMany
   */
  export type GolfScoreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GolfScore
     */
    select?: GolfScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GolfScore
     */
    omit?: GolfScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GolfScoreInclude<ExtArgs> | null
    /**
     * Filter, which GolfScores to fetch.
     */
    where?: GolfScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GolfScores to fetch.
     */
    orderBy?: GolfScoreOrderByWithRelationInput | GolfScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GolfScores.
     */
    cursor?: GolfScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GolfScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GolfScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GolfScores.
     */
    distinct?: GolfScoreScalarFieldEnum | GolfScoreScalarFieldEnum[]
  }

  /**
   * GolfScore create
   */
  export type GolfScoreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GolfScore
     */
    select?: GolfScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GolfScore
     */
    omit?: GolfScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GolfScoreInclude<ExtArgs> | null
    /**
     * The data needed to create a GolfScore.
     */
    data: XOR<GolfScoreCreateInput, GolfScoreUncheckedCreateInput>
  }

  /**
   * GolfScore createMany
   */
  export type GolfScoreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GolfScores.
     */
    data: GolfScoreCreateManyInput | GolfScoreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GolfScore createManyAndReturn
   */
  export type GolfScoreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GolfScore
     */
    select?: GolfScoreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GolfScore
     */
    omit?: GolfScoreOmit<ExtArgs> | null
    /**
     * The data used to create many GolfScores.
     */
    data: GolfScoreCreateManyInput | GolfScoreCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GolfScoreIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GolfScore update
   */
  export type GolfScoreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GolfScore
     */
    select?: GolfScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GolfScore
     */
    omit?: GolfScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GolfScoreInclude<ExtArgs> | null
    /**
     * The data needed to update a GolfScore.
     */
    data: XOR<GolfScoreUpdateInput, GolfScoreUncheckedUpdateInput>
    /**
     * Choose, which GolfScore to update.
     */
    where: GolfScoreWhereUniqueInput
  }

  /**
   * GolfScore updateMany
   */
  export type GolfScoreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GolfScores.
     */
    data: XOR<GolfScoreUpdateManyMutationInput, GolfScoreUncheckedUpdateManyInput>
    /**
     * Filter which GolfScores to update
     */
    where?: GolfScoreWhereInput
    /**
     * Limit how many GolfScores to update.
     */
    limit?: number
  }

  /**
   * GolfScore updateManyAndReturn
   */
  export type GolfScoreUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GolfScore
     */
    select?: GolfScoreSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GolfScore
     */
    omit?: GolfScoreOmit<ExtArgs> | null
    /**
     * The data used to update GolfScores.
     */
    data: XOR<GolfScoreUpdateManyMutationInput, GolfScoreUncheckedUpdateManyInput>
    /**
     * Filter which GolfScores to update
     */
    where?: GolfScoreWhereInput
    /**
     * Limit how many GolfScores to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GolfScoreIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GolfScore upsert
   */
  export type GolfScoreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GolfScore
     */
    select?: GolfScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GolfScore
     */
    omit?: GolfScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GolfScoreInclude<ExtArgs> | null
    /**
     * The filter to search for the GolfScore to update in case it exists.
     */
    where: GolfScoreWhereUniqueInput
    /**
     * In case the GolfScore found by the `where` argument doesn't exist, create a new GolfScore with this data.
     */
    create: XOR<GolfScoreCreateInput, GolfScoreUncheckedCreateInput>
    /**
     * In case the GolfScore was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GolfScoreUpdateInput, GolfScoreUncheckedUpdateInput>
  }

  /**
   * GolfScore delete
   */
  export type GolfScoreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GolfScore
     */
    select?: GolfScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GolfScore
     */
    omit?: GolfScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GolfScoreInclude<ExtArgs> | null
    /**
     * Filter which GolfScore to delete.
     */
    where: GolfScoreWhereUniqueInput
  }

  /**
   * GolfScore deleteMany
   */
  export type GolfScoreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GolfScores to delete
     */
    where?: GolfScoreWhereInput
    /**
     * Limit how many GolfScores to delete.
     */
    limit?: number
  }

  /**
   * GolfScore without action
   */
  export type GolfScoreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GolfScore
     */
    select?: GolfScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GolfScore
     */
    omit?: GolfScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GolfScoreInclude<ExtArgs> | null
  }


  /**
   * Model SubscriptionModel
   */

  export type AggregateSubscriptionModel = {
    _count: SubscriptionModelCountAggregateOutputType | null
    _avg: SubscriptionModelAvgAggregateOutputType | null
    _sum: SubscriptionModelSumAggregateOutputType | null
    _min: SubscriptionModelMinAggregateOutputType | null
    _max: SubscriptionModelMaxAggregateOutputType | null
  }

  export type SubscriptionModelAvgAggregateOutputType = {
    price: number | null
  }

  export type SubscriptionModelSumAggregateOutputType = {
    price: number | null
  }

  export type SubscriptionModelMinAggregateOutputType = {
    id: string | null
    planName: string | null
    planDescription: string | null
    price: number | null
    currency: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubscriptionModelMaxAggregateOutputType = {
    id: string | null
    planName: string | null
    planDescription: string | null
    price: number | null
    currency: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubscriptionModelCountAggregateOutputType = {
    id: number
    planName: number
    planDescription: number
    price: number
    currency: number
    features: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SubscriptionModelAvgAggregateInputType = {
    price?: true
  }

  export type SubscriptionModelSumAggregateInputType = {
    price?: true
  }

  export type SubscriptionModelMinAggregateInputType = {
    id?: true
    planName?: true
    planDescription?: true
    price?: true
    currency?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubscriptionModelMaxAggregateInputType = {
    id?: true
    planName?: true
    planDescription?: true
    price?: true
    currency?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubscriptionModelCountAggregateInputType = {
    id?: true
    planName?: true
    planDescription?: true
    price?: true
    currency?: true
    features?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SubscriptionModelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubscriptionModel to aggregate.
     */
    where?: SubscriptionModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubscriptionModels to fetch.
     */
    orderBy?: SubscriptionModelOrderByWithRelationInput | SubscriptionModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubscriptionModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubscriptionModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubscriptionModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SubscriptionModels
    **/
    _count?: true | SubscriptionModelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubscriptionModelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubscriptionModelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubscriptionModelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubscriptionModelMaxAggregateInputType
  }

  export type GetSubscriptionModelAggregateType<T extends SubscriptionModelAggregateArgs> = {
        [P in keyof T & keyof AggregateSubscriptionModel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscriptionModel[P]>
      : GetScalarType<T[P], AggregateSubscriptionModel[P]>
  }




  export type SubscriptionModelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionModelWhereInput
    orderBy?: SubscriptionModelOrderByWithAggregationInput | SubscriptionModelOrderByWithAggregationInput[]
    by: SubscriptionModelScalarFieldEnum[] | SubscriptionModelScalarFieldEnum
    having?: SubscriptionModelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscriptionModelCountAggregateInputType | true
    _avg?: SubscriptionModelAvgAggregateInputType
    _sum?: SubscriptionModelSumAggregateInputType
    _min?: SubscriptionModelMinAggregateInputType
    _max?: SubscriptionModelMaxAggregateInputType
  }

  export type SubscriptionModelGroupByOutputType = {
    id: string
    planName: string
    planDescription: string | null
    price: number
    currency: string
    features: string[]
    createdAt: Date
    updatedAt: Date
    _count: SubscriptionModelCountAggregateOutputType | null
    _avg: SubscriptionModelAvgAggregateOutputType | null
    _sum: SubscriptionModelSumAggregateOutputType | null
    _min: SubscriptionModelMinAggregateOutputType | null
    _max: SubscriptionModelMaxAggregateOutputType | null
  }

  type GetSubscriptionModelGroupByPayload<T extends SubscriptionModelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscriptionModelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubscriptionModelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscriptionModelGroupByOutputType[P]>
            : GetScalarType<T[P], SubscriptionModelGroupByOutputType[P]>
        }
      >
    >


  export type SubscriptionModelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    planName?: boolean
    planDescription?: boolean
    price?: boolean
    currency?: boolean
    features?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subscriptionOrders?: boolean | SubscriptionModel$subscriptionOrdersArgs<ExtArgs>
    _count?: boolean | SubscriptionModelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscriptionModel"]>

  export type SubscriptionModelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    planName?: boolean
    planDescription?: boolean
    price?: boolean
    currency?: boolean
    features?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["subscriptionModel"]>

  export type SubscriptionModelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    planName?: boolean
    planDescription?: boolean
    price?: boolean
    currency?: boolean
    features?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["subscriptionModel"]>

  export type SubscriptionModelSelectScalar = {
    id?: boolean
    planName?: boolean
    planDescription?: boolean
    price?: boolean
    currency?: boolean
    features?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SubscriptionModelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "planName" | "planDescription" | "price" | "currency" | "features" | "createdAt" | "updatedAt", ExtArgs["result"]["subscriptionModel"]>
  export type SubscriptionModelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscriptionOrders?: boolean | SubscriptionModel$subscriptionOrdersArgs<ExtArgs>
    _count?: boolean | SubscriptionModelCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SubscriptionModelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SubscriptionModelIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SubscriptionModelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SubscriptionModel"
    objects: {
      subscriptionOrders: Prisma.$SubscriptionOrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      planName: string
      planDescription: string | null
      price: number
      currency: string
      features: string[]
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["subscriptionModel"]>
    composites: {}
  }

  type SubscriptionModelGetPayload<S extends boolean | null | undefined | SubscriptionModelDefaultArgs> = $Result.GetResult<Prisma.$SubscriptionModelPayload, S>

  type SubscriptionModelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubscriptionModelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubscriptionModelCountAggregateInputType | true
    }

  export interface SubscriptionModelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SubscriptionModel'], meta: { name: 'SubscriptionModel' } }
    /**
     * Find zero or one SubscriptionModel that matches the filter.
     * @param {SubscriptionModelFindUniqueArgs} args - Arguments to find a SubscriptionModel
     * @example
     * // Get one SubscriptionModel
     * const subscriptionModel = await prisma.subscriptionModel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubscriptionModelFindUniqueArgs>(args: SelectSubset<T, SubscriptionModelFindUniqueArgs<ExtArgs>>): Prisma__SubscriptionModelClient<$Result.GetResult<Prisma.$SubscriptionModelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SubscriptionModel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubscriptionModelFindUniqueOrThrowArgs} args - Arguments to find a SubscriptionModel
     * @example
     * // Get one SubscriptionModel
     * const subscriptionModel = await prisma.subscriptionModel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubscriptionModelFindUniqueOrThrowArgs>(args: SelectSubset<T, SubscriptionModelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubscriptionModelClient<$Result.GetResult<Prisma.$SubscriptionModelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubscriptionModel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionModelFindFirstArgs} args - Arguments to find a SubscriptionModel
     * @example
     * // Get one SubscriptionModel
     * const subscriptionModel = await prisma.subscriptionModel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubscriptionModelFindFirstArgs>(args?: SelectSubset<T, SubscriptionModelFindFirstArgs<ExtArgs>>): Prisma__SubscriptionModelClient<$Result.GetResult<Prisma.$SubscriptionModelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubscriptionModel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionModelFindFirstOrThrowArgs} args - Arguments to find a SubscriptionModel
     * @example
     * // Get one SubscriptionModel
     * const subscriptionModel = await prisma.subscriptionModel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubscriptionModelFindFirstOrThrowArgs>(args?: SelectSubset<T, SubscriptionModelFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubscriptionModelClient<$Result.GetResult<Prisma.$SubscriptionModelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SubscriptionModels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionModelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SubscriptionModels
     * const subscriptionModels = await prisma.subscriptionModel.findMany()
     * 
     * // Get first 10 SubscriptionModels
     * const subscriptionModels = await prisma.subscriptionModel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subscriptionModelWithIdOnly = await prisma.subscriptionModel.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubscriptionModelFindManyArgs>(args?: SelectSubset<T, SubscriptionModelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionModelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SubscriptionModel.
     * @param {SubscriptionModelCreateArgs} args - Arguments to create a SubscriptionModel.
     * @example
     * // Create one SubscriptionModel
     * const SubscriptionModel = await prisma.subscriptionModel.create({
     *   data: {
     *     // ... data to create a SubscriptionModel
     *   }
     * })
     * 
     */
    create<T extends SubscriptionModelCreateArgs>(args: SelectSubset<T, SubscriptionModelCreateArgs<ExtArgs>>): Prisma__SubscriptionModelClient<$Result.GetResult<Prisma.$SubscriptionModelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SubscriptionModels.
     * @param {SubscriptionModelCreateManyArgs} args - Arguments to create many SubscriptionModels.
     * @example
     * // Create many SubscriptionModels
     * const subscriptionModel = await prisma.subscriptionModel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubscriptionModelCreateManyArgs>(args?: SelectSubset<T, SubscriptionModelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SubscriptionModels and returns the data saved in the database.
     * @param {SubscriptionModelCreateManyAndReturnArgs} args - Arguments to create many SubscriptionModels.
     * @example
     * // Create many SubscriptionModels
     * const subscriptionModel = await prisma.subscriptionModel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SubscriptionModels and only return the `id`
     * const subscriptionModelWithIdOnly = await prisma.subscriptionModel.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubscriptionModelCreateManyAndReturnArgs>(args?: SelectSubset<T, SubscriptionModelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionModelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SubscriptionModel.
     * @param {SubscriptionModelDeleteArgs} args - Arguments to delete one SubscriptionModel.
     * @example
     * // Delete one SubscriptionModel
     * const SubscriptionModel = await prisma.subscriptionModel.delete({
     *   where: {
     *     // ... filter to delete one SubscriptionModel
     *   }
     * })
     * 
     */
    delete<T extends SubscriptionModelDeleteArgs>(args: SelectSubset<T, SubscriptionModelDeleteArgs<ExtArgs>>): Prisma__SubscriptionModelClient<$Result.GetResult<Prisma.$SubscriptionModelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SubscriptionModel.
     * @param {SubscriptionModelUpdateArgs} args - Arguments to update one SubscriptionModel.
     * @example
     * // Update one SubscriptionModel
     * const subscriptionModel = await prisma.subscriptionModel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubscriptionModelUpdateArgs>(args: SelectSubset<T, SubscriptionModelUpdateArgs<ExtArgs>>): Prisma__SubscriptionModelClient<$Result.GetResult<Prisma.$SubscriptionModelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SubscriptionModels.
     * @param {SubscriptionModelDeleteManyArgs} args - Arguments to filter SubscriptionModels to delete.
     * @example
     * // Delete a few SubscriptionModels
     * const { count } = await prisma.subscriptionModel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubscriptionModelDeleteManyArgs>(args?: SelectSubset<T, SubscriptionModelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubscriptionModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionModelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SubscriptionModels
     * const subscriptionModel = await prisma.subscriptionModel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubscriptionModelUpdateManyArgs>(args: SelectSubset<T, SubscriptionModelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubscriptionModels and returns the data updated in the database.
     * @param {SubscriptionModelUpdateManyAndReturnArgs} args - Arguments to update many SubscriptionModels.
     * @example
     * // Update many SubscriptionModels
     * const subscriptionModel = await prisma.subscriptionModel.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SubscriptionModels and only return the `id`
     * const subscriptionModelWithIdOnly = await prisma.subscriptionModel.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SubscriptionModelUpdateManyAndReturnArgs>(args: SelectSubset<T, SubscriptionModelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionModelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SubscriptionModel.
     * @param {SubscriptionModelUpsertArgs} args - Arguments to update or create a SubscriptionModel.
     * @example
     * // Update or create a SubscriptionModel
     * const subscriptionModel = await prisma.subscriptionModel.upsert({
     *   create: {
     *     // ... data to create a SubscriptionModel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SubscriptionModel we want to update
     *   }
     * })
     */
    upsert<T extends SubscriptionModelUpsertArgs>(args: SelectSubset<T, SubscriptionModelUpsertArgs<ExtArgs>>): Prisma__SubscriptionModelClient<$Result.GetResult<Prisma.$SubscriptionModelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SubscriptionModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionModelCountArgs} args - Arguments to filter SubscriptionModels to count.
     * @example
     * // Count the number of SubscriptionModels
     * const count = await prisma.subscriptionModel.count({
     *   where: {
     *     // ... the filter for the SubscriptionModels we want to count
     *   }
     * })
    **/
    count<T extends SubscriptionModelCountArgs>(
      args?: Subset<T, SubscriptionModelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriptionModelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SubscriptionModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionModelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubscriptionModelAggregateArgs>(args: Subset<T, SubscriptionModelAggregateArgs>): Prisma.PrismaPromise<GetSubscriptionModelAggregateType<T>>

    /**
     * Group by SubscriptionModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionModelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubscriptionModelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubscriptionModelGroupByArgs['orderBy'] }
        : { orderBy?: SubscriptionModelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubscriptionModelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscriptionModelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SubscriptionModel model
   */
  readonly fields: SubscriptionModelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SubscriptionModel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubscriptionModelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subscriptionOrders<T extends SubscriptionModel$subscriptionOrdersArgs<ExtArgs> = {}>(args?: Subset<T, SubscriptionModel$subscriptionOrdersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SubscriptionModel model
   */
  interface SubscriptionModelFieldRefs {
    readonly id: FieldRef<"SubscriptionModel", 'String'>
    readonly planName: FieldRef<"SubscriptionModel", 'String'>
    readonly planDescription: FieldRef<"SubscriptionModel", 'String'>
    readonly price: FieldRef<"SubscriptionModel", 'Int'>
    readonly currency: FieldRef<"SubscriptionModel", 'String'>
    readonly features: FieldRef<"SubscriptionModel", 'String[]'>
    readonly createdAt: FieldRef<"SubscriptionModel", 'DateTime'>
    readonly updatedAt: FieldRef<"SubscriptionModel", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SubscriptionModel findUnique
   */
  export type SubscriptionModelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionModel
     */
    select?: SubscriptionModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionModel
     */
    omit?: SubscriptionModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionModelInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionModel to fetch.
     */
    where: SubscriptionModelWhereUniqueInput
  }

  /**
   * SubscriptionModel findUniqueOrThrow
   */
  export type SubscriptionModelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionModel
     */
    select?: SubscriptionModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionModel
     */
    omit?: SubscriptionModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionModelInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionModel to fetch.
     */
    where: SubscriptionModelWhereUniqueInput
  }

  /**
   * SubscriptionModel findFirst
   */
  export type SubscriptionModelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionModel
     */
    select?: SubscriptionModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionModel
     */
    omit?: SubscriptionModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionModelInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionModel to fetch.
     */
    where?: SubscriptionModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubscriptionModels to fetch.
     */
    orderBy?: SubscriptionModelOrderByWithRelationInput | SubscriptionModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubscriptionModels.
     */
    cursor?: SubscriptionModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubscriptionModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubscriptionModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubscriptionModels.
     */
    distinct?: SubscriptionModelScalarFieldEnum | SubscriptionModelScalarFieldEnum[]
  }

  /**
   * SubscriptionModel findFirstOrThrow
   */
  export type SubscriptionModelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionModel
     */
    select?: SubscriptionModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionModel
     */
    omit?: SubscriptionModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionModelInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionModel to fetch.
     */
    where?: SubscriptionModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubscriptionModels to fetch.
     */
    orderBy?: SubscriptionModelOrderByWithRelationInput | SubscriptionModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubscriptionModels.
     */
    cursor?: SubscriptionModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubscriptionModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubscriptionModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubscriptionModels.
     */
    distinct?: SubscriptionModelScalarFieldEnum | SubscriptionModelScalarFieldEnum[]
  }

  /**
   * SubscriptionModel findMany
   */
  export type SubscriptionModelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionModel
     */
    select?: SubscriptionModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionModel
     */
    omit?: SubscriptionModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionModelInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionModels to fetch.
     */
    where?: SubscriptionModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubscriptionModels to fetch.
     */
    orderBy?: SubscriptionModelOrderByWithRelationInput | SubscriptionModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SubscriptionModels.
     */
    cursor?: SubscriptionModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubscriptionModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubscriptionModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubscriptionModels.
     */
    distinct?: SubscriptionModelScalarFieldEnum | SubscriptionModelScalarFieldEnum[]
  }

  /**
   * SubscriptionModel create
   */
  export type SubscriptionModelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionModel
     */
    select?: SubscriptionModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionModel
     */
    omit?: SubscriptionModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionModelInclude<ExtArgs> | null
    /**
     * The data needed to create a SubscriptionModel.
     */
    data: XOR<SubscriptionModelCreateInput, SubscriptionModelUncheckedCreateInput>
  }

  /**
   * SubscriptionModel createMany
   */
  export type SubscriptionModelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SubscriptionModels.
     */
    data: SubscriptionModelCreateManyInput | SubscriptionModelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SubscriptionModel createManyAndReturn
   */
  export type SubscriptionModelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionModel
     */
    select?: SubscriptionModelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionModel
     */
    omit?: SubscriptionModelOmit<ExtArgs> | null
    /**
     * The data used to create many SubscriptionModels.
     */
    data: SubscriptionModelCreateManyInput | SubscriptionModelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SubscriptionModel update
   */
  export type SubscriptionModelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionModel
     */
    select?: SubscriptionModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionModel
     */
    omit?: SubscriptionModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionModelInclude<ExtArgs> | null
    /**
     * The data needed to update a SubscriptionModel.
     */
    data: XOR<SubscriptionModelUpdateInput, SubscriptionModelUncheckedUpdateInput>
    /**
     * Choose, which SubscriptionModel to update.
     */
    where: SubscriptionModelWhereUniqueInput
  }

  /**
   * SubscriptionModel updateMany
   */
  export type SubscriptionModelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SubscriptionModels.
     */
    data: XOR<SubscriptionModelUpdateManyMutationInput, SubscriptionModelUncheckedUpdateManyInput>
    /**
     * Filter which SubscriptionModels to update
     */
    where?: SubscriptionModelWhereInput
    /**
     * Limit how many SubscriptionModels to update.
     */
    limit?: number
  }

  /**
   * SubscriptionModel updateManyAndReturn
   */
  export type SubscriptionModelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionModel
     */
    select?: SubscriptionModelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionModel
     */
    omit?: SubscriptionModelOmit<ExtArgs> | null
    /**
     * The data used to update SubscriptionModels.
     */
    data: XOR<SubscriptionModelUpdateManyMutationInput, SubscriptionModelUncheckedUpdateManyInput>
    /**
     * Filter which SubscriptionModels to update
     */
    where?: SubscriptionModelWhereInput
    /**
     * Limit how many SubscriptionModels to update.
     */
    limit?: number
  }

  /**
   * SubscriptionModel upsert
   */
  export type SubscriptionModelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionModel
     */
    select?: SubscriptionModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionModel
     */
    omit?: SubscriptionModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionModelInclude<ExtArgs> | null
    /**
     * The filter to search for the SubscriptionModel to update in case it exists.
     */
    where: SubscriptionModelWhereUniqueInput
    /**
     * In case the SubscriptionModel found by the `where` argument doesn't exist, create a new SubscriptionModel with this data.
     */
    create: XOR<SubscriptionModelCreateInput, SubscriptionModelUncheckedCreateInput>
    /**
     * In case the SubscriptionModel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubscriptionModelUpdateInput, SubscriptionModelUncheckedUpdateInput>
  }

  /**
   * SubscriptionModel delete
   */
  export type SubscriptionModelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionModel
     */
    select?: SubscriptionModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionModel
     */
    omit?: SubscriptionModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionModelInclude<ExtArgs> | null
    /**
     * Filter which SubscriptionModel to delete.
     */
    where: SubscriptionModelWhereUniqueInput
  }

  /**
   * SubscriptionModel deleteMany
   */
  export type SubscriptionModelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubscriptionModels to delete
     */
    where?: SubscriptionModelWhereInput
    /**
     * Limit how many SubscriptionModels to delete.
     */
    limit?: number
  }

  /**
   * SubscriptionModel.subscriptionOrders
   */
  export type SubscriptionModel$subscriptionOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionOrder
     */
    select?: SubscriptionOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionOrder
     */
    omit?: SubscriptionOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionOrderInclude<ExtArgs> | null
    where?: SubscriptionOrderWhereInput
    orderBy?: SubscriptionOrderOrderByWithRelationInput | SubscriptionOrderOrderByWithRelationInput[]
    cursor?: SubscriptionOrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubscriptionOrderScalarFieldEnum | SubscriptionOrderScalarFieldEnum[]
  }

  /**
   * SubscriptionModel without action
   */
  export type SubscriptionModelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionModel
     */
    select?: SubscriptionModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionModel
     */
    omit?: SubscriptionModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionModelInclude<ExtArgs> | null
  }


  /**
   * Model SubscriptionOrder
   */

  export type AggregateSubscriptionOrder = {
    _count: SubscriptionOrderCountAggregateOutputType | null
    _avg: SubscriptionOrderAvgAggregateOutputType | null
    _sum: SubscriptionOrderSumAggregateOutputType | null
    _min: SubscriptionOrderMinAggregateOutputType | null
    _max: SubscriptionOrderMaxAggregateOutputType | null
  }

  export type SubscriptionOrderAvgAggregateOutputType = {
    amount: number | null
  }

  export type SubscriptionOrderSumAggregateOutputType = {
    amount: number | null
  }

  export type SubscriptionOrderMinAggregateOutputType = {
    id: string | null
    subscriptionModelId: string | null
    userId: string | null
    periodStart: Date | null
    periodEnd: Date | null
    stripeSessionId: string | null
    stripePaymentIntentId: string | null
    stripeCustomerId: string | null
    stripeClientSecret: string | null
    stripeEventId: string | null
    paymentGateway: $Enums.PaymentGateway | null
    amount: number | null
    currency: string | null
    status: $Enums.PaymentStatus | null
    failReason: string | null
    completedAt: Date | null
    cancelledAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubscriptionOrderMaxAggregateOutputType = {
    id: string | null
    subscriptionModelId: string | null
    userId: string | null
    periodStart: Date | null
    periodEnd: Date | null
    stripeSessionId: string | null
    stripePaymentIntentId: string | null
    stripeCustomerId: string | null
    stripeClientSecret: string | null
    stripeEventId: string | null
    paymentGateway: $Enums.PaymentGateway | null
    amount: number | null
    currency: string | null
    status: $Enums.PaymentStatus | null
    failReason: string | null
    completedAt: Date | null
    cancelledAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubscriptionOrderCountAggregateOutputType = {
    id: number
    subscriptionModelId: number
    userId: number
    periodStart: number
    periodEnd: number
    stripeSessionId: number
    stripePaymentIntentId: number
    stripeCustomerId: number
    stripeClientSecret: number
    stripeEventId: number
    paymentGateway: number
    amount: number
    currency: number
    status: number
    failReason: number
    completedAt: number
    cancelledAt: number
    ipAddress: number
    userAgent: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SubscriptionOrderAvgAggregateInputType = {
    amount?: true
  }

  export type SubscriptionOrderSumAggregateInputType = {
    amount?: true
  }

  export type SubscriptionOrderMinAggregateInputType = {
    id?: true
    subscriptionModelId?: true
    userId?: true
    periodStart?: true
    periodEnd?: true
    stripeSessionId?: true
    stripePaymentIntentId?: true
    stripeCustomerId?: true
    stripeClientSecret?: true
    stripeEventId?: true
    paymentGateway?: true
    amount?: true
    currency?: true
    status?: true
    failReason?: true
    completedAt?: true
    cancelledAt?: true
    ipAddress?: true
    userAgent?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubscriptionOrderMaxAggregateInputType = {
    id?: true
    subscriptionModelId?: true
    userId?: true
    periodStart?: true
    periodEnd?: true
    stripeSessionId?: true
    stripePaymentIntentId?: true
    stripeCustomerId?: true
    stripeClientSecret?: true
    stripeEventId?: true
    paymentGateway?: true
    amount?: true
    currency?: true
    status?: true
    failReason?: true
    completedAt?: true
    cancelledAt?: true
    ipAddress?: true
    userAgent?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubscriptionOrderCountAggregateInputType = {
    id?: true
    subscriptionModelId?: true
    userId?: true
    periodStart?: true
    periodEnd?: true
    stripeSessionId?: true
    stripePaymentIntentId?: true
    stripeCustomerId?: true
    stripeClientSecret?: true
    stripeEventId?: true
    paymentGateway?: true
    amount?: true
    currency?: true
    status?: true
    failReason?: true
    completedAt?: true
    cancelledAt?: true
    ipAddress?: true
    userAgent?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SubscriptionOrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubscriptionOrder to aggregate.
     */
    where?: SubscriptionOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubscriptionOrders to fetch.
     */
    orderBy?: SubscriptionOrderOrderByWithRelationInput | SubscriptionOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubscriptionOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubscriptionOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubscriptionOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SubscriptionOrders
    **/
    _count?: true | SubscriptionOrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubscriptionOrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubscriptionOrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubscriptionOrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubscriptionOrderMaxAggregateInputType
  }

  export type GetSubscriptionOrderAggregateType<T extends SubscriptionOrderAggregateArgs> = {
        [P in keyof T & keyof AggregateSubscriptionOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscriptionOrder[P]>
      : GetScalarType<T[P], AggregateSubscriptionOrder[P]>
  }




  export type SubscriptionOrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionOrderWhereInput
    orderBy?: SubscriptionOrderOrderByWithAggregationInput | SubscriptionOrderOrderByWithAggregationInput[]
    by: SubscriptionOrderScalarFieldEnum[] | SubscriptionOrderScalarFieldEnum
    having?: SubscriptionOrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscriptionOrderCountAggregateInputType | true
    _avg?: SubscriptionOrderAvgAggregateInputType
    _sum?: SubscriptionOrderSumAggregateInputType
    _min?: SubscriptionOrderMinAggregateInputType
    _max?: SubscriptionOrderMaxAggregateInputType
  }

  export type SubscriptionOrderGroupByOutputType = {
    id: string
    subscriptionModelId: string
    userId: string
    periodStart: Date
    periodEnd: Date
    stripeSessionId: string | null
    stripePaymentIntentId: string | null
    stripeCustomerId: string | null
    stripeClientSecret: string | null
    stripeEventId: string | null
    paymentGateway: $Enums.PaymentGateway
    amount: number
    currency: string
    status: $Enums.PaymentStatus
    failReason: string | null
    completedAt: Date | null
    cancelledAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    createdAt: Date
    updatedAt: Date
    _count: SubscriptionOrderCountAggregateOutputType | null
    _avg: SubscriptionOrderAvgAggregateOutputType | null
    _sum: SubscriptionOrderSumAggregateOutputType | null
    _min: SubscriptionOrderMinAggregateOutputType | null
    _max: SubscriptionOrderMaxAggregateOutputType | null
  }

  type GetSubscriptionOrderGroupByPayload<T extends SubscriptionOrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscriptionOrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubscriptionOrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscriptionOrderGroupByOutputType[P]>
            : GetScalarType<T[P], SubscriptionOrderGroupByOutputType[P]>
        }
      >
    >


  export type SubscriptionOrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subscriptionModelId?: boolean
    userId?: boolean
    periodStart?: boolean
    periodEnd?: boolean
    stripeSessionId?: boolean
    stripePaymentIntentId?: boolean
    stripeCustomerId?: boolean
    stripeClientSecret?: boolean
    stripeEventId?: boolean
    paymentGateway?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    failReason?: boolean
    completedAt?: boolean
    cancelledAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subscriptionModel?: boolean | SubscriptionModelDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    userCharities?: boolean | SubscriptionOrder$userCharitiesArgs<ExtArgs>
    _count?: boolean | SubscriptionOrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscriptionOrder"]>

  export type SubscriptionOrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subscriptionModelId?: boolean
    userId?: boolean
    periodStart?: boolean
    periodEnd?: boolean
    stripeSessionId?: boolean
    stripePaymentIntentId?: boolean
    stripeCustomerId?: boolean
    stripeClientSecret?: boolean
    stripeEventId?: boolean
    paymentGateway?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    failReason?: boolean
    completedAt?: boolean
    cancelledAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subscriptionModel?: boolean | SubscriptionModelDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscriptionOrder"]>

  export type SubscriptionOrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subscriptionModelId?: boolean
    userId?: boolean
    periodStart?: boolean
    periodEnd?: boolean
    stripeSessionId?: boolean
    stripePaymentIntentId?: boolean
    stripeCustomerId?: boolean
    stripeClientSecret?: boolean
    stripeEventId?: boolean
    paymentGateway?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    failReason?: boolean
    completedAt?: boolean
    cancelledAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subscriptionModel?: boolean | SubscriptionModelDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscriptionOrder"]>

  export type SubscriptionOrderSelectScalar = {
    id?: boolean
    subscriptionModelId?: boolean
    userId?: boolean
    periodStart?: boolean
    periodEnd?: boolean
    stripeSessionId?: boolean
    stripePaymentIntentId?: boolean
    stripeCustomerId?: boolean
    stripeClientSecret?: boolean
    stripeEventId?: boolean
    paymentGateway?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    failReason?: boolean
    completedAt?: boolean
    cancelledAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SubscriptionOrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "subscriptionModelId" | "userId" | "periodStart" | "periodEnd" | "stripeSessionId" | "stripePaymentIntentId" | "stripeCustomerId" | "stripeClientSecret" | "stripeEventId" | "paymentGateway" | "amount" | "currency" | "status" | "failReason" | "completedAt" | "cancelledAt" | "ipAddress" | "userAgent" | "createdAt" | "updatedAt", ExtArgs["result"]["subscriptionOrder"]>
  export type SubscriptionOrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscriptionModel?: boolean | SubscriptionModelDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    userCharities?: boolean | SubscriptionOrder$userCharitiesArgs<ExtArgs>
    _count?: boolean | SubscriptionOrderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SubscriptionOrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscriptionModel?: boolean | SubscriptionModelDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SubscriptionOrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscriptionModel?: boolean | SubscriptionModelDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SubscriptionOrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SubscriptionOrder"
    objects: {
      subscriptionModel: Prisma.$SubscriptionModelPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      userCharities: Prisma.$UserCharityPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      subscriptionModelId: string
      userId: string
      periodStart: Date
      periodEnd: Date
      stripeSessionId: string | null
      stripePaymentIntentId: string | null
      stripeCustomerId: string | null
      stripeClientSecret: string | null
      stripeEventId: string | null
      paymentGateway: $Enums.PaymentGateway
      amount: number
      currency: string
      status: $Enums.PaymentStatus
      failReason: string | null
      completedAt: Date | null
      cancelledAt: Date | null
      ipAddress: string | null
      userAgent: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["subscriptionOrder"]>
    composites: {}
  }

  type SubscriptionOrderGetPayload<S extends boolean | null | undefined | SubscriptionOrderDefaultArgs> = $Result.GetResult<Prisma.$SubscriptionOrderPayload, S>

  type SubscriptionOrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubscriptionOrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubscriptionOrderCountAggregateInputType | true
    }

  export interface SubscriptionOrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SubscriptionOrder'], meta: { name: 'SubscriptionOrder' } }
    /**
     * Find zero or one SubscriptionOrder that matches the filter.
     * @param {SubscriptionOrderFindUniqueArgs} args - Arguments to find a SubscriptionOrder
     * @example
     * // Get one SubscriptionOrder
     * const subscriptionOrder = await prisma.subscriptionOrder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubscriptionOrderFindUniqueArgs>(args: SelectSubset<T, SubscriptionOrderFindUniqueArgs<ExtArgs>>): Prisma__SubscriptionOrderClient<$Result.GetResult<Prisma.$SubscriptionOrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SubscriptionOrder that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubscriptionOrderFindUniqueOrThrowArgs} args - Arguments to find a SubscriptionOrder
     * @example
     * // Get one SubscriptionOrder
     * const subscriptionOrder = await prisma.subscriptionOrder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubscriptionOrderFindUniqueOrThrowArgs>(args: SelectSubset<T, SubscriptionOrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubscriptionOrderClient<$Result.GetResult<Prisma.$SubscriptionOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubscriptionOrder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionOrderFindFirstArgs} args - Arguments to find a SubscriptionOrder
     * @example
     * // Get one SubscriptionOrder
     * const subscriptionOrder = await prisma.subscriptionOrder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubscriptionOrderFindFirstArgs>(args?: SelectSubset<T, SubscriptionOrderFindFirstArgs<ExtArgs>>): Prisma__SubscriptionOrderClient<$Result.GetResult<Prisma.$SubscriptionOrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubscriptionOrder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionOrderFindFirstOrThrowArgs} args - Arguments to find a SubscriptionOrder
     * @example
     * // Get one SubscriptionOrder
     * const subscriptionOrder = await prisma.subscriptionOrder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubscriptionOrderFindFirstOrThrowArgs>(args?: SelectSubset<T, SubscriptionOrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubscriptionOrderClient<$Result.GetResult<Prisma.$SubscriptionOrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SubscriptionOrders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionOrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SubscriptionOrders
     * const subscriptionOrders = await prisma.subscriptionOrder.findMany()
     * 
     * // Get first 10 SubscriptionOrders
     * const subscriptionOrders = await prisma.subscriptionOrder.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subscriptionOrderWithIdOnly = await prisma.subscriptionOrder.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubscriptionOrderFindManyArgs>(args?: SelectSubset<T, SubscriptionOrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SubscriptionOrder.
     * @param {SubscriptionOrderCreateArgs} args - Arguments to create a SubscriptionOrder.
     * @example
     * // Create one SubscriptionOrder
     * const SubscriptionOrder = await prisma.subscriptionOrder.create({
     *   data: {
     *     // ... data to create a SubscriptionOrder
     *   }
     * })
     * 
     */
    create<T extends SubscriptionOrderCreateArgs>(args: SelectSubset<T, SubscriptionOrderCreateArgs<ExtArgs>>): Prisma__SubscriptionOrderClient<$Result.GetResult<Prisma.$SubscriptionOrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SubscriptionOrders.
     * @param {SubscriptionOrderCreateManyArgs} args - Arguments to create many SubscriptionOrders.
     * @example
     * // Create many SubscriptionOrders
     * const subscriptionOrder = await prisma.subscriptionOrder.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubscriptionOrderCreateManyArgs>(args?: SelectSubset<T, SubscriptionOrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SubscriptionOrders and returns the data saved in the database.
     * @param {SubscriptionOrderCreateManyAndReturnArgs} args - Arguments to create many SubscriptionOrders.
     * @example
     * // Create many SubscriptionOrders
     * const subscriptionOrder = await prisma.subscriptionOrder.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SubscriptionOrders and only return the `id`
     * const subscriptionOrderWithIdOnly = await prisma.subscriptionOrder.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubscriptionOrderCreateManyAndReturnArgs>(args?: SelectSubset<T, SubscriptionOrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionOrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SubscriptionOrder.
     * @param {SubscriptionOrderDeleteArgs} args - Arguments to delete one SubscriptionOrder.
     * @example
     * // Delete one SubscriptionOrder
     * const SubscriptionOrder = await prisma.subscriptionOrder.delete({
     *   where: {
     *     // ... filter to delete one SubscriptionOrder
     *   }
     * })
     * 
     */
    delete<T extends SubscriptionOrderDeleteArgs>(args: SelectSubset<T, SubscriptionOrderDeleteArgs<ExtArgs>>): Prisma__SubscriptionOrderClient<$Result.GetResult<Prisma.$SubscriptionOrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SubscriptionOrder.
     * @param {SubscriptionOrderUpdateArgs} args - Arguments to update one SubscriptionOrder.
     * @example
     * // Update one SubscriptionOrder
     * const subscriptionOrder = await prisma.subscriptionOrder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubscriptionOrderUpdateArgs>(args: SelectSubset<T, SubscriptionOrderUpdateArgs<ExtArgs>>): Prisma__SubscriptionOrderClient<$Result.GetResult<Prisma.$SubscriptionOrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SubscriptionOrders.
     * @param {SubscriptionOrderDeleteManyArgs} args - Arguments to filter SubscriptionOrders to delete.
     * @example
     * // Delete a few SubscriptionOrders
     * const { count } = await prisma.subscriptionOrder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubscriptionOrderDeleteManyArgs>(args?: SelectSubset<T, SubscriptionOrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubscriptionOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionOrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SubscriptionOrders
     * const subscriptionOrder = await prisma.subscriptionOrder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubscriptionOrderUpdateManyArgs>(args: SelectSubset<T, SubscriptionOrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubscriptionOrders and returns the data updated in the database.
     * @param {SubscriptionOrderUpdateManyAndReturnArgs} args - Arguments to update many SubscriptionOrders.
     * @example
     * // Update many SubscriptionOrders
     * const subscriptionOrder = await prisma.subscriptionOrder.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SubscriptionOrders and only return the `id`
     * const subscriptionOrderWithIdOnly = await prisma.subscriptionOrder.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SubscriptionOrderUpdateManyAndReturnArgs>(args: SelectSubset<T, SubscriptionOrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionOrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SubscriptionOrder.
     * @param {SubscriptionOrderUpsertArgs} args - Arguments to update or create a SubscriptionOrder.
     * @example
     * // Update or create a SubscriptionOrder
     * const subscriptionOrder = await prisma.subscriptionOrder.upsert({
     *   create: {
     *     // ... data to create a SubscriptionOrder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SubscriptionOrder we want to update
     *   }
     * })
     */
    upsert<T extends SubscriptionOrderUpsertArgs>(args: SelectSubset<T, SubscriptionOrderUpsertArgs<ExtArgs>>): Prisma__SubscriptionOrderClient<$Result.GetResult<Prisma.$SubscriptionOrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SubscriptionOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionOrderCountArgs} args - Arguments to filter SubscriptionOrders to count.
     * @example
     * // Count the number of SubscriptionOrders
     * const count = await prisma.subscriptionOrder.count({
     *   where: {
     *     // ... the filter for the SubscriptionOrders we want to count
     *   }
     * })
    **/
    count<T extends SubscriptionOrderCountArgs>(
      args?: Subset<T, SubscriptionOrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriptionOrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SubscriptionOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionOrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubscriptionOrderAggregateArgs>(args: Subset<T, SubscriptionOrderAggregateArgs>): Prisma.PrismaPromise<GetSubscriptionOrderAggregateType<T>>

    /**
     * Group by SubscriptionOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionOrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubscriptionOrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubscriptionOrderGroupByArgs['orderBy'] }
        : { orderBy?: SubscriptionOrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubscriptionOrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscriptionOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SubscriptionOrder model
   */
  readonly fields: SubscriptionOrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SubscriptionOrder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubscriptionOrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subscriptionModel<T extends SubscriptionModelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubscriptionModelDefaultArgs<ExtArgs>>): Prisma__SubscriptionModelClient<$Result.GetResult<Prisma.$SubscriptionModelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    userCharities<T extends SubscriptionOrder$userCharitiesArgs<ExtArgs> = {}>(args?: Subset<T, SubscriptionOrder$userCharitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCharityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SubscriptionOrder model
   */
  interface SubscriptionOrderFieldRefs {
    readonly id: FieldRef<"SubscriptionOrder", 'String'>
    readonly subscriptionModelId: FieldRef<"SubscriptionOrder", 'String'>
    readonly userId: FieldRef<"SubscriptionOrder", 'String'>
    readonly periodStart: FieldRef<"SubscriptionOrder", 'DateTime'>
    readonly periodEnd: FieldRef<"SubscriptionOrder", 'DateTime'>
    readonly stripeSessionId: FieldRef<"SubscriptionOrder", 'String'>
    readonly stripePaymentIntentId: FieldRef<"SubscriptionOrder", 'String'>
    readonly stripeCustomerId: FieldRef<"SubscriptionOrder", 'String'>
    readonly stripeClientSecret: FieldRef<"SubscriptionOrder", 'String'>
    readonly stripeEventId: FieldRef<"SubscriptionOrder", 'String'>
    readonly paymentGateway: FieldRef<"SubscriptionOrder", 'PaymentGateway'>
    readonly amount: FieldRef<"SubscriptionOrder", 'Int'>
    readonly currency: FieldRef<"SubscriptionOrder", 'String'>
    readonly status: FieldRef<"SubscriptionOrder", 'PaymentStatus'>
    readonly failReason: FieldRef<"SubscriptionOrder", 'String'>
    readonly completedAt: FieldRef<"SubscriptionOrder", 'DateTime'>
    readonly cancelledAt: FieldRef<"SubscriptionOrder", 'DateTime'>
    readonly ipAddress: FieldRef<"SubscriptionOrder", 'String'>
    readonly userAgent: FieldRef<"SubscriptionOrder", 'String'>
    readonly createdAt: FieldRef<"SubscriptionOrder", 'DateTime'>
    readonly updatedAt: FieldRef<"SubscriptionOrder", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SubscriptionOrder findUnique
   */
  export type SubscriptionOrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionOrder
     */
    select?: SubscriptionOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionOrder
     */
    omit?: SubscriptionOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionOrderInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionOrder to fetch.
     */
    where: SubscriptionOrderWhereUniqueInput
  }

  /**
   * SubscriptionOrder findUniqueOrThrow
   */
  export type SubscriptionOrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionOrder
     */
    select?: SubscriptionOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionOrder
     */
    omit?: SubscriptionOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionOrderInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionOrder to fetch.
     */
    where: SubscriptionOrderWhereUniqueInput
  }

  /**
   * SubscriptionOrder findFirst
   */
  export type SubscriptionOrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionOrder
     */
    select?: SubscriptionOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionOrder
     */
    omit?: SubscriptionOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionOrderInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionOrder to fetch.
     */
    where?: SubscriptionOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubscriptionOrders to fetch.
     */
    orderBy?: SubscriptionOrderOrderByWithRelationInput | SubscriptionOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubscriptionOrders.
     */
    cursor?: SubscriptionOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubscriptionOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubscriptionOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubscriptionOrders.
     */
    distinct?: SubscriptionOrderScalarFieldEnum | SubscriptionOrderScalarFieldEnum[]
  }

  /**
   * SubscriptionOrder findFirstOrThrow
   */
  export type SubscriptionOrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionOrder
     */
    select?: SubscriptionOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionOrder
     */
    omit?: SubscriptionOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionOrderInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionOrder to fetch.
     */
    where?: SubscriptionOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubscriptionOrders to fetch.
     */
    orderBy?: SubscriptionOrderOrderByWithRelationInput | SubscriptionOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubscriptionOrders.
     */
    cursor?: SubscriptionOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubscriptionOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubscriptionOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubscriptionOrders.
     */
    distinct?: SubscriptionOrderScalarFieldEnum | SubscriptionOrderScalarFieldEnum[]
  }

  /**
   * SubscriptionOrder findMany
   */
  export type SubscriptionOrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionOrder
     */
    select?: SubscriptionOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionOrder
     */
    omit?: SubscriptionOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionOrderInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionOrders to fetch.
     */
    where?: SubscriptionOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubscriptionOrders to fetch.
     */
    orderBy?: SubscriptionOrderOrderByWithRelationInput | SubscriptionOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SubscriptionOrders.
     */
    cursor?: SubscriptionOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubscriptionOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubscriptionOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubscriptionOrders.
     */
    distinct?: SubscriptionOrderScalarFieldEnum | SubscriptionOrderScalarFieldEnum[]
  }

  /**
   * SubscriptionOrder create
   */
  export type SubscriptionOrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionOrder
     */
    select?: SubscriptionOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionOrder
     */
    omit?: SubscriptionOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionOrderInclude<ExtArgs> | null
    /**
     * The data needed to create a SubscriptionOrder.
     */
    data: XOR<SubscriptionOrderCreateInput, SubscriptionOrderUncheckedCreateInput>
  }

  /**
   * SubscriptionOrder createMany
   */
  export type SubscriptionOrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SubscriptionOrders.
     */
    data: SubscriptionOrderCreateManyInput | SubscriptionOrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SubscriptionOrder createManyAndReturn
   */
  export type SubscriptionOrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionOrder
     */
    select?: SubscriptionOrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionOrder
     */
    omit?: SubscriptionOrderOmit<ExtArgs> | null
    /**
     * The data used to create many SubscriptionOrders.
     */
    data: SubscriptionOrderCreateManyInput | SubscriptionOrderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionOrderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SubscriptionOrder update
   */
  export type SubscriptionOrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionOrder
     */
    select?: SubscriptionOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionOrder
     */
    omit?: SubscriptionOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionOrderInclude<ExtArgs> | null
    /**
     * The data needed to update a SubscriptionOrder.
     */
    data: XOR<SubscriptionOrderUpdateInput, SubscriptionOrderUncheckedUpdateInput>
    /**
     * Choose, which SubscriptionOrder to update.
     */
    where: SubscriptionOrderWhereUniqueInput
  }

  /**
   * SubscriptionOrder updateMany
   */
  export type SubscriptionOrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SubscriptionOrders.
     */
    data: XOR<SubscriptionOrderUpdateManyMutationInput, SubscriptionOrderUncheckedUpdateManyInput>
    /**
     * Filter which SubscriptionOrders to update
     */
    where?: SubscriptionOrderWhereInput
    /**
     * Limit how many SubscriptionOrders to update.
     */
    limit?: number
  }

  /**
   * SubscriptionOrder updateManyAndReturn
   */
  export type SubscriptionOrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionOrder
     */
    select?: SubscriptionOrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionOrder
     */
    omit?: SubscriptionOrderOmit<ExtArgs> | null
    /**
     * The data used to update SubscriptionOrders.
     */
    data: XOR<SubscriptionOrderUpdateManyMutationInput, SubscriptionOrderUncheckedUpdateManyInput>
    /**
     * Filter which SubscriptionOrders to update
     */
    where?: SubscriptionOrderWhereInput
    /**
     * Limit how many SubscriptionOrders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionOrderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SubscriptionOrder upsert
   */
  export type SubscriptionOrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionOrder
     */
    select?: SubscriptionOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionOrder
     */
    omit?: SubscriptionOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionOrderInclude<ExtArgs> | null
    /**
     * The filter to search for the SubscriptionOrder to update in case it exists.
     */
    where: SubscriptionOrderWhereUniqueInput
    /**
     * In case the SubscriptionOrder found by the `where` argument doesn't exist, create a new SubscriptionOrder with this data.
     */
    create: XOR<SubscriptionOrderCreateInput, SubscriptionOrderUncheckedCreateInput>
    /**
     * In case the SubscriptionOrder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubscriptionOrderUpdateInput, SubscriptionOrderUncheckedUpdateInput>
  }

  /**
   * SubscriptionOrder delete
   */
  export type SubscriptionOrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionOrder
     */
    select?: SubscriptionOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionOrder
     */
    omit?: SubscriptionOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionOrderInclude<ExtArgs> | null
    /**
     * Filter which SubscriptionOrder to delete.
     */
    where: SubscriptionOrderWhereUniqueInput
  }

  /**
   * SubscriptionOrder deleteMany
   */
  export type SubscriptionOrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubscriptionOrders to delete
     */
    where?: SubscriptionOrderWhereInput
    /**
     * Limit how many SubscriptionOrders to delete.
     */
    limit?: number
  }

  /**
   * SubscriptionOrder.userCharities
   */
  export type SubscriptionOrder$userCharitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCharity
     */
    select?: UserCharitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCharity
     */
    omit?: UserCharityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCharityInclude<ExtArgs> | null
    where?: UserCharityWhereInput
    orderBy?: UserCharityOrderByWithRelationInput | UserCharityOrderByWithRelationInput[]
    cursor?: UserCharityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserCharityScalarFieldEnum | UserCharityScalarFieldEnum[]
  }

  /**
   * SubscriptionOrder without action
   */
  export type SubscriptionOrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionOrder
     */
    select?: SubscriptionOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionOrder
     */
    omit?: SubscriptionOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionOrderInclude<ExtArgs> | null
  }


  /**
   * Model Draw
   */

  export type AggregateDraw = {
    _count: DrawCountAggregateOutputType | null
    _avg: DrawAvgAggregateOutputType | null
    _sum: DrawSumAggregateOutputType | null
    _min: DrawMinAggregateOutputType | null
    _max: DrawMaxAggregateOutputType | null
  }

  export type DrawAvgAggregateOutputType = {
    prizePool: number | null
    fiveMatchPct: number | null
    fourMatchPct: number | null
    threeMatchPct: number | null
  }

  export type DrawSumAggregateOutputType = {
    prizePool: number | null
    fiveMatchPct: number | null
    fourMatchPct: number | null
    threeMatchPct: number | null
  }

  export type DrawMinAggregateOutputType = {
    id: string | null
    adminId: string | null
    prizePool: number | null
    currency: string | null
    entryStartDate: Date | null
    lastEntryDate: Date | null
    resultDate: Date | null
    drawNumber: string | null
    status: $Enums.DrawStatus | null
    fiveMatchPct: number | null
    fourMatchPct: number | null
    threeMatchPct: number | null
    jackpotRolledOver: boolean | null
    rolledOverFromId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DrawMaxAggregateOutputType = {
    id: string | null
    adminId: string | null
    prizePool: number | null
    currency: string | null
    entryStartDate: Date | null
    lastEntryDate: Date | null
    resultDate: Date | null
    drawNumber: string | null
    status: $Enums.DrawStatus | null
    fiveMatchPct: number | null
    fourMatchPct: number | null
    threeMatchPct: number | null
    jackpotRolledOver: boolean | null
    rolledOverFromId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DrawCountAggregateOutputType = {
    id: number
    adminId: number
    prizePool: number
    currency: number
    entryStartDate: number
    lastEntryDate: number
    resultDate: number
    drawNumber: number
    status: number
    fiveMatchPct: number
    fourMatchPct: number
    threeMatchPct: number
    jackpotRolledOver: number
    rolledOverFromId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DrawAvgAggregateInputType = {
    prizePool?: true
    fiveMatchPct?: true
    fourMatchPct?: true
    threeMatchPct?: true
  }

  export type DrawSumAggregateInputType = {
    prizePool?: true
    fiveMatchPct?: true
    fourMatchPct?: true
    threeMatchPct?: true
  }

  export type DrawMinAggregateInputType = {
    id?: true
    adminId?: true
    prizePool?: true
    currency?: true
    entryStartDate?: true
    lastEntryDate?: true
    resultDate?: true
    drawNumber?: true
    status?: true
    fiveMatchPct?: true
    fourMatchPct?: true
    threeMatchPct?: true
    jackpotRolledOver?: true
    rolledOverFromId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DrawMaxAggregateInputType = {
    id?: true
    adminId?: true
    prizePool?: true
    currency?: true
    entryStartDate?: true
    lastEntryDate?: true
    resultDate?: true
    drawNumber?: true
    status?: true
    fiveMatchPct?: true
    fourMatchPct?: true
    threeMatchPct?: true
    jackpotRolledOver?: true
    rolledOverFromId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DrawCountAggregateInputType = {
    id?: true
    adminId?: true
    prizePool?: true
    currency?: true
    entryStartDate?: true
    lastEntryDate?: true
    resultDate?: true
    drawNumber?: true
    status?: true
    fiveMatchPct?: true
    fourMatchPct?: true
    threeMatchPct?: true
    jackpotRolledOver?: true
    rolledOverFromId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DrawAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Draw to aggregate.
     */
    where?: DrawWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Draws to fetch.
     */
    orderBy?: DrawOrderByWithRelationInput | DrawOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DrawWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Draws from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Draws.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Draws
    **/
    _count?: true | DrawCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DrawAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DrawSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DrawMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DrawMaxAggregateInputType
  }

  export type GetDrawAggregateType<T extends DrawAggregateArgs> = {
        [P in keyof T & keyof AggregateDraw]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDraw[P]>
      : GetScalarType<T[P], AggregateDraw[P]>
  }




  export type DrawGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DrawWhereInput
    orderBy?: DrawOrderByWithAggregationInput | DrawOrderByWithAggregationInput[]
    by: DrawScalarFieldEnum[] | DrawScalarFieldEnum
    having?: DrawScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DrawCountAggregateInputType | true
    _avg?: DrawAvgAggregateInputType
    _sum?: DrawSumAggregateInputType
    _min?: DrawMinAggregateInputType
    _max?: DrawMaxAggregateInputType
  }

  export type DrawGroupByOutputType = {
    id: string
    adminId: string
    prizePool: number
    currency: string
    entryStartDate: Date
    lastEntryDate: Date
    resultDate: Date
    drawNumber: string | null
    status: $Enums.DrawStatus
    fiveMatchPct: number
    fourMatchPct: number
    threeMatchPct: number
    jackpotRolledOver: boolean
    rolledOverFromId: string | null
    createdAt: Date
    updatedAt: Date
    _count: DrawCountAggregateOutputType | null
    _avg: DrawAvgAggregateOutputType | null
    _sum: DrawSumAggregateOutputType | null
    _min: DrawMinAggregateOutputType | null
    _max: DrawMaxAggregateOutputType | null
  }

  type GetDrawGroupByPayload<T extends DrawGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DrawGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DrawGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DrawGroupByOutputType[P]>
            : GetScalarType<T[P], DrawGroupByOutputType[P]>
        }
      >
    >


  export type DrawSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    adminId?: boolean
    prizePool?: boolean
    currency?: boolean
    entryStartDate?: boolean
    lastEntryDate?: boolean
    resultDate?: boolean
    drawNumber?: boolean
    status?: boolean
    fiveMatchPct?: boolean
    fourMatchPct?: boolean
    threeMatchPct?: boolean
    jackpotRolledOver?: boolean
    rolledOverFromId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    admin?: boolean | UserDefaultArgs<ExtArgs>
    rolledOverFrom?: boolean | Draw$rolledOverFromArgs<ExtArgs>
    rolledOverTo?: boolean | Draw$rolledOverToArgs<ExtArgs>
    winners?: boolean | Draw$winnersArgs<ExtArgs>
    participants?: boolean | Draw$participantsArgs<ExtArgs>
    _count?: boolean | DrawCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["draw"]>

  export type DrawSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    adminId?: boolean
    prizePool?: boolean
    currency?: boolean
    entryStartDate?: boolean
    lastEntryDate?: boolean
    resultDate?: boolean
    drawNumber?: boolean
    status?: boolean
    fiveMatchPct?: boolean
    fourMatchPct?: boolean
    threeMatchPct?: boolean
    jackpotRolledOver?: boolean
    rolledOverFromId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    admin?: boolean | UserDefaultArgs<ExtArgs>
    rolledOverFrom?: boolean | Draw$rolledOverFromArgs<ExtArgs>
  }, ExtArgs["result"]["draw"]>

  export type DrawSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    adminId?: boolean
    prizePool?: boolean
    currency?: boolean
    entryStartDate?: boolean
    lastEntryDate?: boolean
    resultDate?: boolean
    drawNumber?: boolean
    status?: boolean
    fiveMatchPct?: boolean
    fourMatchPct?: boolean
    threeMatchPct?: boolean
    jackpotRolledOver?: boolean
    rolledOverFromId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    admin?: boolean | UserDefaultArgs<ExtArgs>
    rolledOverFrom?: boolean | Draw$rolledOverFromArgs<ExtArgs>
  }, ExtArgs["result"]["draw"]>

  export type DrawSelectScalar = {
    id?: boolean
    adminId?: boolean
    prizePool?: boolean
    currency?: boolean
    entryStartDate?: boolean
    lastEntryDate?: boolean
    resultDate?: boolean
    drawNumber?: boolean
    status?: boolean
    fiveMatchPct?: boolean
    fourMatchPct?: boolean
    threeMatchPct?: boolean
    jackpotRolledOver?: boolean
    rolledOverFromId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DrawOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "adminId" | "prizePool" | "currency" | "entryStartDate" | "lastEntryDate" | "resultDate" | "drawNumber" | "status" | "fiveMatchPct" | "fourMatchPct" | "threeMatchPct" | "jackpotRolledOver" | "rolledOverFromId" | "createdAt" | "updatedAt", ExtArgs["result"]["draw"]>
  export type DrawInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | UserDefaultArgs<ExtArgs>
    rolledOverFrom?: boolean | Draw$rolledOverFromArgs<ExtArgs>
    rolledOverTo?: boolean | Draw$rolledOverToArgs<ExtArgs>
    winners?: boolean | Draw$winnersArgs<ExtArgs>
    participants?: boolean | Draw$participantsArgs<ExtArgs>
    _count?: boolean | DrawCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DrawIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | UserDefaultArgs<ExtArgs>
    rolledOverFrom?: boolean | Draw$rolledOverFromArgs<ExtArgs>
  }
  export type DrawIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | UserDefaultArgs<ExtArgs>
    rolledOverFrom?: boolean | Draw$rolledOverFromArgs<ExtArgs>
  }

  export type $DrawPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Draw"
    objects: {
      admin: Prisma.$UserPayload<ExtArgs>
      rolledOverFrom: Prisma.$DrawPayload<ExtArgs> | null
      rolledOverTo: Prisma.$DrawPayload<ExtArgs>[]
      winners: Prisma.$WinnerPayload<ExtArgs>[]
      participants: Prisma.$ParticipantPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      adminId: string
      prizePool: number
      currency: string
      entryStartDate: Date
      lastEntryDate: Date
      resultDate: Date
      drawNumber: string | null
      status: $Enums.DrawStatus
      fiveMatchPct: number
      fourMatchPct: number
      threeMatchPct: number
      jackpotRolledOver: boolean
      rolledOverFromId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["draw"]>
    composites: {}
  }

  type DrawGetPayload<S extends boolean | null | undefined | DrawDefaultArgs> = $Result.GetResult<Prisma.$DrawPayload, S>

  type DrawCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DrawFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DrawCountAggregateInputType | true
    }

  export interface DrawDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Draw'], meta: { name: 'Draw' } }
    /**
     * Find zero or one Draw that matches the filter.
     * @param {DrawFindUniqueArgs} args - Arguments to find a Draw
     * @example
     * // Get one Draw
     * const draw = await prisma.draw.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DrawFindUniqueArgs>(args: SelectSubset<T, DrawFindUniqueArgs<ExtArgs>>): Prisma__DrawClient<$Result.GetResult<Prisma.$DrawPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Draw that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DrawFindUniqueOrThrowArgs} args - Arguments to find a Draw
     * @example
     * // Get one Draw
     * const draw = await prisma.draw.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DrawFindUniqueOrThrowArgs>(args: SelectSubset<T, DrawFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DrawClient<$Result.GetResult<Prisma.$DrawPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Draw that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrawFindFirstArgs} args - Arguments to find a Draw
     * @example
     * // Get one Draw
     * const draw = await prisma.draw.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DrawFindFirstArgs>(args?: SelectSubset<T, DrawFindFirstArgs<ExtArgs>>): Prisma__DrawClient<$Result.GetResult<Prisma.$DrawPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Draw that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrawFindFirstOrThrowArgs} args - Arguments to find a Draw
     * @example
     * // Get one Draw
     * const draw = await prisma.draw.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DrawFindFirstOrThrowArgs>(args?: SelectSubset<T, DrawFindFirstOrThrowArgs<ExtArgs>>): Prisma__DrawClient<$Result.GetResult<Prisma.$DrawPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Draws that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrawFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Draws
     * const draws = await prisma.draw.findMany()
     * 
     * // Get first 10 Draws
     * const draws = await prisma.draw.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const drawWithIdOnly = await prisma.draw.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DrawFindManyArgs>(args?: SelectSubset<T, DrawFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DrawPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Draw.
     * @param {DrawCreateArgs} args - Arguments to create a Draw.
     * @example
     * // Create one Draw
     * const Draw = await prisma.draw.create({
     *   data: {
     *     // ... data to create a Draw
     *   }
     * })
     * 
     */
    create<T extends DrawCreateArgs>(args: SelectSubset<T, DrawCreateArgs<ExtArgs>>): Prisma__DrawClient<$Result.GetResult<Prisma.$DrawPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Draws.
     * @param {DrawCreateManyArgs} args - Arguments to create many Draws.
     * @example
     * // Create many Draws
     * const draw = await prisma.draw.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DrawCreateManyArgs>(args?: SelectSubset<T, DrawCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Draws and returns the data saved in the database.
     * @param {DrawCreateManyAndReturnArgs} args - Arguments to create many Draws.
     * @example
     * // Create many Draws
     * const draw = await prisma.draw.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Draws and only return the `id`
     * const drawWithIdOnly = await prisma.draw.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DrawCreateManyAndReturnArgs>(args?: SelectSubset<T, DrawCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DrawPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Draw.
     * @param {DrawDeleteArgs} args - Arguments to delete one Draw.
     * @example
     * // Delete one Draw
     * const Draw = await prisma.draw.delete({
     *   where: {
     *     // ... filter to delete one Draw
     *   }
     * })
     * 
     */
    delete<T extends DrawDeleteArgs>(args: SelectSubset<T, DrawDeleteArgs<ExtArgs>>): Prisma__DrawClient<$Result.GetResult<Prisma.$DrawPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Draw.
     * @param {DrawUpdateArgs} args - Arguments to update one Draw.
     * @example
     * // Update one Draw
     * const draw = await prisma.draw.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DrawUpdateArgs>(args: SelectSubset<T, DrawUpdateArgs<ExtArgs>>): Prisma__DrawClient<$Result.GetResult<Prisma.$DrawPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Draws.
     * @param {DrawDeleteManyArgs} args - Arguments to filter Draws to delete.
     * @example
     * // Delete a few Draws
     * const { count } = await prisma.draw.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DrawDeleteManyArgs>(args?: SelectSubset<T, DrawDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Draws.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrawUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Draws
     * const draw = await prisma.draw.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DrawUpdateManyArgs>(args: SelectSubset<T, DrawUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Draws and returns the data updated in the database.
     * @param {DrawUpdateManyAndReturnArgs} args - Arguments to update many Draws.
     * @example
     * // Update many Draws
     * const draw = await prisma.draw.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Draws and only return the `id`
     * const drawWithIdOnly = await prisma.draw.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DrawUpdateManyAndReturnArgs>(args: SelectSubset<T, DrawUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DrawPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Draw.
     * @param {DrawUpsertArgs} args - Arguments to update or create a Draw.
     * @example
     * // Update or create a Draw
     * const draw = await prisma.draw.upsert({
     *   create: {
     *     // ... data to create a Draw
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Draw we want to update
     *   }
     * })
     */
    upsert<T extends DrawUpsertArgs>(args: SelectSubset<T, DrawUpsertArgs<ExtArgs>>): Prisma__DrawClient<$Result.GetResult<Prisma.$DrawPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Draws.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrawCountArgs} args - Arguments to filter Draws to count.
     * @example
     * // Count the number of Draws
     * const count = await prisma.draw.count({
     *   where: {
     *     // ... the filter for the Draws we want to count
     *   }
     * })
    **/
    count<T extends DrawCountArgs>(
      args?: Subset<T, DrawCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DrawCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Draw.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrawAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DrawAggregateArgs>(args: Subset<T, DrawAggregateArgs>): Prisma.PrismaPromise<GetDrawAggregateType<T>>

    /**
     * Group by Draw.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrawGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DrawGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DrawGroupByArgs['orderBy'] }
        : { orderBy?: DrawGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DrawGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDrawGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Draw model
   */
  readonly fields: DrawFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Draw.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DrawClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    admin<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    rolledOverFrom<T extends Draw$rolledOverFromArgs<ExtArgs> = {}>(args?: Subset<T, Draw$rolledOverFromArgs<ExtArgs>>): Prisma__DrawClient<$Result.GetResult<Prisma.$DrawPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    rolledOverTo<T extends Draw$rolledOverToArgs<ExtArgs> = {}>(args?: Subset<T, Draw$rolledOverToArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DrawPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    winners<T extends Draw$winnersArgs<ExtArgs> = {}>(args?: Subset<T, Draw$winnersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WinnerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    participants<T extends Draw$participantsArgs<ExtArgs> = {}>(args?: Subset<T, Draw$participantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Draw model
   */
  interface DrawFieldRefs {
    readonly id: FieldRef<"Draw", 'String'>
    readonly adminId: FieldRef<"Draw", 'String'>
    readonly prizePool: FieldRef<"Draw", 'Int'>
    readonly currency: FieldRef<"Draw", 'String'>
    readonly entryStartDate: FieldRef<"Draw", 'DateTime'>
    readonly lastEntryDate: FieldRef<"Draw", 'DateTime'>
    readonly resultDate: FieldRef<"Draw", 'DateTime'>
    readonly drawNumber: FieldRef<"Draw", 'String'>
    readonly status: FieldRef<"Draw", 'DrawStatus'>
    readonly fiveMatchPct: FieldRef<"Draw", 'Int'>
    readonly fourMatchPct: FieldRef<"Draw", 'Int'>
    readonly threeMatchPct: FieldRef<"Draw", 'Int'>
    readonly jackpotRolledOver: FieldRef<"Draw", 'Boolean'>
    readonly rolledOverFromId: FieldRef<"Draw", 'String'>
    readonly createdAt: FieldRef<"Draw", 'DateTime'>
    readonly updatedAt: FieldRef<"Draw", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Draw findUnique
   */
  export type DrawFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Draw
     */
    select?: DrawSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Draw
     */
    omit?: DrawOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrawInclude<ExtArgs> | null
    /**
     * Filter, which Draw to fetch.
     */
    where: DrawWhereUniqueInput
  }

  /**
   * Draw findUniqueOrThrow
   */
  export type DrawFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Draw
     */
    select?: DrawSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Draw
     */
    omit?: DrawOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrawInclude<ExtArgs> | null
    /**
     * Filter, which Draw to fetch.
     */
    where: DrawWhereUniqueInput
  }

  /**
   * Draw findFirst
   */
  export type DrawFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Draw
     */
    select?: DrawSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Draw
     */
    omit?: DrawOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrawInclude<ExtArgs> | null
    /**
     * Filter, which Draw to fetch.
     */
    where?: DrawWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Draws to fetch.
     */
    orderBy?: DrawOrderByWithRelationInput | DrawOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Draws.
     */
    cursor?: DrawWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Draws from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Draws.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Draws.
     */
    distinct?: DrawScalarFieldEnum | DrawScalarFieldEnum[]
  }

  /**
   * Draw findFirstOrThrow
   */
  export type DrawFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Draw
     */
    select?: DrawSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Draw
     */
    omit?: DrawOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrawInclude<ExtArgs> | null
    /**
     * Filter, which Draw to fetch.
     */
    where?: DrawWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Draws to fetch.
     */
    orderBy?: DrawOrderByWithRelationInput | DrawOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Draws.
     */
    cursor?: DrawWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Draws from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Draws.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Draws.
     */
    distinct?: DrawScalarFieldEnum | DrawScalarFieldEnum[]
  }

  /**
   * Draw findMany
   */
  export type DrawFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Draw
     */
    select?: DrawSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Draw
     */
    omit?: DrawOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrawInclude<ExtArgs> | null
    /**
     * Filter, which Draws to fetch.
     */
    where?: DrawWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Draws to fetch.
     */
    orderBy?: DrawOrderByWithRelationInput | DrawOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Draws.
     */
    cursor?: DrawWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Draws from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Draws.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Draws.
     */
    distinct?: DrawScalarFieldEnum | DrawScalarFieldEnum[]
  }

  /**
   * Draw create
   */
  export type DrawCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Draw
     */
    select?: DrawSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Draw
     */
    omit?: DrawOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrawInclude<ExtArgs> | null
    /**
     * The data needed to create a Draw.
     */
    data: XOR<DrawCreateInput, DrawUncheckedCreateInput>
  }

  /**
   * Draw createMany
   */
  export type DrawCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Draws.
     */
    data: DrawCreateManyInput | DrawCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Draw createManyAndReturn
   */
  export type DrawCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Draw
     */
    select?: DrawSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Draw
     */
    omit?: DrawOmit<ExtArgs> | null
    /**
     * The data used to create many Draws.
     */
    data: DrawCreateManyInput | DrawCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrawIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Draw update
   */
  export type DrawUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Draw
     */
    select?: DrawSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Draw
     */
    omit?: DrawOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrawInclude<ExtArgs> | null
    /**
     * The data needed to update a Draw.
     */
    data: XOR<DrawUpdateInput, DrawUncheckedUpdateInput>
    /**
     * Choose, which Draw to update.
     */
    where: DrawWhereUniqueInput
  }

  /**
   * Draw updateMany
   */
  export type DrawUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Draws.
     */
    data: XOR<DrawUpdateManyMutationInput, DrawUncheckedUpdateManyInput>
    /**
     * Filter which Draws to update
     */
    where?: DrawWhereInput
    /**
     * Limit how many Draws to update.
     */
    limit?: number
  }

  /**
   * Draw updateManyAndReturn
   */
  export type DrawUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Draw
     */
    select?: DrawSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Draw
     */
    omit?: DrawOmit<ExtArgs> | null
    /**
     * The data used to update Draws.
     */
    data: XOR<DrawUpdateManyMutationInput, DrawUncheckedUpdateManyInput>
    /**
     * Filter which Draws to update
     */
    where?: DrawWhereInput
    /**
     * Limit how many Draws to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrawIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Draw upsert
   */
  export type DrawUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Draw
     */
    select?: DrawSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Draw
     */
    omit?: DrawOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrawInclude<ExtArgs> | null
    /**
     * The filter to search for the Draw to update in case it exists.
     */
    where: DrawWhereUniqueInput
    /**
     * In case the Draw found by the `where` argument doesn't exist, create a new Draw with this data.
     */
    create: XOR<DrawCreateInput, DrawUncheckedCreateInput>
    /**
     * In case the Draw was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DrawUpdateInput, DrawUncheckedUpdateInput>
  }

  /**
   * Draw delete
   */
  export type DrawDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Draw
     */
    select?: DrawSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Draw
     */
    omit?: DrawOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrawInclude<ExtArgs> | null
    /**
     * Filter which Draw to delete.
     */
    where: DrawWhereUniqueInput
  }

  /**
   * Draw deleteMany
   */
  export type DrawDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Draws to delete
     */
    where?: DrawWhereInput
    /**
     * Limit how many Draws to delete.
     */
    limit?: number
  }

  /**
   * Draw.rolledOverFrom
   */
  export type Draw$rolledOverFromArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Draw
     */
    select?: DrawSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Draw
     */
    omit?: DrawOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrawInclude<ExtArgs> | null
    where?: DrawWhereInput
  }

  /**
   * Draw.rolledOverTo
   */
  export type Draw$rolledOverToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Draw
     */
    select?: DrawSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Draw
     */
    omit?: DrawOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrawInclude<ExtArgs> | null
    where?: DrawWhereInput
    orderBy?: DrawOrderByWithRelationInput | DrawOrderByWithRelationInput[]
    cursor?: DrawWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DrawScalarFieldEnum | DrawScalarFieldEnum[]
  }

  /**
   * Draw.winners
   */
  export type Draw$winnersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Winner
     */
    select?: WinnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Winner
     */
    omit?: WinnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WinnerInclude<ExtArgs> | null
    where?: WinnerWhereInput
    orderBy?: WinnerOrderByWithRelationInput | WinnerOrderByWithRelationInput[]
    cursor?: WinnerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WinnerScalarFieldEnum | WinnerScalarFieldEnum[]
  }

  /**
   * Draw.participants
   */
  export type Draw$participantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    where?: ParticipantWhereInput
    orderBy?: ParticipantOrderByWithRelationInput | ParticipantOrderByWithRelationInput[]
    cursor?: ParticipantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParticipantScalarFieldEnum | ParticipantScalarFieldEnum[]
  }

  /**
   * Draw without action
   */
  export type DrawDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Draw
     */
    select?: DrawSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Draw
     */
    omit?: DrawOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrawInclude<ExtArgs> | null
  }


  /**
   * Model Winner
   */

  export type AggregateWinner = {
    _count: WinnerCountAggregateOutputType | null
    _avg: WinnerAvgAggregateOutputType | null
    _sum: WinnerSumAggregateOutputType | null
    _min: WinnerMinAggregateOutputType | null
    _max: WinnerMaxAggregateOutputType | null
  }

  export type WinnerAvgAggregateOutputType = {
    prizeAmount: number | null
  }

  export type WinnerSumAggregateOutputType = {
    prizeAmount: number | null
  }

  export type WinnerMinAggregateOutputType = {
    id: string | null
    drawId: string | null
    userId: string | null
    winnerType: $Enums.WinnerType | null
    winnerScore: string | null
    verificationStatus: $Enums.VerificationStatus | null
    paymentStatus: $Enums.WinnerPaymentStatus | null
    proofImage: string | null
    prizeAmount: number | null
    adminNotes: string | null
    verifiedAt: Date | null
    paidAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WinnerMaxAggregateOutputType = {
    id: string | null
    drawId: string | null
    userId: string | null
    winnerType: $Enums.WinnerType | null
    winnerScore: string | null
    verificationStatus: $Enums.VerificationStatus | null
    paymentStatus: $Enums.WinnerPaymentStatus | null
    proofImage: string | null
    prizeAmount: number | null
    adminNotes: string | null
    verifiedAt: Date | null
    paidAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WinnerCountAggregateOutputType = {
    id: number
    drawId: number
    userId: number
    winnerType: number
    winnerScore: number
    verificationStatus: number
    paymentStatus: number
    proofImage: number
    prizeAmount: number
    adminNotes: number
    verifiedAt: number
    paidAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WinnerAvgAggregateInputType = {
    prizeAmount?: true
  }

  export type WinnerSumAggregateInputType = {
    prizeAmount?: true
  }

  export type WinnerMinAggregateInputType = {
    id?: true
    drawId?: true
    userId?: true
    winnerType?: true
    winnerScore?: true
    verificationStatus?: true
    paymentStatus?: true
    proofImage?: true
    prizeAmount?: true
    adminNotes?: true
    verifiedAt?: true
    paidAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WinnerMaxAggregateInputType = {
    id?: true
    drawId?: true
    userId?: true
    winnerType?: true
    winnerScore?: true
    verificationStatus?: true
    paymentStatus?: true
    proofImage?: true
    prizeAmount?: true
    adminNotes?: true
    verifiedAt?: true
    paidAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WinnerCountAggregateInputType = {
    id?: true
    drawId?: true
    userId?: true
    winnerType?: true
    winnerScore?: true
    verificationStatus?: true
    paymentStatus?: true
    proofImage?: true
    prizeAmount?: true
    adminNotes?: true
    verifiedAt?: true
    paidAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WinnerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Winner to aggregate.
     */
    where?: WinnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Winners to fetch.
     */
    orderBy?: WinnerOrderByWithRelationInput | WinnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WinnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Winners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Winners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Winners
    **/
    _count?: true | WinnerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WinnerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WinnerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WinnerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WinnerMaxAggregateInputType
  }

  export type GetWinnerAggregateType<T extends WinnerAggregateArgs> = {
        [P in keyof T & keyof AggregateWinner]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWinner[P]>
      : GetScalarType<T[P], AggregateWinner[P]>
  }




  export type WinnerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WinnerWhereInput
    orderBy?: WinnerOrderByWithAggregationInput | WinnerOrderByWithAggregationInput[]
    by: WinnerScalarFieldEnum[] | WinnerScalarFieldEnum
    having?: WinnerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WinnerCountAggregateInputType | true
    _avg?: WinnerAvgAggregateInputType
    _sum?: WinnerSumAggregateInputType
    _min?: WinnerMinAggregateInputType
    _max?: WinnerMaxAggregateInputType
  }

  export type WinnerGroupByOutputType = {
    id: string
    drawId: string
    userId: string
    winnerType: $Enums.WinnerType
    winnerScore: string
    verificationStatus: $Enums.VerificationStatus
    paymentStatus: $Enums.WinnerPaymentStatus
    proofImage: string | null
    prizeAmount: number | null
    adminNotes: string | null
    verifiedAt: Date | null
    paidAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: WinnerCountAggregateOutputType | null
    _avg: WinnerAvgAggregateOutputType | null
    _sum: WinnerSumAggregateOutputType | null
    _min: WinnerMinAggregateOutputType | null
    _max: WinnerMaxAggregateOutputType | null
  }

  type GetWinnerGroupByPayload<T extends WinnerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WinnerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WinnerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WinnerGroupByOutputType[P]>
            : GetScalarType<T[P], WinnerGroupByOutputType[P]>
        }
      >
    >


  export type WinnerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    drawId?: boolean
    userId?: boolean
    winnerType?: boolean
    winnerScore?: boolean
    verificationStatus?: boolean
    paymentStatus?: boolean
    proofImage?: boolean
    prizeAmount?: boolean
    adminNotes?: boolean
    verifiedAt?: boolean
    paidAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    draw?: boolean | DrawDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["winner"]>

  export type WinnerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    drawId?: boolean
    userId?: boolean
    winnerType?: boolean
    winnerScore?: boolean
    verificationStatus?: boolean
    paymentStatus?: boolean
    proofImage?: boolean
    prizeAmount?: boolean
    adminNotes?: boolean
    verifiedAt?: boolean
    paidAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    draw?: boolean | DrawDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["winner"]>

  export type WinnerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    drawId?: boolean
    userId?: boolean
    winnerType?: boolean
    winnerScore?: boolean
    verificationStatus?: boolean
    paymentStatus?: boolean
    proofImage?: boolean
    prizeAmount?: boolean
    adminNotes?: boolean
    verifiedAt?: boolean
    paidAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    draw?: boolean | DrawDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["winner"]>

  export type WinnerSelectScalar = {
    id?: boolean
    drawId?: boolean
    userId?: boolean
    winnerType?: boolean
    winnerScore?: boolean
    verificationStatus?: boolean
    paymentStatus?: boolean
    proofImage?: boolean
    prizeAmount?: boolean
    adminNotes?: boolean
    verifiedAt?: boolean
    paidAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WinnerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "drawId" | "userId" | "winnerType" | "winnerScore" | "verificationStatus" | "paymentStatus" | "proofImage" | "prizeAmount" | "adminNotes" | "verifiedAt" | "paidAt" | "createdAt" | "updatedAt", ExtArgs["result"]["winner"]>
  export type WinnerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    draw?: boolean | DrawDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WinnerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    draw?: boolean | DrawDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WinnerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    draw?: boolean | DrawDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $WinnerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Winner"
    objects: {
      draw: Prisma.$DrawPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      drawId: string
      userId: string
      winnerType: $Enums.WinnerType
      winnerScore: string
      verificationStatus: $Enums.VerificationStatus
      paymentStatus: $Enums.WinnerPaymentStatus
      proofImage: string | null
      prizeAmount: number | null
      adminNotes: string | null
      verifiedAt: Date | null
      paidAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["winner"]>
    composites: {}
  }

  type WinnerGetPayload<S extends boolean | null | undefined | WinnerDefaultArgs> = $Result.GetResult<Prisma.$WinnerPayload, S>

  type WinnerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WinnerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WinnerCountAggregateInputType | true
    }

  export interface WinnerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Winner'], meta: { name: 'Winner' } }
    /**
     * Find zero or one Winner that matches the filter.
     * @param {WinnerFindUniqueArgs} args - Arguments to find a Winner
     * @example
     * // Get one Winner
     * const winner = await prisma.winner.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WinnerFindUniqueArgs>(args: SelectSubset<T, WinnerFindUniqueArgs<ExtArgs>>): Prisma__WinnerClient<$Result.GetResult<Prisma.$WinnerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Winner that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WinnerFindUniqueOrThrowArgs} args - Arguments to find a Winner
     * @example
     * // Get one Winner
     * const winner = await prisma.winner.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WinnerFindUniqueOrThrowArgs>(args: SelectSubset<T, WinnerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WinnerClient<$Result.GetResult<Prisma.$WinnerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Winner that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WinnerFindFirstArgs} args - Arguments to find a Winner
     * @example
     * // Get one Winner
     * const winner = await prisma.winner.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WinnerFindFirstArgs>(args?: SelectSubset<T, WinnerFindFirstArgs<ExtArgs>>): Prisma__WinnerClient<$Result.GetResult<Prisma.$WinnerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Winner that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WinnerFindFirstOrThrowArgs} args - Arguments to find a Winner
     * @example
     * // Get one Winner
     * const winner = await prisma.winner.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WinnerFindFirstOrThrowArgs>(args?: SelectSubset<T, WinnerFindFirstOrThrowArgs<ExtArgs>>): Prisma__WinnerClient<$Result.GetResult<Prisma.$WinnerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Winners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WinnerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Winners
     * const winners = await prisma.winner.findMany()
     * 
     * // Get first 10 Winners
     * const winners = await prisma.winner.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const winnerWithIdOnly = await prisma.winner.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WinnerFindManyArgs>(args?: SelectSubset<T, WinnerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WinnerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Winner.
     * @param {WinnerCreateArgs} args - Arguments to create a Winner.
     * @example
     * // Create one Winner
     * const Winner = await prisma.winner.create({
     *   data: {
     *     // ... data to create a Winner
     *   }
     * })
     * 
     */
    create<T extends WinnerCreateArgs>(args: SelectSubset<T, WinnerCreateArgs<ExtArgs>>): Prisma__WinnerClient<$Result.GetResult<Prisma.$WinnerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Winners.
     * @param {WinnerCreateManyArgs} args - Arguments to create many Winners.
     * @example
     * // Create many Winners
     * const winner = await prisma.winner.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WinnerCreateManyArgs>(args?: SelectSubset<T, WinnerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Winners and returns the data saved in the database.
     * @param {WinnerCreateManyAndReturnArgs} args - Arguments to create many Winners.
     * @example
     * // Create many Winners
     * const winner = await prisma.winner.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Winners and only return the `id`
     * const winnerWithIdOnly = await prisma.winner.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WinnerCreateManyAndReturnArgs>(args?: SelectSubset<T, WinnerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WinnerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Winner.
     * @param {WinnerDeleteArgs} args - Arguments to delete one Winner.
     * @example
     * // Delete one Winner
     * const Winner = await prisma.winner.delete({
     *   where: {
     *     // ... filter to delete one Winner
     *   }
     * })
     * 
     */
    delete<T extends WinnerDeleteArgs>(args: SelectSubset<T, WinnerDeleteArgs<ExtArgs>>): Prisma__WinnerClient<$Result.GetResult<Prisma.$WinnerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Winner.
     * @param {WinnerUpdateArgs} args - Arguments to update one Winner.
     * @example
     * // Update one Winner
     * const winner = await prisma.winner.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WinnerUpdateArgs>(args: SelectSubset<T, WinnerUpdateArgs<ExtArgs>>): Prisma__WinnerClient<$Result.GetResult<Prisma.$WinnerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Winners.
     * @param {WinnerDeleteManyArgs} args - Arguments to filter Winners to delete.
     * @example
     * // Delete a few Winners
     * const { count } = await prisma.winner.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WinnerDeleteManyArgs>(args?: SelectSubset<T, WinnerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Winners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WinnerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Winners
     * const winner = await prisma.winner.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WinnerUpdateManyArgs>(args: SelectSubset<T, WinnerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Winners and returns the data updated in the database.
     * @param {WinnerUpdateManyAndReturnArgs} args - Arguments to update many Winners.
     * @example
     * // Update many Winners
     * const winner = await prisma.winner.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Winners and only return the `id`
     * const winnerWithIdOnly = await prisma.winner.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WinnerUpdateManyAndReturnArgs>(args: SelectSubset<T, WinnerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WinnerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Winner.
     * @param {WinnerUpsertArgs} args - Arguments to update or create a Winner.
     * @example
     * // Update or create a Winner
     * const winner = await prisma.winner.upsert({
     *   create: {
     *     // ... data to create a Winner
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Winner we want to update
     *   }
     * })
     */
    upsert<T extends WinnerUpsertArgs>(args: SelectSubset<T, WinnerUpsertArgs<ExtArgs>>): Prisma__WinnerClient<$Result.GetResult<Prisma.$WinnerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Winners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WinnerCountArgs} args - Arguments to filter Winners to count.
     * @example
     * // Count the number of Winners
     * const count = await prisma.winner.count({
     *   where: {
     *     // ... the filter for the Winners we want to count
     *   }
     * })
    **/
    count<T extends WinnerCountArgs>(
      args?: Subset<T, WinnerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WinnerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Winner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WinnerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WinnerAggregateArgs>(args: Subset<T, WinnerAggregateArgs>): Prisma.PrismaPromise<GetWinnerAggregateType<T>>

    /**
     * Group by Winner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WinnerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WinnerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WinnerGroupByArgs['orderBy'] }
        : { orderBy?: WinnerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WinnerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWinnerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Winner model
   */
  readonly fields: WinnerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Winner.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WinnerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    draw<T extends DrawDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DrawDefaultArgs<ExtArgs>>): Prisma__DrawClient<$Result.GetResult<Prisma.$DrawPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Winner model
   */
  interface WinnerFieldRefs {
    readonly id: FieldRef<"Winner", 'String'>
    readonly drawId: FieldRef<"Winner", 'String'>
    readonly userId: FieldRef<"Winner", 'String'>
    readonly winnerType: FieldRef<"Winner", 'WinnerType'>
    readonly winnerScore: FieldRef<"Winner", 'String'>
    readonly verificationStatus: FieldRef<"Winner", 'VerificationStatus'>
    readonly paymentStatus: FieldRef<"Winner", 'WinnerPaymentStatus'>
    readonly proofImage: FieldRef<"Winner", 'String'>
    readonly prizeAmount: FieldRef<"Winner", 'Int'>
    readonly adminNotes: FieldRef<"Winner", 'String'>
    readonly verifiedAt: FieldRef<"Winner", 'DateTime'>
    readonly paidAt: FieldRef<"Winner", 'DateTime'>
    readonly createdAt: FieldRef<"Winner", 'DateTime'>
    readonly updatedAt: FieldRef<"Winner", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Winner findUnique
   */
  export type WinnerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Winner
     */
    select?: WinnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Winner
     */
    omit?: WinnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WinnerInclude<ExtArgs> | null
    /**
     * Filter, which Winner to fetch.
     */
    where: WinnerWhereUniqueInput
  }

  /**
   * Winner findUniqueOrThrow
   */
  export type WinnerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Winner
     */
    select?: WinnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Winner
     */
    omit?: WinnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WinnerInclude<ExtArgs> | null
    /**
     * Filter, which Winner to fetch.
     */
    where: WinnerWhereUniqueInput
  }

  /**
   * Winner findFirst
   */
  export type WinnerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Winner
     */
    select?: WinnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Winner
     */
    omit?: WinnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WinnerInclude<ExtArgs> | null
    /**
     * Filter, which Winner to fetch.
     */
    where?: WinnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Winners to fetch.
     */
    orderBy?: WinnerOrderByWithRelationInput | WinnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Winners.
     */
    cursor?: WinnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Winners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Winners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Winners.
     */
    distinct?: WinnerScalarFieldEnum | WinnerScalarFieldEnum[]
  }

  /**
   * Winner findFirstOrThrow
   */
  export type WinnerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Winner
     */
    select?: WinnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Winner
     */
    omit?: WinnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WinnerInclude<ExtArgs> | null
    /**
     * Filter, which Winner to fetch.
     */
    where?: WinnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Winners to fetch.
     */
    orderBy?: WinnerOrderByWithRelationInput | WinnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Winners.
     */
    cursor?: WinnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Winners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Winners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Winners.
     */
    distinct?: WinnerScalarFieldEnum | WinnerScalarFieldEnum[]
  }

  /**
   * Winner findMany
   */
  export type WinnerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Winner
     */
    select?: WinnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Winner
     */
    omit?: WinnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WinnerInclude<ExtArgs> | null
    /**
     * Filter, which Winners to fetch.
     */
    where?: WinnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Winners to fetch.
     */
    orderBy?: WinnerOrderByWithRelationInput | WinnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Winners.
     */
    cursor?: WinnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Winners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Winners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Winners.
     */
    distinct?: WinnerScalarFieldEnum | WinnerScalarFieldEnum[]
  }

  /**
   * Winner create
   */
  export type WinnerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Winner
     */
    select?: WinnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Winner
     */
    omit?: WinnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WinnerInclude<ExtArgs> | null
    /**
     * The data needed to create a Winner.
     */
    data: XOR<WinnerCreateInput, WinnerUncheckedCreateInput>
  }

  /**
   * Winner createMany
   */
  export type WinnerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Winners.
     */
    data: WinnerCreateManyInput | WinnerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Winner createManyAndReturn
   */
  export type WinnerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Winner
     */
    select?: WinnerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Winner
     */
    omit?: WinnerOmit<ExtArgs> | null
    /**
     * The data used to create many Winners.
     */
    data: WinnerCreateManyInput | WinnerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WinnerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Winner update
   */
  export type WinnerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Winner
     */
    select?: WinnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Winner
     */
    omit?: WinnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WinnerInclude<ExtArgs> | null
    /**
     * The data needed to update a Winner.
     */
    data: XOR<WinnerUpdateInput, WinnerUncheckedUpdateInput>
    /**
     * Choose, which Winner to update.
     */
    where: WinnerWhereUniqueInput
  }

  /**
   * Winner updateMany
   */
  export type WinnerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Winners.
     */
    data: XOR<WinnerUpdateManyMutationInput, WinnerUncheckedUpdateManyInput>
    /**
     * Filter which Winners to update
     */
    where?: WinnerWhereInput
    /**
     * Limit how many Winners to update.
     */
    limit?: number
  }

  /**
   * Winner updateManyAndReturn
   */
  export type WinnerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Winner
     */
    select?: WinnerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Winner
     */
    omit?: WinnerOmit<ExtArgs> | null
    /**
     * The data used to update Winners.
     */
    data: XOR<WinnerUpdateManyMutationInput, WinnerUncheckedUpdateManyInput>
    /**
     * Filter which Winners to update
     */
    where?: WinnerWhereInput
    /**
     * Limit how many Winners to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WinnerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Winner upsert
   */
  export type WinnerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Winner
     */
    select?: WinnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Winner
     */
    omit?: WinnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WinnerInclude<ExtArgs> | null
    /**
     * The filter to search for the Winner to update in case it exists.
     */
    where: WinnerWhereUniqueInput
    /**
     * In case the Winner found by the `where` argument doesn't exist, create a new Winner with this data.
     */
    create: XOR<WinnerCreateInput, WinnerUncheckedCreateInput>
    /**
     * In case the Winner was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WinnerUpdateInput, WinnerUncheckedUpdateInput>
  }

  /**
   * Winner delete
   */
  export type WinnerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Winner
     */
    select?: WinnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Winner
     */
    omit?: WinnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WinnerInclude<ExtArgs> | null
    /**
     * Filter which Winner to delete.
     */
    where: WinnerWhereUniqueInput
  }

  /**
   * Winner deleteMany
   */
  export type WinnerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Winners to delete
     */
    where?: WinnerWhereInput
    /**
     * Limit how many Winners to delete.
     */
    limit?: number
  }

  /**
   * Winner without action
   */
  export type WinnerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Winner
     */
    select?: WinnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Winner
     */
    omit?: WinnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WinnerInclude<ExtArgs> | null
  }


  /**
   * Model Participant
   */

  export type AggregateParticipant = {
    _count: ParticipantCountAggregateOutputType | null
    _min: ParticipantMinAggregateOutputType | null
    _max: ParticipantMaxAggregateOutputType | null
  }

  export type ParticipantMinAggregateOutputType = {
    id: string | null
    drawId: string | null
    userId: string | null
    score: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ParticipantMaxAggregateOutputType = {
    id: string | null
    drawId: string | null
    userId: string | null
    score: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ParticipantCountAggregateOutputType = {
    id: number
    drawId: number
    userId: number
    score: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ParticipantMinAggregateInputType = {
    id?: true
    drawId?: true
    userId?: true
    score?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ParticipantMaxAggregateInputType = {
    id?: true
    drawId?: true
    userId?: true
    score?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ParticipantCountAggregateInputType = {
    id?: true
    drawId?: true
    userId?: true
    score?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ParticipantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Participant to aggregate.
     */
    where?: ParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participants to fetch.
     */
    orderBy?: ParticipantOrderByWithRelationInput | ParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Participants
    **/
    _count?: true | ParticipantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParticipantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParticipantMaxAggregateInputType
  }

  export type GetParticipantAggregateType<T extends ParticipantAggregateArgs> = {
        [P in keyof T & keyof AggregateParticipant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParticipant[P]>
      : GetScalarType<T[P], AggregateParticipant[P]>
  }




  export type ParticipantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParticipantWhereInput
    orderBy?: ParticipantOrderByWithAggregationInput | ParticipantOrderByWithAggregationInput[]
    by: ParticipantScalarFieldEnum[] | ParticipantScalarFieldEnum
    having?: ParticipantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParticipantCountAggregateInputType | true
    _min?: ParticipantMinAggregateInputType
    _max?: ParticipantMaxAggregateInputType
  }

  export type ParticipantGroupByOutputType = {
    id: string
    drawId: string
    userId: string
    score: string
    createdAt: Date
    updatedAt: Date
    _count: ParticipantCountAggregateOutputType | null
    _min: ParticipantMinAggregateOutputType | null
    _max: ParticipantMaxAggregateOutputType | null
  }

  type GetParticipantGroupByPayload<T extends ParticipantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParticipantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParticipantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParticipantGroupByOutputType[P]>
            : GetScalarType<T[P], ParticipantGroupByOutputType[P]>
        }
      >
    >


  export type ParticipantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    drawId?: boolean
    userId?: boolean
    score?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    draw?: boolean | DrawDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participant"]>

  export type ParticipantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    drawId?: boolean
    userId?: boolean
    score?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    draw?: boolean | DrawDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participant"]>

  export type ParticipantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    drawId?: boolean
    userId?: boolean
    score?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    draw?: boolean | DrawDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participant"]>

  export type ParticipantSelectScalar = {
    id?: boolean
    drawId?: boolean
    userId?: boolean
    score?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ParticipantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "drawId" | "userId" | "score" | "createdAt" | "updatedAt", ExtArgs["result"]["participant"]>
  export type ParticipantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    draw?: boolean | DrawDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ParticipantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    draw?: boolean | DrawDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ParticipantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    draw?: boolean | DrawDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ParticipantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Participant"
    objects: {
      draw: Prisma.$DrawPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      drawId: string
      userId: string
      score: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["participant"]>
    composites: {}
  }

  type ParticipantGetPayload<S extends boolean | null | undefined | ParticipantDefaultArgs> = $Result.GetResult<Prisma.$ParticipantPayload, S>

  type ParticipantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ParticipantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParticipantCountAggregateInputType | true
    }

  export interface ParticipantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Participant'], meta: { name: 'Participant' } }
    /**
     * Find zero or one Participant that matches the filter.
     * @param {ParticipantFindUniqueArgs} args - Arguments to find a Participant
     * @example
     * // Get one Participant
     * const participant = await prisma.participant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParticipantFindUniqueArgs>(args: SelectSubset<T, ParticipantFindUniqueArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Participant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ParticipantFindUniqueOrThrowArgs} args - Arguments to find a Participant
     * @example
     * // Get one Participant
     * const participant = await prisma.participant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParticipantFindUniqueOrThrowArgs>(args: SelectSubset<T, ParticipantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Participant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantFindFirstArgs} args - Arguments to find a Participant
     * @example
     * // Get one Participant
     * const participant = await prisma.participant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParticipantFindFirstArgs>(args?: SelectSubset<T, ParticipantFindFirstArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Participant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantFindFirstOrThrowArgs} args - Arguments to find a Participant
     * @example
     * // Get one Participant
     * const participant = await prisma.participant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParticipantFindFirstOrThrowArgs>(args?: SelectSubset<T, ParticipantFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Participants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Participants
     * const participants = await prisma.participant.findMany()
     * 
     * // Get first 10 Participants
     * const participants = await prisma.participant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const participantWithIdOnly = await prisma.participant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ParticipantFindManyArgs>(args?: SelectSubset<T, ParticipantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Participant.
     * @param {ParticipantCreateArgs} args - Arguments to create a Participant.
     * @example
     * // Create one Participant
     * const Participant = await prisma.participant.create({
     *   data: {
     *     // ... data to create a Participant
     *   }
     * })
     * 
     */
    create<T extends ParticipantCreateArgs>(args: SelectSubset<T, ParticipantCreateArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Participants.
     * @param {ParticipantCreateManyArgs} args - Arguments to create many Participants.
     * @example
     * // Create many Participants
     * const participant = await prisma.participant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParticipantCreateManyArgs>(args?: SelectSubset<T, ParticipantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Participants and returns the data saved in the database.
     * @param {ParticipantCreateManyAndReturnArgs} args - Arguments to create many Participants.
     * @example
     * // Create many Participants
     * const participant = await prisma.participant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Participants and only return the `id`
     * const participantWithIdOnly = await prisma.participant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ParticipantCreateManyAndReturnArgs>(args?: SelectSubset<T, ParticipantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Participant.
     * @param {ParticipantDeleteArgs} args - Arguments to delete one Participant.
     * @example
     * // Delete one Participant
     * const Participant = await prisma.participant.delete({
     *   where: {
     *     // ... filter to delete one Participant
     *   }
     * })
     * 
     */
    delete<T extends ParticipantDeleteArgs>(args: SelectSubset<T, ParticipantDeleteArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Participant.
     * @param {ParticipantUpdateArgs} args - Arguments to update one Participant.
     * @example
     * // Update one Participant
     * const participant = await prisma.participant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParticipantUpdateArgs>(args: SelectSubset<T, ParticipantUpdateArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Participants.
     * @param {ParticipantDeleteManyArgs} args - Arguments to filter Participants to delete.
     * @example
     * // Delete a few Participants
     * const { count } = await prisma.participant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParticipantDeleteManyArgs>(args?: SelectSubset<T, ParticipantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Participants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Participants
     * const participant = await prisma.participant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParticipantUpdateManyArgs>(args: SelectSubset<T, ParticipantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Participants and returns the data updated in the database.
     * @param {ParticipantUpdateManyAndReturnArgs} args - Arguments to update many Participants.
     * @example
     * // Update many Participants
     * const participant = await prisma.participant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Participants and only return the `id`
     * const participantWithIdOnly = await prisma.participant.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ParticipantUpdateManyAndReturnArgs>(args: SelectSubset<T, ParticipantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Participant.
     * @param {ParticipantUpsertArgs} args - Arguments to update or create a Participant.
     * @example
     * // Update or create a Participant
     * const participant = await prisma.participant.upsert({
     *   create: {
     *     // ... data to create a Participant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Participant we want to update
     *   }
     * })
     */
    upsert<T extends ParticipantUpsertArgs>(args: SelectSubset<T, ParticipantUpsertArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Participants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantCountArgs} args - Arguments to filter Participants to count.
     * @example
     * // Count the number of Participants
     * const count = await prisma.participant.count({
     *   where: {
     *     // ... the filter for the Participants we want to count
     *   }
     * })
    **/
    count<T extends ParticipantCountArgs>(
      args?: Subset<T, ParticipantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParticipantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Participant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ParticipantAggregateArgs>(args: Subset<T, ParticipantAggregateArgs>): Prisma.PrismaPromise<GetParticipantAggregateType<T>>

    /**
     * Group by Participant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ParticipantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParticipantGroupByArgs['orderBy'] }
        : { orderBy?: ParticipantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ParticipantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParticipantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Participant model
   */
  readonly fields: ParticipantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Participant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParticipantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    draw<T extends DrawDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DrawDefaultArgs<ExtArgs>>): Prisma__DrawClient<$Result.GetResult<Prisma.$DrawPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Participant model
   */
  interface ParticipantFieldRefs {
    readonly id: FieldRef<"Participant", 'String'>
    readonly drawId: FieldRef<"Participant", 'String'>
    readonly userId: FieldRef<"Participant", 'String'>
    readonly score: FieldRef<"Participant", 'String'>
    readonly createdAt: FieldRef<"Participant", 'DateTime'>
    readonly updatedAt: FieldRef<"Participant", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Participant findUnique
   */
  export type ParticipantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * Filter, which Participant to fetch.
     */
    where: ParticipantWhereUniqueInput
  }

  /**
   * Participant findUniqueOrThrow
   */
  export type ParticipantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * Filter, which Participant to fetch.
     */
    where: ParticipantWhereUniqueInput
  }

  /**
   * Participant findFirst
   */
  export type ParticipantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * Filter, which Participant to fetch.
     */
    where?: ParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participants to fetch.
     */
    orderBy?: ParticipantOrderByWithRelationInput | ParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Participants.
     */
    cursor?: ParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Participants.
     */
    distinct?: ParticipantScalarFieldEnum | ParticipantScalarFieldEnum[]
  }

  /**
   * Participant findFirstOrThrow
   */
  export type ParticipantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * Filter, which Participant to fetch.
     */
    where?: ParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participants to fetch.
     */
    orderBy?: ParticipantOrderByWithRelationInput | ParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Participants.
     */
    cursor?: ParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Participants.
     */
    distinct?: ParticipantScalarFieldEnum | ParticipantScalarFieldEnum[]
  }

  /**
   * Participant findMany
   */
  export type ParticipantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * Filter, which Participants to fetch.
     */
    where?: ParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participants to fetch.
     */
    orderBy?: ParticipantOrderByWithRelationInput | ParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Participants.
     */
    cursor?: ParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Participants.
     */
    distinct?: ParticipantScalarFieldEnum | ParticipantScalarFieldEnum[]
  }

  /**
   * Participant create
   */
  export type ParticipantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * The data needed to create a Participant.
     */
    data: XOR<ParticipantCreateInput, ParticipantUncheckedCreateInput>
  }

  /**
   * Participant createMany
   */
  export type ParticipantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Participants.
     */
    data: ParticipantCreateManyInput | ParticipantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Participant createManyAndReturn
   */
  export type ParticipantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * The data used to create many Participants.
     */
    data: ParticipantCreateManyInput | ParticipantCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Participant update
   */
  export type ParticipantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * The data needed to update a Participant.
     */
    data: XOR<ParticipantUpdateInput, ParticipantUncheckedUpdateInput>
    /**
     * Choose, which Participant to update.
     */
    where: ParticipantWhereUniqueInput
  }

  /**
   * Participant updateMany
   */
  export type ParticipantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Participants.
     */
    data: XOR<ParticipantUpdateManyMutationInput, ParticipantUncheckedUpdateManyInput>
    /**
     * Filter which Participants to update
     */
    where?: ParticipantWhereInput
    /**
     * Limit how many Participants to update.
     */
    limit?: number
  }

  /**
   * Participant updateManyAndReturn
   */
  export type ParticipantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * The data used to update Participants.
     */
    data: XOR<ParticipantUpdateManyMutationInput, ParticipantUncheckedUpdateManyInput>
    /**
     * Filter which Participants to update
     */
    where?: ParticipantWhereInput
    /**
     * Limit how many Participants to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Participant upsert
   */
  export type ParticipantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * The filter to search for the Participant to update in case it exists.
     */
    where: ParticipantWhereUniqueInput
    /**
     * In case the Participant found by the `where` argument doesn't exist, create a new Participant with this data.
     */
    create: XOR<ParticipantCreateInput, ParticipantUncheckedCreateInput>
    /**
     * In case the Participant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParticipantUpdateInput, ParticipantUncheckedUpdateInput>
  }

  /**
   * Participant delete
   */
  export type ParticipantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * Filter which Participant to delete.
     */
    where: ParticipantWhereUniqueInput
  }

  /**
   * Participant deleteMany
   */
  export type ParticipantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Participants to delete
     */
    where?: ParticipantWhereInput
    /**
     * Limit how many Participants to delete.
     */
    limit?: number
  }

  /**
   * Participant without action
   */
  export type ParticipantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    publicId: 'publicId',
    email: 'email',
    password: 'password',
    role: 'role',
    authProvider: 'authProvider',
    googleId: 'googleId',
    resetPasswordToken: 'resetPasswordToken',
    resetPasswordTokenExpires: 'resetPasswordTokenExpires',
    twoFactorSecret: 'twoFactorSecret',
    twoFactorEnabled: 'twoFactorEnabled',
    profilePicture: 'profilePicture',
    userName: 'userName',
    firstName: 'firstName',
    lastName: 'lastName',
    phoneNumber: 'phoneNumber',
    dateOfBirth: 'dateOfBirth',
    lastLoginAt: 'lastLoginAt',
    lastLoginIp: 'lastLoginIp',
    loginAttempts: 'loginAttempts',
    lockedUntil: 'lockedUntil',
    isActive: 'isActive',
    deletedAt: 'deletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const OtpScalarFieldEnum: {
    id: 'id',
    email: 'email',
    otp: 'otp',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt'
  };

  export type OtpScalarFieldEnum = (typeof OtpScalarFieldEnum)[keyof typeof OtpScalarFieldEnum]


  export const CharityScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    description: 'description',
    logoUrl: 'logoUrl',
    websiteUrl: 'websiteUrl',
    isFeatured: 'isFeatured',
    isActive: 'isActive',
    country: 'country',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CharityScalarFieldEnum = (typeof CharityScalarFieldEnum)[keyof typeof CharityScalarFieldEnum]


  export const CharityImageScalarFieldEnum: {
    id: 'id',
    charityId: 'charityId',
    url: 'url',
    altText: 'altText',
    order: 'order',
    createdAt: 'createdAt'
  };

  export type CharityImageScalarFieldEnum = (typeof CharityImageScalarFieldEnum)[keyof typeof CharityImageScalarFieldEnum]


  export const UserCharityScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    charityId: 'charityId',
    subscriptionId: 'subscriptionId',
    type: 'type',
    percentage: 'percentage',
    amount: 'amount',
    currency: 'currency',
    month: 'month',
    year: 'year',
    status: 'status',
    paidAt: 'paidAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserCharityScalarFieldEnum = (typeof UserCharityScalarFieldEnum)[keyof typeof UserCharityScalarFieldEnum]


  export const GolfScoreScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    score: 'score',
    playedOn: 'playedOn',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GolfScoreScalarFieldEnum = (typeof GolfScoreScalarFieldEnum)[keyof typeof GolfScoreScalarFieldEnum]


  export const SubscriptionModelScalarFieldEnum: {
    id: 'id',
    planName: 'planName',
    planDescription: 'planDescription',
    price: 'price',
    currency: 'currency',
    features: 'features',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SubscriptionModelScalarFieldEnum = (typeof SubscriptionModelScalarFieldEnum)[keyof typeof SubscriptionModelScalarFieldEnum]


  export const SubscriptionOrderScalarFieldEnum: {
    id: 'id',
    subscriptionModelId: 'subscriptionModelId',
    userId: 'userId',
    periodStart: 'periodStart',
    periodEnd: 'periodEnd',
    stripeSessionId: 'stripeSessionId',
    stripePaymentIntentId: 'stripePaymentIntentId',
    stripeCustomerId: 'stripeCustomerId',
    stripeClientSecret: 'stripeClientSecret',
    stripeEventId: 'stripeEventId',
    paymentGateway: 'paymentGateway',
    amount: 'amount',
    currency: 'currency',
    status: 'status',
    failReason: 'failReason',
    completedAt: 'completedAt',
    cancelledAt: 'cancelledAt',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SubscriptionOrderScalarFieldEnum = (typeof SubscriptionOrderScalarFieldEnum)[keyof typeof SubscriptionOrderScalarFieldEnum]


  export const DrawScalarFieldEnum: {
    id: 'id',
    adminId: 'adminId',
    prizePool: 'prizePool',
    currency: 'currency',
    entryStartDate: 'entryStartDate',
    lastEntryDate: 'lastEntryDate',
    resultDate: 'resultDate',
    drawNumber: 'drawNumber',
    status: 'status',
    fiveMatchPct: 'fiveMatchPct',
    fourMatchPct: 'fourMatchPct',
    threeMatchPct: 'threeMatchPct',
    jackpotRolledOver: 'jackpotRolledOver',
    rolledOverFromId: 'rolledOverFromId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DrawScalarFieldEnum = (typeof DrawScalarFieldEnum)[keyof typeof DrawScalarFieldEnum]


  export const WinnerScalarFieldEnum: {
    id: 'id',
    drawId: 'drawId',
    userId: 'userId',
    winnerType: 'winnerType',
    winnerScore: 'winnerScore',
    verificationStatus: 'verificationStatus',
    paymentStatus: 'paymentStatus',
    proofImage: 'proofImage',
    prizeAmount: 'prizeAmount',
    adminNotes: 'adminNotes',
    verifiedAt: 'verifiedAt',
    paidAt: 'paidAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WinnerScalarFieldEnum = (typeof WinnerScalarFieldEnum)[keyof typeof WinnerScalarFieldEnum]


  export const ParticipantScalarFieldEnum: {
    id: 'id',
    drawId: 'drawId',
    userId: 'userId',
    score: 'score',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ParticipantScalarFieldEnum = (typeof ParticipantScalarFieldEnum)[keyof typeof ParticipantScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'AuthProvider'
   */
  export type EnumAuthProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuthProvider'>
    


  /**
   * Reference to a field of type 'AuthProvider[]'
   */
  export type ListEnumAuthProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuthProvider[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'CharityContributionType'
   */
  export type EnumCharityContributionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CharityContributionType'>
    


  /**
   * Reference to a field of type 'CharityContributionType[]'
   */
  export type ListEnumCharityContributionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CharityContributionType[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'CharityStatus'
   */
  export type EnumCharityStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CharityStatus'>
    


  /**
   * Reference to a field of type 'CharityStatus[]'
   */
  export type ListEnumCharityStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CharityStatus[]'>
    


  /**
   * Reference to a field of type 'PaymentGateway'
   */
  export type EnumPaymentGatewayFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentGateway'>
    


  /**
   * Reference to a field of type 'PaymentGateway[]'
   */
  export type ListEnumPaymentGatewayFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentGateway[]'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'PaymentStatus[]'
   */
  export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus[]'>
    


  /**
   * Reference to a field of type 'DrawStatus'
   */
  export type EnumDrawStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DrawStatus'>
    


  /**
   * Reference to a field of type 'DrawStatus[]'
   */
  export type ListEnumDrawStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DrawStatus[]'>
    


  /**
   * Reference to a field of type 'WinnerType'
   */
  export type EnumWinnerTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WinnerType'>
    


  /**
   * Reference to a field of type 'WinnerType[]'
   */
  export type ListEnumWinnerTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WinnerType[]'>
    


  /**
   * Reference to a field of type 'VerificationStatus'
   */
  export type EnumVerificationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VerificationStatus'>
    


  /**
   * Reference to a field of type 'VerificationStatus[]'
   */
  export type ListEnumVerificationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VerificationStatus[]'>
    


  /**
   * Reference to a field of type 'WinnerPaymentStatus'
   */
  export type EnumWinnerPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WinnerPaymentStatus'>
    


  /**
   * Reference to a field of type 'WinnerPaymentStatus[]'
   */
  export type ListEnumWinnerPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WinnerPaymentStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    publicId?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    authProvider?: EnumAuthProviderFilter<"User"> | $Enums.AuthProvider
    googleId?: StringNullableFilter<"User"> | string | null
    resetPasswordToken?: StringNullableFilter<"User"> | string | null
    resetPasswordTokenExpires?: DateTimeNullableFilter<"User"> | Date | string | null
    twoFactorSecret?: StringNullableFilter<"User"> | string | null
    twoFactorEnabled?: BoolFilter<"User"> | boolean
    profilePicture?: StringNullableFilter<"User"> | string | null
    userName?: StringFilter<"User"> | string
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    phoneNumber?: StringNullableFilter<"User"> | string | null
    dateOfBirth?: DateTimeNullableFilter<"User"> | Date | string | null
    lastLoginAt?: DateTimeNullableFilter<"User"> | Date | string | null
    lastLoginIp?: StringNullableFilter<"User"> | string | null
    loginAttempts?: IntFilter<"User"> | number
    lockedUntil?: DateTimeNullableFilter<"User"> | Date | string | null
    isActive?: BoolFilter<"User"> | boolean
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    scores?: GolfScoreListRelationFilter
    userCharities?: UserCharityListRelationFilter
    subcriptions?: SubscriptionOrderListRelationFilter
    draws?: DrawListRelationFilter
    winners?: WinnerListRelationFilter
    participants?: ParticipantListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    publicId?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    role?: SortOrder
    authProvider?: SortOrder
    googleId?: SortOrderInput | SortOrder
    resetPasswordToken?: SortOrderInput | SortOrder
    resetPasswordTokenExpires?: SortOrderInput | SortOrder
    twoFactorSecret?: SortOrderInput | SortOrder
    twoFactorEnabled?: SortOrder
    profilePicture?: SortOrderInput | SortOrder
    userName?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    dateOfBirth?: SortOrderInput | SortOrder
    lastLoginAt?: SortOrderInput | SortOrder
    lastLoginIp?: SortOrderInput | SortOrder
    loginAttempts?: SortOrder
    lockedUntil?: SortOrderInput | SortOrder
    isActive?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    scores?: GolfScoreOrderByRelationAggregateInput
    userCharities?: UserCharityOrderByRelationAggregateInput
    subcriptions?: SubscriptionOrderOrderByRelationAggregateInput
    draws?: DrawOrderByRelationAggregateInput
    winners?: WinnerOrderByRelationAggregateInput
    participants?: ParticipantOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    publicId?: string
    email?: string
    resetPasswordToken?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    authProvider?: EnumAuthProviderFilter<"User"> | $Enums.AuthProvider
    googleId?: StringNullableFilter<"User"> | string | null
    resetPasswordTokenExpires?: DateTimeNullableFilter<"User"> | Date | string | null
    twoFactorSecret?: StringNullableFilter<"User"> | string | null
    twoFactorEnabled?: BoolFilter<"User"> | boolean
    profilePicture?: StringNullableFilter<"User"> | string | null
    userName?: StringFilter<"User"> | string
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    phoneNumber?: StringNullableFilter<"User"> | string | null
    dateOfBirth?: DateTimeNullableFilter<"User"> | Date | string | null
    lastLoginAt?: DateTimeNullableFilter<"User"> | Date | string | null
    lastLoginIp?: StringNullableFilter<"User"> | string | null
    loginAttempts?: IntFilter<"User"> | number
    lockedUntil?: DateTimeNullableFilter<"User"> | Date | string | null
    isActive?: BoolFilter<"User"> | boolean
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    scores?: GolfScoreListRelationFilter
    userCharities?: UserCharityListRelationFilter
    subcriptions?: SubscriptionOrderListRelationFilter
    draws?: DrawListRelationFilter
    winners?: WinnerListRelationFilter
    participants?: ParticipantListRelationFilter
  }, "id" | "publicId" | "email" | "resetPasswordToken">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    publicId?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    role?: SortOrder
    authProvider?: SortOrder
    googleId?: SortOrderInput | SortOrder
    resetPasswordToken?: SortOrderInput | SortOrder
    resetPasswordTokenExpires?: SortOrderInput | SortOrder
    twoFactorSecret?: SortOrderInput | SortOrder
    twoFactorEnabled?: SortOrder
    profilePicture?: SortOrderInput | SortOrder
    userName?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    dateOfBirth?: SortOrderInput | SortOrder
    lastLoginAt?: SortOrderInput | SortOrder
    lastLoginIp?: SortOrderInput | SortOrder
    loginAttempts?: SortOrder
    lockedUntil?: SortOrderInput | SortOrder
    isActive?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    publicId?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    authProvider?: EnumAuthProviderWithAggregatesFilter<"User"> | $Enums.AuthProvider
    googleId?: StringNullableWithAggregatesFilter<"User"> | string | null
    resetPasswordToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    resetPasswordTokenExpires?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    twoFactorSecret?: StringNullableWithAggregatesFilter<"User"> | string | null
    twoFactorEnabled?: BoolWithAggregatesFilter<"User"> | boolean
    profilePicture?: StringNullableWithAggregatesFilter<"User"> | string | null
    userName?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringNullableWithAggregatesFilter<"User"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"User"> | string | null
    phoneNumber?: StringNullableWithAggregatesFilter<"User"> | string | null
    dateOfBirth?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    lastLoginAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    lastLoginIp?: StringNullableWithAggregatesFilter<"User"> | string | null
    loginAttempts?: IntWithAggregatesFilter<"User"> | number
    lockedUntil?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    deletedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type OtpWhereInput = {
    AND?: OtpWhereInput | OtpWhereInput[]
    OR?: OtpWhereInput[]
    NOT?: OtpWhereInput | OtpWhereInput[]
    id?: StringFilter<"Otp"> | string
    email?: StringFilter<"Otp"> | string
    otp?: StringFilter<"Otp"> | string
    expiresAt?: DateTimeFilter<"Otp"> | Date | string
    createdAt?: DateTimeFilter<"Otp"> | Date | string
  }

  export type OtpOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    otp?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type OtpWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: OtpWhereInput | OtpWhereInput[]
    OR?: OtpWhereInput[]
    NOT?: OtpWhereInput | OtpWhereInput[]
    otp?: StringFilter<"Otp"> | string
    expiresAt?: DateTimeFilter<"Otp"> | Date | string
    createdAt?: DateTimeFilter<"Otp"> | Date | string
  }, "id" | "email">

  export type OtpOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    otp?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    _count?: OtpCountOrderByAggregateInput
    _max?: OtpMaxOrderByAggregateInput
    _min?: OtpMinOrderByAggregateInput
  }

  export type OtpScalarWhereWithAggregatesInput = {
    AND?: OtpScalarWhereWithAggregatesInput | OtpScalarWhereWithAggregatesInput[]
    OR?: OtpScalarWhereWithAggregatesInput[]
    NOT?: OtpScalarWhereWithAggregatesInput | OtpScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Otp"> | string
    email?: StringWithAggregatesFilter<"Otp"> | string
    otp?: StringWithAggregatesFilter<"Otp"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Otp"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Otp"> | Date | string
  }

  export type CharityWhereInput = {
    AND?: CharityWhereInput | CharityWhereInput[]
    OR?: CharityWhereInput[]
    NOT?: CharityWhereInput | CharityWhereInput[]
    id?: StringFilter<"Charity"> | string
    name?: StringFilter<"Charity"> | string
    slug?: StringFilter<"Charity"> | string
    description?: StringFilter<"Charity"> | string
    logoUrl?: StringNullableFilter<"Charity"> | string | null
    websiteUrl?: StringNullableFilter<"Charity"> | string | null
    isFeatured?: BoolFilter<"Charity"> | boolean
    isActive?: BoolFilter<"Charity"> | boolean
    country?: StringNullableFilter<"Charity"> | string | null
    createdAt?: DateTimeFilter<"Charity"> | Date | string
    updatedAt?: DateTimeFilter<"Charity"> | Date | string
    images?: CharityImageListRelationFilter
    userCharities?: UserCharityListRelationFilter
  }

  export type CharityOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    logoUrl?: SortOrderInput | SortOrder
    websiteUrl?: SortOrderInput | SortOrder
    isFeatured?: SortOrder
    isActive?: SortOrder
    country?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    images?: CharityImageOrderByRelationAggregateInput
    userCharities?: UserCharityOrderByRelationAggregateInput
  }

  export type CharityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: CharityWhereInput | CharityWhereInput[]
    OR?: CharityWhereInput[]
    NOT?: CharityWhereInput | CharityWhereInput[]
    name?: StringFilter<"Charity"> | string
    description?: StringFilter<"Charity"> | string
    logoUrl?: StringNullableFilter<"Charity"> | string | null
    websiteUrl?: StringNullableFilter<"Charity"> | string | null
    isFeatured?: BoolFilter<"Charity"> | boolean
    isActive?: BoolFilter<"Charity"> | boolean
    country?: StringNullableFilter<"Charity"> | string | null
    createdAt?: DateTimeFilter<"Charity"> | Date | string
    updatedAt?: DateTimeFilter<"Charity"> | Date | string
    images?: CharityImageListRelationFilter
    userCharities?: UserCharityListRelationFilter
  }, "id" | "slug">

  export type CharityOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    logoUrl?: SortOrderInput | SortOrder
    websiteUrl?: SortOrderInput | SortOrder
    isFeatured?: SortOrder
    isActive?: SortOrder
    country?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CharityCountOrderByAggregateInput
    _max?: CharityMaxOrderByAggregateInput
    _min?: CharityMinOrderByAggregateInput
  }

  export type CharityScalarWhereWithAggregatesInput = {
    AND?: CharityScalarWhereWithAggregatesInput | CharityScalarWhereWithAggregatesInput[]
    OR?: CharityScalarWhereWithAggregatesInput[]
    NOT?: CharityScalarWhereWithAggregatesInput | CharityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Charity"> | string
    name?: StringWithAggregatesFilter<"Charity"> | string
    slug?: StringWithAggregatesFilter<"Charity"> | string
    description?: StringWithAggregatesFilter<"Charity"> | string
    logoUrl?: StringNullableWithAggregatesFilter<"Charity"> | string | null
    websiteUrl?: StringNullableWithAggregatesFilter<"Charity"> | string | null
    isFeatured?: BoolWithAggregatesFilter<"Charity"> | boolean
    isActive?: BoolWithAggregatesFilter<"Charity"> | boolean
    country?: StringNullableWithAggregatesFilter<"Charity"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Charity"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Charity"> | Date | string
  }

  export type CharityImageWhereInput = {
    AND?: CharityImageWhereInput | CharityImageWhereInput[]
    OR?: CharityImageWhereInput[]
    NOT?: CharityImageWhereInput | CharityImageWhereInput[]
    id?: StringFilter<"CharityImage"> | string
    charityId?: StringFilter<"CharityImage"> | string
    url?: StringFilter<"CharityImage"> | string
    altText?: StringNullableFilter<"CharityImage"> | string | null
    order?: IntFilter<"CharityImage"> | number
    createdAt?: DateTimeFilter<"CharityImage"> | Date | string
    charity?: XOR<CharityScalarRelationFilter, CharityWhereInput>
  }

  export type CharityImageOrderByWithRelationInput = {
    id?: SortOrder
    charityId?: SortOrder
    url?: SortOrder
    altText?: SortOrderInput | SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    charity?: CharityOrderByWithRelationInput
  }

  export type CharityImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CharityImageWhereInput | CharityImageWhereInput[]
    OR?: CharityImageWhereInput[]
    NOT?: CharityImageWhereInput | CharityImageWhereInput[]
    charityId?: StringFilter<"CharityImage"> | string
    url?: StringFilter<"CharityImage"> | string
    altText?: StringNullableFilter<"CharityImage"> | string | null
    order?: IntFilter<"CharityImage"> | number
    createdAt?: DateTimeFilter<"CharityImage"> | Date | string
    charity?: XOR<CharityScalarRelationFilter, CharityWhereInput>
  }, "id">

  export type CharityImageOrderByWithAggregationInput = {
    id?: SortOrder
    charityId?: SortOrder
    url?: SortOrder
    altText?: SortOrderInput | SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    _count?: CharityImageCountOrderByAggregateInput
    _avg?: CharityImageAvgOrderByAggregateInput
    _max?: CharityImageMaxOrderByAggregateInput
    _min?: CharityImageMinOrderByAggregateInput
    _sum?: CharityImageSumOrderByAggregateInput
  }

  export type CharityImageScalarWhereWithAggregatesInput = {
    AND?: CharityImageScalarWhereWithAggregatesInput | CharityImageScalarWhereWithAggregatesInput[]
    OR?: CharityImageScalarWhereWithAggregatesInput[]
    NOT?: CharityImageScalarWhereWithAggregatesInput | CharityImageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CharityImage"> | string
    charityId?: StringWithAggregatesFilter<"CharityImage"> | string
    url?: StringWithAggregatesFilter<"CharityImage"> | string
    altText?: StringNullableWithAggregatesFilter<"CharityImage"> | string | null
    order?: IntWithAggregatesFilter<"CharityImage"> | number
    createdAt?: DateTimeWithAggregatesFilter<"CharityImage"> | Date | string
  }

  export type UserCharityWhereInput = {
    AND?: UserCharityWhereInput | UserCharityWhereInput[]
    OR?: UserCharityWhereInput[]
    NOT?: UserCharityWhereInput | UserCharityWhereInput[]
    id?: StringFilter<"UserCharity"> | string
    userId?: StringFilter<"UserCharity"> | string
    charityId?: StringFilter<"UserCharity"> | string
    subscriptionId?: StringFilter<"UserCharity"> | string
    type?: EnumCharityContributionTypeFilter<"UserCharity"> | $Enums.CharityContributionType
    percentage?: DecimalNullableFilter<"UserCharity"> | Decimal | DecimalJsLike | number | string | null
    amount?: DecimalFilter<"UserCharity"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"UserCharity"> | string
    month?: IntNullableFilter<"UserCharity"> | number | null
    year?: IntNullableFilter<"UserCharity"> | number | null
    status?: EnumCharityStatusFilter<"UserCharity"> | $Enums.CharityStatus
    paidAt?: DateTimeNullableFilter<"UserCharity"> | Date | string | null
    createdAt?: DateTimeFilter<"UserCharity"> | Date | string
    updatedAt?: DateTimeFilter<"UserCharity"> | Date | string
    subscription?: XOR<SubscriptionOrderScalarRelationFilter, SubscriptionOrderWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    charity?: XOR<CharityScalarRelationFilter, CharityWhereInput>
  }

  export type UserCharityOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    charityId?: SortOrder
    subscriptionId?: SortOrder
    type?: SortOrder
    percentage?: SortOrderInput | SortOrder
    amount?: SortOrder
    currency?: SortOrder
    month?: SortOrderInput | SortOrder
    year?: SortOrderInput | SortOrder
    status?: SortOrder
    paidAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    subscription?: SubscriptionOrderOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    charity?: CharityOrderByWithRelationInput
  }

  export type UserCharityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    subscriptionId?: string
    userId_month_year_type?: UserCharityUserIdMonthYearTypeCompoundUniqueInput
    AND?: UserCharityWhereInput | UserCharityWhereInput[]
    OR?: UserCharityWhereInput[]
    NOT?: UserCharityWhereInput | UserCharityWhereInput[]
    userId?: StringFilter<"UserCharity"> | string
    charityId?: StringFilter<"UserCharity"> | string
    type?: EnumCharityContributionTypeFilter<"UserCharity"> | $Enums.CharityContributionType
    percentage?: DecimalNullableFilter<"UserCharity"> | Decimal | DecimalJsLike | number | string | null
    amount?: DecimalFilter<"UserCharity"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"UserCharity"> | string
    month?: IntNullableFilter<"UserCharity"> | number | null
    year?: IntNullableFilter<"UserCharity"> | number | null
    status?: EnumCharityStatusFilter<"UserCharity"> | $Enums.CharityStatus
    paidAt?: DateTimeNullableFilter<"UserCharity"> | Date | string | null
    createdAt?: DateTimeFilter<"UserCharity"> | Date | string
    updatedAt?: DateTimeFilter<"UserCharity"> | Date | string
    subscription?: XOR<SubscriptionOrderScalarRelationFilter, SubscriptionOrderWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    charity?: XOR<CharityScalarRelationFilter, CharityWhereInput>
  }, "id" | "subscriptionId" | "userId_month_year_type">

  export type UserCharityOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    charityId?: SortOrder
    subscriptionId?: SortOrder
    type?: SortOrder
    percentage?: SortOrderInput | SortOrder
    amount?: SortOrder
    currency?: SortOrder
    month?: SortOrderInput | SortOrder
    year?: SortOrderInput | SortOrder
    status?: SortOrder
    paidAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCharityCountOrderByAggregateInput
    _avg?: UserCharityAvgOrderByAggregateInput
    _max?: UserCharityMaxOrderByAggregateInput
    _min?: UserCharityMinOrderByAggregateInput
    _sum?: UserCharitySumOrderByAggregateInput
  }

  export type UserCharityScalarWhereWithAggregatesInput = {
    AND?: UserCharityScalarWhereWithAggregatesInput | UserCharityScalarWhereWithAggregatesInput[]
    OR?: UserCharityScalarWhereWithAggregatesInput[]
    NOT?: UserCharityScalarWhereWithAggregatesInput | UserCharityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserCharity"> | string
    userId?: StringWithAggregatesFilter<"UserCharity"> | string
    charityId?: StringWithAggregatesFilter<"UserCharity"> | string
    subscriptionId?: StringWithAggregatesFilter<"UserCharity"> | string
    type?: EnumCharityContributionTypeWithAggregatesFilter<"UserCharity"> | $Enums.CharityContributionType
    percentage?: DecimalNullableWithAggregatesFilter<"UserCharity"> | Decimal | DecimalJsLike | number | string | null
    amount?: DecimalWithAggregatesFilter<"UserCharity"> | Decimal | DecimalJsLike | number | string
    currency?: StringWithAggregatesFilter<"UserCharity"> | string
    month?: IntNullableWithAggregatesFilter<"UserCharity"> | number | null
    year?: IntNullableWithAggregatesFilter<"UserCharity"> | number | null
    status?: EnumCharityStatusWithAggregatesFilter<"UserCharity"> | $Enums.CharityStatus
    paidAt?: DateTimeNullableWithAggregatesFilter<"UserCharity"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"UserCharity"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserCharity"> | Date | string
  }

  export type GolfScoreWhereInput = {
    AND?: GolfScoreWhereInput | GolfScoreWhereInput[]
    OR?: GolfScoreWhereInput[]
    NOT?: GolfScoreWhereInput | GolfScoreWhereInput[]
    id?: StringFilter<"GolfScore"> | string
    userId?: StringFilter<"GolfScore"> | string
    score?: IntFilter<"GolfScore"> | number
    playedOn?: DateTimeFilter<"GolfScore"> | Date | string
    createdAt?: DateTimeFilter<"GolfScore"> | Date | string
    updatedAt?: DateTimeFilter<"GolfScore"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type GolfScoreOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    score?: SortOrder
    playedOn?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type GolfScoreWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_playedOn?: GolfScoreUserIdPlayedOnCompoundUniqueInput
    AND?: GolfScoreWhereInput | GolfScoreWhereInput[]
    OR?: GolfScoreWhereInput[]
    NOT?: GolfScoreWhereInput | GolfScoreWhereInput[]
    userId?: StringFilter<"GolfScore"> | string
    score?: IntFilter<"GolfScore"> | number
    playedOn?: DateTimeFilter<"GolfScore"> | Date | string
    createdAt?: DateTimeFilter<"GolfScore"> | Date | string
    updatedAt?: DateTimeFilter<"GolfScore"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_playedOn">

  export type GolfScoreOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    score?: SortOrder
    playedOn?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GolfScoreCountOrderByAggregateInput
    _avg?: GolfScoreAvgOrderByAggregateInput
    _max?: GolfScoreMaxOrderByAggregateInput
    _min?: GolfScoreMinOrderByAggregateInput
    _sum?: GolfScoreSumOrderByAggregateInput
  }

  export type GolfScoreScalarWhereWithAggregatesInput = {
    AND?: GolfScoreScalarWhereWithAggregatesInput | GolfScoreScalarWhereWithAggregatesInput[]
    OR?: GolfScoreScalarWhereWithAggregatesInput[]
    NOT?: GolfScoreScalarWhereWithAggregatesInput | GolfScoreScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GolfScore"> | string
    userId?: StringWithAggregatesFilter<"GolfScore"> | string
    score?: IntWithAggregatesFilter<"GolfScore"> | number
    playedOn?: DateTimeWithAggregatesFilter<"GolfScore"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"GolfScore"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"GolfScore"> | Date | string
  }

  export type SubscriptionModelWhereInput = {
    AND?: SubscriptionModelWhereInput | SubscriptionModelWhereInput[]
    OR?: SubscriptionModelWhereInput[]
    NOT?: SubscriptionModelWhereInput | SubscriptionModelWhereInput[]
    id?: StringFilter<"SubscriptionModel"> | string
    planName?: StringFilter<"SubscriptionModel"> | string
    planDescription?: StringNullableFilter<"SubscriptionModel"> | string | null
    price?: IntFilter<"SubscriptionModel"> | number
    currency?: StringFilter<"SubscriptionModel"> | string
    features?: StringNullableListFilter<"SubscriptionModel">
    createdAt?: DateTimeFilter<"SubscriptionModel"> | Date | string
    updatedAt?: DateTimeFilter<"SubscriptionModel"> | Date | string
    subscriptionOrders?: SubscriptionOrderListRelationFilter
  }

  export type SubscriptionModelOrderByWithRelationInput = {
    id?: SortOrder
    planName?: SortOrder
    planDescription?: SortOrderInput | SortOrder
    price?: SortOrder
    currency?: SortOrder
    features?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    subscriptionOrders?: SubscriptionOrderOrderByRelationAggregateInput
  }

  export type SubscriptionModelWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SubscriptionModelWhereInput | SubscriptionModelWhereInput[]
    OR?: SubscriptionModelWhereInput[]
    NOT?: SubscriptionModelWhereInput | SubscriptionModelWhereInput[]
    planName?: StringFilter<"SubscriptionModel"> | string
    planDescription?: StringNullableFilter<"SubscriptionModel"> | string | null
    price?: IntFilter<"SubscriptionModel"> | number
    currency?: StringFilter<"SubscriptionModel"> | string
    features?: StringNullableListFilter<"SubscriptionModel">
    createdAt?: DateTimeFilter<"SubscriptionModel"> | Date | string
    updatedAt?: DateTimeFilter<"SubscriptionModel"> | Date | string
    subscriptionOrders?: SubscriptionOrderListRelationFilter
  }, "id">

  export type SubscriptionModelOrderByWithAggregationInput = {
    id?: SortOrder
    planName?: SortOrder
    planDescription?: SortOrderInput | SortOrder
    price?: SortOrder
    currency?: SortOrder
    features?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SubscriptionModelCountOrderByAggregateInput
    _avg?: SubscriptionModelAvgOrderByAggregateInput
    _max?: SubscriptionModelMaxOrderByAggregateInput
    _min?: SubscriptionModelMinOrderByAggregateInput
    _sum?: SubscriptionModelSumOrderByAggregateInput
  }

  export type SubscriptionModelScalarWhereWithAggregatesInput = {
    AND?: SubscriptionModelScalarWhereWithAggregatesInput | SubscriptionModelScalarWhereWithAggregatesInput[]
    OR?: SubscriptionModelScalarWhereWithAggregatesInput[]
    NOT?: SubscriptionModelScalarWhereWithAggregatesInput | SubscriptionModelScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SubscriptionModel"> | string
    planName?: StringWithAggregatesFilter<"SubscriptionModel"> | string
    planDescription?: StringNullableWithAggregatesFilter<"SubscriptionModel"> | string | null
    price?: IntWithAggregatesFilter<"SubscriptionModel"> | number
    currency?: StringWithAggregatesFilter<"SubscriptionModel"> | string
    features?: StringNullableListFilter<"SubscriptionModel">
    createdAt?: DateTimeWithAggregatesFilter<"SubscriptionModel"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SubscriptionModel"> | Date | string
  }

  export type SubscriptionOrderWhereInput = {
    AND?: SubscriptionOrderWhereInput | SubscriptionOrderWhereInput[]
    OR?: SubscriptionOrderWhereInput[]
    NOT?: SubscriptionOrderWhereInput | SubscriptionOrderWhereInput[]
    id?: StringFilter<"SubscriptionOrder"> | string
    subscriptionModelId?: StringFilter<"SubscriptionOrder"> | string
    userId?: StringFilter<"SubscriptionOrder"> | string
    periodStart?: DateTimeFilter<"SubscriptionOrder"> | Date | string
    periodEnd?: DateTimeFilter<"SubscriptionOrder"> | Date | string
    stripeSessionId?: StringNullableFilter<"SubscriptionOrder"> | string | null
    stripePaymentIntentId?: StringNullableFilter<"SubscriptionOrder"> | string | null
    stripeCustomerId?: StringNullableFilter<"SubscriptionOrder"> | string | null
    stripeClientSecret?: StringNullableFilter<"SubscriptionOrder"> | string | null
    stripeEventId?: StringNullableFilter<"SubscriptionOrder"> | string | null
    paymentGateway?: EnumPaymentGatewayFilter<"SubscriptionOrder"> | $Enums.PaymentGateway
    amount?: IntFilter<"SubscriptionOrder"> | number
    currency?: StringFilter<"SubscriptionOrder"> | string
    status?: EnumPaymentStatusFilter<"SubscriptionOrder"> | $Enums.PaymentStatus
    failReason?: StringNullableFilter<"SubscriptionOrder"> | string | null
    completedAt?: DateTimeNullableFilter<"SubscriptionOrder"> | Date | string | null
    cancelledAt?: DateTimeNullableFilter<"SubscriptionOrder"> | Date | string | null
    ipAddress?: StringNullableFilter<"SubscriptionOrder"> | string | null
    userAgent?: StringNullableFilter<"SubscriptionOrder"> | string | null
    createdAt?: DateTimeFilter<"SubscriptionOrder"> | Date | string
    updatedAt?: DateTimeFilter<"SubscriptionOrder"> | Date | string
    subscriptionModel?: XOR<SubscriptionModelScalarRelationFilter, SubscriptionModelWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    userCharities?: UserCharityListRelationFilter
  }

  export type SubscriptionOrderOrderByWithRelationInput = {
    id?: SortOrder
    subscriptionModelId?: SortOrder
    userId?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    stripeSessionId?: SortOrderInput | SortOrder
    stripePaymentIntentId?: SortOrderInput | SortOrder
    stripeCustomerId?: SortOrderInput | SortOrder
    stripeClientSecret?: SortOrderInput | SortOrder
    stripeEventId?: SortOrderInput | SortOrder
    paymentGateway?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    failReason?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    cancelledAt?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    subscriptionModel?: SubscriptionModelOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    userCharities?: UserCharityOrderByRelationAggregateInput
  }

  export type SubscriptionOrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    stripeSessionId?: string
    stripePaymentIntentId?: string
    stripeClientSecret?: string
    stripeEventId?: string
    AND?: SubscriptionOrderWhereInput | SubscriptionOrderWhereInput[]
    OR?: SubscriptionOrderWhereInput[]
    NOT?: SubscriptionOrderWhereInput | SubscriptionOrderWhereInput[]
    subscriptionModelId?: StringFilter<"SubscriptionOrder"> | string
    periodStart?: DateTimeFilter<"SubscriptionOrder"> | Date | string
    periodEnd?: DateTimeFilter<"SubscriptionOrder"> | Date | string
    stripeCustomerId?: StringNullableFilter<"SubscriptionOrder"> | string | null
    paymentGateway?: EnumPaymentGatewayFilter<"SubscriptionOrder"> | $Enums.PaymentGateway
    amount?: IntFilter<"SubscriptionOrder"> | number
    currency?: StringFilter<"SubscriptionOrder"> | string
    status?: EnumPaymentStatusFilter<"SubscriptionOrder"> | $Enums.PaymentStatus
    failReason?: StringNullableFilter<"SubscriptionOrder"> | string | null
    completedAt?: DateTimeNullableFilter<"SubscriptionOrder"> | Date | string | null
    cancelledAt?: DateTimeNullableFilter<"SubscriptionOrder"> | Date | string | null
    ipAddress?: StringNullableFilter<"SubscriptionOrder"> | string | null
    userAgent?: StringNullableFilter<"SubscriptionOrder"> | string | null
    createdAt?: DateTimeFilter<"SubscriptionOrder"> | Date | string
    updatedAt?: DateTimeFilter<"SubscriptionOrder"> | Date | string
    subscriptionModel?: XOR<SubscriptionModelScalarRelationFilter, SubscriptionModelWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    userCharities?: UserCharityListRelationFilter
  }, "id" | "userId" | "stripeSessionId" | "stripePaymentIntentId" | "stripeClientSecret" | "stripeEventId">

  export type SubscriptionOrderOrderByWithAggregationInput = {
    id?: SortOrder
    subscriptionModelId?: SortOrder
    userId?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    stripeSessionId?: SortOrderInput | SortOrder
    stripePaymentIntentId?: SortOrderInput | SortOrder
    stripeCustomerId?: SortOrderInput | SortOrder
    stripeClientSecret?: SortOrderInput | SortOrder
    stripeEventId?: SortOrderInput | SortOrder
    paymentGateway?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    failReason?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    cancelledAt?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SubscriptionOrderCountOrderByAggregateInput
    _avg?: SubscriptionOrderAvgOrderByAggregateInput
    _max?: SubscriptionOrderMaxOrderByAggregateInput
    _min?: SubscriptionOrderMinOrderByAggregateInput
    _sum?: SubscriptionOrderSumOrderByAggregateInput
  }

  export type SubscriptionOrderScalarWhereWithAggregatesInput = {
    AND?: SubscriptionOrderScalarWhereWithAggregatesInput | SubscriptionOrderScalarWhereWithAggregatesInput[]
    OR?: SubscriptionOrderScalarWhereWithAggregatesInput[]
    NOT?: SubscriptionOrderScalarWhereWithAggregatesInput | SubscriptionOrderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SubscriptionOrder"> | string
    subscriptionModelId?: StringWithAggregatesFilter<"SubscriptionOrder"> | string
    userId?: StringWithAggregatesFilter<"SubscriptionOrder"> | string
    periodStart?: DateTimeWithAggregatesFilter<"SubscriptionOrder"> | Date | string
    periodEnd?: DateTimeWithAggregatesFilter<"SubscriptionOrder"> | Date | string
    stripeSessionId?: StringNullableWithAggregatesFilter<"SubscriptionOrder"> | string | null
    stripePaymentIntentId?: StringNullableWithAggregatesFilter<"SubscriptionOrder"> | string | null
    stripeCustomerId?: StringNullableWithAggregatesFilter<"SubscriptionOrder"> | string | null
    stripeClientSecret?: StringNullableWithAggregatesFilter<"SubscriptionOrder"> | string | null
    stripeEventId?: StringNullableWithAggregatesFilter<"SubscriptionOrder"> | string | null
    paymentGateway?: EnumPaymentGatewayWithAggregatesFilter<"SubscriptionOrder"> | $Enums.PaymentGateway
    amount?: IntWithAggregatesFilter<"SubscriptionOrder"> | number
    currency?: StringWithAggregatesFilter<"SubscriptionOrder"> | string
    status?: EnumPaymentStatusWithAggregatesFilter<"SubscriptionOrder"> | $Enums.PaymentStatus
    failReason?: StringNullableWithAggregatesFilter<"SubscriptionOrder"> | string | null
    completedAt?: DateTimeNullableWithAggregatesFilter<"SubscriptionOrder"> | Date | string | null
    cancelledAt?: DateTimeNullableWithAggregatesFilter<"SubscriptionOrder"> | Date | string | null
    ipAddress?: StringNullableWithAggregatesFilter<"SubscriptionOrder"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"SubscriptionOrder"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"SubscriptionOrder"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SubscriptionOrder"> | Date | string
  }

  export type DrawWhereInput = {
    AND?: DrawWhereInput | DrawWhereInput[]
    OR?: DrawWhereInput[]
    NOT?: DrawWhereInput | DrawWhereInput[]
    id?: StringFilter<"Draw"> | string
    adminId?: StringFilter<"Draw"> | string
    prizePool?: IntFilter<"Draw"> | number
    currency?: StringFilter<"Draw"> | string
    entryStartDate?: DateTimeFilter<"Draw"> | Date | string
    lastEntryDate?: DateTimeFilter<"Draw"> | Date | string
    resultDate?: DateTimeFilter<"Draw"> | Date | string
    drawNumber?: StringNullableFilter<"Draw"> | string | null
    status?: EnumDrawStatusFilter<"Draw"> | $Enums.DrawStatus
    fiveMatchPct?: IntFilter<"Draw"> | number
    fourMatchPct?: IntFilter<"Draw"> | number
    threeMatchPct?: IntFilter<"Draw"> | number
    jackpotRolledOver?: BoolFilter<"Draw"> | boolean
    rolledOverFromId?: StringNullableFilter<"Draw"> | string | null
    createdAt?: DateTimeFilter<"Draw"> | Date | string
    updatedAt?: DateTimeFilter<"Draw"> | Date | string
    admin?: XOR<UserScalarRelationFilter, UserWhereInput>
    rolledOverFrom?: XOR<DrawNullableScalarRelationFilter, DrawWhereInput> | null
    rolledOverTo?: DrawListRelationFilter
    winners?: WinnerListRelationFilter
    participants?: ParticipantListRelationFilter
  }

  export type DrawOrderByWithRelationInput = {
    id?: SortOrder
    adminId?: SortOrder
    prizePool?: SortOrder
    currency?: SortOrder
    entryStartDate?: SortOrder
    lastEntryDate?: SortOrder
    resultDate?: SortOrder
    drawNumber?: SortOrderInput | SortOrder
    status?: SortOrder
    fiveMatchPct?: SortOrder
    fourMatchPct?: SortOrder
    threeMatchPct?: SortOrder
    jackpotRolledOver?: SortOrder
    rolledOverFromId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    admin?: UserOrderByWithRelationInput
    rolledOverFrom?: DrawOrderByWithRelationInput
    rolledOverTo?: DrawOrderByRelationAggregateInput
    winners?: WinnerOrderByRelationAggregateInput
    participants?: ParticipantOrderByRelationAggregateInput
  }

  export type DrawWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    drawNumber?: string
    AND?: DrawWhereInput | DrawWhereInput[]
    OR?: DrawWhereInput[]
    NOT?: DrawWhereInput | DrawWhereInput[]
    adminId?: StringFilter<"Draw"> | string
    prizePool?: IntFilter<"Draw"> | number
    currency?: StringFilter<"Draw"> | string
    entryStartDate?: DateTimeFilter<"Draw"> | Date | string
    lastEntryDate?: DateTimeFilter<"Draw"> | Date | string
    resultDate?: DateTimeFilter<"Draw"> | Date | string
    status?: EnumDrawStatusFilter<"Draw"> | $Enums.DrawStatus
    fiveMatchPct?: IntFilter<"Draw"> | number
    fourMatchPct?: IntFilter<"Draw"> | number
    threeMatchPct?: IntFilter<"Draw"> | number
    jackpotRolledOver?: BoolFilter<"Draw"> | boolean
    rolledOverFromId?: StringNullableFilter<"Draw"> | string | null
    createdAt?: DateTimeFilter<"Draw"> | Date | string
    updatedAt?: DateTimeFilter<"Draw"> | Date | string
    admin?: XOR<UserScalarRelationFilter, UserWhereInput>
    rolledOverFrom?: XOR<DrawNullableScalarRelationFilter, DrawWhereInput> | null
    rolledOverTo?: DrawListRelationFilter
    winners?: WinnerListRelationFilter
    participants?: ParticipantListRelationFilter
  }, "id" | "drawNumber">

  export type DrawOrderByWithAggregationInput = {
    id?: SortOrder
    adminId?: SortOrder
    prizePool?: SortOrder
    currency?: SortOrder
    entryStartDate?: SortOrder
    lastEntryDate?: SortOrder
    resultDate?: SortOrder
    drawNumber?: SortOrderInput | SortOrder
    status?: SortOrder
    fiveMatchPct?: SortOrder
    fourMatchPct?: SortOrder
    threeMatchPct?: SortOrder
    jackpotRolledOver?: SortOrder
    rolledOverFromId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DrawCountOrderByAggregateInput
    _avg?: DrawAvgOrderByAggregateInput
    _max?: DrawMaxOrderByAggregateInput
    _min?: DrawMinOrderByAggregateInput
    _sum?: DrawSumOrderByAggregateInput
  }

  export type DrawScalarWhereWithAggregatesInput = {
    AND?: DrawScalarWhereWithAggregatesInput | DrawScalarWhereWithAggregatesInput[]
    OR?: DrawScalarWhereWithAggregatesInput[]
    NOT?: DrawScalarWhereWithAggregatesInput | DrawScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Draw"> | string
    adminId?: StringWithAggregatesFilter<"Draw"> | string
    prizePool?: IntWithAggregatesFilter<"Draw"> | number
    currency?: StringWithAggregatesFilter<"Draw"> | string
    entryStartDate?: DateTimeWithAggregatesFilter<"Draw"> | Date | string
    lastEntryDate?: DateTimeWithAggregatesFilter<"Draw"> | Date | string
    resultDate?: DateTimeWithAggregatesFilter<"Draw"> | Date | string
    drawNumber?: StringNullableWithAggregatesFilter<"Draw"> | string | null
    status?: EnumDrawStatusWithAggregatesFilter<"Draw"> | $Enums.DrawStatus
    fiveMatchPct?: IntWithAggregatesFilter<"Draw"> | number
    fourMatchPct?: IntWithAggregatesFilter<"Draw"> | number
    threeMatchPct?: IntWithAggregatesFilter<"Draw"> | number
    jackpotRolledOver?: BoolWithAggregatesFilter<"Draw"> | boolean
    rolledOverFromId?: StringNullableWithAggregatesFilter<"Draw"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Draw"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Draw"> | Date | string
  }

  export type WinnerWhereInput = {
    AND?: WinnerWhereInput | WinnerWhereInput[]
    OR?: WinnerWhereInput[]
    NOT?: WinnerWhereInput | WinnerWhereInput[]
    id?: StringFilter<"Winner"> | string
    drawId?: StringFilter<"Winner"> | string
    userId?: StringFilter<"Winner"> | string
    winnerType?: EnumWinnerTypeFilter<"Winner"> | $Enums.WinnerType
    winnerScore?: StringFilter<"Winner"> | string
    verificationStatus?: EnumVerificationStatusFilter<"Winner"> | $Enums.VerificationStatus
    paymentStatus?: EnumWinnerPaymentStatusFilter<"Winner"> | $Enums.WinnerPaymentStatus
    proofImage?: StringNullableFilter<"Winner"> | string | null
    prizeAmount?: IntNullableFilter<"Winner"> | number | null
    adminNotes?: StringNullableFilter<"Winner"> | string | null
    verifiedAt?: DateTimeNullableFilter<"Winner"> | Date | string | null
    paidAt?: DateTimeNullableFilter<"Winner"> | Date | string | null
    createdAt?: DateTimeFilter<"Winner"> | Date | string
    updatedAt?: DateTimeFilter<"Winner"> | Date | string
    draw?: XOR<DrawScalarRelationFilter, DrawWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type WinnerOrderByWithRelationInput = {
    id?: SortOrder
    drawId?: SortOrder
    userId?: SortOrder
    winnerType?: SortOrder
    winnerScore?: SortOrder
    verificationStatus?: SortOrder
    paymentStatus?: SortOrder
    proofImage?: SortOrderInput | SortOrder
    prizeAmount?: SortOrderInput | SortOrder
    adminNotes?: SortOrderInput | SortOrder
    verifiedAt?: SortOrderInput | SortOrder
    paidAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    draw?: DrawOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type WinnerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WinnerWhereInput | WinnerWhereInput[]
    OR?: WinnerWhereInput[]
    NOT?: WinnerWhereInput | WinnerWhereInput[]
    drawId?: StringFilter<"Winner"> | string
    userId?: StringFilter<"Winner"> | string
    winnerType?: EnumWinnerTypeFilter<"Winner"> | $Enums.WinnerType
    winnerScore?: StringFilter<"Winner"> | string
    verificationStatus?: EnumVerificationStatusFilter<"Winner"> | $Enums.VerificationStatus
    paymentStatus?: EnumWinnerPaymentStatusFilter<"Winner"> | $Enums.WinnerPaymentStatus
    proofImage?: StringNullableFilter<"Winner"> | string | null
    prizeAmount?: IntNullableFilter<"Winner"> | number | null
    adminNotes?: StringNullableFilter<"Winner"> | string | null
    verifiedAt?: DateTimeNullableFilter<"Winner"> | Date | string | null
    paidAt?: DateTimeNullableFilter<"Winner"> | Date | string | null
    createdAt?: DateTimeFilter<"Winner"> | Date | string
    updatedAt?: DateTimeFilter<"Winner"> | Date | string
    draw?: XOR<DrawScalarRelationFilter, DrawWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type WinnerOrderByWithAggregationInput = {
    id?: SortOrder
    drawId?: SortOrder
    userId?: SortOrder
    winnerType?: SortOrder
    winnerScore?: SortOrder
    verificationStatus?: SortOrder
    paymentStatus?: SortOrder
    proofImage?: SortOrderInput | SortOrder
    prizeAmount?: SortOrderInput | SortOrder
    adminNotes?: SortOrderInput | SortOrder
    verifiedAt?: SortOrderInput | SortOrder
    paidAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WinnerCountOrderByAggregateInput
    _avg?: WinnerAvgOrderByAggregateInput
    _max?: WinnerMaxOrderByAggregateInput
    _min?: WinnerMinOrderByAggregateInput
    _sum?: WinnerSumOrderByAggregateInput
  }

  export type WinnerScalarWhereWithAggregatesInput = {
    AND?: WinnerScalarWhereWithAggregatesInput | WinnerScalarWhereWithAggregatesInput[]
    OR?: WinnerScalarWhereWithAggregatesInput[]
    NOT?: WinnerScalarWhereWithAggregatesInput | WinnerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Winner"> | string
    drawId?: StringWithAggregatesFilter<"Winner"> | string
    userId?: StringWithAggregatesFilter<"Winner"> | string
    winnerType?: EnumWinnerTypeWithAggregatesFilter<"Winner"> | $Enums.WinnerType
    winnerScore?: StringWithAggregatesFilter<"Winner"> | string
    verificationStatus?: EnumVerificationStatusWithAggregatesFilter<"Winner"> | $Enums.VerificationStatus
    paymentStatus?: EnumWinnerPaymentStatusWithAggregatesFilter<"Winner"> | $Enums.WinnerPaymentStatus
    proofImage?: StringNullableWithAggregatesFilter<"Winner"> | string | null
    prizeAmount?: IntNullableWithAggregatesFilter<"Winner"> | number | null
    adminNotes?: StringNullableWithAggregatesFilter<"Winner"> | string | null
    verifiedAt?: DateTimeNullableWithAggregatesFilter<"Winner"> | Date | string | null
    paidAt?: DateTimeNullableWithAggregatesFilter<"Winner"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Winner"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Winner"> | Date | string
  }

  export type ParticipantWhereInput = {
    AND?: ParticipantWhereInput | ParticipantWhereInput[]
    OR?: ParticipantWhereInput[]
    NOT?: ParticipantWhereInput | ParticipantWhereInput[]
    id?: StringFilter<"Participant"> | string
    drawId?: StringFilter<"Participant"> | string
    userId?: StringFilter<"Participant"> | string
    score?: StringFilter<"Participant"> | string
    createdAt?: DateTimeFilter<"Participant"> | Date | string
    updatedAt?: DateTimeFilter<"Participant"> | Date | string
    draw?: XOR<DrawScalarRelationFilter, DrawWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ParticipantOrderByWithRelationInput = {
    id?: SortOrder
    drawId?: SortOrder
    userId?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    draw?: DrawOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type ParticipantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    drawId_userId?: ParticipantDrawIdUserIdCompoundUniqueInput
    AND?: ParticipantWhereInput | ParticipantWhereInput[]
    OR?: ParticipantWhereInput[]
    NOT?: ParticipantWhereInput | ParticipantWhereInput[]
    drawId?: StringFilter<"Participant"> | string
    userId?: StringFilter<"Participant"> | string
    score?: StringFilter<"Participant"> | string
    createdAt?: DateTimeFilter<"Participant"> | Date | string
    updatedAt?: DateTimeFilter<"Participant"> | Date | string
    draw?: XOR<DrawScalarRelationFilter, DrawWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "drawId_userId">

  export type ParticipantOrderByWithAggregationInput = {
    id?: SortOrder
    drawId?: SortOrder
    userId?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ParticipantCountOrderByAggregateInput
    _max?: ParticipantMaxOrderByAggregateInput
    _min?: ParticipantMinOrderByAggregateInput
  }

  export type ParticipantScalarWhereWithAggregatesInput = {
    AND?: ParticipantScalarWhereWithAggregatesInput | ParticipantScalarWhereWithAggregatesInput[]
    OR?: ParticipantScalarWhereWithAggregatesInput[]
    NOT?: ParticipantScalarWhereWithAggregatesInput | ParticipantScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Participant"> | string
    drawId?: StringWithAggregatesFilter<"Participant"> | string
    userId?: StringWithAggregatesFilter<"Participant"> | string
    score?: StringWithAggregatesFilter<"Participant"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Participant"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Participant"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    publicId?: string
    email: string
    password?: string | null
    role?: $Enums.UserRole
    authProvider?: $Enums.AuthProvider
    googleId?: string | null
    resetPasswordToken?: string | null
    resetPasswordTokenExpires?: Date | string | null
    twoFactorSecret?: string | null
    twoFactorEnabled?: boolean
    profilePicture?: string | null
    userName: string
    firstName?: string | null
    lastName?: string | null
    phoneNumber?: string | null
    dateOfBirth?: Date | string | null
    lastLoginAt?: Date | string | null
    lastLoginIp?: string | null
    loginAttempts?: number
    lockedUntil?: Date | string | null
    isActive?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    scores?: GolfScoreCreateNestedManyWithoutUserInput
    userCharities?: UserCharityCreateNestedManyWithoutUserInput
    subcriptions?: SubscriptionOrderCreateNestedManyWithoutUserInput
    draws?: DrawCreateNestedManyWithoutAdminInput
    winners?: WinnerCreateNestedManyWithoutUserInput
    participants?: ParticipantCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    publicId?: string
    email: string
    password?: string | null
    role?: $Enums.UserRole
    authProvider?: $Enums.AuthProvider
    googleId?: string | null
    resetPasswordToken?: string | null
    resetPasswordTokenExpires?: Date | string | null
    twoFactorSecret?: string | null
    twoFactorEnabled?: boolean
    profilePicture?: string | null
    userName: string
    firstName?: string | null
    lastName?: string | null
    phoneNumber?: string | null
    dateOfBirth?: Date | string | null
    lastLoginAt?: Date | string | null
    lastLoginIp?: string | null
    loginAttempts?: number
    lockedUntil?: Date | string | null
    isActive?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    scores?: GolfScoreUncheckedCreateNestedManyWithoutUserInput
    userCharities?: UserCharityUncheckedCreateNestedManyWithoutUserInput
    subcriptions?: SubscriptionOrderUncheckedCreateNestedManyWithoutUserInput
    draws?: DrawUncheckedCreateNestedManyWithoutAdminInput
    winners?: WinnerUncheckedCreateNestedManyWithoutUserInput
    participants?: ParticipantUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginIp?: NullableStringFieldUpdateOperationsInput | string | null
    loginAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scores?: GolfScoreUpdateManyWithoutUserNestedInput
    userCharities?: UserCharityUpdateManyWithoutUserNestedInput
    subcriptions?: SubscriptionOrderUpdateManyWithoutUserNestedInput
    draws?: DrawUpdateManyWithoutAdminNestedInput
    winners?: WinnerUpdateManyWithoutUserNestedInput
    participants?: ParticipantUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginIp?: NullableStringFieldUpdateOperationsInput | string | null
    loginAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scores?: GolfScoreUncheckedUpdateManyWithoutUserNestedInput
    userCharities?: UserCharityUncheckedUpdateManyWithoutUserNestedInput
    subcriptions?: SubscriptionOrderUncheckedUpdateManyWithoutUserNestedInput
    draws?: DrawUncheckedUpdateManyWithoutAdminNestedInput
    winners?: WinnerUncheckedUpdateManyWithoutUserNestedInput
    participants?: ParticipantUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    publicId?: string
    email: string
    password?: string | null
    role?: $Enums.UserRole
    authProvider?: $Enums.AuthProvider
    googleId?: string | null
    resetPasswordToken?: string | null
    resetPasswordTokenExpires?: Date | string | null
    twoFactorSecret?: string | null
    twoFactorEnabled?: boolean
    profilePicture?: string | null
    userName: string
    firstName?: string | null
    lastName?: string | null
    phoneNumber?: string | null
    dateOfBirth?: Date | string | null
    lastLoginAt?: Date | string | null
    lastLoginIp?: string | null
    loginAttempts?: number
    lockedUntil?: Date | string | null
    isActive?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginIp?: NullableStringFieldUpdateOperationsInput | string | null
    loginAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginIp?: NullableStringFieldUpdateOperationsInput | string | null
    loginAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtpCreateInput = {
    id?: string
    email: string
    otp: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type OtpUncheckedCreateInput = {
    id?: string
    email: string
    otp: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type OtpUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    otp?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtpUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    otp?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtpCreateManyInput = {
    id?: string
    email: string
    otp: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type OtpUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    otp?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtpUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    otp?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CharityCreateInput = {
    id?: string
    name: string
    slug: string
    description: string
    logoUrl?: string | null
    websiteUrl?: string | null
    isFeatured?: boolean
    isActive?: boolean
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: CharityImageCreateNestedManyWithoutCharityInput
    userCharities?: UserCharityCreateNestedManyWithoutCharityInput
  }

  export type CharityUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    description: string
    logoUrl?: string | null
    websiteUrl?: string | null
    isFeatured?: boolean
    isActive?: boolean
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: CharityImageUncheckedCreateNestedManyWithoutCharityInput
    userCharities?: UserCharityUncheckedCreateNestedManyWithoutCharityInput
  }

  export type CharityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: CharityImageUpdateManyWithoutCharityNestedInput
    userCharities?: UserCharityUpdateManyWithoutCharityNestedInput
  }

  export type CharityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: CharityImageUncheckedUpdateManyWithoutCharityNestedInput
    userCharities?: UserCharityUncheckedUpdateManyWithoutCharityNestedInput
  }

  export type CharityCreateManyInput = {
    id?: string
    name: string
    slug: string
    description: string
    logoUrl?: string | null
    websiteUrl?: string | null
    isFeatured?: boolean
    isActive?: boolean
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CharityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CharityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CharityImageCreateInput = {
    id?: string
    url: string
    altText?: string | null
    order?: number
    createdAt?: Date | string
    charity: CharityCreateNestedOneWithoutImagesInput
  }

  export type CharityImageUncheckedCreateInput = {
    id?: string
    charityId: string
    url: string
    altText?: string | null
    order?: number
    createdAt?: Date | string
  }

  export type CharityImageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    charity?: CharityUpdateOneRequiredWithoutImagesNestedInput
  }

  export type CharityImageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    charityId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CharityImageCreateManyInput = {
    id?: string
    charityId: string
    url: string
    altText?: string | null
    order?: number
    createdAt?: Date | string
  }

  export type CharityImageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CharityImageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    charityId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCharityCreateInput = {
    id?: string
    type: $Enums.CharityContributionType
    percentage?: Decimal | DecimalJsLike | number | string | null
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    month?: number | null
    year?: number | null
    status?: $Enums.CharityStatus
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subscription: SubscriptionOrderCreateNestedOneWithoutUserCharitiesInput
    user: UserCreateNestedOneWithoutUserCharitiesInput
    charity: CharityCreateNestedOneWithoutUserCharitiesInput
  }

  export type UserCharityUncheckedCreateInput = {
    id?: string
    userId: string
    charityId: string
    subscriptionId: string
    type: $Enums.CharityContributionType
    percentage?: Decimal | DecimalJsLike | number | string | null
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    month?: number | null
    year?: number | null
    status?: $Enums.CharityStatus
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCharityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumCharityContributionTypeFieldUpdateOperationsInput | $Enums.CharityContributionType
    percentage?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    month?: NullableIntFieldUpdateOperationsInput | number | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumCharityStatusFieldUpdateOperationsInput | $Enums.CharityStatus
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscription?: SubscriptionOrderUpdateOneRequiredWithoutUserCharitiesNestedInput
    user?: UserUpdateOneRequiredWithoutUserCharitiesNestedInput
    charity?: CharityUpdateOneRequiredWithoutUserCharitiesNestedInput
  }

  export type UserCharityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    charityId?: StringFieldUpdateOperationsInput | string
    subscriptionId?: StringFieldUpdateOperationsInput | string
    type?: EnumCharityContributionTypeFieldUpdateOperationsInput | $Enums.CharityContributionType
    percentage?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    month?: NullableIntFieldUpdateOperationsInput | number | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumCharityStatusFieldUpdateOperationsInput | $Enums.CharityStatus
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCharityCreateManyInput = {
    id?: string
    userId: string
    charityId: string
    subscriptionId: string
    type: $Enums.CharityContributionType
    percentage?: Decimal | DecimalJsLike | number | string | null
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    month?: number | null
    year?: number | null
    status?: $Enums.CharityStatus
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCharityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumCharityContributionTypeFieldUpdateOperationsInput | $Enums.CharityContributionType
    percentage?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    month?: NullableIntFieldUpdateOperationsInput | number | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumCharityStatusFieldUpdateOperationsInput | $Enums.CharityStatus
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCharityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    charityId?: StringFieldUpdateOperationsInput | string
    subscriptionId?: StringFieldUpdateOperationsInput | string
    type?: EnumCharityContributionTypeFieldUpdateOperationsInput | $Enums.CharityContributionType
    percentage?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    month?: NullableIntFieldUpdateOperationsInput | number | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumCharityStatusFieldUpdateOperationsInput | $Enums.CharityStatus
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GolfScoreCreateInput = {
    id?: string
    score: number
    playedOn: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutScoresInput
  }

  export type GolfScoreUncheckedCreateInput = {
    id?: string
    userId: string
    score: number
    playedOn: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GolfScoreUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    playedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutScoresNestedInput
  }

  export type GolfScoreUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    playedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GolfScoreCreateManyInput = {
    id?: string
    userId: string
    score: number
    playedOn: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GolfScoreUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    playedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GolfScoreUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    playedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionModelCreateInput = {
    id?: string
    planName: string
    planDescription?: string | null
    price: number
    currency: string
    features?: SubscriptionModelCreatefeaturesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriptionOrders?: SubscriptionOrderCreateNestedManyWithoutSubscriptionModelInput
  }

  export type SubscriptionModelUncheckedCreateInput = {
    id?: string
    planName: string
    planDescription?: string | null
    price: number
    currency: string
    features?: SubscriptionModelCreatefeaturesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriptionOrders?: SubscriptionOrderUncheckedCreateNestedManyWithoutSubscriptionModelInput
  }

  export type SubscriptionModelUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    planName?: StringFieldUpdateOperationsInput | string
    planDescription?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    features?: SubscriptionModelUpdatefeaturesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptionOrders?: SubscriptionOrderUpdateManyWithoutSubscriptionModelNestedInput
  }

  export type SubscriptionModelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    planName?: StringFieldUpdateOperationsInput | string
    planDescription?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    features?: SubscriptionModelUpdatefeaturesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptionOrders?: SubscriptionOrderUncheckedUpdateManyWithoutSubscriptionModelNestedInput
  }

  export type SubscriptionModelCreateManyInput = {
    id?: string
    planName: string
    planDescription?: string | null
    price: number
    currency: string
    features?: SubscriptionModelCreatefeaturesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionModelUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    planName?: StringFieldUpdateOperationsInput | string
    planDescription?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    features?: SubscriptionModelUpdatefeaturesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionModelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    planName?: StringFieldUpdateOperationsInput | string
    planDescription?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    features?: SubscriptionModelUpdatefeaturesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionOrderCreateInput = {
    id?: string
    periodStart: Date | string
    periodEnd: Date | string
    stripeSessionId?: string | null
    stripePaymentIntentId?: string | null
    stripeCustomerId?: string | null
    stripeClientSecret?: string | null
    stripeEventId?: string | null
    paymentGateway?: $Enums.PaymentGateway
    amount: number
    currency?: string
    status?: $Enums.PaymentStatus
    failReason?: string | null
    completedAt?: Date | string | null
    cancelledAt?: Date | string | null
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriptionModel: SubscriptionModelCreateNestedOneWithoutSubscriptionOrdersInput
    user: UserCreateNestedOneWithoutSubcriptionsInput
    userCharities?: UserCharityCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionOrderUncheckedCreateInput = {
    id?: string
    subscriptionModelId: string
    userId: string
    periodStart: Date | string
    periodEnd: Date | string
    stripeSessionId?: string | null
    stripePaymentIntentId?: string | null
    stripeCustomerId?: string | null
    stripeClientSecret?: string | null
    stripeEventId?: string | null
    paymentGateway?: $Enums.PaymentGateway
    amount: number
    currency?: string
    status?: $Enums.PaymentStatus
    failReason?: string | null
    completedAt?: Date | string | null
    cancelledAt?: Date | string | null
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userCharities?: UserCharityUncheckedCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionOrderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    stripeSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeClientSecret?: NullableStringFieldUpdateOperationsInput | string | null
    stripeEventId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentGateway?: EnumPaymentGatewayFieldUpdateOperationsInput | $Enums.PaymentGateway
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    failReason?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptionModel?: SubscriptionModelUpdateOneRequiredWithoutSubscriptionOrdersNestedInput
    user?: UserUpdateOneRequiredWithoutSubcriptionsNestedInput
    userCharities?: UserCharityUpdateManyWithoutSubscriptionNestedInput
  }

  export type SubscriptionOrderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    subscriptionModelId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    stripeSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeClientSecret?: NullableStringFieldUpdateOperationsInput | string | null
    stripeEventId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentGateway?: EnumPaymentGatewayFieldUpdateOperationsInput | $Enums.PaymentGateway
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    failReason?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userCharities?: UserCharityUncheckedUpdateManyWithoutSubscriptionNestedInput
  }

  export type SubscriptionOrderCreateManyInput = {
    id?: string
    subscriptionModelId: string
    userId: string
    periodStart: Date | string
    periodEnd: Date | string
    stripeSessionId?: string | null
    stripePaymentIntentId?: string | null
    stripeCustomerId?: string | null
    stripeClientSecret?: string | null
    stripeEventId?: string | null
    paymentGateway?: $Enums.PaymentGateway
    amount: number
    currency?: string
    status?: $Enums.PaymentStatus
    failReason?: string | null
    completedAt?: Date | string | null
    cancelledAt?: Date | string | null
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionOrderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    stripeSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeClientSecret?: NullableStringFieldUpdateOperationsInput | string | null
    stripeEventId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentGateway?: EnumPaymentGatewayFieldUpdateOperationsInput | $Enums.PaymentGateway
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    failReason?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionOrderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    subscriptionModelId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    stripeSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeClientSecret?: NullableStringFieldUpdateOperationsInput | string | null
    stripeEventId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentGateway?: EnumPaymentGatewayFieldUpdateOperationsInput | $Enums.PaymentGateway
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    failReason?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DrawCreateInput = {
    id?: string
    prizePool: number
    currency?: string
    entryStartDate: Date | string
    lastEntryDate: Date | string
    resultDate: Date | string
    drawNumber?: string | null
    status?: $Enums.DrawStatus
    fiveMatchPct?: number
    fourMatchPct?: number
    threeMatchPct?: number
    jackpotRolledOver?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    admin: UserCreateNestedOneWithoutDrawsInput
    rolledOverFrom?: DrawCreateNestedOneWithoutRolledOverToInput
    rolledOverTo?: DrawCreateNestedManyWithoutRolledOverFromInput
    winners?: WinnerCreateNestedManyWithoutDrawInput
    participants?: ParticipantCreateNestedManyWithoutDrawInput
  }

  export type DrawUncheckedCreateInput = {
    id?: string
    adminId: string
    prizePool: number
    currency?: string
    entryStartDate: Date | string
    lastEntryDate: Date | string
    resultDate: Date | string
    drawNumber?: string | null
    status?: $Enums.DrawStatus
    fiveMatchPct?: number
    fourMatchPct?: number
    threeMatchPct?: number
    jackpotRolledOver?: boolean
    rolledOverFromId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rolledOverTo?: DrawUncheckedCreateNestedManyWithoutRolledOverFromInput
    winners?: WinnerUncheckedCreateNestedManyWithoutDrawInput
    participants?: ParticipantUncheckedCreateNestedManyWithoutDrawInput
  }

  export type DrawUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    prizePool?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    entryStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastEntryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    resultDate?: DateTimeFieldUpdateOperationsInput | Date | string
    drawNumber?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDrawStatusFieldUpdateOperationsInput | $Enums.DrawStatus
    fiveMatchPct?: IntFieldUpdateOperationsInput | number
    fourMatchPct?: IntFieldUpdateOperationsInput | number
    threeMatchPct?: IntFieldUpdateOperationsInput | number
    jackpotRolledOver?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: UserUpdateOneRequiredWithoutDrawsNestedInput
    rolledOverFrom?: DrawUpdateOneWithoutRolledOverToNestedInput
    rolledOverTo?: DrawUpdateManyWithoutRolledOverFromNestedInput
    winners?: WinnerUpdateManyWithoutDrawNestedInput
    participants?: ParticipantUpdateManyWithoutDrawNestedInput
  }

  export type DrawUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    adminId?: StringFieldUpdateOperationsInput | string
    prizePool?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    entryStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastEntryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    resultDate?: DateTimeFieldUpdateOperationsInput | Date | string
    drawNumber?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDrawStatusFieldUpdateOperationsInput | $Enums.DrawStatus
    fiveMatchPct?: IntFieldUpdateOperationsInput | number
    fourMatchPct?: IntFieldUpdateOperationsInput | number
    threeMatchPct?: IntFieldUpdateOperationsInput | number
    jackpotRolledOver?: BoolFieldUpdateOperationsInput | boolean
    rolledOverFromId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rolledOverTo?: DrawUncheckedUpdateManyWithoutRolledOverFromNestedInput
    winners?: WinnerUncheckedUpdateManyWithoutDrawNestedInput
    participants?: ParticipantUncheckedUpdateManyWithoutDrawNestedInput
  }

  export type DrawCreateManyInput = {
    id?: string
    adminId: string
    prizePool: number
    currency?: string
    entryStartDate: Date | string
    lastEntryDate: Date | string
    resultDate: Date | string
    drawNumber?: string | null
    status?: $Enums.DrawStatus
    fiveMatchPct?: number
    fourMatchPct?: number
    threeMatchPct?: number
    jackpotRolledOver?: boolean
    rolledOverFromId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DrawUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    prizePool?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    entryStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastEntryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    resultDate?: DateTimeFieldUpdateOperationsInput | Date | string
    drawNumber?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDrawStatusFieldUpdateOperationsInput | $Enums.DrawStatus
    fiveMatchPct?: IntFieldUpdateOperationsInput | number
    fourMatchPct?: IntFieldUpdateOperationsInput | number
    threeMatchPct?: IntFieldUpdateOperationsInput | number
    jackpotRolledOver?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DrawUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    adminId?: StringFieldUpdateOperationsInput | string
    prizePool?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    entryStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastEntryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    resultDate?: DateTimeFieldUpdateOperationsInput | Date | string
    drawNumber?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDrawStatusFieldUpdateOperationsInput | $Enums.DrawStatus
    fiveMatchPct?: IntFieldUpdateOperationsInput | number
    fourMatchPct?: IntFieldUpdateOperationsInput | number
    threeMatchPct?: IntFieldUpdateOperationsInput | number
    jackpotRolledOver?: BoolFieldUpdateOperationsInput | boolean
    rolledOverFromId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WinnerCreateInput = {
    id?: string
    winnerType: $Enums.WinnerType
    winnerScore: string
    verificationStatus?: $Enums.VerificationStatus
    paymentStatus?: $Enums.WinnerPaymentStatus
    proofImage?: string | null
    prizeAmount?: number | null
    adminNotes?: string | null
    verifiedAt?: Date | string | null
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    draw: DrawCreateNestedOneWithoutWinnersInput
    user: UserCreateNestedOneWithoutWinnersInput
  }

  export type WinnerUncheckedCreateInput = {
    id?: string
    drawId: string
    userId: string
    winnerType: $Enums.WinnerType
    winnerScore: string
    verificationStatus?: $Enums.VerificationStatus
    paymentStatus?: $Enums.WinnerPaymentStatus
    proofImage?: string | null
    prizeAmount?: number | null
    adminNotes?: string | null
    verifiedAt?: Date | string | null
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WinnerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    winnerType?: EnumWinnerTypeFieldUpdateOperationsInput | $Enums.WinnerType
    winnerScore?: StringFieldUpdateOperationsInput | string
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    paymentStatus?: EnumWinnerPaymentStatusFieldUpdateOperationsInput | $Enums.WinnerPaymentStatus
    proofImage?: NullableStringFieldUpdateOperationsInput | string | null
    prizeAmount?: NullableIntFieldUpdateOperationsInput | number | null
    adminNotes?: NullableStringFieldUpdateOperationsInput | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    draw?: DrawUpdateOneRequiredWithoutWinnersNestedInput
    user?: UserUpdateOneRequiredWithoutWinnersNestedInput
  }

  export type WinnerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    drawId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    winnerType?: EnumWinnerTypeFieldUpdateOperationsInput | $Enums.WinnerType
    winnerScore?: StringFieldUpdateOperationsInput | string
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    paymentStatus?: EnumWinnerPaymentStatusFieldUpdateOperationsInput | $Enums.WinnerPaymentStatus
    proofImage?: NullableStringFieldUpdateOperationsInput | string | null
    prizeAmount?: NullableIntFieldUpdateOperationsInput | number | null
    adminNotes?: NullableStringFieldUpdateOperationsInput | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WinnerCreateManyInput = {
    id?: string
    drawId: string
    userId: string
    winnerType: $Enums.WinnerType
    winnerScore: string
    verificationStatus?: $Enums.VerificationStatus
    paymentStatus?: $Enums.WinnerPaymentStatus
    proofImage?: string | null
    prizeAmount?: number | null
    adminNotes?: string | null
    verifiedAt?: Date | string | null
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WinnerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    winnerType?: EnumWinnerTypeFieldUpdateOperationsInput | $Enums.WinnerType
    winnerScore?: StringFieldUpdateOperationsInput | string
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    paymentStatus?: EnumWinnerPaymentStatusFieldUpdateOperationsInput | $Enums.WinnerPaymentStatus
    proofImage?: NullableStringFieldUpdateOperationsInput | string | null
    prizeAmount?: NullableIntFieldUpdateOperationsInput | number | null
    adminNotes?: NullableStringFieldUpdateOperationsInput | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WinnerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    drawId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    winnerType?: EnumWinnerTypeFieldUpdateOperationsInput | $Enums.WinnerType
    winnerScore?: StringFieldUpdateOperationsInput | string
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    paymentStatus?: EnumWinnerPaymentStatusFieldUpdateOperationsInput | $Enums.WinnerPaymentStatus
    proofImage?: NullableStringFieldUpdateOperationsInput | string | null
    prizeAmount?: NullableIntFieldUpdateOperationsInput | number | null
    adminNotes?: NullableStringFieldUpdateOperationsInput | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipantCreateInput = {
    id?: string
    score: string
    createdAt?: Date | string
    updatedAt?: Date | string
    draw: DrawCreateNestedOneWithoutParticipantsInput
    user: UserCreateNestedOneWithoutParticipantsInput
  }

  export type ParticipantUncheckedCreateInput = {
    id?: string
    drawId: string
    userId: string
    score: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParticipantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    draw?: DrawUpdateOneRequiredWithoutParticipantsNestedInput
    user?: UserUpdateOneRequiredWithoutParticipantsNestedInput
  }

  export type ParticipantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    drawId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    score?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipantCreateManyInput = {
    id?: string
    drawId: string
    userId: string
    score: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParticipantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    drawId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    score?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type EnumAuthProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthProvider | EnumAuthProviderFieldRefInput<$PrismaModel>
    in?: $Enums.AuthProvider[] | ListEnumAuthProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuthProvider[] | ListEnumAuthProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumAuthProviderFilter<$PrismaModel> | $Enums.AuthProvider
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type GolfScoreListRelationFilter = {
    every?: GolfScoreWhereInput
    some?: GolfScoreWhereInput
    none?: GolfScoreWhereInput
  }

  export type UserCharityListRelationFilter = {
    every?: UserCharityWhereInput
    some?: UserCharityWhereInput
    none?: UserCharityWhereInput
  }

  export type SubscriptionOrderListRelationFilter = {
    every?: SubscriptionOrderWhereInput
    some?: SubscriptionOrderWhereInput
    none?: SubscriptionOrderWhereInput
  }

  export type DrawListRelationFilter = {
    every?: DrawWhereInput
    some?: DrawWhereInput
    none?: DrawWhereInput
  }

  export type WinnerListRelationFilter = {
    every?: WinnerWhereInput
    some?: WinnerWhereInput
    none?: WinnerWhereInput
  }

  export type ParticipantListRelationFilter = {
    every?: ParticipantWhereInput
    some?: ParticipantWhereInput
    none?: ParticipantWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type GolfScoreOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCharityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubscriptionOrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DrawOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WinnerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ParticipantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    publicId?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    authProvider?: SortOrder
    googleId?: SortOrder
    resetPasswordToken?: SortOrder
    resetPasswordTokenExpires?: SortOrder
    twoFactorSecret?: SortOrder
    twoFactorEnabled?: SortOrder
    profilePicture?: SortOrder
    userName?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phoneNumber?: SortOrder
    dateOfBirth?: SortOrder
    lastLoginAt?: SortOrder
    lastLoginIp?: SortOrder
    loginAttempts?: SortOrder
    lockedUntil?: SortOrder
    isActive?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    loginAttempts?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    publicId?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    authProvider?: SortOrder
    googleId?: SortOrder
    resetPasswordToken?: SortOrder
    resetPasswordTokenExpires?: SortOrder
    twoFactorSecret?: SortOrder
    twoFactorEnabled?: SortOrder
    profilePicture?: SortOrder
    userName?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phoneNumber?: SortOrder
    dateOfBirth?: SortOrder
    lastLoginAt?: SortOrder
    lastLoginIp?: SortOrder
    loginAttempts?: SortOrder
    lockedUntil?: SortOrder
    isActive?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    publicId?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    authProvider?: SortOrder
    googleId?: SortOrder
    resetPasswordToken?: SortOrder
    resetPasswordTokenExpires?: SortOrder
    twoFactorSecret?: SortOrder
    twoFactorEnabled?: SortOrder
    profilePicture?: SortOrder
    userName?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phoneNumber?: SortOrder
    dateOfBirth?: SortOrder
    lastLoginAt?: SortOrder
    lastLoginIp?: SortOrder
    loginAttempts?: SortOrder
    lockedUntil?: SortOrder
    isActive?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    loginAttempts?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type EnumAuthProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthProvider | EnumAuthProviderFieldRefInput<$PrismaModel>
    in?: $Enums.AuthProvider[] | ListEnumAuthProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuthProvider[] | ListEnumAuthProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumAuthProviderWithAggregatesFilter<$PrismaModel> | $Enums.AuthProvider
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuthProviderFilter<$PrismaModel>
    _max?: NestedEnumAuthProviderFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type OtpCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    otp?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type OtpMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    otp?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type OtpMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    otp?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type CharityImageListRelationFilter = {
    every?: CharityImageWhereInput
    some?: CharityImageWhereInput
    none?: CharityImageWhereInput
  }

  export type CharityImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CharityCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    logoUrl?: SortOrder
    websiteUrl?: SortOrder
    isFeatured?: SortOrder
    isActive?: SortOrder
    country?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CharityMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    logoUrl?: SortOrder
    websiteUrl?: SortOrder
    isFeatured?: SortOrder
    isActive?: SortOrder
    country?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CharityMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    logoUrl?: SortOrder
    websiteUrl?: SortOrder
    isFeatured?: SortOrder
    isActive?: SortOrder
    country?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CharityScalarRelationFilter = {
    is?: CharityWhereInput
    isNot?: CharityWhereInput
  }

  export type CharityImageCountOrderByAggregateInput = {
    id?: SortOrder
    charityId?: SortOrder
    url?: SortOrder
    altText?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
  }

  export type CharityImageAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type CharityImageMaxOrderByAggregateInput = {
    id?: SortOrder
    charityId?: SortOrder
    url?: SortOrder
    altText?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
  }

  export type CharityImageMinOrderByAggregateInput = {
    id?: SortOrder
    charityId?: SortOrder
    url?: SortOrder
    altText?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
  }

  export type CharityImageSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type EnumCharityContributionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CharityContributionType | EnumCharityContributionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CharityContributionType[] | ListEnumCharityContributionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CharityContributionType[] | ListEnumCharityContributionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCharityContributionTypeFilter<$PrismaModel> | $Enums.CharityContributionType
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumCharityStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CharityStatus | EnumCharityStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CharityStatus[] | ListEnumCharityStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CharityStatus[] | ListEnumCharityStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCharityStatusFilter<$PrismaModel> | $Enums.CharityStatus
  }

  export type SubscriptionOrderScalarRelationFilter = {
    is?: SubscriptionOrderWhereInput
    isNot?: SubscriptionOrderWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserCharityUserIdMonthYearTypeCompoundUniqueInput = {
    userId: string
    month: number
    year: number
    type: $Enums.CharityContributionType
  }

  export type UserCharityCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    charityId?: SortOrder
    subscriptionId?: SortOrder
    type?: SortOrder
    percentage?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    month?: SortOrder
    year?: SortOrder
    status?: SortOrder
    paidAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserCharityAvgOrderByAggregateInput = {
    percentage?: SortOrder
    amount?: SortOrder
    month?: SortOrder
    year?: SortOrder
  }

  export type UserCharityMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    charityId?: SortOrder
    subscriptionId?: SortOrder
    type?: SortOrder
    percentage?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    month?: SortOrder
    year?: SortOrder
    status?: SortOrder
    paidAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserCharityMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    charityId?: SortOrder
    subscriptionId?: SortOrder
    type?: SortOrder
    percentage?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    month?: SortOrder
    year?: SortOrder
    status?: SortOrder
    paidAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserCharitySumOrderByAggregateInput = {
    percentage?: SortOrder
    amount?: SortOrder
    month?: SortOrder
    year?: SortOrder
  }

  export type EnumCharityContributionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CharityContributionType | EnumCharityContributionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CharityContributionType[] | ListEnumCharityContributionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CharityContributionType[] | ListEnumCharityContributionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCharityContributionTypeWithAggregatesFilter<$PrismaModel> | $Enums.CharityContributionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCharityContributionTypeFilter<$PrismaModel>
    _max?: NestedEnumCharityContributionTypeFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumCharityStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CharityStatus | EnumCharityStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CharityStatus[] | ListEnumCharityStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CharityStatus[] | ListEnumCharityStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCharityStatusWithAggregatesFilter<$PrismaModel> | $Enums.CharityStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCharityStatusFilter<$PrismaModel>
    _max?: NestedEnumCharityStatusFilter<$PrismaModel>
  }

  export type GolfScoreUserIdPlayedOnCompoundUniqueInput = {
    userId: string
    playedOn: Date | string
  }

  export type GolfScoreCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    score?: SortOrder
    playedOn?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GolfScoreAvgOrderByAggregateInput = {
    score?: SortOrder
  }

  export type GolfScoreMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    score?: SortOrder
    playedOn?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GolfScoreMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    score?: SortOrder
    playedOn?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GolfScoreSumOrderByAggregateInput = {
    score?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type SubscriptionModelCountOrderByAggregateInput = {
    id?: SortOrder
    planName?: SortOrder
    planDescription?: SortOrder
    price?: SortOrder
    currency?: SortOrder
    features?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionModelAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type SubscriptionModelMaxOrderByAggregateInput = {
    id?: SortOrder
    planName?: SortOrder
    planDescription?: SortOrder
    price?: SortOrder
    currency?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionModelMinOrderByAggregateInput = {
    id?: SortOrder
    planName?: SortOrder
    planDescription?: SortOrder
    price?: SortOrder
    currency?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionModelSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type EnumPaymentGatewayFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentGateway | EnumPaymentGatewayFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentGateway[] | ListEnumPaymentGatewayFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentGateway[] | ListEnumPaymentGatewayFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentGatewayFilter<$PrismaModel> | $Enums.PaymentGateway
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type SubscriptionModelScalarRelationFilter = {
    is?: SubscriptionModelWhereInput
    isNot?: SubscriptionModelWhereInput
  }

  export type SubscriptionOrderCountOrderByAggregateInput = {
    id?: SortOrder
    subscriptionModelId?: SortOrder
    userId?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    stripeSessionId?: SortOrder
    stripePaymentIntentId?: SortOrder
    stripeCustomerId?: SortOrder
    stripeClientSecret?: SortOrder
    stripeEventId?: SortOrder
    paymentGateway?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    failReason?: SortOrder
    completedAt?: SortOrder
    cancelledAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionOrderAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type SubscriptionOrderMaxOrderByAggregateInput = {
    id?: SortOrder
    subscriptionModelId?: SortOrder
    userId?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    stripeSessionId?: SortOrder
    stripePaymentIntentId?: SortOrder
    stripeCustomerId?: SortOrder
    stripeClientSecret?: SortOrder
    stripeEventId?: SortOrder
    paymentGateway?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    failReason?: SortOrder
    completedAt?: SortOrder
    cancelledAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionOrderMinOrderByAggregateInput = {
    id?: SortOrder
    subscriptionModelId?: SortOrder
    userId?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    stripeSessionId?: SortOrder
    stripePaymentIntentId?: SortOrder
    stripeCustomerId?: SortOrder
    stripeClientSecret?: SortOrder
    stripeEventId?: SortOrder
    paymentGateway?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    failReason?: SortOrder
    completedAt?: SortOrder
    cancelledAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionOrderSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumPaymentGatewayWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentGateway | EnumPaymentGatewayFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentGateway[] | ListEnumPaymentGatewayFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentGateway[] | ListEnumPaymentGatewayFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentGatewayWithAggregatesFilter<$PrismaModel> | $Enums.PaymentGateway
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentGatewayFilter<$PrismaModel>
    _max?: NestedEnumPaymentGatewayFilter<$PrismaModel>
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type EnumDrawStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DrawStatus | EnumDrawStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DrawStatus[] | ListEnumDrawStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DrawStatus[] | ListEnumDrawStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDrawStatusFilter<$PrismaModel> | $Enums.DrawStatus
  }

  export type DrawNullableScalarRelationFilter = {
    is?: DrawWhereInput | null
    isNot?: DrawWhereInput | null
  }

  export type DrawCountOrderByAggregateInput = {
    id?: SortOrder
    adminId?: SortOrder
    prizePool?: SortOrder
    currency?: SortOrder
    entryStartDate?: SortOrder
    lastEntryDate?: SortOrder
    resultDate?: SortOrder
    drawNumber?: SortOrder
    status?: SortOrder
    fiveMatchPct?: SortOrder
    fourMatchPct?: SortOrder
    threeMatchPct?: SortOrder
    jackpotRolledOver?: SortOrder
    rolledOverFromId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DrawAvgOrderByAggregateInput = {
    prizePool?: SortOrder
    fiveMatchPct?: SortOrder
    fourMatchPct?: SortOrder
    threeMatchPct?: SortOrder
  }

  export type DrawMaxOrderByAggregateInput = {
    id?: SortOrder
    adminId?: SortOrder
    prizePool?: SortOrder
    currency?: SortOrder
    entryStartDate?: SortOrder
    lastEntryDate?: SortOrder
    resultDate?: SortOrder
    drawNumber?: SortOrder
    status?: SortOrder
    fiveMatchPct?: SortOrder
    fourMatchPct?: SortOrder
    threeMatchPct?: SortOrder
    jackpotRolledOver?: SortOrder
    rolledOverFromId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DrawMinOrderByAggregateInput = {
    id?: SortOrder
    adminId?: SortOrder
    prizePool?: SortOrder
    currency?: SortOrder
    entryStartDate?: SortOrder
    lastEntryDate?: SortOrder
    resultDate?: SortOrder
    drawNumber?: SortOrder
    status?: SortOrder
    fiveMatchPct?: SortOrder
    fourMatchPct?: SortOrder
    threeMatchPct?: SortOrder
    jackpotRolledOver?: SortOrder
    rolledOverFromId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DrawSumOrderByAggregateInput = {
    prizePool?: SortOrder
    fiveMatchPct?: SortOrder
    fourMatchPct?: SortOrder
    threeMatchPct?: SortOrder
  }

  export type EnumDrawStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DrawStatus | EnumDrawStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DrawStatus[] | ListEnumDrawStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DrawStatus[] | ListEnumDrawStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDrawStatusWithAggregatesFilter<$PrismaModel> | $Enums.DrawStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDrawStatusFilter<$PrismaModel>
    _max?: NestedEnumDrawStatusFilter<$PrismaModel>
  }

  export type EnumWinnerTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.WinnerType | EnumWinnerTypeFieldRefInput<$PrismaModel>
    in?: $Enums.WinnerType[] | ListEnumWinnerTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.WinnerType[] | ListEnumWinnerTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumWinnerTypeFilter<$PrismaModel> | $Enums.WinnerType
  }

  export type EnumVerificationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.VerificationStatus | EnumVerificationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VerificationStatus[] | ListEnumVerificationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VerificationStatus[] | ListEnumVerificationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVerificationStatusFilter<$PrismaModel> | $Enums.VerificationStatus
  }

  export type EnumWinnerPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.WinnerPaymentStatus | EnumWinnerPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WinnerPaymentStatus[] | ListEnumWinnerPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WinnerPaymentStatus[] | ListEnumWinnerPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWinnerPaymentStatusFilter<$PrismaModel> | $Enums.WinnerPaymentStatus
  }

  export type DrawScalarRelationFilter = {
    is?: DrawWhereInput
    isNot?: DrawWhereInput
  }

  export type WinnerCountOrderByAggregateInput = {
    id?: SortOrder
    drawId?: SortOrder
    userId?: SortOrder
    winnerType?: SortOrder
    winnerScore?: SortOrder
    verificationStatus?: SortOrder
    paymentStatus?: SortOrder
    proofImage?: SortOrder
    prizeAmount?: SortOrder
    adminNotes?: SortOrder
    verifiedAt?: SortOrder
    paidAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WinnerAvgOrderByAggregateInput = {
    prizeAmount?: SortOrder
  }

  export type WinnerMaxOrderByAggregateInput = {
    id?: SortOrder
    drawId?: SortOrder
    userId?: SortOrder
    winnerType?: SortOrder
    winnerScore?: SortOrder
    verificationStatus?: SortOrder
    paymentStatus?: SortOrder
    proofImage?: SortOrder
    prizeAmount?: SortOrder
    adminNotes?: SortOrder
    verifiedAt?: SortOrder
    paidAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WinnerMinOrderByAggregateInput = {
    id?: SortOrder
    drawId?: SortOrder
    userId?: SortOrder
    winnerType?: SortOrder
    winnerScore?: SortOrder
    verificationStatus?: SortOrder
    paymentStatus?: SortOrder
    proofImage?: SortOrder
    prizeAmount?: SortOrder
    adminNotes?: SortOrder
    verifiedAt?: SortOrder
    paidAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WinnerSumOrderByAggregateInput = {
    prizeAmount?: SortOrder
  }

  export type EnumWinnerTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WinnerType | EnumWinnerTypeFieldRefInput<$PrismaModel>
    in?: $Enums.WinnerType[] | ListEnumWinnerTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.WinnerType[] | ListEnumWinnerTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumWinnerTypeWithAggregatesFilter<$PrismaModel> | $Enums.WinnerType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWinnerTypeFilter<$PrismaModel>
    _max?: NestedEnumWinnerTypeFilter<$PrismaModel>
  }

  export type EnumVerificationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VerificationStatus | EnumVerificationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VerificationStatus[] | ListEnumVerificationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VerificationStatus[] | ListEnumVerificationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVerificationStatusWithAggregatesFilter<$PrismaModel> | $Enums.VerificationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVerificationStatusFilter<$PrismaModel>
    _max?: NestedEnumVerificationStatusFilter<$PrismaModel>
  }

  export type EnumWinnerPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WinnerPaymentStatus | EnumWinnerPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WinnerPaymentStatus[] | ListEnumWinnerPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WinnerPaymentStatus[] | ListEnumWinnerPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWinnerPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.WinnerPaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWinnerPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumWinnerPaymentStatusFilter<$PrismaModel>
  }

  export type ParticipantDrawIdUserIdCompoundUniqueInput = {
    drawId: string
    userId: string
  }

  export type ParticipantCountOrderByAggregateInput = {
    id?: SortOrder
    drawId?: SortOrder
    userId?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ParticipantMaxOrderByAggregateInput = {
    id?: SortOrder
    drawId?: SortOrder
    userId?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ParticipantMinOrderByAggregateInput = {
    id?: SortOrder
    drawId?: SortOrder
    userId?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GolfScoreCreateNestedManyWithoutUserInput = {
    create?: XOR<GolfScoreCreateWithoutUserInput, GolfScoreUncheckedCreateWithoutUserInput> | GolfScoreCreateWithoutUserInput[] | GolfScoreUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GolfScoreCreateOrConnectWithoutUserInput | GolfScoreCreateOrConnectWithoutUserInput[]
    createMany?: GolfScoreCreateManyUserInputEnvelope
    connect?: GolfScoreWhereUniqueInput | GolfScoreWhereUniqueInput[]
  }

  export type UserCharityCreateNestedManyWithoutUserInput = {
    create?: XOR<UserCharityCreateWithoutUserInput, UserCharityUncheckedCreateWithoutUserInput> | UserCharityCreateWithoutUserInput[] | UserCharityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserCharityCreateOrConnectWithoutUserInput | UserCharityCreateOrConnectWithoutUserInput[]
    createMany?: UserCharityCreateManyUserInputEnvelope
    connect?: UserCharityWhereUniqueInput | UserCharityWhereUniqueInput[]
  }

  export type SubscriptionOrderCreateNestedManyWithoutUserInput = {
    create?: XOR<SubscriptionOrderCreateWithoutUserInput, SubscriptionOrderUncheckedCreateWithoutUserInput> | SubscriptionOrderCreateWithoutUserInput[] | SubscriptionOrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubscriptionOrderCreateOrConnectWithoutUserInput | SubscriptionOrderCreateOrConnectWithoutUserInput[]
    createMany?: SubscriptionOrderCreateManyUserInputEnvelope
    connect?: SubscriptionOrderWhereUniqueInput | SubscriptionOrderWhereUniqueInput[]
  }

  export type DrawCreateNestedManyWithoutAdminInput = {
    create?: XOR<DrawCreateWithoutAdminInput, DrawUncheckedCreateWithoutAdminInput> | DrawCreateWithoutAdminInput[] | DrawUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: DrawCreateOrConnectWithoutAdminInput | DrawCreateOrConnectWithoutAdminInput[]
    createMany?: DrawCreateManyAdminInputEnvelope
    connect?: DrawWhereUniqueInput | DrawWhereUniqueInput[]
  }

  export type WinnerCreateNestedManyWithoutUserInput = {
    create?: XOR<WinnerCreateWithoutUserInput, WinnerUncheckedCreateWithoutUserInput> | WinnerCreateWithoutUserInput[] | WinnerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WinnerCreateOrConnectWithoutUserInput | WinnerCreateOrConnectWithoutUserInput[]
    createMany?: WinnerCreateManyUserInputEnvelope
    connect?: WinnerWhereUniqueInput | WinnerWhereUniqueInput[]
  }

  export type ParticipantCreateNestedManyWithoutUserInput = {
    create?: XOR<ParticipantCreateWithoutUserInput, ParticipantUncheckedCreateWithoutUserInput> | ParticipantCreateWithoutUserInput[] | ParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ParticipantCreateOrConnectWithoutUserInput | ParticipantCreateOrConnectWithoutUserInput[]
    createMany?: ParticipantCreateManyUserInputEnvelope
    connect?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
  }

  export type GolfScoreUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<GolfScoreCreateWithoutUserInput, GolfScoreUncheckedCreateWithoutUserInput> | GolfScoreCreateWithoutUserInput[] | GolfScoreUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GolfScoreCreateOrConnectWithoutUserInput | GolfScoreCreateOrConnectWithoutUserInput[]
    createMany?: GolfScoreCreateManyUserInputEnvelope
    connect?: GolfScoreWhereUniqueInput | GolfScoreWhereUniqueInput[]
  }

  export type UserCharityUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserCharityCreateWithoutUserInput, UserCharityUncheckedCreateWithoutUserInput> | UserCharityCreateWithoutUserInput[] | UserCharityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserCharityCreateOrConnectWithoutUserInput | UserCharityCreateOrConnectWithoutUserInput[]
    createMany?: UserCharityCreateManyUserInputEnvelope
    connect?: UserCharityWhereUniqueInput | UserCharityWhereUniqueInput[]
  }

  export type SubscriptionOrderUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SubscriptionOrderCreateWithoutUserInput, SubscriptionOrderUncheckedCreateWithoutUserInput> | SubscriptionOrderCreateWithoutUserInput[] | SubscriptionOrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubscriptionOrderCreateOrConnectWithoutUserInput | SubscriptionOrderCreateOrConnectWithoutUserInput[]
    createMany?: SubscriptionOrderCreateManyUserInputEnvelope
    connect?: SubscriptionOrderWhereUniqueInput | SubscriptionOrderWhereUniqueInput[]
  }

  export type DrawUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<DrawCreateWithoutAdminInput, DrawUncheckedCreateWithoutAdminInput> | DrawCreateWithoutAdminInput[] | DrawUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: DrawCreateOrConnectWithoutAdminInput | DrawCreateOrConnectWithoutAdminInput[]
    createMany?: DrawCreateManyAdminInputEnvelope
    connect?: DrawWhereUniqueInput | DrawWhereUniqueInput[]
  }

  export type WinnerUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WinnerCreateWithoutUserInput, WinnerUncheckedCreateWithoutUserInput> | WinnerCreateWithoutUserInput[] | WinnerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WinnerCreateOrConnectWithoutUserInput | WinnerCreateOrConnectWithoutUserInput[]
    createMany?: WinnerCreateManyUserInputEnvelope
    connect?: WinnerWhereUniqueInput | WinnerWhereUniqueInput[]
  }

  export type ParticipantUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ParticipantCreateWithoutUserInput, ParticipantUncheckedCreateWithoutUserInput> | ParticipantCreateWithoutUserInput[] | ParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ParticipantCreateOrConnectWithoutUserInput | ParticipantCreateOrConnectWithoutUserInput[]
    createMany?: ParticipantCreateManyUserInputEnvelope
    connect?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type EnumAuthProviderFieldUpdateOperationsInput = {
    set?: $Enums.AuthProvider
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type GolfScoreUpdateManyWithoutUserNestedInput = {
    create?: XOR<GolfScoreCreateWithoutUserInput, GolfScoreUncheckedCreateWithoutUserInput> | GolfScoreCreateWithoutUserInput[] | GolfScoreUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GolfScoreCreateOrConnectWithoutUserInput | GolfScoreCreateOrConnectWithoutUserInput[]
    upsert?: GolfScoreUpsertWithWhereUniqueWithoutUserInput | GolfScoreUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GolfScoreCreateManyUserInputEnvelope
    set?: GolfScoreWhereUniqueInput | GolfScoreWhereUniqueInput[]
    disconnect?: GolfScoreWhereUniqueInput | GolfScoreWhereUniqueInput[]
    delete?: GolfScoreWhereUniqueInput | GolfScoreWhereUniqueInput[]
    connect?: GolfScoreWhereUniqueInput | GolfScoreWhereUniqueInput[]
    update?: GolfScoreUpdateWithWhereUniqueWithoutUserInput | GolfScoreUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GolfScoreUpdateManyWithWhereWithoutUserInput | GolfScoreUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GolfScoreScalarWhereInput | GolfScoreScalarWhereInput[]
  }

  export type UserCharityUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserCharityCreateWithoutUserInput, UserCharityUncheckedCreateWithoutUserInput> | UserCharityCreateWithoutUserInput[] | UserCharityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserCharityCreateOrConnectWithoutUserInput | UserCharityCreateOrConnectWithoutUserInput[]
    upsert?: UserCharityUpsertWithWhereUniqueWithoutUserInput | UserCharityUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserCharityCreateManyUserInputEnvelope
    set?: UserCharityWhereUniqueInput | UserCharityWhereUniqueInput[]
    disconnect?: UserCharityWhereUniqueInput | UserCharityWhereUniqueInput[]
    delete?: UserCharityWhereUniqueInput | UserCharityWhereUniqueInput[]
    connect?: UserCharityWhereUniqueInput | UserCharityWhereUniqueInput[]
    update?: UserCharityUpdateWithWhereUniqueWithoutUserInput | UserCharityUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserCharityUpdateManyWithWhereWithoutUserInput | UserCharityUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserCharityScalarWhereInput | UserCharityScalarWhereInput[]
  }

  export type SubscriptionOrderUpdateManyWithoutUserNestedInput = {
    create?: XOR<SubscriptionOrderCreateWithoutUserInput, SubscriptionOrderUncheckedCreateWithoutUserInput> | SubscriptionOrderCreateWithoutUserInput[] | SubscriptionOrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubscriptionOrderCreateOrConnectWithoutUserInput | SubscriptionOrderCreateOrConnectWithoutUserInput[]
    upsert?: SubscriptionOrderUpsertWithWhereUniqueWithoutUserInput | SubscriptionOrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SubscriptionOrderCreateManyUserInputEnvelope
    set?: SubscriptionOrderWhereUniqueInput | SubscriptionOrderWhereUniqueInput[]
    disconnect?: SubscriptionOrderWhereUniqueInput | SubscriptionOrderWhereUniqueInput[]
    delete?: SubscriptionOrderWhereUniqueInput | SubscriptionOrderWhereUniqueInput[]
    connect?: SubscriptionOrderWhereUniqueInput | SubscriptionOrderWhereUniqueInput[]
    update?: SubscriptionOrderUpdateWithWhereUniqueWithoutUserInput | SubscriptionOrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SubscriptionOrderUpdateManyWithWhereWithoutUserInput | SubscriptionOrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SubscriptionOrderScalarWhereInput | SubscriptionOrderScalarWhereInput[]
  }

  export type DrawUpdateManyWithoutAdminNestedInput = {
    create?: XOR<DrawCreateWithoutAdminInput, DrawUncheckedCreateWithoutAdminInput> | DrawCreateWithoutAdminInput[] | DrawUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: DrawCreateOrConnectWithoutAdminInput | DrawCreateOrConnectWithoutAdminInput[]
    upsert?: DrawUpsertWithWhereUniqueWithoutAdminInput | DrawUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: DrawCreateManyAdminInputEnvelope
    set?: DrawWhereUniqueInput | DrawWhereUniqueInput[]
    disconnect?: DrawWhereUniqueInput | DrawWhereUniqueInput[]
    delete?: DrawWhereUniqueInput | DrawWhereUniqueInput[]
    connect?: DrawWhereUniqueInput | DrawWhereUniqueInput[]
    update?: DrawUpdateWithWhereUniqueWithoutAdminInput | DrawUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: DrawUpdateManyWithWhereWithoutAdminInput | DrawUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: DrawScalarWhereInput | DrawScalarWhereInput[]
  }

  export type WinnerUpdateManyWithoutUserNestedInput = {
    create?: XOR<WinnerCreateWithoutUserInput, WinnerUncheckedCreateWithoutUserInput> | WinnerCreateWithoutUserInput[] | WinnerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WinnerCreateOrConnectWithoutUserInput | WinnerCreateOrConnectWithoutUserInput[]
    upsert?: WinnerUpsertWithWhereUniqueWithoutUserInput | WinnerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WinnerCreateManyUserInputEnvelope
    set?: WinnerWhereUniqueInput | WinnerWhereUniqueInput[]
    disconnect?: WinnerWhereUniqueInput | WinnerWhereUniqueInput[]
    delete?: WinnerWhereUniqueInput | WinnerWhereUniqueInput[]
    connect?: WinnerWhereUniqueInput | WinnerWhereUniqueInput[]
    update?: WinnerUpdateWithWhereUniqueWithoutUserInput | WinnerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WinnerUpdateManyWithWhereWithoutUserInput | WinnerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WinnerScalarWhereInput | WinnerScalarWhereInput[]
  }

  export type ParticipantUpdateManyWithoutUserNestedInput = {
    create?: XOR<ParticipantCreateWithoutUserInput, ParticipantUncheckedCreateWithoutUserInput> | ParticipantCreateWithoutUserInput[] | ParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ParticipantCreateOrConnectWithoutUserInput | ParticipantCreateOrConnectWithoutUserInput[]
    upsert?: ParticipantUpsertWithWhereUniqueWithoutUserInput | ParticipantUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ParticipantCreateManyUserInputEnvelope
    set?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
    disconnect?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
    delete?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
    connect?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
    update?: ParticipantUpdateWithWhereUniqueWithoutUserInput | ParticipantUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ParticipantUpdateManyWithWhereWithoutUserInput | ParticipantUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ParticipantScalarWhereInput | ParticipantScalarWhereInput[]
  }

  export type GolfScoreUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<GolfScoreCreateWithoutUserInput, GolfScoreUncheckedCreateWithoutUserInput> | GolfScoreCreateWithoutUserInput[] | GolfScoreUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GolfScoreCreateOrConnectWithoutUserInput | GolfScoreCreateOrConnectWithoutUserInput[]
    upsert?: GolfScoreUpsertWithWhereUniqueWithoutUserInput | GolfScoreUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GolfScoreCreateManyUserInputEnvelope
    set?: GolfScoreWhereUniqueInput | GolfScoreWhereUniqueInput[]
    disconnect?: GolfScoreWhereUniqueInput | GolfScoreWhereUniqueInput[]
    delete?: GolfScoreWhereUniqueInput | GolfScoreWhereUniqueInput[]
    connect?: GolfScoreWhereUniqueInput | GolfScoreWhereUniqueInput[]
    update?: GolfScoreUpdateWithWhereUniqueWithoutUserInput | GolfScoreUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GolfScoreUpdateManyWithWhereWithoutUserInput | GolfScoreUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GolfScoreScalarWhereInput | GolfScoreScalarWhereInput[]
  }

  export type UserCharityUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserCharityCreateWithoutUserInput, UserCharityUncheckedCreateWithoutUserInput> | UserCharityCreateWithoutUserInput[] | UserCharityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserCharityCreateOrConnectWithoutUserInput | UserCharityCreateOrConnectWithoutUserInput[]
    upsert?: UserCharityUpsertWithWhereUniqueWithoutUserInput | UserCharityUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserCharityCreateManyUserInputEnvelope
    set?: UserCharityWhereUniqueInput | UserCharityWhereUniqueInput[]
    disconnect?: UserCharityWhereUniqueInput | UserCharityWhereUniqueInput[]
    delete?: UserCharityWhereUniqueInput | UserCharityWhereUniqueInput[]
    connect?: UserCharityWhereUniqueInput | UserCharityWhereUniqueInput[]
    update?: UserCharityUpdateWithWhereUniqueWithoutUserInput | UserCharityUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserCharityUpdateManyWithWhereWithoutUserInput | UserCharityUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserCharityScalarWhereInput | UserCharityScalarWhereInput[]
  }

  export type SubscriptionOrderUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SubscriptionOrderCreateWithoutUserInput, SubscriptionOrderUncheckedCreateWithoutUserInput> | SubscriptionOrderCreateWithoutUserInput[] | SubscriptionOrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubscriptionOrderCreateOrConnectWithoutUserInput | SubscriptionOrderCreateOrConnectWithoutUserInput[]
    upsert?: SubscriptionOrderUpsertWithWhereUniqueWithoutUserInput | SubscriptionOrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SubscriptionOrderCreateManyUserInputEnvelope
    set?: SubscriptionOrderWhereUniqueInput | SubscriptionOrderWhereUniqueInput[]
    disconnect?: SubscriptionOrderWhereUniqueInput | SubscriptionOrderWhereUniqueInput[]
    delete?: SubscriptionOrderWhereUniqueInput | SubscriptionOrderWhereUniqueInput[]
    connect?: SubscriptionOrderWhereUniqueInput | SubscriptionOrderWhereUniqueInput[]
    update?: SubscriptionOrderUpdateWithWhereUniqueWithoutUserInput | SubscriptionOrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SubscriptionOrderUpdateManyWithWhereWithoutUserInput | SubscriptionOrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SubscriptionOrderScalarWhereInput | SubscriptionOrderScalarWhereInput[]
  }

  export type DrawUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<DrawCreateWithoutAdminInput, DrawUncheckedCreateWithoutAdminInput> | DrawCreateWithoutAdminInput[] | DrawUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: DrawCreateOrConnectWithoutAdminInput | DrawCreateOrConnectWithoutAdminInput[]
    upsert?: DrawUpsertWithWhereUniqueWithoutAdminInput | DrawUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: DrawCreateManyAdminInputEnvelope
    set?: DrawWhereUniqueInput | DrawWhereUniqueInput[]
    disconnect?: DrawWhereUniqueInput | DrawWhereUniqueInput[]
    delete?: DrawWhereUniqueInput | DrawWhereUniqueInput[]
    connect?: DrawWhereUniqueInput | DrawWhereUniqueInput[]
    update?: DrawUpdateWithWhereUniqueWithoutAdminInput | DrawUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: DrawUpdateManyWithWhereWithoutAdminInput | DrawUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: DrawScalarWhereInput | DrawScalarWhereInput[]
  }

  export type WinnerUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WinnerCreateWithoutUserInput, WinnerUncheckedCreateWithoutUserInput> | WinnerCreateWithoutUserInput[] | WinnerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WinnerCreateOrConnectWithoutUserInput | WinnerCreateOrConnectWithoutUserInput[]
    upsert?: WinnerUpsertWithWhereUniqueWithoutUserInput | WinnerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WinnerCreateManyUserInputEnvelope
    set?: WinnerWhereUniqueInput | WinnerWhereUniqueInput[]
    disconnect?: WinnerWhereUniqueInput | WinnerWhereUniqueInput[]
    delete?: WinnerWhereUniqueInput | WinnerWhereUniqueInput[]
    connect?: WinnerWhereUniqueInput | WinnerWhereUniqueInput[]
    update?: WinnerUpdateWithWhereUniqueWithoutUserInput | WinnerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WinnerUpdateManyWithWhereWithoutUserInput | WinnerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WinnerScalarWhereInput | WinnerScalarWhereInput[]
  }

  export type ParticipantUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ParticipantCreateWithoutUserInput, ParticipantUncheckedCreateWithoutUserInput> | ParticipantCreateWithoutUserInput[] | ParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ParticipantCreateOrConnectWithoutUserInput | ParticipantCreateOrConnectWithoutUserInput[]
    upsert?: ParticipantUpsertWithWhereUniqueWithoutUserInput | ParticipantUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ParticipantCreateManyUserInputEnvelope
    set?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
    disconnect?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
    delete?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
    connect?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
    update?: ParticipantUpdateWithWhereUniqueWithoutUserInput | ParticipantUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ParticipantUpdateManyWithWhereWithoutUserInput | ParticipantUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ParticipantScalarWhereInput | ParticipantScalarWhereInput[]
  }

  export type CharityImageCreateNestedManyWithoutCharityInput = {
    create?: XOR<CharityImageCreateWithoutCharityInput, CharityImageUncheckedCreateWithoutCharityInput> | CharityImageCreateWithoutCharityInput[] | CharityImageUncheckedCreateWithoutCharityInput[]
    connectOrCreate?: CharityImageCreateOrConnectWithoutCharityInput | CharityImageCreateOrConnectWithoutCharityInput[]
    createMany?: CharityImageCreateManyCharityInputEnvelope
    connect?: CharityImageWhereUniqueInput | CharityImageWhereUniqueInput[]
  }

  export type UserCharityCreateNestedManyWithoutCharityInput = {
    create?: XOR<UserCharityCreateWithoutCharityInput, UserCharityUncheckedCreateWithoutCharityInput> | UserCharityCreateWithoutCharityInput[] | UserCharityUncheckedCreateWithoutCharityInput[]
    connectOrCreate?: UserCharityCreateOrConnectWithoutCharityInput | UserCharityCreateOrConnectWithoutCharityInput[]
    createMany?: UserCharityCreateManyCharityInputEnvelope
    connect?: UserCharityWhereUniqueInput | UserCharityWhereUniqueInput[]
  }

  export type CharityImageUncheckedCreateNestedManyWithoutCharityInput = {
    create?: XOR<CharityImageCreateWithoutCharityInput, CharityImageUncheckedCreateWithoutCharityInput> | CharityImageCreateWithoutCharityInput[] | CharityImageUncheckedCreateWithoutCharityInput[]
    connectOrCreate?: CharityImageCreateOrConnectWithoutCharityInput | CharityImageCreateOrConnectWithoutCharityInput[]
    createMany?: CharityImageCreateManyCharityInputEnvelope
    connect?: CharityImageWhereUniqueInput | CharityImageWhereUniqueInput[]
  }

  export type UserCharityUncheckedCreateNestedManyWithoutCharityInput = {
    create?: XOR<UserCharityCreateWithoutCharityInput, UserCharityUncheckedCreateWithoutCharityInput> | UserCharityCreateWithoutCharityInput[] | UserCharityUncheckedCreateWithoutCharityInput[]
    connectOrCreate?: UserCharityCreateOrConnectWithoutCharityInput | UserCharityCreateOrConnectWithoutCharityInput[]
    createMany?: UserCharityCreateManyCharityInputEnvelope
    connect?: UserCharityWhereUniqueInput | UserCharityWhereUniqueInput[]
  }

  export type CharityImageUpdateManyWithoutCharityNestedInput = {
    create?: XOR<CharityImageCreateWithoutCharityInput, CharityImageUncheckedCreateWithoutCharityInput> | CharityImageCreateWithoutCharityInput[] | CharityImageUncheckedCreateWithoutCharityInput[]
    connectOrCreate?: CharityImageCreateOrConnectWithoutCharityInput | CharityImageCreateOrConnectWithoutCharityInput[]
    upsert?: CharityImageUpsertWithWhereUniqueWithoutCharityInput | CharityImageUpsertWithWhereUniqueWithoutCharityInput[]
    createMany?: CharityImageCreateManyCharityInputEnvelope
    set?: CharityImageWhereUniqueInput | CharityImageWhereUniqueInput[]
    disconnect?: CharityImageWhereUniqueInput | CharityImageWhereUniqueInput[]
    delete?: CharityImageWhereUniqueInput | CharityImageWhereUniqueInput[]
    connect?: CharityImageWhereUniqueInput | CharityImageWhereUniqueInput[]
    update?: CharityImageUpdateWithWhereUniqueWithoutCharityInput | CharityImageUpdateWithWhereUniqueWithoutCharityInput[]
    updateMany?: CharityImageUpdateManyWithWhereWithoutCharityInput | CharityImageUpdateManyWithWhereWithoutCharityInput[]
    deleteMany?: CharityImageScalarWhereInput | CharityImageScalarWhereInput[]
  }

  export type UserCharityUpdateManyWithoutCharityNestedInput = {
    create?: XOR<UserCharityCreateWithoutCharityInput, UserCharityUncheckedCreateWithoutCharityInput> | UserCharityCreateWithoutCharityInput[] | UserCharityUncheckedCreateWithoutCharityInput[]
    connectOrCreate?: UserCharityCreateOrConnectWithoutCharityInput | UserCharityCreateOrConnectWithoutCharityInput[]
    upsert?: UserCharityUpsertWithWhereUniqueWithoutCharityInput | UserCharityUpsertWithWhereUniqueWithoutCharityInput[]
    createMany?: UserCharityCreateManyCharityInputEnvelope
    set?: UserCharityWhereUniqueInput | UserCharityWhereUniqueInput[]
    disconnect?: UserCharityWhereUniqueInput | UserCharityWhereUniqueInput[]
    delete?: UserCharityWhereUniqueInput | UserCharityWhereUniqueInput[]
    connect?: UserCharityWhereUniqueInput | UserCharityWhereUniqueInput[]
    update?: UserCharityUpdateWithWhereUniqueWithoutCharityInput | UserCharityUpdateWithWhereUniqueWithoutCharityInput[]
    updateMany?: UserCharityUpdateManyWithWhereWithoutCharityInput | UserCharityUpdateManyWithWhereWithoutCharityInput[]
    deleteMany?: UserCharityScalarWhereInput | UserCharityScalarWhereInput[]
  }

  export type CharityImageUncheckedUpdateManyWithoutCharityNestedInput = {
    create?: XOR<CharityImageCreateWithoutCharityInput, CharityImageUncheckedCreateWithoutCharityInput> | CharityImageCreateWithoutCharityInput[] | CharityImageUncheckedCreateWithoutCharityInput[]
    connectOrCreate?: CharityImageCreateOrConnectWithoutCharityInput | CharityImageCreateOrConnectWithoutCharityInput[]
    upsert?: CharityImageUpsertWithWhereUniqueWithoutCharityInput | CharityImageUpsertWithWhereUniqueWithoutCharityInput[]
    createMany?: CharityImageCreateManyCharityInputEnvelope
    set?: CharityImageWhereUniqueInput | CharityImageWhereUniqueInput[]
    disconnect?: CharityImageWhereUniqueInput | CharityImageWhereUniqueInput[]
    delete?: CharityImageWhereUniqueInput | CharityImageWhereUniqueInput[]
    connect?: CharityImageWhereUniqueInput | CharityImageWhereUniqueInput[]
    update?: CharityImageUpdateWithWhereUniqueWithoutCharityInput | CharityImageUpdateWithWhereUniqueWithoutCharityInput[]
    updateMany?: CharityImageUpdateManyWithWhereWithoutCharityInput | CharityImageUpdateManyWithWhereWithoutCharityInput[]
    deleteMany?: CharityImageScalarWhereInput | CharityImageScalarWhereInput[]
  }

  export type UserCharityUncheckedUpdateManyWithoutCharityNestedInput = {
    create?: XOR<UserCharityCreateWithoutCharityInput, UserCharityUncheckedCreateWithoutCharityInput> | UserCharityCreateWithoutCharityInput[] | UserCharityUncheckedCreateWithoutCharityInput[]
    connectOrCreate?: UserCharityCreateOrConnectWithoutCharityInput | UserCharityCreateOrConnectWithoutCharityInput[]
    upsert?: UserCharityUpsertWithWhereUniqueWithoutCharityInput | UserCharityUpsertWithWhereUniqueWithoutCharityInput[]
    createMany?: UserCharityCreateManyCharityInputEnvelope
    set?: UserCharityWhereUniqueInput | UserCharityWhereUniqueInput[]
    disconnect?: UserCharityWhereUniqueInput | UserCharityWhereUniqueInput[]
    delete?: UserCharityWhereUniqueInput | UserCharityWhereUniqueInput[]
    connect?: UserCharityWhereUniqueInput | UserCharityWhereUniqueInput[]
    update?: UserCharityUpdateWithWhereUniqueWithoutCharityInput | UserCharityUpdateWithWhereUniqueWithoutCharityInput[]
    updateMany?: UserCharityUpdateManyWithWhereWithoutCharityInput | UserCharityUpdateManyWithWhereWithoutCharityInput[]
    deleteMany?: UserCharityScalarWhereInput | UserCharityScalarWhereInput[]
  }

  export type CharityCreateNestedOneWithoutImagesInput = {
    create?: XOR<CharityCreateWithoutImagesInput, CharityUncheckedCreateWithoutImagesInput>
    connectOrCreate?: CharityCreateOrConnectWithoutImagesInput
    connect?: CharityWhereUniqueInput
  }

  export type CharityUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<CharityCreateWithoutImagesInput, CharityUncheckedCreateWithoutImagesInput>
    connectOrCreate?: CharityCreateOrConnectWithoutImagesInput
    upsert?: CharityUpsertWithoutImagesInput
    connect?: CharityWhereUniqueInput
    update?: XOR<XOR<CharityUpdateToOneWithWhereWithoutImagesInput, CharityUpdateWithoutImagesInput>, CharityUncheckedUpdateWithoutImagesInput>
  }

  export type SubscriptionOrderCreateNestedOneWithoutUserCharitiesInput = {
    create?: XOR<SubscriptionOrderCreateWithoutUserCharitiesInput, SubscriptionOrderUncheckedCreateWithoutUserCharitiesInput>
    connectOrCreate?: SubscriptionOrderCreateOrConnectWithoutUserCharitiesInput
    connect?: SubscriptionOrderWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutUserCharitiesInput = {
    create?: XOR<UserCreateWithoutUserCharitiesInput, UserUncheckedCreateWithoutUserCharitiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserCharitiesInput
    connect?: UserWhereUniqueInput
  }

  export type CharityCreateNestedOneWithoutUserCharitiesInput = {
    create?: XOR<CharityCreateWithoutUserCharitiesInput, CharityUncheckedCreateWithoutUserCharitiesInput>
    connectOrCreate?: CharityCreateOrConnectWithoutUserCharitiesInput
    connect?: CharityWhereUniqueInput
  }

  export type EnumCharityContributionTypeFieldUpdateOperationsInput = {
    set?: $Enums.CharityContributionType
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumCharityStatusFieldUpdateOperationsInput = {
    set?: $Enums.CharityStatus
  }

  export type SubscriptionOrderUpdateOneRequiredWithoutUserCharitiesNestedInput = {
    create?: XOR<SubscriptionOrderCreateWithoutUserCharitiesInput, SubscriptionOrderUncheckedCreateWithoutUserCharitiesInput>
    connectOrCreate?: SubscriptionOrderCreateOrConnectWithoutUserCharitiesInput
    upsert?: SubscriptionOrderUpsertWithoutUserCharitiesInput
    connect?: SubscriptionOrderWhereUniqueInput
    update?: XOR<XOR<SubscriptionOrderUpdateToOneWithWhereWithoutUserCharitiesInput, SubscriptionOrderUpdateWithoutUserCharitiesInput>, SubscriptionOrderUncheckedUpdateWithoutUserCharitiesInput>
  }

  export type UserUpdateOneRequiredWithoutUserCharitiesNestedInput = {
    create?: XOR<UserCreateWithoutUserCharitiesInput, UserUncheckedCreateWithoutUserCharitiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserCharitiesInput
    upsert?: UserUpsertWithoutUserCharitiesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserCharitiesInput, UserUpdateWithoutUserCharitiesInput>, UserUncheckedUpdateWithoutUserCharitiesInput>
  }

  export type CharityUpdateOneRequiredWithoutUserCharitiesNestedInput = {
    create?: XOR<CharityCreateWithoutUserCharitiesInput, CharityUncheckedCreateWithoutUserCharitiesInput>
    connectOrCreate?: CharityCreateOrConnectWithoutUserCharitiesInput
    upsert?: CharityUpsertWithoutUserCharitiesInput
    connect?: CharityWhereUniqueInput
    update?: XOR<XOR<CharityUpdateToOneWithWhereWithoutUserCharitiesInput, CharityUpdateWithoutUserCharitiesInput>, CharityUncheckedUpdateWithoutUserCharitiesInput>
  }

  export type UserCreateNestedOneWithoutScoresInput = {
    create?: XOR<UserCreateWithoutScoresInput, UserUncheckedCreateWithoutScoresInput>
    connectOrCreate?: UserCreateOrConnectWithoutScoresInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutScoresNestedInput = {
    create?: XOR<UserCreateWithoutScoresInput, UserUncheckedCreateWithoutScoresInput>
    connectOrCreate?: UserCreateOrConnectWithoutScoresInput
    upsert?: UserUpsertWithoutScoresInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutScoresInput, UserUpdateWithoutScoresInput>, UserUncheckedUpdateWithoutScoresInput>
  }

  export type SubscriptionModelCreatefeaturesInput = {
    set: string[]
  }

  export type SubscriptionOrderCreateNestedManyWithoutSubscriptionModelInput = {
    create?: XOR<SubscriptionOrderCreateWithoutSubscriptionModelInput, SubscriptionOrderUncheckedCreateWithoutSubscriptionModelInput> | SubscriptionOrderCreateWithoutSubscriptionModelInput[] | SubscriptionOrderUncheckedCreateWithoutSubscriptionModelInput[]
    connectOrCreate?: SubscriptionOrderCreateOrConnectWithoutSubscriptionModelInput | SubscriptionOrderCreateOrConnectWithoutSubscriptionModelInput[]
    createMany?: SubscriptionOrderCreateManySubscriptionModelInputEnvelope
    connect?: SubscriptionOrderWhereUniqueInput | SubscriptionOrderWhereUniqueInput[]
  }

  export type SubscriptionOrderUncheckedCreateNestedManyWithoutSubscriptionModelInput = {
    create?: XOR<SubscriptionOrderCreateWithoutSubscriptionModelInput, SubscriptionOrderUncheckedCreateWithoutSubscriptionModelInput> | SubscriptionOrderCreateWithoutSubscriptionModelInput[] | SubscriptionOrderUncheckedCreateWithoutSubscriptionModelInput[]
    connectOrCreate?: SubscriptionOrderCreateOrConnectWithoutSubscriptionModelInput | SubscriptionOrderCreateOrConnectWithoutSubscriptionModelInput[]
    createMany?: SubscriptionOrderCreateManySubscriptionModelInputEnvelope
    connect?: SubscriptionOrderWhereUniqueInput | SubscriptionOrderWhereUniqueInput[]
  }

  export type SubscriptionModelUpdatefeaturesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type SubscriptionOrderUpdateManyWithoutSubscriptionModelNestedInput = {
    create?: XOR<SubscriptionOrderCreateWithoutSubscriptionModelInput, SubscriptionOrderUncheckedCreateWithoutSubscriptionModelInput> | SubscriptionOrderCreateWithoutSubscriptionModelInput[] | SubscriptionOrderUncheckedCreateWithoutSubscriptionModelInput[]
    connectOrCreate?: SubscriptionOrderCreateOrConnectWithoutSubscriptionModelInput | SubscriptionOrderCreateOrConnectWithoutSubscriptionModelInput[]
    upsert?: SubscriptionOrderUpsertWithWhereUniqueWithoutSubscriptionModelInput | SubscriptionOrderUpsertWithWhereUniqueWithoutSubscriptionModelInput[]
    createMany?: SubscriptionOrderCreateManySubscriptionModelInputEnvelope
    set?: SubscriptionOrderWhereUniqueInput | SubscriptionOrderWhereUniqueInput[]
    disconnect?: SubscriptionOrderWhereUniqueInput | SubscriptionOrderWhereUniqueInput[]
    delete?: SubscriptionOrderWhereUniqueInput | SubscriptionOrderWhereUniqueInput[]
    connect?: SubscriptionOrderWhereUniqueInput | SubscriptionOrderWhereUniqueInput[]
    update?: SubscriptionOrderUpdateWithWhereUniqueWithoutSubscriptionModelInput | SubscriptionOrderUpdateWithWhereUniqueWithoutSubscriptionModelInput[]
    updateMany?: SubscriptionOrderUpdateManyWithWhereWithoutSubscriptionModelInput | SubscriptionOrderUpdateManyWithWhereWithoutSubscriptionModelInput[]
    deleteMany?: SubscriptionOrderScalarWhereInput | SubscriptionOrderScalarWhereInput[]
  }

  export type SubscriptionOrderUncheckedUpdateManyWithoutSubscriptionModelNestedInput = {
    create?: XOR<SubscriptionOrderCreateWithoutSubscriptionModelInput, SubscriptionOrderUncheckedCreateWithoutSubscriptionModelInput> | SubscriptionOrderCreateWithoutSubscriptionModelInput[] | SubscriptionOrderUncheckedCreateWithoutSubscriptionModelInput[]
    connectOrCreate?: SubscriptionOrderCreateOrConnectWithoutSubscriptionModelInput | SubscriptionOrderCreateOrConnectWithoutSubscriptionModelInput[]
    upsert?: SubscriptionOrderUpsertWithWhereUniqueWithoutSubscriptionModelInput | SubscriptionOrderUpsertWithWhereUniqueWithoutSubscriptionModelInput[]
    createMany?: SubscriptionOrderCreateManySubscriptionModelInputEnvelope
    set?: SubscriptionOrderWhereUniqueInput | SubscriptionOrderWhereUniqueInput[]
    disconnect?: SubscriptionOrderWhereUniqueInput | SubscriptionOrderWhereUniqueInput[]
    delete?: SubscriptionOrderWhereUniqueInput | SubscriptionOrderWhereUniqueInput[]
    connect?: SubscriptionOrderWhereUniqueInput | SubscriptionOrderWhereUniqueInput[]
    update?: SubscriptionOrderUpdateWithWhereUniqueWithoutSubscriptionModelInput | SubscriptionOrderUpdateWithWhereUniqueWithoutSubscriptionModelInput[]
    updateMany?: SubscriptionOrderUpdateManyWithWhereWithoutSubscriptionModelInput | SubscriptionOrderUpdateManyWithWhereWithoutSubscriptionModelInput[]
    deleteMany?: SubscriptionOrderScalarWhereInput | SubscriptionOrderScalarWhereInput[]
  }

  export type SubscriptionModelCreateNestedOneWithoutSubscriptionOrdersInput = {
    create?: XOR<SubscriptionModelCreateWithoutSubscriptionOrdersInput, SubscriptionModelUncheckedCreateWithoutSubscriptionOrdersInput>
    connectOrCreate?: SubscriptionModelCreateOrConnectWithoutSubscriptionOrdersInput
    connect?: SubscriptionModelWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSubcriptionsInput = {
    create?: XOR<UserCreateWithoutSubcriptionsInput, UserUncheckedCreateWithoutSubcriptionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubcriptionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCharityCreateNestedManyWithoutSubscriptionInput = {
    create?: XOR<UserCharityCreateWithoutSubscriptionInput, UserCharityUncheckedCreateWithoutSubscriptionInput> | UserCharityCreateWithoutSubscriptionInput[] | UserCharityUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: UserCharityCreateOrConnectWithoutSubscriptionInput | UserCharityCreateOrConnectWithoutSubscriptionInput[]
    createMany?: UserCharityCreateManySubscriptionInputEnvelope
    connect?: UserCharityWhereUniqueInput | UserCharityWhereUniqueInput[]
  }

  export type UserCharityUncheckedCreateNestedManyWithoutSubscriptionInput = {
    create?: XOR<UserCharityCreateWithoutSubscriptionInput, UserCharityUncheckedCreateWithoutSubscriptionInput> | UserCharityCreateWithoutSubscriptionInput[] | UserCharityUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: UserCharityCreateOrConnectWithoutSubscriptionInput | UserCharityCreateOrConnectWithoutSubscriptionInput[]
    createMany?: UserCharityCreateManySubscriptionInputEnvelope
    connect?: UserCharityWhereUniqueInput | UserCharityWhereUniqueInput[]
  }

  export type EnumPaymentGatewayFieldUpdateOperationsInput = {
    set?: $Enums.PaymentGateway
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type SubscriptionModelUpdateOneRequiredWithoutSubscriptionOrdersNestedInput = {
    create?: XOR<SubscriptionModelCreateWithoutSubscriptionOrdersInput, SubscriptionModelUncheckedCreateWithoutSubscriptionOrdersInput>
    connectOrCreate?: SubscriptionModelCreateOrConnectWithoutSubscriptionOrdersInput
    upsert?: SubscriptionModelUpsertWithoutSubscriptionOrdersInput
    connect?: SubscriptionModelWhereUniqueInput
    update?: XOR<XOR<SubscriptionModelUpdateToOneWithWhereWithoutSubscriptionOrdersInput, SubscriptionModelUpdateWithoutSubscriptionOrdersInput>, SubscriptionModelUncheckedUpdateWithoutSubscriptionOrdersInput>
  }

  export type UserUpdateOneRequiredWithoutSubcriptionsNestedInput = {
    create?: XOR<UserCreateWithoutSubcriptionsInput, UserUncheckedCreateWithoutSubcriptionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubcriptionsInput
    upsert?: UserUpsertWithoutSubcriptionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSubcriptionsInput, UserUpdateWithoutSubcriptionsInput>, UserUncheckedUpdateWithoutSubcriptionsInput>
  }

  export type UserCharityUpdateManyWithoutSubscriptionNestedInput = {
    create?: XOR<UserCharityCreateWithoutSubscriptionInput, UserCharityUncheckedCreateWithoutSubscriptionInput> | UserCharityCreateWithoutSubscriptionInput[] | UserCharityUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: UserCharityCreateOrConnectWithoutSubscriptionInput | UserCharityCreateOrConnectWithoutSubscriptionInput[]
    upsert?: UserCharityUpsertWithWhereUniqueWithoutSubscriptionInput | UserCharityUpsertWithWhereUniqueWithoutSubscriptionInput[]
    createMany?: UserCharityCreateManySubscriptionInputEnvelope
    set?: UserCharityWhereUniqueInput | UserCharityWhereUniqueInput[]
    disconnect?: UserCharityWhereUniqueInput | UserCharityWhereUniqueInput[]
    delete?: UserCharityWhereUniqueInput | UserCharityWhereUniqueInput[]
    connect?: UserCharityWhereUniqueInput | UserCharityWhereUniqueInput[]
    update?: UserCharityUpdateWithWhereUniqueWithoutSubscriptionInput | UserCharityUpdateWithWhereUniqueWithoutSubscriptionInput[]
    updateMany?: UserCharityUpdateManyWithWhereWithoutSubscriptionInput | UserCharityUpdateManyWithWhereWithoutSubscriptionInput[]
    deleteMany?: UserCharityScalarWhereInput | UserCharityScalarWhereInput[]
  }

  export type UserCharityUncheckedUpdateManyWithoutSubscriptionNestedInput = {
    create?: XOR<UserCharityCreateWithoutSubscriptionInput, UserCharityUncheckedCreateWithoutSubscriptionInput> | UserCharityCreateWithoutSubscriptionInput[] | UserCharityUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: UserCharityCreateOrConnectWithoutSubscriptionInput | UserCharityCreateOrConnectWithoutSubscriptionInput[]
    upsert?: UserCharityUpsertWithWhereUniqueWithoutSubscriptionInput | UserCharityUpsertWithWhereUniqueWithoutSubscriptionInput[]
    createMany?: UserCharityCreateManySubscriptionInputEnvelope
    set?: UserCharityWhereUniqueInput | UserCharityWhereUniqueInput[]
    disconnect?: UserCharityWhereUniqueInput | UserCharityWhereUniqueInput[]
    delete?: UserCharityWhereUniqueInput | UserCharityWhereUniqueInput[]
    connect?: UserCharityWhereUniqueInput | UserCharityWhereUniqueInput[]
    update?: UserCharityUpdateWithWhereUniqueWithoutSubscriptionInput | UserCharityUpdateWithWhereUniqueWithoutSubscriptionInput[]
    updateMany?: UserCharityUpdateManyWithWhereWithoutSubscriptionInput | UserCharityUpdateManyWithWhereWithoutSubscriptionInput[]
    deleteMany?: UserCharityScalarWhereInput | UserCharityScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutDrawsInput = {
    create?: XOR<UserCreateWithoutDrawsInput, UserUncheckedCreateWithoutDrawsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDrawsInput
    connect?: UserWhereUniqueInput
  }

  export type DrawCreateNestedOneWithoutRolledOverToInput = {
    create?: XOR<DrawCreateWithoutRolledOverToInput, DrawUncheckedCreateWithoutRolledOverToInput>
    connectOrCreate?: DrawCreateOrConnectWithoutRolledOverToInput
    connect?: DrawWhereUniqueInput
  }

  export type DrawCreateNestedManyWithoutRolledOverFromInput = {
    create?: XOR<DrawCreateWithoutRolledOverFromInput, DrawUncheckedCreateWithoutRolledOverFromInput> | DrawCreateWithoutRolledOverFromInput[] | DrawUncheckedCreateWithoutRolledOverFromInput[]
    connectOrCreate?: DrawCreateOrConnectWithoutRolledOverFromInput | DrawCreateOrConnectWithoutRolledOverFromInput[]
    createMany?: DrawCreateManyRolledOverFromInputEnvelope
    connect?: DrawWhereUniqueInput | DrawWhereUniqueInput[]
  }

  export type WinnerCreateNestedManyWithoutDrawInput = {
    create?: XOR<WinnerCreateWithoutDrawInput, WinnerUncheckedCreateWithoutDrawInput> | WinnerCreateWithoutDrawInput[] | WinnerUncheckedCreateWithoutDrawInput[]
    connectOrCreate?: WinnerCreateOrConnectWithoutDrawInput | WinnerCreateOrConnectWithoutDrawInput[]
    createMany?: WinnerCreateManyDrawInputEnvelope
    connect?: WinnerWhereUniqueInput | WinnerWhereUniqueInput[]
  }

  export type ParticipantCreateNestedManyWithoutDrawInput = {
    create?: XOR<ParticipantCreateWithoutDrawInput, ParticipantUncheckedCreateWithoutDrawInput> | ParticipantCreateWithoutDrawInput[] | ParticipantUncheckedCreateWithoutDrawInput[]
    connectOrCreate?: ParticipantCreateOrConnectWithoutDrawInput | ParticipantCreateOrConnectWithoutDrawInput[]
    createMany?: ParticipantCreateManyDrawInputEnvelope
    connect?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
  }

  export type DrawUncheckedCreateNestedManyWithoutRolledOverFromInput = {
    create?: XOR<DrawCreateWithoutRolledOverFromInput, DrawUncheckedCreateWithoutRolledOverFromInput> | DrawCreateWithoutRolledOverFromInput[] | DrawUncheckedCreateWithoutRolledOverFromInput[]
    connectOrCreate?: DrawCreateOrConnectWithoutRolledOverFromInput | DrawCreateOrConnectWithoutRolledOverFromInput[]
    createMany?: DrawCreateManyRolledOverFromInputEnvelope
    connect?: DrawWhereUniqueInput | DrawWhereUniqueInput[]
  }

  export type WinnerUncheckedCreateNestedManyWithoutDrawInput = {
    create?: XOR<WinnerCreateWithoutDrawInput, WinnerUncheckedCreateWithoutDrawInput> | WinnerCreateWithoutDrawInput[] | WinnerUncheckedCreateWithoutDrawInput[]
    connectOrCreate?: WinnerCreateOrConnectWithoutDrawInput | WinnerCreateOrConnectWithoutDrawInput[]
    createMany?: WinnerCreateManyDrawInputEnvelope
    connect?: WinnerWhereUniqueInput | WinnerWhereUniqueInput[]
  }

  export type ParticipantUncheckedCreateNestedManyWithoutDrawInput = {
    create?: XOR<ParticipantCreateWithoutDrawInput, ParticipantUncheckedCreateWithoutDrawInput> | ParticipantCreateWithoutDrawInput[] | ParticipantUncheckedCreateWithoutDrawInput[]
    connectOrCreate?: ParticipantCreateOrConnectWithoutDrawInput | ParticipantCreateOrConnectWithoutDrawInput[]
    createMany?: ParticipantCreateManyDrawInputEnvelope
    connect?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
  }

  export type EnumDrawStatusFieldUpdateOperationsInput = {
    set?: $Enums.DrawStatus
  }

  export type UserUpdateOneRequiredWithoutDrawsNestedInput = {
    create?: XOR<UserCreateWithoutDrawsInput, UserUncheckedCreateWithoutDrawsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDrawsInput
    upsert?: UserUpsertWithoutDrawsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDrawsInput, UserUpdateWithoutDrawsInput>, UserUncheckedUpdateWithoutDrawsInput>
  }

  export type DrawUpdateOneWithoutRolledOverToNestedInput = {
    create?: XOR<DrawCreateWithoutRolledOverToInput, DrawUncheckedCreateWithoutRolledOverToInput>
    connectOrCreate?: DrawCreateOrConnectWithoutRolledOverToInput
    upsert?: DrawUpsertWithoutRolledOverToInput
    disconnect?: DrawWhereInput | boolean
    delete?: DrawWhereInput | boolean
    connect?: DrawWhereUniqueInput
    update?: XOR<XOR<DrawUpdateToOneWithWhereWithoutRolledOverToInput, DrawUpdateWithoutRolledOverToInput>, DrawUncheckedUpdateWithoutRolledOverToInput>
  }

  export type DrawUpdateManyWithoutRolledOverFromNestedInput = {
    create?: XOR<DrawCreateWithoutRolledOverFromInput, DrawUncheckedCreateWithoutRolledOverFromInput> | DrawCreateWithoutRolledOverFromInput[] | DrawUncheckedCreateWithoutRolledOverFromInput[]
    connectOrCreate?: DrawCreateOrConnectWithoutRolledOverFromInput | DrawCreateOrConnectWithoutRolledOverFromInput[]
    upsert?: DrawUpsertWithWhereUniqueWithoutRolledOverFromInput | DrawUpsertWithWhereUniqueWithoutRolledOverFromInput[]
    createMany?: DrawCreateManyRolledOverFromInputEnvelope
    set?: DrawWhereUniqueInput | DrawWhereUniqueInput[]
    disconnect?: DrawWhereUniqueInput | DrawWhereUniqueInput[]
    delete?: DrawWhereUniqueInput | DrawWhereUniqueInput[]
    connect?: DrawWhereUniqueInput | DrawWhereUniqueInput[]
    update?: DrawUpdateWithWhereUniqueWithoutRolledOverFromInput | DrawUpdateWithWhereUniqueWithoutRolledOverFromInput[]
    updateMany?: DrawUpdateManyWithWhereWithoutRolledOverFromInput | DrawUpdateManyWithWhereWithoutRolledOverFromInput[]
    deleteMany?: DrawScalarWhereInput | DrawScalarWhereInput[]
  }

  export type WinnerUpdateManyWithoutDrawNestedInput = {
    create?: XOR<WinnerCreateWithoutDrawInput, WinnerUncheckedCreateWithoutDrawInput> | WinnerCreateWithoutDrawInput[] | WinnerUncheckedCreateWithoutDrawInput[]
    connectOrCreate?: WinnerCreateOrConnectWithoutDrawInput | WinnerCreateOrConnectWithoutDrawInput[]
    upsert?: WinnerUpsertWithWhereUniqueWithoutDrawInput | WinnerUpsertWithWhereUniqueWithoutDrawInput[]
    createMany?: WinnerCreateManyDrawInputEnvelope
    set?: WinnerWhereUniqueInput | WinnerWhereUniqueInput[]
    disconnect?: WinnerWhereUniqueInput | WinnerWhereUniqueInput[]
    delete?: WinnerWhereUniqueInput | WinnerWhereUniqueInput[]
    connect?: WinnerWhereUniqueInput | WinnerWhereUniqueInput[]
    update?: WinnerUpdateWithWhereUniqueWithoutDrawInput | WinnerUpdateWithWhereUniqueWithoutDrawInput[]
    updateMany?: WinnerUpdateManyWithWhereWithoutDrawInput | WinnerUpdateManyWithWhereWithoutDrawInput[]
    deleteMany?: WinnerScalarWhereInput | WinnerScalarWhereInput[]
  }

  export type ParticipantUpdateManyWithoutDrawNestedInput = {
    create?: XOR<ParticipantCreateWithoutDrawInput, ParticipantUncheckedCreateWithoutDrawInput> | ParticipantCreateWithoutDrawInput[] | ParticipantUncheckedCreateWithoutDrawInput[]
    connectOrCreate?: ParticipantCreateOrConnectWithoutDrawInput | ParticipantCreateOrConnectWithoutDrawInput[]
    upsert?: ParticipantUpsertWithWhereUniqueWithoutDrawInput | ParticipantUpsertWithWhereUniqueWithoutDrawInput[]
    createMany?: ParticipantCreateManyDrawInputEnvelope
    set?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
    disconnect?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
    delete?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
    connect?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
    update?: ParticipantUpdateWithWhereUniqueWithoutDrawInput | ParticipantUpdateWithWhereUniqueWithoutDrawInput[]
    updateMany?: ParticipantUpdateManyWithWhereWithoutDrawInput | ParticipantUpdateManyWithWhereWithoutDrawInput[]
    deleteMany?: ParticipantScalarWhereInput | ParticipantScalarWhereInput[]
  }

  export type DrawUncheckedUpdateManyWithoutRolledOverFromNestedInput = {
    create?: XOR<DrawCreateWithoutRolledOverFromInput, DrawUncheckedCreateWithoutRolledOverFromInput> | DrawCreateWithoutRolledOverFromInput[] | DrawUncheckedCreateWithoutRolledOverFromInput[]
    connectOrCreate?: DrawCreateOrConnectWithoutRolledOverFromInput | DrawCreateOrConnectWithoutRolledOverFromInput[]
    upsert?: DrawUpsertWithWhereUniqueWithoutRolledOverFromInput | DrawUpsertWithWhereUniqueWithoutRolledOverFromInput[]
    createMany?: DrawCreateManyRolledOverFromInputEnvelope
    set?: DrawWhereUniqueInput | DrawWhereUniqueInput[]
    disconnect?: DrawWhereUniqueInput | DrawWhereUniqueInput[]
    delete?: DrawWhereUniqueInput | DrawWhereUniqueInput[]
    connect?: DrawWhereUniqueInput | DrawWhereUniqueInput[]
    update?: DrawUpdateWithWhereUniqueWithoutRolledOverFromInput | DrawUpdateWithWhereUniqueWithoutRolledOverFromInput[]
    updateMany?: DrawUpdateManyWithWhereWithoutRolledOverFromInput | DrawUpdateManyWithWhereWithoutRolledOverFromInput[]
    deleteMany?: DrawScalarWhereInput | DrawScalarWhereInput[]
  }

  export type WinnerUncheckedUpdateManyWithoutDrawNestedInput = {
    create?: XOR<WinnerCreateWithoutDrawInput, WinnerUncheckedCreateWithoutDrawInput> | WinnerCreateWithoutDrawInput[] | WinnerUncheckedCreateWithoutDrawInput[]
    connectOrCreate?: WinnerCreateOrConnectWithoutDrawInput | WinnerCreateOrConnectWithoutDrawInput[]
    upsert?: WinnerUpsertWithWhereUniqueWithoutDrawInput | WinnerUpsertWithWhereUniqueWithoutDrawInput[]
    createMany?: WinnerCreateManyDrawInputEnvelope
    set?: WinnerWhereUniqueInput | WinnerWhereUniqueInput[]
    disconnect?: WinnerWhereUniqueInput | WinnerWhereUniqueInput[]
    delete?: WinnerWhereUniqueInput | WinnerWhereUniqueInput[]
    connect?: WinnerWhereUniqueInput | WinnerWhereUniqueInput[]
    update?: WinnerUpdateWithWhereUniqueWithoutDrawInput | WinnerUpdateWithWhereUniqueWithoutDrawInput[]
    updateMany?: WinnerUpdateManyWithWhereWithoutDrawInput | WinnerUpdateManyWithWhereWithoutDrawInput[]
    deleteMany?: WinnerScalarWhereInput | WinnerScalarWhereInput[]
  }

  export type ParticipantUncheckedUpdateManyWithoutDrawNestedInput = {
    create?: XOR<ParticipantCreateWithoutDrawInput, ParticipantUncheckedCreateWithoutDrawInput> | ParticipantCreateWithoutDrawInput[] | ParticipantUncheckedCreateWithoutDrawInput[]
    connectOrCreate?: ParticipantCreateOrConnectWithoutDrawInput | ParticipantCreateOrConnectWithoutDrawInput[]
    upsert?: ParticipantUpsertWithWhereUniqueWithoutDrawInput | ParticipantUpsertWithWhereUniqueWithoutDrawInput[]
    createMany?: ParticipantCreateManyDrawInputEnvelope
    set?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
    disconnect?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
    delete?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
    connect?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
    update?: ParticipantUpdateWithWhereUniqueWithoutDrawInput | ParticipantUpdateWithWhereUniqueWithoutDrawInput[]
    updateMany?: ParticipantUpdateManyWithWhereWithoutDrawInput | ParticipantUpdateManyWithWhereWithoutDrawInput[]
    deleteMany?: ParticipantScalarWhereInput | ParticipantScalarWhereInput[]
  }

  export type DrawCreateNestedOneWithoutWinnersInput = {
    create?: XOR<DrawCreateWithoutWinnersInput, DrawUncheckedCreateWithoutWinnersInput>
    connectOrCreate?: DrawCreateOrConnectWithoutWinnersInput
    connect?: DrawWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutWinnersInput = {
    create?: XOR<UserCreateWithoutWinnersInput, UserUncheckedCreateWithoutWinnersInput>
    connectOrCreate?: UserCreateOrConnectWithoutWinnersInput
    connect?: UserWhereUniqueInput
  }

  export type EnumWinnerTypeFieldUpdateOperationsInput = {
    set?: $Enums.WinnerType
  }

  export type EnumVerificationStatusFieldUpdateOperationsInput = {
    set?: $Enums.VerificationStatus
  }

  export type EnumWinnerPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.WinnerPaymentStatus
  }

  export type DrawUpdateOneRequiredWithoutWinnersNestedInput = {
    create?: XOR<DrawCreateWithoutWinnersInput, DrawUncheckedCreateWithoutWinnersInput>
    connectOrCreate?: DrawCreateOrConnectWithoutWinnersInput
    upsert?: DrawUpsertWithoutWinnersInput
    connect?: DrawWhereUniqueInput
    update?: XOR<XOR<DrawUpdateToOneWithWhereWithoutWinnersInput, DrawUpdateWithoutWinnersInput>, DrawUncheckedUpdateWithoutWinnersInput>
  }

  export type UserUpdateOneRequiredWithoutWinnersNestedInput = {
    create?: XOR<UserCreateWithoutWinnersInput, UserUncheckedCreateWithoutWinnersInput>
    connectOrCreate?: UserCreateOrConnectWithoutWinnersInput
    upsert?: UserUpsertWithoutWinnersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWinnersInput, UserUpdateWithoutWinnersInput>, UserUncheckedUpdateWithoutWinnersInput>
  }

  export type DrawCreateNestedOneWithoutParticipantsInput = {
    create?: XOR<DrawCreateWithoutParticipantsInput, DrawUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: DrawCreateOrConnectWithoutParticipantsInput
    connect?: DrawWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutParticipantsInput = {
    create?: XOR<UserCreateWithoutParticipantsInput, UserUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: UserCreateOrConnectWithoutParticipantsInput
    connect?: UserWhereUniqueInput
  }

  export type DrawUpdateOneRequiredWithoutParticipantsNestedInput = {
    create?: XOR<DrawCreateWithoutParticipantsInput, DrawUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: DrawCreateOrConnectWithoutParticipantsInput
    upsert?: DrawUpsertWithoutParticipantsInput
    connect?: DrawWhereUniqueInput
    update?: XOR<XOR<DrawUpdateToOneWithWhereWithoutParticipantsInput, DrawUpdateWithoutParticipantsInput>, DrawUncheckedUpdateWithoutParticipantsInput>
  }

  export type UserUpdateOneRequiredWithoutParticipantsNestedInput = {
    create?: XOR<UserCreateWithoutParticipantsInput, UserUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: UserCreateOrConnectWithoutParticipantsInput
    upsert?: UserUpsertWithoutParticipantsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutParticipantsInput, UserUpdateWithoutParticipantsInput>, UserUncheckedUpdateWithoutParticipantsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedEnumAuthProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthProvider | EnumAuthProviderFieldRefInput<$PrismaModel>
    in?: $Enums.AuthProvider[] | ListEnumAuthProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuthProvider[] | ListEnumAuthProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumAuthProviderFilter<$PrismaModel> | $Enums.AuthProvider
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedEnumAuthProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthProvider | EnumAuthProviderFieldRefInput<$PrismaModel>
    in?: $Enums.AuthProvider[] | ListEnumAuthProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuthProvider[] | ListEnumAuthProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumAuthProviderWithAggregatesFilter<$PrismaModel> | $Enums.AuthProvider
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuthProviderFilter<$PrismaModel>
    _max?: NestedEnumAuthProviderFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumCharityContributionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CharityContributionType | EnumCharityContributionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CharityContributionType[] | ListEnumCharityContributionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CharityContributionType[] | ListEnumCharityContributionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCharityContributionTypeFilter<$PrismaModel> | $Enums.CharityContributionType
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumCharityStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CharityStatus | EnumCharityStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CharityStatus[] | ListEnumCharityStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CharityStatus[] | ListEnumCharityStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCharityStatusFilter<$PrismaModel> | $Enums.CharityStatus
  }

  export type NestedEnumCharityContributionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CharityContributionType | EnumCharityContributionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CharityContributionType[] | ListEnumCharityContributionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CharityContributionType[] | ListEnumCharityContributionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCharityContributionTypeWithAggregatesFilter<$PrismaModel> | $Enums.CharityContributionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCharityContributionTypeFilter<$PrismaModel>
    _max?: NestedEnumCharityContributionTypeFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumCharityStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CharityStatus | EnumCharityStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CharityStatus[] | ListEnumCharityStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CharityStatus[] | ListEnumCharityStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCharityStatusWithAggregatesFilter<$PrismaModel> | $Enums.CharityStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCharityStatusFilter<$PrismaModel>
    _max?: NestedEnumCharityStatusFilter<$PrismaModel>
  }

  export type NestedEnumPaymentGatewayFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentGateway | EnumPaymentGatewayFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentGateway[] | ListEnumPaymentGatewayFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentGateway[] | ListEnumPaymentGatewayFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentGatewayFilter<$PrismaModel> | $Enums.PaymentGateway
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedEnumPaymentGatewayWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentGateway | EnumPaymentGatewayFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentGateway[] | ListEnumPaymentGatewayFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentGateway[] | ListEnumPaymentGatewayFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentGatewayWithAggregatesFilter<$PrismaModel> | $Enums.PaymentGateway
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentGatewayFilter<$PrismaModel>
    _max?: NestedEnumPaymentGatewayFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type NestedEnumDrawStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DrawStatus | EnumDrawStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DrawStatus[] | ListEnumDrawStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DrawStatus[] | ListEnumDrawStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDrawStatusFilter<$PrismaModel> | $Enums.DrawStatus
  }

  export type NestedEnumDrawStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DrawStatus | EnumDrawStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DrawStatus[] | ListEnumDrawStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DrawStatus[] | ListEnumDrawStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDrawStatusWithAggregatesFilter<$PrismaModel> | $Enums.DrawStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDrawStatusFilter<$PrismaModel>
    _max?: NestedEnumDrawStatusFilter<$PrismaModel>
  }

  export type NestedEnumWinnerTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.WinnerType | EnumWinnerTypeFieldRefInput<$PrismaModel>
    in?: $Enums.WinnerType[] | ListEnumWinnerTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.WinnerType[] | ListEnumWinnerTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumWinnerTypeFilter<$PrismaModel> | $Enums.WinnerType
  }

  export type NestedEnumVerificationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.VerificationStatus | EnumVerificationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VerificationStatus[] | ListEnumVerificationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VerificationStatus[] | ListEnumVerificationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVerificationStatusFilter<$PrismaModel> | $Enums.VerificationStatus
  }

  export type NestedEnumWinnerPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.WinnerPaymentStatus | EnumWinnerPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WinnerPaymentStatus[] | ListEnumWinnerPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WinnerPaymentStatus[] | ListEnumWinnerPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWinnerPaymentStatusFilter<$PrismaModel> | $Enums.WinnerPaymentStatus
  }

  export type NestedEnumWinnerTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WinnerType | EnumWinnerTypeFieldRefInput<$PrismaModel>
    in?: $Enums.WinnerType[] | ListEnumWinnerTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.WinnerType[] | ListEnumWinnerTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumWinnerTypeWithAggregatesFilter<$PrismaModel> | $Enums.WinnerType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWinnerTypeFilter<$PrismaModel>
    _max?: NestedEnumWinnerTypeFilter<$PrismaModel>
  }

  export type NestedEnumVerificationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VerificationStatus | EnumVerificationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VerificationStatus[] | ListEnumVerificationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VerificationStatus[] | ListEnumVerificationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVerificationStatusWithAggregatesFilter<$PrismaModel> | $Enums.VerificationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVerificationStatusFilter<$PrismaModel>
    _max?: NestedEnumVerificationStatusFilter<$PrismaModel>
  }

  export type NestedEnumWinnerPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WinnerPaymentStatus | EnumWinnerPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WinnerPaymentStatus[] | ListEnumWinnerPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WinnerPaymentStatus[] | ListEnumWinnerPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWinnerPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.WinnerPaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWinnerPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumWinnerPaymentStatusFilter<$PrismaModel>
  }

  export type GolfScoreCreateWithoutUserInput = {
    id?: string
    score: number
    playedOn: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GolfScoreUncheckedCreateWithoutUserInput = {
    id?: string
    score: number
    playedOn: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GolfScoreCreateOrConnectWithoutUserInput = {
    where: GolfScoreWhereUniqueInput
    create: XOR<GolfScoreCreateWithoutUserInput, GolfScoreUncheckedCreateWithoutUserInput>
  }

  export type GolfScoreCreateManyUserInputEnvelope = {
    data: GolfScoreCreateManyUserInput | GolfScoreCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserCharityCreateWithoutUserInput = {
    id?: string
    type: $Enums.CharityContributionType
    percentage?: Decimal | DecimalJsLike | number | string | null
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    month?: number | null
    year?: number | null
    status?: $Enums.CharityStatus
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subscription: SubscriptionOrderCreateNestedOneWithoutUserCharitiesInput
    charity: CharityCreateNestedOneWithoutUserCharitiesInput
  }

  export type UserCharityUncheckedCreateWithoutUserInput = {
    id?: string
    charityId: string
    subscriptionId: string
    type: $Enums.CharityContributionType
    percentage?: Decimal | DecimalJsLike | number | string | null
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    month?: number | null
    year?: number | null
    status?: $Enums.CharityStatus
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCharityCreateOrConnectWithoutUserInput = {
    where: UserCharityWhereUniqueInput
    create: XOR<UserCharityCreateWithoutUserInput, UserCharityUncheckedCreateWithoutUserInput>
  }

  export type UserCharityCreateManyUserInputEnvelope = {
    data: UserCharityCreateManyUserInput | UserCharityCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SubscriptionOrderCreateWithoutUserInput = {
    id?: string
    periodStart: Date | string
    periodEnd: Date | string
    stripeSessionId?: string | null
    stripePaymentIntentId?: string | null
    stripeCustomerId?: string | null
    stripeClientSecret?: string | null
    stripeEventId?: string | null
    paymentGateway?: $Enums.PaymentGateway
    amount: number
    currency?: string
    status?: $Enums.PaymentStatus
    failReason?: string | null
    completedAt?: Date | string | null
    cancelledAt?: Date | string | null
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriptionModel: SubscriptionModelCreateNestedOneWithoutSubscriptionOrdersInput
    userCharities?: UserCharityCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionOrderUncheckedCreateWithoutUserInput = {
    id?: string
    subscriptionModelId: string
    periodStart: Date | string
    periodEnd: Date | string
    stripeSessionId?: string | null
    stripePaymentIntentId?: string | null
    stripeCustomerId?: string | null
    stripeClientSecret?: string | null
    stripeEventId?: string | null
    paymentGateway?: $Enums.PaymentGateway
    amount: number
    currency?: string
    status?: $Enums.PaymentStatus
    failReason?: string | null
    completedAt?: Date | string | null
    cancelledAt?: Date | string | null
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userCharities?: UserCharityUncheckedCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionOrderCreateOrConnectWithoutUserInput = {
    where: SubscriptionOrderWhereUniqueInput
    create: XOR<SubscriptionOrderCreateWithoutUserInput, SubscriptionOrderUncheckedCreateWithoutUserInput>
  }

  export type SubscriptionOrderCreateManyUserInputEnvelope = {
    data: SubscriptionOrderCreateManyUserInput | SubscriptionOrderCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DrawCreateWithoutAdminInput = {
    id?: string
    prizePool: number
    currency?: string
    entryStartDate: Date | string
    lastEntryDate: Date | string
    resultDate: Date | string
    drawNumber?: string | null
    status?: $Enums.DrawStatus
    fiveMatchPct?: number
    fourMatchPct?: number
    threeMatchPct?: number
    jackpotRolledOver?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    rolledOverFrom?: DrawCreateNestedOneWithoutRolledOverToInput
    rolledOverTo?: DrawCreateNestedManyWithoutRolledOverFromInput
    winners?: WinnerCreateNestedManyWithoutDrawInput
    participants?: ParticipantCreateNestedManyWithoutDrawInput
  }

  export type DrawUncheckedCreateWithoutAdminInput = {
    id?: string
    prizePool: number
    currency?: string
    entryStartDate: Date | string
    lastEntryDate: Date | string
    resultDate: Date | string
    drawNumber?: string | null
    status?: $Enums.DrawStatus
    fiveMatchPct?: number
    fourMatchPct?: number
    threeMatchPct?: number
    jackpotRolledOver?: boolean
    rolledOverFromId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rolledOverTo?: DrawUncheckedCreateNestedManyWithoutRolledOverFromInput
    winners?: WinnerUncheckedCreateNestedManyWithoutDrawInput
    participants?: ParticipantUncheckedCreateNestedManyWithoutDrawInput
  }

  export type DrawCreateOrConnectWithoutAdminInput = {
    where: DrawWhereUniqueInput
    create: XOR<DrawCreateWithoutAdminInput, DrawUncheckedCreateWithoutAdminInput>
  }

  export type DrawCreateManyAdminInputEnvelope = {
    data: DrawCreateManyAdminInput | DrawCreateManyAdminInput[]
    skipDuplicates?: boolean
  }

  export type WinnerCreateWithoutUserInput = {
    id?: string
    winnerType: $Enums.WinnerType
    winnerScore: string
    verificationStatus?: $Enums.VerificationStatus
    paymentStatus?: $Enums.WinnerPaymentStatus
    proofImage?: string | null
    prizeAmount?: number | null
    adminNotes?: string | null
    verifiedAt?: Date | string | null
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    draw: DrawCreateNestedOneWithoutWinnersInput
  }

  export type WinnerUncheckedCreateWithoutUserInput = {
    id?: string
    drawId: string
    winnerType: $Enums.WinnerType
    winnerScore: string
    verificationStatus?: $Enums.VerificationStatus
    paymentStatus?: $Enums.WinnerPaymentStatus
    proofImage?: string | null
    prizeAmount?: number | null
    adminNotes?: string | null
    verifiedAt?: Date | string | null
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WinnerCreateOrConnectWithoutUserInput = {
    where: WinnerWhereUniqueInput
    create: XOR<WinnerCreateWithoutUserInput, WinnerUncheckedCreateWithoutUserInput>
  }

  export type WinnerCreateManyUserInputEnvelope = {
    data: WinnerCreateManyUserInput | WinnerCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ParticipantCreateWithoutUserInput = {
    id?: string
    score: string
    createdAt?: Date | string
    updatedAt?: Date | string
    draw: DrawCreateNestedOneWithoutParticipantsInput
  }

  export type ParticipantUncheckedCreateWithoutUserInput = {
    id?: string
    drawId: string
    score: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParticipantCreateOrConnectWithoutUserInput = {
    where: ParticipantWhereUniqueInput
    create: XOR<ParticipantCreateWithoutUserInput, ParticipantUncheckedCreateWithoutUserInput>
  }

  export type ParticipantCreateManyUserInputEnvelope = {
    data: ParticipantCreateManyUserInput | ParticipantCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type GolfScoreUpsertWithWhereUniqueWithoutUserInput = {
    where: GolfScoreWhereUniqueInput
    update: XOR<GolfScoreUpdateWithoutUserInput, GolfScoreUncheckedUpdateWithoutUserInput>
    create: XOR<GolfScoreCreateWithoutUserInput, GolfScoreUncheckedCreateWithoutUserInput>
  }

  export type GolfScoreUpdateWithWhereUniqueWithoutUserInput = {
    where: GolfScoreWhereUniqueInput
    data: XOR<GolfScoreUpdateWithoutUserInput, GolfScoreUncheckedUpdateWithoutUserInput>
  }

  export type GolfScoreUpdateManyWithWhereWithoutUserInput = {
    where: GolfScoreScalarWhereInput
    data: XOR<GolfScoreUpdateManyMutationInput, GolfScoreUncheckedUpdateManyWithoutUserInput>
  }

  export type GolfScoreScalarWhereInput = {
    AND?: GolfScoreScalarWhereInput | GolfScoreScalarWhereInput[]
    OR?: GolfScoreScalarWhereInput[]
    NOT?: GolfScoreScalarWhereInput | GolfScoreScalarWhereInput[]
    id?: StringFilter<"GolfScore"> | string
    userId?: StringFilter<"GolfScore"> | string
    score?: IntFilter<"GolfScore"> | number
    playedOn?: DateTimeFilter<"GolfScore"> | Date | string
    createdAt?: DateTimeFilter<"GolfScore"> | Date | string
    updatedAt?: DateTimeFilter<"GolfScore"> | Date | string
  }

  export type UserCharityUpsertWithWhereUniqueWithoutUserInput = {
    where: UserCharityWhereUniqueInput
    update: XOR<UserCharityUpdateWithoutUserInput, UserCharityUncheckedUpdateWithoutUserInput>
    create: XOR<UserCharityCreateWithoutUserInput, UserCharityUncheckedCreateWithoutUserInput>
  }

  export type UserCharityUpdateWithWhereUniqueWithoutUserInput = {
    where: UserCharityWhereUniqueInput
    data: XOR<UserCharityUpdateWithoutUserInput, UserCharityUncheckedUpdateWithoutUserInput>
  }

  export type UserCharityUpdateManyWithWhereWithoutUserInput = {
    where: UserCharityScalarWhereInput
    data: XOR<UserCharityUpdateManyMutationInput, UserCharityUncheckedUpdateManyWithoutUserInput>
  }

  export type UserCharityScalarWhereInput = {
    AND?: UserCharityScalarWhereInput | UserCharityScalarWhereInput[]
    OR?: UserCharityScalarWhereInput[]
    NOT?: UserCharityScalarWhereInput | UserCharityScalarWhereInput[]
    id?: StringFilter<"UserCharity"> | string
    userId?: StringFilter<"UserCharity"> | string
    charityId?: StringFilter<"UserCharity"> | string
    subscriptionId?: StringFilter<"UserCharity"> | string
    type?: EnumCharityContributionTypeFilter<"UserCharity"> | $Enums.CharityContributionType
    percentage?: DecimalNullableFilter<"UserCharity"> | Decimal | DecimalJsLike | number | string | null
    amount?: DecimalFilter<"UserCharity"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"UserCharity"> | string
    month?: IntNullableFilter<"UserCharity"> | number | null
    year?: IntNullableFilter<"UserCharity"> | number | null
    status?: EnumCharityStatusFilter<"UserCharity"> | $Enums.CharityStatus
    paidAt?: DateTimeNullableFilter<"UserCharity"> | Date | string | null
    createdAt?: DateTimeFilter<"UserCharity"> | Date | string
    updatedAt?: DateTimeFilter<"UserCharity"> | Date | string
  }

  export type SubscriptionOrderUpsertWithWhereUniqueWithoutUserInput = {
    where: SubscriptionOrderWhereUniqueInput
    update: XOR<SubscriptionOrderUpdateWithoutUserInput, SubscriptionOrderUncheckedUpdateWithoutUserInput>
    create: XOR<SubscriptionOrderCreateWithoutUserInput, SubscriptionOrderUncheckedCreateWithoutUserInput>
  }

  export type SubscriptionOrderUpdateWithWhereUniqueWithoutUserInput = {
    where: SubscriptionOrderWhereUniqueInput
    data: XOR<SubscriptionOrderUpdateWithoutUserInput, SubscriptionOrderUncheckedUpdateWithoutUserInput>
  }

  export type SubscriptionOrderUpdateManyWithWhereWithoutUserInput = {
    where: SubscriptionOrderScalarWhereInput
    data: XOR<SubscriptionOrderUpdateManyMutationInput, SubscriptionOrderUncheckedUpdateManyWithoutUserInput>
  }

  export type SubscriptionOrderScalarWhereInput = {
    AND?: SubscriptionOrderScalarWhereInput | SubscriptionOrderScalarWhereInput[]
    OR?: SubscriptionOrderScalarWhereInput[]
    NOT?: SubscriptionOrderScalarWhereInput | SubscriptionOrderScalarWhereInput[]
    id?: StringFilter<"SubscriptionOrder"> | string
    subscriptionModelId?: StringFilter<"SubscriptionOrder"> | string
    userId?: StringFilter<"SubscriptionOrder"> | string
    periodStart?: DateTimeFilter<"SubscriptionOrder"> | Date | string
    periodEnd?: DateTimeFilter<"SubscriptionOrder"> | Date | string
    stripeSessionId?: StringNullableFilter<"SubscriptionOrder"> | string | null
    stripePaymentIntentId?: StringNullableFilter<"SubscriptionOrder"> | string | null
    stripeCustomerId?: StringNullableFilter<"SubscriptionOrder"> | string | null
    stripeClientSecret?: StringNullableFilter<"SubscriptionOrder"> | string | null
    stripeEventId?: StringNullableFilter<"SubscriptionOrder"> | string | null
    paymentGateway?: EnumPaymentGatewayFilter<"SubscriptionOrder"> | $Enums.PaymentGateway
    amount?: IntFilter<"SubscriptionOrder"> | number
    currency?: StringFilter<"SubscriptionOrder"> | string
    status?: EnumPaymentStatusFilter<"SubscriptionOrder"> | $Enums.PaymentStatus
    failReason?: StringNullableFilter<"SubscriptionOrder"> | string | null
    completedAt?: DateTimeNullableFilter<"SubscriptionOrder"> | Date | string | null
    cancelledAt?: DateTimeNullableFilter<"SubscriptionOrder"> | Date | string | null
    ipAddress?: StringNullableFilter<"SubscriptionOrder"> | string | null
    userAgent?: StringNullableFilter<"SubscriptionOrder"> | string | null
    createdAt?: DateTimeFilter<"SubscriptionOrder"> | Date | string
    updatedAt?: DateTimeFilter<"SubscriptionOrder"> | Date | string
  }

  export type DrawUpsertWithWhereUniqueWithoutAdminInput = {
    where: DrawWhereUniqueInput
    update: XOR<DrawUpdateWithoutAdminInput, DrawUncheckedUpdateWithoutAdminInput>
    create: XOR<DrawCreateWithoutAdminInput, DrawUncheckedCreateWithoutAdminInput>
  }

  export type DrawUpdateWithWhereUniqueWithoutAdminInput = {
    where: DrawWhereUniqueInput
    data: XOR<DrawUpdateWithoutAdminInput, DrawUncheckedUpdateWithoutAdminInput>
  }

  export type DrawUpdateManyWithWhereWithoutAdminInput = {
    where: DrawScalarWhereInput
    data: XOR<DrawUpdateManyMutationInput, DrawUncheckedUpdateManyWithoutAdminInput>
  }

  export type DrawScalarWhereInput = {
    AND?: DrawScalarWhereInput | DrawScalarWhereInput[]
    OR?: DrawScalarWhereInput[]
    NOT?: DrawScalarWhereInput | DrawScalarWhereInput[]
    id?: StringFilter<"Draw"> | string
    adminId?: StringFilter<"Draw"> | string
    prizePool?: IntFilter<"Draw"> | number
    currency?: StringFilter<"Draw"> | string
    entryStartDate?: DateTimeFilter<"Draw"> | Date | string
    lastEntryDate?: DateTimeFilter<"Draw"> | Date | string
    resultDate?: DateTimeFilter<"Draw"> | Date | string
    drawNumber?: StringNullableFilter<"Draw"> | string | null
    status?: EnumDrawStatusFilter<"Draw"> | $Enums.DrawStatus
    fiveMatchPct?: IntFilter<"Draw"> | number
    fourMatchPct?: IntFilter<"Draw"> | number
    threeMatchPct?: IntFilter<"Draw"> | number
    jackpotRolledOver?: BoolFilter<"Draw"> | boolean
    rolledOverFromId?: StringNullableFilter<"Draw"> | string | null
    createdAt?: DateTimeFilter<"Draw"> | Date | string
    updatedAt?: DateTimeFilter<"Draw"> | Date | string
  }

  export type WinnerUpsertWithWhereUniqueWithoutUserInput = {
    where: WinnerWhereUniqueInput
    update: XOR<WinnerUpdateWithoutUserInput, WinnerUncheckedUpdateWithoutUserInput>
    create: XOR<WinnerCreateWithoutUserInput, WinnerUncheckedCreateWithoutUserInput>
  }

  export type WinnerUpdateWithWhereUniqueWithoutUserInput = {
    where: WinnerWhereUniqueInput
    data: XOR<WinnerUpdateWithoutUserInput, WinnerUncheckedUpdateWithoutUserInput>
  }

  export type WinnerUpdateManyWithWhereWithoutUserInput = {
    where: WinnerScalarWhereInput
    data: XOR<WinnerUpdateManyMutationInput, WinnerUncheckedUpdateManyWithoutUserInput>
  }

  export type WinnerScalarWhereInput = {
    AND?: WinnerScalarWhereInput | WinnerScalarWhereInput[]
    OR?: WinnerScalarWhereInput[]
    NOT?: WinnerScalarWhereInput | WinnerScalarWhereInput[]
    id?: StringFilter<"Winner"> | string
    drawId?: StringFilter<"Winner"> | string
    userId?: StringFilter<"Winner"> | string
    winnerType?: EnumWinnerTypeFilter<"Winner"> | $Enums.WinnerType
    winnerScore?: StringFilter<"Winner"> | string
    verificationStatus?: EnumVerificationStatusFilter<"Winner"> | $Enums.VerificationStatus
    paymentStatus?: EnumWinnerPaymentStatusFilter<"Winner"> | $Enums.WinnerPaymentStatus
    proofImage?: StringNullableFilter<"Winner"> | string | null
    prizeAmount?: IntNullableFilter<"Winner"> | number | null
    adminNotes?: StringNullableFilter<"Winner"> | string | null
    verifiedAt?: DateTimeNullableFilter<"Winner"> | Date | string | null
    paidAt?: DateTimeNullableFilter<"Winner"> | Date | string | null
    createdAt?: DateTimeFilter<"Winner"> | Date | string
    updatedAt?: DateTimeFilter<"Winner"> | Date | string
  }

  export type ParticipantUpsertWithWhereUniqueWithoutUserInput = {
    where: ParticipantWhereUniqueInput
    update: XOR<ParticipantUpdateWithoutUserInput, ParticipantUncheckedUpdateWithoutUserInput>
    create: XOR<ParticipantCreateWithoutUserInput, ParticipantUncheckedCreateWithoutUserInput>
  }

  export type ParticipantUpdateWithWhereUniqueWithoutUserInput = {
    where: ParticipantWhereUniqueInput
    data: XOR<ParticipantUpdateWithoutUserInput, ParticipantUncheckedUpdateWithoutUserInput>
  }

  export type ParticipantUpdateManyWithWhereWithoutUserInput = {
    where: ParticipantScalarWhereInput
    data: XOR<ParticipantUpdateManyMutationInput, ParticipantUncheckedUpdateManyWithoutUserInput>
  }

  export type ParticipantScalarWhereInput = {
    AND?: ParticipantScalarWhereInput | ParticipantScalarWhereInput[]
    OR?: ParticipantScalarWhereInput[]
    NOT?: ParticipantScalarWhereInput | ParticipantScalarWhereInput[]
    id?: StringFilter<"Participant"> | string
    drawId?: StringFilter<"Participant"> | string
    userId?: StringFilter<"Participant"> | string
    score?: StringFilter<"Participant"> | string
    createdAt?: DateTimeFilter<"Participant"> | Date | string
    updatedAt?: DateTimeFilter<"Participant"> | Date | string
  }

  export type CharityImageCreateWithoutCharityInput = {
    id?: string
    url: string
    altText?: string | null
    order?: number
    createdAt?: Date | string
  }

  export type CharityImageUncheckedCreateWithoutCharityInput = {
    id?: string
    url: string
    altText?: string | null
    order?: number
    createdAt?: Date | string
  }

  export type CharityImageCreateOrConnectWithoutCharityInput = {
    where: CharityImageWhereUniqueInput
    create: XOR<CharityImageCreateWithoutCharityInput, CharityImageUncheckedCreateWithoutCharityInput>
  }

  export type CharityImageCreateManyCharityInputEnvelope = {
    data: CharityImageCreateManyCharityInput | CharityImageCreateManyCharityInput[]
    skipDuplicates?: boolean
  }

  export type UserCharityCreateWithoutCharityInput = {
    id?: string
    type: $Enums.CharityContributionType
    percentage?: Decimal | DecimalJsLike | number | string | null
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    month?: number | null
    year?: number | null
    status?: $Enums.CharityStatus
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subscription: SubscriptionOrderCreateNestedOneWithoutUserCharitiesInput
    user: UserCreateNestedOneWithoutUserCharitiesInput
  }

  export type UserCharityUncheckedCreateWithoutCharityInput = {
    id?: string
    userId: string
    subscriptionId: string
    type: $Enums.CharityContributionType
    percentage?: Decimal | DecimalJsLike | number | string | null
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    month?: number | null
    year?: number | null
    status?: $Enums.CharityStatus
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCharityCreateOrConnectWithoutCharityInput = {
    where: UserCharityWhereUniqueInput
    create: XOR<UserCharityCreateWithoutCharityInput, UserCharityUncheckedCreateWithoutCharityInput>
  }

  export type UserCharityCreateManyCharityInputEnvelope = {
    data: UserCharityCreateManyCharityInput | UserCharityCreateManyCharityInput[]
    skipDuplicates?: boolean
  }

  export type CharityImageUpsertWithWhereUniqueWithoutCharityInput = {
    where: CharityImageWhereUniqueInput
    update: XOR<CharityImageUpdateWithoutCharityInput, CharityImageUncheckedUpdateWithoutCharityInput>
    create: XOR<CharityImageCreateWithoutCharityInput, CharityImageUncheckedCreateWithoutCharityInput>
  }

  export type CharityImageUpdateWithWhereUniqueWithoutCharityInput = {
    where: CharityImageWhereUniqueInput
    data: XOR<CharityImageUpdateWithoutCharityInput, CharityImageUncheckedUpdateWithoutCharityInput>
  }

  export type CharityImageUpdateManyWithWhereWithoutCharityInput = {
    where: CharityImageScalarWhereInput
    data: XOR<CharityImageUpdateManyMutationInput, CharityImageUncheckedUpdateManyWithoutCharityInput>
  }

  export type CharityImageScalarWhereInput = {
    AND?: CharityImageScalarWhereInput | CharityImageScalarWhereInput[]
    OR?: CharityImageScalarWhereInput[]
    NOT?: CharityImageScalarWhereInput | CharityImageScalarWhereInput[]
    id?: StringFilter<"CharityImage"> | string
    charityId?: StringFilter<"CharityImage"> | string
    url?: StringFilter<"CharityImage"> | string
    altText?: StringNullableFilter<"CharityImage"> | string | null
    order?: IntFilter<"CharityImage"> | number
    createdAt?: DateTimeFilter<"CharityImage"> | Date | string
  }

  export type UserCharityUpsertWithWhereUniqueWithoutCharityInput = {
    where: UserCharityWhereUniqueInput
    update: XOR<UserCharityUpdateWithoutCharityInput, UserCharityUncheckedUpdateWithoutCharityInput>
    create: XOR<UserCharityCreateWithoutCharityInput, UserCharityUncheckedCreateWithoutCharityInput>
  }

  export type UserCharityUpdateWithWhereUniqueWithoutCharityInput = {
    where: UserCharityWhereUniqueInput
    data: XOR<UserCharityUpdateWithoutCharityInput, UserCharityUncheckedUpdateWithoutCharityInput>
  }

  export type UserCharityUpdateManyWithWhereWithoutCharityInput = {
    where: UserCharityScalarWhereInput
    data: XOR<UserCharityUpdateManyMutationInput, UserCharityUncheckedUpdateManyWithoutCharityInput>
  }

  export type CharityCreateWithoutImagesInput = {
    id?: string
    name: string
    slug: string
    description: string
    logoUrl?: string | null
    websiteUrl?: string | null
    isFeatured?: boolean
    isActive?: boolean
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userCharities?: UserCharityCreateNestedManyWithoutCharityInput
  }

  export type CharityUncheckedCreateWithoutImagesInput = {
    id?: string
    name: string
    slug: string
    description: string
    logoUrl?: string | null
    websiteUrl?: string | null
    isFeatured?: boolean
    isActive?: boolean
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userCharities?: UserCharityUncheckedCreateNestedManyWithoutCharityInput
  }

  export type CharityCreateOrConnectWithoutImagesInput = {
    where: CharityWhereUniqueInput
    create: XOR<CharityCreateWithoutImagesInput, CharityUncheckedCreateWithoutImagesInput>
  }

  export type CharityUpsertWithoutImagesInput = {
    update: XOR<CharityUpdateWithoutImagesInput, CharityUncheckedUpdateWithoutImagesInput>
    create: XOR<CharityCreateWithoutImagesInput, CharityUncheckedCreateWithoutImagesInput>
    where?: CharityWhereInput
  }

  export type CharityUpdateToOneWithWhereWithoutImagesInput = {
    where?: CharityWhereInput
    data: XOR<CharityUpdateWithoutImagesInput, CharityUncheckedUpdateWithoutImagesInput>
  }

  export type CharityUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userCharities?: UserCharityUpdateManyWithoutCharityNestedInput
  }

  export type CharityUncheckedUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userCharities?: UserCharityUncheckedUpdateManyWithoutCharityNestedInput
  }

  export type SubscriptionOrderCreateWithoutUserCharitiesInput = {
    id?: string
    periodStart: Date | string
    periodEnd: Date | string
    stripeSessionId?: string | null
    stripePaymentIntentId?: string | null
    stripeCustomerId?: string | null
    stripeClientSecret?: string | null
    stripeEventId?: string | null
    paymentGateway?: $Enums.PaymentGateway
    amount: number
    currency?: string
    status?: $Enums.PaymentStatus
    failReason?: string | null
    completedAt?: Date | string | null
    cancelledAt?: Date | string | null
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriptionModel: SubscriptionModelCreateNestedOneWithoutSubscriptionOrdersInput
    user: UserCreateNestedOneWithoutSubcriptionsInput
  }

  export type SubscriptionOrderUncheckedCreateWithoutUserCharitiesInput = {
    id?: string
    subscriptionModelId: string
    userId: string
    periodStart: Date | string
    periodEnd: Date | string
    stripeSessionId?: string | null
    stripePaymentIntentId?: string | null
    stripeCustomerId?: string | null
    stripeClientSecret?: string | null
    stripeEventId?: string | null
    paymentGateway?: $Enums.PaymentGateway
    amount: number
    currency?: string
    status?: $Enums.PaymentStatus
    failReason?: string | null
    completedAt?: Date | string | null
    cancelledAt?: Date | string | null
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionOrderCreateOrConnectWithoutUserCharitiesInput = {
    where: SubscriptionOrderWhereUniqueInput
    create: XOR<SubscriptionOrderCreateWithoutUserCharitiesInput, SubscriptionOrderUncheckedCreateWithoutUserCharitiesInput>
  }

  export type UserCreateWithoutUserCharitiesInput = {
    id?: string
    publicId?: string
    email: string
    password?: string | null
    role?: $Enums.UserRole
    authProvider?: $Enums.AuthProvider
    googleId?: string | null
    resetPasswordToken?: string | null
    resetPasswordTokenExpires?: Date | string | null
    twoFactorSecret?: string | null
    twoFactorEnabled?: boolean
    profilePicture?: string | null
    userName: string
    firstName?: string | null
    lastName?: string | null
    phoneNumber?: string | null
    dateOfBirth?: Date | string | null
    lastLoginAt?: Date | string | null
    lastLoginIp?: string | null
    loginAttempts?: number
    lockedUntil?: Date | string | null
    isActive?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    scores?: GolfScoreCreateNestedManyWithoutUserInput
    subcriptions?: SubscriptionOrderCreateNestedManyWithoutUserInput
    draws?: DrawCreateNestedManyWithoutAdminInput
    winners?: WinnerCreateNestedManyWithoutUserInput
    participants?: ParticipantCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserCharitiesInput = {
    id?: string
    publicId?: string
    email: string
    password?: string | null
    role?: $Enums.UserRole
    authProvider?: $Enums.AuthProvider
    googleId?: string | null
    resetPasswordToken?: string | null
    resetPasswordTokenExpires?: Date | string | null
    twoFactorSecret?: string | null
    twoFactorEnabled?: boolean
    profilePicture?: string | null
    userName: string
    firstName?: string | null
    lastName?: string | null
    phoneNumber?: string | null
    dateOfBirth?: Date | string | null
    lastLoginAt?: Date | string | null
    lastLoginIp?: string | null
    loginAttempts?: number
    lockedUntil?: Date | string | null
    isActive?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    scores?: GolfScoreUncheckedCreateNestedManyWithoutUserInput
    subcriptions?: SubscriptionOrderUncheckedCreateNestedManyWithoutUserInput
    draws?: DrawUncheckedCreateNestedManyWithoutAdminInput
    winners?: WinnerUncheckedCreateNestedManyWithoutUserInput
    participants?: ParticipantUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserCharitiesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserCharitiesInput, UserUncheckedCreateWithoutUserCharitiesInput>
  }

  export type CharityCreateWithoutUserCharitiesInput = {
    id?: string
    name: string
    slug: string
    description: string
    logoUrl?: string | null
    websiteUrl?: string | null
    isFeatured?: boolean
    isActive?: boolean
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: CharityImageCreateNestedManyWithoutCharityInput
  }

  export type CharityUncheckedCreateWithoutUserCharitiesInput = {
    id?: string
    name: string
    slug: string
    description: string
    logoUrl?: string | null
    websiteUrl?: string | null
    isFeatured?: boolean
    isActive?: boolean
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: CharityImageUncheckedCreateNestedManyWithoutCharityInput
  }

  export type CharityCreateOrConnectWithoutUserCharitiesInput = {
    where: CharityWhereUniqueInput
    create: XOR<CharityCreateWithoutUserCharitiesInput, CharityUncheckedCreateWithoutUserCharitiesInput>
  }

  export type SubscriptionOrderUpsertWithoutUserCharitiesInput = {
    update: XOR<SubscriptionOrderUpdateWithoutUserCharitiesInput, SubscriptionOrderUncheckedUpdateWithoutUserCharitiesInput>
    create: XOR<SubscriptionOrderCreateWithoutUserCharitiesInput, SubscriptionOrderUncheckedCreateWithoutUserCharitiesInput>
    where?: SubscriptionOrderWhereInput
  }

  export type SubscriptionOrderUpdateToOneWithWhereWithoutUserCharitiesInput = {
    where?: SubscriptionOrderWhereInput
    data: XOR<SubscriptionOrderUpdateWithoutUserCharitiesInput, SubscriptionOrderUncheckedUpdateWithoutUserCharitiesInput>
  }

  export type SubscriptionOrderUpdateWithoutUserCharitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    stripeSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeClientSecret?: NullableStringFieldUpdateOperationsInput | string | null
    stripeEventId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentGateway?: EnumPaymentGatewayFieldUpdateOperationsInput | $Enums.PaymentGateway
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    failReason?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptionModel?: SubscriptionModelUpdateOneRequiredWithoutSubscriptionOrdersNestedInput
    user?: UserUpdateOneRequiredWithoutSubcriptionsNestedInput
  }

  export type SubscriptionOrderUncheckedUpdateWithoutUserCharitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    subscriptionModelId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    stripeSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeClientSecret?: NullableStringFieldUpdateOperationsInput | string | null
    stripeEventId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentGateway?: EnumPaymentGatewayFieldUpdateOperationsInput | $Enums.PaymentGateway
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    failReason?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutUserCharitiesInput = {
    update: XOR<UserUpdateWithoutUserCharitiesInput, UserUncheckedUpdateWithoutUserCharitiesInput>
    create: XOR<UserCreateWithoutUserCharitiesInput, UserUncheckedCreateWithoutUserCharitiesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserCharitiesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserCharitiesInput, UserUncheckedUpdateWithoutUserCharitiesInput>
  }

  export type UserUpdateWithoutUserCharitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginIp?: NullableStringFieldUpdateOperationsInput | string | null
    loginAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scores?: GolfScoreUpdateManyWithoutUserNestedInput
    subcriptions?: SubscriptionOrderUpdateManyWithoutUserNestedInput
    draws?: DrawUpdateManyWithoutAdminNestedInput
    winners?: WinnerUpdateManyWithoutUserNestedInput
    participants?: ParticipantUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserCharitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginIp?: NullableStringFieldUpdateOperationsInput | string | null
    loginAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scores?: GolfScoreUncheckedUpdateManyWithoutUserNestedInput
    subcriptions?: SubscriptionOrderUncheckedUpdateManyWithoutUserNestedInput
    draws?: DrawUncheckedUpdateManyWithoutAdminNestedInput
    winners?: WinnerUncheckedUpdateManyWithoutUserNestedInput
    participants?: ParticipantUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CharityUpsertWithoutUserCharitiesInput = {
    update: XOR<CharityUpdateWithoutUserCharitiesInput, CharityUncheckedUpdateWithoutUserCharitiesInput>
    create: XOR<CharityCreateWithoutUserCharitiesInput, CharityUncheckedCreateWithoutUserCharitiesInput>
    where?: CharityWhereInput
  }

  export type CharityUpdateToOneWithWhereWithoutUserCharitiesInput = {
    where?: CharityWhereInput
    data: XOR<CharityUpdateWithoutUserCharitiesInput, CharityUncheckedUpdateWithoutUserCharitiesInput>
  }

  export type CharityUpdateWithoutUserCharitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: CharityImageUpdateManyWithoutCharityNestedInput
  }

  export type CharityUncheckedUpdateWithoutUserCharitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: CharityImageUncheckedUpdateManyWithoutCharityNestedInput
  }

  export type UserCreateWithoutScoresInput = {
    id?: string
    publicId?: string
    email: string
    password?: string | null
    role?: $Enums.UserRole
    authProvider?: $Enums.AuthProvider
    googleId?: string | null
    resetPasswordToken?: string | null
    resetPasswordTokenExpires?: Date | string | null
    twoFactorSecret?: string | null
    twoFactorEnabled?: boolean
    profilePicture?: string | null
    userName: string
    firstName?: string | null
    lastName?: string | null
    phoneNumber?: string | null
    dateOfBirth?: Date | string | null
    lastLoginAt?: Date | string | null
    lastLoginIp?: string | null
    loginAttempts?: number
    lockedUntil?: Date | string | null
    isActive?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userCharities?: UserCharityCreateNestedManyWithoutUserInput
    subcriptions?: SubscriptionOrderCreateNestedManyWithoutUserInput
    draws?: DrawCreateNestedManyWithoutAdminInput
    winners?: WinnerCreateNestedManyWithoutUserInput
    participants?: ParticipantCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutScoresInput = {
    id?: string
    publicId?: string
    email: string
    password?: string | null
    role?: $Enums.UserRole
    authProvider?: $Enums.AuthProvider
    googleId?: string | null
    resetPasswordToken?: string | null
    resetPasswordTokenExpires?: Date | string | null
    twoFactorSecret?: string | null
    twoFactorEnabled?: boolean
    profilePicture?: string | null
    userName: string
    firstName?: string | null
    lastName?: string | null
    phoneNumber?: string | null
    dateOfBirth?: Date | string | null
    lastLoginAt?: Date | string | null
    lastLoginIp?: string | null
    loginAttempts?: number
    lockedUntil?: Date | string | null
    isActive?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userCharities?: UserCharityUncheckedCreateNestedManyWithoutUserInput
    subcriptions?: SubscriptionOrderUncheckedCreateNestedManyWithoutUserInput
    draws?: DrawUncheckedCreateNestedManyWithoutAdminInput
    winners?: WinnerUncheckedCreateNestedManyWithoutUserInput
    participants?: ParticipantUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutScoresInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutScoresInput, UserUncheckedCreateWithoutScoresInput>
  }

  export type UserUpsertWithoutScoresInput = {
    update: XOR<UserUpdateWithoutScoresInput, UserUncheckedUpdateWithoutScoresInput>
    create: XOR<UserCreateWithoutScoresInput, UserUncheckedCreateWithoutScoresInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutScoresInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutScoresInput, UserUncheckedUpdateWithoutScoresInput>
  }

  export type UserUpdateWithoutScoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginIp?: NullableStringFieldUpdateOperationsInput | string | null
    loginAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userCharities?: UserCharityUpdateManyWithoutUserNestedInput
    subcriptions?: SubscriptionOrderUpdateManyWithoutUserNestedInput
    draws?: DrawUpdateManyWithoutAdminNestedInput
    winners?: WinnerUpdateManyWithoutUserNestedInput
    participants?: ParticipantUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutScoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginIp?: NullableStringFieldUpdateOperationsInput | string | null
    loginAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userCharities?: UserCharityUncheckedUpdateManyWithoutUserNestedInput
    subcriptions?: SubscriptionOrderUncheckedUpdateManyWithoutUserNestedInput
    draws?: DrawUncheckedUpdateManyWithoutAdminNestedInput
    winners?: WinnerUncheckedUpdateManyWithoutUserNestedInput
    participants?: ParticipantUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SubscriptionOrderCreateWithoutSubscriptionModelInput = {
    id?: string
    periodStart: Date | string
    periodEnd: Date | string
    stripeSessionId?: string | null
    stripePaymentIntentId?: string | null
    stripeCustomerId?: string | null
    stripeClientSecret?: string | null
    stripeEventId?: string | null
    paymentGateway?: $Enums.PaymentGateway
    amount: number
    currency?: string
    status?: $Enums.PaymentStatus
    failReason?: string | null
    completedAt?: Date | string | null
    cancelledAt?: Date | string | null
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSubcriptionsInput
    userCharities?: UserCharityCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionOrderUncheckedCreateWithoutSubscriptionModelInput = {
    id?: string
    userId: string
    periodStart: Date | string
    periodEnd: Date | string
    stripeSessionId?: string | null
    stripePaymentIntentId?: string | null
    stripeCustomerId?: string | null
    stripeClientSecret?: string | null
    stripeEventId?: string | null
    paymentGateway?: $Enums.PaymentGateway
    amount: number
    currency?: string
    status?: $Enums.PaymentStatus
    failReason?: string | null
    completedAt?: Date | string | null
    cancelledAt?: Date | string | null
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userCharities?: UserCharityUncheckedCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionOrderCreateOrConnectWithoutSubscriptionModelInput = {
    where: SubscriptionOrderWhereUniqueInput
    create: XOR<SubscriptionOrderCreateWithoutSubscriptionModelInput, SubscriptionOrderUncheckedCreateWithoutSubscriptionModelInput>
  }

  export type SubscriptionOrderCreateManySubscriptionModelInputEnvelope = {
    data: SubscriptionOrderCreateManySubscriptionModelInput | SubscriptionOrderCreateManySubscriptionModelInput[]
    skipDuplicates?: boolean
  }

  export type SubscriptionOrderUpsertWithWhereUniqueWithoutSubscriptionModelInput = {
    where: SubscriptionOrderWhereUniqueInput
    update: XOR<SubscriptionOrderUpdateWithoutSubscriptionModelInput, SubscriptionOrderUncheckedUpdateWithoutSubscriptionModelInput>
    create: XOR<SubscriptionOrderCreateWithoutSubscriptionModelInput, SubscriptionOrderUncheckedCreateWithoutSubscriptionModelInput>
  }

  export type SubscriptionOrderUpdateWithWhereUniqueWithoutSubscriptionModelInput = {
    where: SubscriptionOrderWhereUniqueInput
    data: XOR<SubscriptionOrderUpdateWithoutSubscriptionModelInput, SubscriptionOrderUncheckedUpdateWithoutSubscriptionModelInput>
  }

  export type SubscriptionOrderUpdateManyWithWhereWithoutSubscriptionModelInput = {
    where: SubscriptionOrderScalarWhereInput
    data: XOR<SubscriptionOrderUpdateManyMutationInput, SubscriptionOrderUncheckedUpdateManyWithoutSubscriptionModelInput>
  }

  export type SubscriptionModelCreateWithoutSubscriptionOrdersInput = {
    id?: string
    planName: string
    planDescription?: string | null
    price: number
    currency: string
    features?: SubscriptionModelCreatefeaturesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionModelUncheckedCreateWithoutSubscriptionOrdersInput = {
    id?: string
    planName: string
    planDescription?: string | null
    price: number
    currency: string
    features?: SubscriptionModelCreatefeaturesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionModelCreateOrConnectWithoutSubscriptionOrdersInput = {
    where: SubscriptionModelWhereUniqueInput
    create: XOR<SubscriptionModelCreateWithoutSubscriptionOrdersInput, SubscriptionModelUncheckedCreateWithoutSubscriptionOrdersInput>
  }

  export type UserCreateWithoutSubcriptionsInput = {
    id?: string
    publicId?: string
    email: string
    password?: string | null
    role?: $Enums.UserRole
    authProvider?: $Enums.AuthProvider
    googleId?: string | null
    resetPasswordToken?: string | null
    resetPasswordTokenExpires?: Date | string | null
    twoFactorSecret?: string | null
    twoFactorEnabled?: boolean
    profilePicture?: string | null
    userName: string
    firstName?: string | null
    lastName?: string | null
    phoneNumber?: string | null
    dateOfBirth?: Date | string | null
    lastLoginAt?: Date | string | null
    lastLoginIp?: string | null
    loginAttempts?: number
    lockedUntil?: Date | string | null
    isActive?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    scores?: GolfScoreCreateNestedManyWithoutUserInput
    userCharities?: UserCharityCreateNestedManyWithoutUserInput
    draws?: DrawCreateNestedManyWithoutAdminInput
    winners?: WinnerCreateNestedManyWithoutUserInput
    participants?: ParticipantCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSubcriptionsInput = {
    id?: string
    publicId?: string
    email: string
    password?: string | null
    role?: $Enums.UserRole
    authProvider?: $Enums.AuthProvider
    googleId?: string | null
    resetPasswordToken?: string | null
    resetPasswordTokenExpires?: Date | string | null
    twoFactorSecret?: string | null
    twoFactorEnabled?: boolean
    profilePicture?: string | null
    userName: string
    firstName?: string | null
    lastName?: string | null
    phoneNumber?: string | null
    dateOfBirth?: Date | string | null
    lastLoginAt?: Date | string | null
    lastLoginIp?: string | null
    loginAttempts?: number
    lockedUntil?: Date | string | null
    isActive?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    scores?: GolfScoreUncheckedCreateNestedManyWithoutUserInput
    userCharities?: UserCharityUncheckedCreateNestedManyWithoutUserInput
    draws?: DrawUncheckedCreateNestedManyWithoutAdminInput
    winners?: WinnerUncheckedCreateNestedManyWithoutUserInput
    participants?: ParticipantUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSubcriptionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSubcriptionsInput, UserUncheckedCreateWithoutSubcriptionsInput>
  }

  export type UserCharityCreateWithoutSubscriptionInput = {
    id?: string
    type: $Enums.CharityContributionType
    percentage?: Decimal | DecimalJsLike | number | string | null
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    month?: number | null
    year?: number | null
    status?: $Enums.CharityStatus
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUserCharitiesInput
    charity: CharityCreateNestedOneWithoutUserCharitiesInput
  }

  export type UserCharityUncheckedCreateWithoutSubscriptionInput = {
    id?: string
    userId: string
    charityId: string
    type: $Enums.CharityContributionType
    percentage?: Decimal | DecimalJsLike | number | string | null
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    month?: number | null
    year?: number | null
    status?: $Enums.CharityStatus
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCharityCreateOrConnectWithoutSubscriptionInput = {
    where: UserCharityWhereUniqueInput
    create: XOR<UserCharityCreateWithoutSubscriptionInput, UserCharityUncheckedCreateWithoutSubscriptionInput>
  }

  export type UserCharityCreateManySubscriptionInputEnvelope = {
    data: UserCharityCreateManySubscriptionInput | UserCharityCreateManySubscriptionInput[]
    skipDuplicates?: boolean
  }

  export type SubscriptionModelUpsertWithoutSubscriptionOrdersInput = {
    update: XOR<SubscriptionModelUpdateWithoutSubscriptionOrdersInput, SubscriptionModelUncheckedUpdateWithoutSubscriptionOrdersInput>
    create: XOR<SubscriptionModelCreateWithoutSubscriptionOrdersInput, SubscriptionModelUncheckedCreateWithoutSubscriptionOrdersInput>
    where?: SubscriptionModelWhereInput
  }

  export type SubscriptionModelUpdateToOneWithWhereWithoutSubscriptionOrdersInput = {
    where?: SubscriptionModelWhereInput
    data: XOR<SubscriptionModelUpdateWithoutSubscriptionOrdersInput, SubscriptionModelUncheckedUpdateWithoutSubscriptionOrdersInput>
  }

  export type SubscriptionModelUpdateWithoutSubscriptionOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    planName?: StringFieldUpdateOperationsInput | string
    planDescription?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    features?: SubscriptionModelUpdatefeaturesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionModelUncheckedUpdateWithoutSubscriptionOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    planName?: StringFieldUpdateOperationsInput | string
    planDescription?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    features?: SubscriptionModelUpdatefeaturesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutSubcriptionsInput = {
    update: XOR<UserUpdateWithoutSubcriptionsInput, UserUncheckedUpdateWithoutSubcriptionsInput>
    create: XOR<UserCreateWithoutSubcriptionsInput, UserUncheckedCreateWithoutSubcriptionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSubcriptionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSubcriptionsInput, UserUncheckedUpdateWithoutSubcriptionsInput>
  }

  export type UserUpdateWithoutSubcriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginIp?: NullableStringFieldUpdateOperationsInput | string | null
    loginAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scores?: GolfScoreUpdateManyWithoutUserNestedInput
    userCharities?: UserCharityUpdateManyWithoutUserNestedInput
    draws?: DrawUpdateManyWithoutAdminNestedInput
    winners?: WinnerUpdateManyWithoutUserNestedInput
    participants?: ParticipantUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSubcriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginIp?: NullableStringFieldUpdateOperationsInput | string | null
    loginAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scores?: GolfScoreUncheckedUpdateManyWithoutUserNestedInput
    userCharities?: UserCharityUncheckedUpdateManyWithoutUserNestedInput
    draws?: DrawUncheckedUpdateManyWithoutAdminNestedInput
    winners?: WinnerUncheckedUpdateManyWithoutUserNestedInput
    participants?: ParticipantUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCharityUpsertWithWhereUniqueWithoutSubscriptionInput = {
    where: UserCharityWhereUniqueInput
    update: XOR<UserCharityUpdateWithoutSubscriptionInput, UserCharityUncheckedUpdateWithoutSubscriptionInput>
    create: XOR<UserCharityCreateWithoutSubscriptionInput, UserCharityUncheckedCreateWithoutSubscriptionInput>
  }

  export type UserCharityUpdateWithWhereUniqueWithoutSubscriptionInput = {
    where: UserCharityWhereUniqueInput
    data: XOR<UserCharityUpdateWithoutSubscriptionInput, UserCharityUncheckedUpdateWithoutSubscriptionInput>
  }

  export type UserCharityUpdateManyWithWhereWithoutSubscriptionInput = {
    where: UserCharityScalarWhereInput
    data: XOR<UserCharityUpdateManyMutationInput, UserCharityUncheckedUpdateManyWithoutSubscriptionInput>
  }

  export type UserCreateWithoutDrawsInput = {
    id?: string
    publicId?: string
    email: string
    password?: string | null
    role?: $Enums.UserRole
    authProvider?: $Enums.AuthProvider
    googleId?: string | null
    resetPasswordToken?: string | null
    resetPasswordTokenExpires?: Date | string | null
    twoFactorSecret?: string | null
    twoFactorEnabled?: boolean
    profilePicture?: string | null
    userName: string
    firstName?: string | null
    lastName?: string | null
    phoneNumber?: string | null
    dateOfBirth?: Date | string | null
    lastLoginAt?: Date | string | null
    lastLoginIp?: string | null
    loginAttempts?: number
    lockedUntil?: Date | string | null
    isActive?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    scores?: GolfScoreCreateNestedManyWithoutUserInput
    userCharities?: UserCharityCreateNestedManyWithoutUserInput
    subcriptions?: SubscriptionOrderCreateNestedManyWithoutUserInput
    winners?: WinnerCreateNestedManyWithoutUserInput
    participants?: ParticipantCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDrawsInput = {
    id?: string
    publicId?: string
    email: string
    password?: string | null
    role?: $Enums.UserRole
    authProvider?: $Enums.AuthProvider
    googleId?: string | null
    resetPasswordToken?: string | null
    resetPasswordTokenExpires?: Date | string | null
    twoFactorSecret?: string | null
    twoFactorEnabled?: boolean
    profilePicture?: string | null
    userName: string
    firstName?: string | null
    lastName?: string | null
    phoneNumber?: string | null
    dateOfBirth?: Date | string | null
    lastLoginAt?: Date | string | null
    lastLoginIp?: string | null
    loginAttempts?: number
    lockedUntil?: Date | string | null
    isActive?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    scores?: GolfScoreUncheckedCreateNestedManyWithoutUserInput
    userCharities?: UserCharityUncheckedCreateNestedManyWithoutUserInput
    subcriptions?: SubscriptionOrderUncheckedCreateNestedManyWithoutUserInput
    winners?: WinnerUncheckedCreateNestedManyWithoutUserInput
    participants?: ParticipantUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDrawsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDrawsInput, UserUncheckedCreateWithoutDrawsInput>
  }

  export type DrawCreateWithoutRolledOverToInput = {
    id?: string
    prizePool: number
    currency?: string
    entryStartDate: Date | string
    lastEntryDate: Date | string
    resultDate: Date | string
    drawNumber?: string | null
    status?: $Enums.DrawStatus
    fiveMatchPct?: number
    fourMatchPct?: number
    threeMatchPct?: number
    jackpotRolledOver?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    admin: UserCreateNestedOneWithoutDrawsInput
    rolledOverFrom?: DrawCreateNestedOneWithoutRolledOverToInput
    winners?: WinnerCreateNestedManyWithoutDrawInput
    participants?: ParticipantCreateNestedManyWithoutDrawInput
  }

  export type DrawUncheckedCreateWithoutRolledOverToInput = {
    id?: string
    adminId: string
    prizePool: number
    currency?: string
    entryStartDate: Date | string
    lastEntryDate: Date | string
    resultDate: Date | string
    drawNumber?: string | null
    status?: $Enums.DrawStatus
    fiveMatchPct?: number
    fourMatchPct?: number
    threeMatchPct?: number
    jackpotRolledOver?: boolean
    rolledOverFromId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    winners?: WinnerUncheckedCreateNestedManyWithoutDrawInput
    participants?: ParticipantUncheckedCreateNestedManyWithoutDrawInput
  }

  export type DrawCreateOrConnectWithoutRolledOverToInput = {
    where: DrawWhereUniqueInput
    create: XOR<DrawCreateWithoutRolledOverToInput, DrawUncheckedCreateWithoutRolledOverToInput>
  }

  export type DrawCreateWithoutRolledOverFromInput = {
    id?: string
    prizePool: number
    currency?: string
    entryStartDate: Date | string
    lastEntryDate: Date | string
    resultDate: Date | string
    drawNumber?: string | null
    status?: $Enums.DrawStatus
    fiveMatchPct?: number
    fourMatchPct?: number
    threeMatchPct?: number
    jackpotRolledOver?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    admin: UserCreateNestedOneWithoutDrawsInput
    rolledOverTo?: DrawCreateNestedManyWithoutRolledOverFromInput
    winners?: WinnerCreateNestedManyWithoutDrawInput
    participants?: ParticipantCreateNestedManyWithoutDrawInput
  }

  export type DrawUncheckedCreateWithoutRolledOverFromInput = {
    id?: string
    adminId: string
    prizePool: number
    currency?: string
    entryStartDate: Date | string
    lastEntryDate: Date | string
    resultDate: Date | string
    drawNumber?: string | null
    status?: $Enums.DrawStatus
    fiveMatchPct?: number
    fourMatchPct?: number
    threeMatchPct?: number
    jackpotRolledOver?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    rolledOverTo?: DrawUncheckedCreateNestedManyWithoutRolledOverFromInput
    winners?: WinnerUncheckedCreateNestedManyWithoutDrawInput
    participants?: ParticipantUncheckedCreateNestedManyWithoutDrawInput
  }

  export type DrawCreateOrConnectWithoutRolledOverFromInput = {
    where: DrawWhereUniqueInput
    create: XOR<DrawCreateWithoutRolledOverFromInput, DrawUncheckedCreateWithoutRolledOverFromInput>
  }

  export type DrawCreateManyRolledOverFromInputEnvelope = {
    data: DrawCreateManyRolledOverFromInput | DrawCreateManyRolledOverFromInput[]
    skipDuplicates?: boolean
  }

  export type WinnerCreateWithoutDrawInput = {
    id?: string
    winnerType: $Enums.WinnerType
    winnerScore: string
    verificationStatus?: $Enums.VerificationStatus
    paymentStatus?: $Enums.WinnerPaymentStatus
    proofImage?: string | null
    prizeAmount?: number | null
    adminNotes?: string | null
    verifiedAt?: Date | string | null
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutWinnersInput
  }

  export type WinnerUncheckedCreateWithoutDrawInput = {
    id?: string
    userId: string
    winnerType: $Enums.WinnerType
    winnerScore: string
    verificationStatus?: $Enums.VerificationStatus
    paymentStatus?: $Enums.WinnerPaymentStatus
    proofImage?: string | null
    prizeAmount?: number | null
    adminNotes?: string | null
    verifiedAt?: Date | string | null
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WinnerCreateOrConnectWithoutDrawInput = {
    where: WinnerWhereUniqueInput
    create: XOR<WinnerCreateWithoutDrawInput, WinnerUncheckedCreateWithoutDrawInput>
  }

  export type WinnerCreateManyDrawInputEnvelope = {
    data: WinnerCreateManyDrawInput | WinnerCreateManyDrawInput[]
    skipDuplicates?: boolean
  }

  export type ParticipantCreateWithoutDrawInput = {
    id?: string
    score: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutParticipantsInput
  }

  export type ParticipantUncheckedCreateWithoutDrawInput = {
    id?: string
    userId: string
    score: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParticipantCreateOrConnectWithoutDrawInput = {
    where: ParticipantWhereUniqueInput
    create: XOR<ParticipantCreateWithoutDrawInput, ParticipantUncheckedCreateWithoutDrawInput>
  }

  export type ParticipantCreateManyDrawInputEnvelope = {
    data: ParticipantCreateManyDrawInput | ParticipantCreateManyDrawInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutDrawsInput = {
    update: XOR<UserUpdateWithoutDrawsInput, UserUncheckedUpdateWithoutDrawsInput>
    create: XOR<UserCreateWithoutDrawsInput, UserUncheckedCreateWithoutDrawsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDrawsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDrawsInput, UserUncheckedUpdateWithoutDrawsInput>
  }

  export type UserUpdateWithoutDrawsInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginIp?: NullableStringFieldUpdateOperationsInput | string | null
    loginAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scores?: GolfScoreUpdateManyWithoutUserNestedInput
    userCharities?: UserCharityUpdateManyWithoutUserNestedInput
    subcriptions?: SubscriptionOrderUpdateManyWithoutUserNestedInput
    winners?: WinnerUpdateManyWithoutUserNestedInput
    participants?: ParticipantUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDrawsInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginIp?: NullableStringFieldUpdateOperationsInput | string | null
    loginAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scores?: GolfScoreUncheckedUpdateManyWithoutUserNestedInput
    userCharities?: UserCharityUncheckedUpdateManyWithoutUserNestedInput
    subcriptions?: SubscriptionOrderUncheckedUpdateManyWithoutUserNestedInput
    winners?: WinnerUncheckedUpdateManyWithoutUserNestedInput
    participants?: ParticipantUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DrawUpsertWithoutRolledOverToInput = {
    update: XOR<DrawUpdateWithoutRolledOverToInput, DrawUncheckedUpdateWithoutRolledOverToInput>
    create: XOR<DrawCreateWithoutRolledOverToInput, DrawUncheckedCreateWithoutRolledOverToInput>
    where?: DrawWhereInput
  }

  export type DrawUpdateToOneWithWhereWithoutRolledOverToInput = {
    where?: DrawWhereInput
    data: XOR<DrawUpdateWithoutRolledOverToInput, DrawUncheckedUpdateWithoutRolledOverToInput>
  }

  export type DrawUpdateWithoutRolledOverToInput = {
    id?: StringFieldUpdateOperationsInput | string
    prizePool?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    entryStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastEntryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    resultDate?: DateTimeFieldUpdateOperationsInput | Date | string
    drawNumber?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDrawStatusFieldUpdateOperationsInput | $Enums.DrawStatus
    fiveMatchPct?: IntFieldUpdateOperationsInput | number
    fourMatchPct?: IntFieldUpdateOperationsInput | number
    threeMatchPct?: IntFieldUpdateOperationsInput | number
    jackpotRolledOver?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: UserUpdateOneRequiredWithoutDrawsNestedInput
    rolledOverFrom?: DrawUpdateOneWithoutRolledOverToNestedInput
    winners?: WinnerUpdateManyWithoutDrawNestedInput
    participants?: ParticipantUpdateManyWithoutDrawNestedInput
  }

  export type DrawUncheckedUpdateWithoutRolledOverToInput = {
    id?: StringFieldUpdateOperationsInput | string
    adminId?: StringFieldUpdateOperationsInput | string
    prizePool?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    entryStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastEntryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    resultDate?: DateTimeFieldUpdateOperationsInput | Date | string
    drawNumber?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDrawStatusFieldUpdateOperationsInput | $Enums.DrawStatus
    fiveMatchPct?: IntFieldUpdateOperationsInput | number
    fourMatchPct?: IntFieldUpdateOperationsInput | number
    threeMatchPct?: IntFieldUpdateOperationsInput | number
    jackpotRolledOver?: BoolFieldUpdateOperationsInput | boolean
    rolledOverFromId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    winners?: WinnerUncheckedUpdateManyWithoutDrawNestedInput
    participants?: ParticipantUncheckedUpdateManyWithoutDrawNestedInput
  }

  export type DrawUpsertWithWhereUniqueWithoutRolledOverFromInput = {
    where: DrawWhereUniqueInput
    update: XOR<DrawUpdateWithoutRolledOverFromInput, DrawUncheckedUpdateWithoutRolledOverFromInput>
    create: XOR<DrawCreateWithoutRolledOverFromInput, DrawUncheckedCreateWithoutRolledOverFromInput>
  }

  export type DrawUpdateWithWhereUniqueWithoutRolledOverFromInput = {
    where: DrawWhereUniqueInput
    data: XOR<DrawUpdateWithoutRolledOverFromInput, DrawUncheckedUpdateWithoutRolledOverFromInput>
  }

  export type DrawUpdateManyWithWhereWithoutRolledOverFromInput = {
    where: DrawScalarWhereInput
    data: XOR<DrawUpdateManyMutationInput, DrawUncheckedUpdateManyWithoutRolledOverFromInput>
  }

  export type WinnerUpsertWithWhereUniqueWithoutDrawInput = {
    where: WinnerWhereUniqueInput
    update: XOR<WinnerUpdateWithoutDrawInput, WinnerUncheckedUpdateWithoutDrawInput>
    create: XOR<WinnerCreateWithoutDrawInput, WinnerUncheckedCreateWithoutDrawInput>
  }

  export type WinnerUpdateWithWhereUniqueWithoutDrawInput = {
    where: WinnerWhereUniqueInput
    data: XOR<WinnerUpdateWithoutDrawInput, WinnerUncheckedUpdateWithoutDrawInput>
  }

  export type WinnerUpdateManyWithWhereWithoutDrawInput = {
    where: WinnerScalarWhereInput
    data: XOR<WinnerUpdateManyMutationInput, WinnerUncheckedUpdateManyWithoutDrawInput>
  }

  export type ParticipantUpsertWithWhereUniqueWithoutDrawInput = {
    where: ParticipantWhereUniqueInput
    update: XOR<ParticipantUpdateWithoutDrawInput, ParticipantUncheckedUpdateWithoutDrawInput>
    create: XOR<ParticipantCreateWithoutDrawInput, ParticipantUncheckedCreateWithoutDrawInput>
  }

  export type ParticipantUpdateWithWhereUniqueWithoutDrawInput = {
    where: ParticipantWhereUniqueInput
    data: XOR<ParticipantUpdateWithoutDrawInput, ParticipantUncheckedUpdateWithoutDrawInput>
  }

  export type ParticipantUpdateManyWithWhereWithoutDrawInput = {
    where: ParticipantScalarWhereInput
    data: XOR<ParticipantUpdateManyMutationInput, ParticipantUncheckedUpdateManyWithoutDrawInput>
  }

  export type DrawCreateWithoutWinnersInput = {
    id?: string
    prizePool: number
    currency?: string
    entryStartDate: Date | string
    lastEntryDate: Date | string
    resultDate: Date | string
    drawNumber?: string | null
    status?: $Enums.DrawStatus
    fiveMatchPct?: number
    fourMatchPct?: number
    threeMatchPct?: number
    jackpotRolledOver?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    admin: UserCreateNestedOneWithoutDrawsInput
    rolledOverFrom?: DrawCreateNestedOneWithoutRolledOverToInput
    rolledOverTo?: DrawCreateNestedManyWithoutRolledOverFromInput
    participants?: ParticipantCreateNestedManyWithoutDrawInput
  }

  export type DrawUncheckedCreateWithoutWinnersInput = {
    id?: string
    adminId: string
    prizePool: number
    currency?: string
    entryStartDate: Date | string
    lastEntryDate: Date | string
    resultDate: Date | string
    drawNumber?: string | null
    status?: $Enums.DrawStatus
    fiveMatchPct?: number
    fourMatchPct?: number
    threeMatchPct?: number
    jackpotRolledOver?: boolean
    rolledOverFromId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rolledOverTo?: DrawUncheckedCreateNestedManyWithoutRolledOverFromInput
    participants?: ParticipantUncheckedCreateNestedManyWithoutDrawInput
  }

  export type DrawCreateOrConnectWithoutWinnersInput = {
    where: DrawWhereUniqueInput
    create: XOR<DrawCreateWithoutWinnersInput, DrawUncheckedCreateWithoutWinnersInput>
  }

  export type UserCreateWithoutWinnersInput = {
    id?: string
    publicId?: string
    email: string
    password?: string | null
    role?: $Enums.UserRole
    authProvider?: $Enums.AuthProvider
    googleId?: string | null
    resetPasswordToken?: string | null
    resetPasswordTokenExpires?: Date | string | null
    twoFactorSecret?: string | null
    twoFactorEnabled?: boolean
    profilePicture?: string | null
    userName: string
    firstName?: string | null
    lastName?: string | null
    phoneNumber?: string | null
    dateOfBirth?: Date | string | null
    lastLoginAt?: Date | string | null
    lastLoginIp?: string | null
    loginAttempts?: number
    lockedUntil?: Date | string | null
    isActive?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    scores?: GolfScoreCreateNestedManyWithoutUserInput
    userCharities?: UserCharityCreateNestedManyWithoutUserInput
    subcriptions?: SubscriptionOrderCreateNestedManyWithoutUserInput
    draws?: DrawCreateNestedManyWithoutAdminInput
    participants?: ParticipantCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWinnersInput = {
    id?: string
    publicId?: string
    email: string
    password?: string | null
    role?: $Enums.UserRole
    authProvider?: $Enums.AuthProvider
    googleId?: string | null
    resetPasswordToken?: string | null
    resetPasswordTokenExpires?: Date | string | null
    twoFactorSecret?: string | null
    twoFactorEnabled?: boolean
    profilePicture?: string | null
    userName: string
    firstName?: string | null
    lastName?: string | null
    phoneNumber?: string | null
    dateOfBirth?: Date | string | null
    lastLoginAt?: Date | string | null
    lastLoginIp?: string | null
    loginAttempts?: number
    lockedUntil?: Date | string | null
    isActive?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    scores?: GolfScoreUncheckedCreateNestedManyWithoutUserInput
    userCharities?: UserCharityUncheckedCreateNestedManyWithoutUserInput
    subcriptions?: SubscriptionOrderUncheckedCreateNestedManyWithoutUserInput
    draws?: DrawUncheckedCreateNestedManyWithoutAdminInput
    participants?: ParticipantUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWinnersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWinnersInput, UserUncheckedCreateWithoutWinnersInput>
  }

  export type DrawUpsertWithoutWinnersInput = {
    update: XOR<DrawUpdateWithoutWinnersInput, DrawUncheckedUpdateWithoutWinnersInput>
    create: XOR<DrawCreateWithoutWinnersInput, DrawUncheckedCreateWithoutWinnersInput>
    where?: DrawWhereInput
  }

  export type DrawUpdateToOneWithWhereWithoutWinnersInput = {
    where?: DrawWhereInput
    data: XOR<DrawUpdateWithoutWinnersInput, DrawUncheckedUpdateWithoutWinnersInput>
  }

  export type DrawUpdateWithoutWinnersInput = {
    id?: StringFieldUpdateOperationsInput | string
    prizePool?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    entryStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastEntryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    resultDate?: DateTimeFieldUpdateOperationsInput | Date | string
    drawNumber?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDrawStatusFieldUpdateOperationsInput | $Enums.DrawStatus
    fiveMatchPct?: IntFieldUpdateOperationsInput | number
    fourMatchPct?: IntFieldUpdateOperationsInput | number
    threeMatchPct?: IntFieldUpdateOperationsInput | number
    jackpotRolledOver?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: UserUpdateOneRequiredWithoutDrawsNestedInput
    rolledOverFrom?: DrawUpdateOneWithoutRolledOverToNestedInput
    rolledOverTo?: DrawUpdateManyWithoutRolledOverFromNestedInput
    participants?: ParticipantUpdateManyWithoutDrawNestedInput
  }

  export type DrawUncheckedUpdateWithoutWinnersInput = {
    id?: StringFieldUpdateOperationsInput | string
    adminId?: StringFieldUpdateOperationsInput | string
    prizePool?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    entryStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastEntryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    resultDate?: DateTimeFieldUpdateOperationsInput | Date | string
    drawNumber?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDrawStatusFieldUpdateOperationsInput | $Enums.DrawStatus
    fiveMatchPct?: IntFieldUpdateOperationsInput | number
    fourMatchPct?: IntFieldUpdateOperationsInput | number
    threeMatchPct?: IntFieldUpdateOperationsInput | number
    jackpotRolledOver?: BoolFieldUpdateOperationsInput | boolean
    rolledOverFromId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rolledOverTo?: DrawUncheckedUpdateManyWithoutRolledOverFromNestedInput
    participants?: ParticipantUncheckedUpdateManyWithoutDrawNestedInput
  }

  export type UserUpsertWithoutWinnersInput = {
    update: XOR<UserUpdateWithoutWinnersInput, UserUncheckedUpdateWithoutWinnersInput>
    create: XOR<UserCreateWithoutWinnersInput, UserUncheckedCreateWithoutWinnersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWinnersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWinnersInput, UserUncheckedUpdateWithoutWinnersInput>
  }

  export type UserUpdateWithoutWinnersInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginIp?: NullableStringFieldUpdateOperationsInput | string | null
    loginAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scores?: GolfScoreUpdateManyWithoutUserNestedInput
    userCharities?: UserCharityUpdateManyWithoutUserNestedInput
    subcriptions?: SubscriptionOrderUpdateManyWithoutUserNestedInput
    draws?: DrawUpdateManyWithoutAdminNestedInput
    participants?: ParticipantUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWinnersInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginIp?: NullableStringFieldUpdateOperationsInput | string | null
    loginAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scores?: GolfScoreUncheckedUpdateManyWithoutUserNestedInput
    userCharities?: UserCharityUncheckedUpdateManyWithoutUserNestedInput
    subcriptions?: SubscriptionOrderUncheckedUpdateManyWithoutUserNestedInput
    draws?: DrawUncheckedUpdateManyWithoutAdminNestedInput
    participants?: ParticipantUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DrawCreateWithoutParticipantsInput = {
    id?: string
    prizePool: number
    currency?: string
    entryStartDate: Date | string
    lastEntryDate: Date | string
    resultDate: Date | string
    drawNumber?: string | null
    status?: $Enums.DrawStatus
    fiveMatchPct?: number
    fourMatchPct?: number
    threeMatchPct?: number
    jackpotRolledOver?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    admin: UserCreateNestedOneWithoutDrawsInput
    rolledOverFrom?: DrawCreateNestedOneWithoutRolledOverToInput
    rolledOverTo?: DrawCreateNestedManyWithoutRolledOverFromInput
    winners?: WinnerCreateNestedManyWithoutDrawInput
  }

  export type DrawUncheckedCreateWithoutParticipantsInput = {
    id?: string
    adminId: string
    prizePool: number
    currency?: string
    entryStartDate: Date | string
    lastEntryDate: Date | string
    resultDate: Date | string
    drawNumber?: string | null
    status?: $Enums.DrawStatus
    fiveMatchPct?: number
    fourMatchPct?: number
    threeMatchPct?: number
    jackpotRolledOver?: boolean
    rolledOverFromId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rolledOverTo?: DrawUncheckedCreateNestedManyWithoutRolledOverFromInput
    winners?: WinnerUncheckedCreateNestedManyWithoutDrawInput
  }

  export type DrawCreateOrConnectWithoutParticipantsInput = {
    where: DrawWhereUniqueInput
    create: XOR<DrawCreateWithoutParticipantsInput, DrawUncheckedCreateWithoutParticipantsInput>
  }

  export type UserCreateWithoutParticipantsInput = {
    id?: string
    publicId?: string
    email: string
    password?: string | null
    role?: $Enums.UserRole
    authProvider?: $Enums.AuthProvider
    googleId?: string | null
    resetPasswordToken?: string | null
    resetPasswordTokenExpires?: Date | string | null
    twoFactorSecret?: string | null
    twoFactorEnabled?: boolean
    profilePicture?: string | null
    userName: string
    firstName?: string | null
    lastName?: string | null
    phoneNumber?: string | null
    dateOfBirth?: Date | string | null
    lastLoginAt?: Date | string | null
    lastLoginIp?: string | null
    loginAttempts?: number
    lockedUntil?: Date | string | null
    isActive?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    scores?: GolfScoreCreateNestedManyWithoutUserInput
    userCharities?: UserCharityCreateNestedManyWithoutUserInput
    subcriptions?: SubscriptionOrderCreateNestedManyWithoutUserInput
    draws?: DrawCreateNestedManyWithoutAdminInput
    winners?: WinnerCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutParticipantsInput = {
    id?: string
    publicId?: string
    email: string
    password?: string | null
    role?: $Enums.UserRole
    authProvider?: $Enums.AuthProvider
    googleId?: string | null
    resetPasswordToken?: string | null
    resetPasswordTokenExpires?: Date | string | null
    twoFactorSecret?: string | null
    twoFactorEnabled?: boolean
    profilePicture?: string | null
    userName: string
    firstName?: string | null
    lastName?: string | null
    phoneNumber?: string | null
    dateOfBirth?: Date | string | null
    lastLoginAt?: Date | string | null
    lastLoginIp?: string | null
    loginAttempts?: number
    lockedUntil?: Date | string | null
    isActive?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    scores?: GolfScoreUncheckedCreateNestedManyWithoutUserInput
    userCharities?: UserCharityUncheckedCreateNestedManyWithoutUserInput
    subcriptions?: SubscriptionOrderUncheckedCreateNestedManyWithoutUserInput
    draws?: DrawUncheckedCreateNestedManyWithoutAdminInput
    winners?: WinnerUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutParticipantsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutParticipantsInput, UserUncheckedCreateWithoutParticipantsInput>
  }

  export type DrawUpsertWithoutParticipantsInput = {
    update: XOR<DrawUpdateWithoutParticipantsInput, DrawUncheckedUpdateWithoutParticipantsInput>
    create: XOR<DrawCreateWithoutParticipantsInput, DrawUncheckedCreateWithoutParticipantsInput>
    where?: DrawWhereInput
  }

  export type DrawUpdateToOneWithWhereWithoutParticipantsInput = {
    where?: DrawWhereInput
    data: XOR<DrawUpdateWithoutParticipantsInput, DrawUncheckedUpdateWithoutParticipantsInput>
  }

  export type DrawUpdateWithoutParticipantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    prizePool?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    entryStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastEntryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    resultDate?: DateTimeFieldUpdateOperationsInput | Date | string
    drawNumber?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDrawStatusFieldUpdateOperationsInput | $Enums.DrawStatus
    fiveMatchPct?: IntFieldUpdateOperationsInput | number
    fourMatchPct?: IntFieldUpdateOperationsInput | number
    threeMatchPct?: IntFieldUpdateOperationsInput | number
    jackpotRolledOver?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: UserUpdateOneRequiredWithoutDrawsNestedInput
    rolledOverFrom?: DrawUpdateOneWithoutRolledOverToNestedInput
    rolledOverTo?: DrawUpdateManyWithoutRolledOverFromNestedInput
    winners?: WinnerUpdateManyWithoutDrawNestedInput
  }

  export type DrawUncheckedUpdateWithoutParticipantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    adminId?: StringFieldUpdateOperationsInput | string
    prizePool?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    entryStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastEntryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    resultDate?: DateTimeFieldUpdateOperationsInput | Date | string
    drawNumber?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDrawStatusFieldUpdateOperationsInput | $Enums.DrawStatus
    fiveMatchPct?: IntFieldUpdateOperationsInput | number
    fourMatchPct?: IntFieldUpdateOperationsInput | number
    threeMatchPct?: IntFieldUpdateOperationsInput | number
    jackpotRolledOver?: BoolFieldUpdateOperationsInput | boolean
    rolledOverFromId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rolledOverTo?: DrawUncheckedUpdateManyWithoutRolledOverFromNestedInput
    winners?: WinnerUncheckedUpdateManyWithoutDrawNestedInput
  }

  export type UserUpsertWithoutParticipantsInput = {
    update: XOR<UserUpdateWithoutParticipantsInput, UserUncheckedUpdateWithoutParticipantsInput>
    create: XOR<UserCreateWithoutParticipantsInput, UserUncheckedCreateWithoutParticipantsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutParticipantsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutParticipantsInput, UserUncheckedUpdateWithoutParticipantsInput>
  }

  export type UserUpdateWithoutParticipantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginIp?: NullableStringFieldUpdateOperationsInput | string | null
    loginAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scores?: GolfScoreUpdateManyWithoutUserNestedInput
    userCharities?: UserCharityUpdateManyWithoutUserNestedInput
    subcriptions?: SubscriptionOrderUpdateManyWithoutUserNestedInput
    draws?: DrawUpdateManyWithoutAdminNestedInput
    winners?: WinnerUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutParticipantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    authProvider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginIp?: NullableStringFieldUpdateOperationsInput | string | null
    loginAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scores?: GolfScoreUncheckedUpdateManyWithoutUserNestedInput
    userCharities?: UserCharityUncheckedUpdateManyWithoutUserNestedInput
    subcriptions?: SubscriptionOrderUncheckedUpdateManyWithoutUserNestedInput
    draws?: DrawUncheckedUpdateManyWithoutAdminNestedInput
    winners?: WinnerUncheckedUpdateManyWithoutUserNestedInput
  }

  export type GolfScoreCreateManyUserInput = {
    id?: string
    score: number
    playedOn: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCharityCreateManyUserInput = {
    id?: string
    charityId: string
    subscriptionId: string
    type: $Enums.CharityContributionType
    percentage?: Decimal | DecimalJsLike | number | string | null
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    month?: number | null
    year?: number | null
    status?: $Enums.CharityStatus
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionOrderCreateManyUserInput = {
    id?: string
    subscriptionModelId: string
    periodStart: Date | string
    periodEnd: Date | string
    stripeSessionId?: string | null
    stripePaymentIntentId?: string | null
    stripeCustomerId?: string | null
    stripeClientSecret?: string | null
    stripeEventId?: string | null
    paymentGateway?: $Enums.PaymentGateway
    amount: number
    currency?: string
    status?: $Enums.PaymentStatus
    failReason?: string | null
    completedAt?: Date | string | null
    cancelledAt?: Date | string | null
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DrawCreateManyAdminInput = {
    id?: string
    prizePool: number
    currency?: string
    entryStartDate: Date | string
    lastEntryDate: Date | string
    resultDate: Date | string
    drawNumber?: string | null
    status?: $Enums.DrawStatus
    fiveMatchPct?: number
    fourMatchPct?: number
    threeMatchPct?: number
    jackpotRolledOver?: boolean
    rolledOverFromId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WinnerCreateManyUserInput = {
    id?: string
    drawId: string
    winnerType: $Enums.WinnerType
    winnerScore: string
    verificationStatus?: $Enums.VerificationStatus
    paymentStatus?: $Enums.WinnerPaymentStatus
    proofImage?: string | null
    prizeAmount?: number | null
    adminNotes?: string | null
    verifiedAt?: Date | string | null
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParticipantCreateManyUserInput = {
    id?: string
    drawId: string
    score: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GolfScoreUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    playedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GolfScoreUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    playedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GolfScoreUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    playedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCharityUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumCharityContributionTypeFieldUpdateOperationsInput | $Enums.CharityContributionType
    percentage?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    month?: NullableIntFieldUpdateOperationsInput | number | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumCharityStatusFieldUpdateOperationsInput | $Enums.CharityStatus
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscription?: SubscriptionOrderUpdateOneRequiredWithoutUserCharitiesNestedInput
    charity?: CharityUpdateOneRequiredWithoutUserCharitiesNestedInput
  }

  export type UserCharityUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    charityId?: StringFieldUpdateOperationsInput | string
    subscriptionId?: StringFieldUpdateOperationsInput | string
    type?: EnumCharityContributionTypeFieldUpdateOperationsInput | $Enums.CharityContributionType
    percentage?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    month?: NullableIntFieldUpdateOperationsInput | number | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumCharityStatusFieldUpdateOperationsInput | $Enums.CharityStatus
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCharityUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    charityId?: StringFieldUpdateOperationsInput | string
    subscriptionId?: StringFieldUpdateOperationsInput | string
    type?: EnumCharityContributionTypeFieldUpdateOperationsInput | $Enums.CharityContributionType
    percentage?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    month?: NullableIntFieldUpdateOperationsInput | number | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumCharityStatusFieldUpdateOperationsInput | $Enums.CharityStatus
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionOrderUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    stripeSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeClientSecret?: NullableStringFieldUpdateOperationsInput | string | null
    stripeEventId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentGateway?: EnumPaymentGatewayFieldUpdateOperationsInput | $Enums.PaymentGateway
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    failReason?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptionModel?: SubscriptionModelUpdateOneRequiredWithoutSubscriptionOrdersNestedInput
    userCharities?: UserCharityUpdateManyWithoutSubscriptionNestedInput
  }

  export type SubscriptionOrderUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    subscriptionModelId?: StringFieldUpdateOperationsInput | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    stripeSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeClientSecret?: NullableStringFieldUpdateOperationsInput | string | null
    stripeEventId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentGateway?: EnumPaymentGatewayFieldUpdateOperationsInput | $Enums.PaymentGateway
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    failReason?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userCharities?: UserCharityUncheckedUpdateManyWithoutSubscriptionNestedInput
  }

  export type SubscriptionOrderUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    subscriptionModelId?: StringFieldUpdateOperationsInput | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    stripeSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeClientSecret?: NullableStringFieldUpdateOperationsInput | string | null
    stripeEventId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentGateway?: EnumPaymentGatewayFieldUpdateOperationsInput | $Enums.PaymentGateway
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    failReason?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DrawUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    prizePool?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    entryStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastEntryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    resultDate?: DateTimeFieldUpdateOperationsInput | Date | string
    drawNumber?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDrawStatusFieldUpdateOperationsInput | $Enums.DrawStatus
    fiveMatchPct?: IntFieldUpdateOperationsInput | number
    fourMatchPct?: IntFieldUpdateOperationsInput | number
    threeMatchPct?: IntFieldUpdateOperationsInput | number
    jackpotRolledOver?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rolledOverFrom?: DrawUpdateOneWithoutRolledOverToNestedInput
    rolledOverTo?: DrawUpdateManyWithoutRolledOverFromNestedInput
    winners?: WinnerUpdateManyWithoutDrawNestedInput
    participants?: ParticipantUpdateManyWithoutDrawNestedInput
  }

  export type DrawUncheckedUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    prizePool?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    entryStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastEntryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    resultDate?: DateTimeFieldUpdateOperationsInput | Date | string
    drawNumber?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDrawStatusFieldUpdateOperationsInput | $Enums.DrawStatus
    fiveMatchPct?: IntFieldUpdateOperationsInput | number
    fourMatchPct?: IntFieldUpdateOperationsInput | number
    threeMatchPct?: IntFieldUpdateOperationsInput | number
    jackpotRolledOver?: BoolFieldUpdateOperationsInput | boolean
    rolledOverFromId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rolledOverTo?: DrawUncheckedUpdateManyWithoutRolledOverFromNestedInput
    winners?: WinnerUncheckedUpdateManyWithoutDrawNestedInput
    participants?: ParticipantUncheckedUpdateManyWithoutDrawNestedInput
  }

  export type DrawUncheckedUpdateManyWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    prizePool?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    entryStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastEntryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    resultDate?: DateTimeFieldUpdateOperationsInput | Date | string
    drawNumber?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDrawStatusFieldUpdateOperationsInput | $Enums.DrawStatus
    fiveMatchPct?: IntFieldUpdateOperationsInput | number
    fourMatchPct?: IntFieldUpdateOperationsInput | number
    threeMatchPct?: IntFieldUpdateOperationsInput | number
    jackpotRolledOver?: BoolFieldUpdateOperationsInput | boolean
    rolledOverFromId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WinnerUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    winnerType?: EnumWinnerTypeFieldUpdateOperationsInput | $Enums.WinnerType
    winnerScore?: StringFieldUpdateOperationsInput | string
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    paymentStatus?: EnumWinnerPaymentStatusFieldUpdateOperationsInput | $Enums.WinnerPaymentStatus
    proofImage?: NullableStringFieldUpdateOperationsInput | string | null
    prizeAmount?: NullableIntFieldUpdateOperationsInput | number | null
    adminNotes?: NullableStringFieldUpdateOperationsInput | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    draw?: DrawUpdateOneRequiredWithoutWinnersNestedInput
  }

  export type WinnerUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    drawId?: StringFieldUpdateOperationsInput | string
    winnerType?: EnumWinnerTypeFieldUpdateOperationsInput | $Enums.WinnerType
    winnerScore?: StringFieldUpdateOperationsInput | string
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    paymentStatus?: EnumWinnerPaymentStatusFieldUpdateOperationsInput | $Enums.WinnerPaymentStatus
    proofImage?: NullableStringFieldUpdateOperationsInput | string | null
    prizeAmount?: NullableIntFieldUpdateOperationsInput | number | null
    adminNotes?: NullableStringFieldUpdateOperationsInput | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WinnerUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    drawId?: StringFieldUpdateOperationsInput | string
    winnerType?: EnumWinnerTypeFieldUpdateOperationsInput | $Enums.WinnerType
    winnerScore?: StringFieldUpdateOperationsInput | string
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    paymentStatus?: EnumWinnerPaymentStatusFieldUpdateOperationsInput | $Enums.WinnerPaymentStatus
    proofImage?: NullableStringFieldUpdateOperationsInput | string | null
    prizeAmount?: NullableIntFieldUpdateOperationsInput | number | null
    adminNotes?: NullableStringFieldUpdateOperationsInput | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipantUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    draw?: DrawUpdateOneRequiredWithoutParticipantsNestedInput
  }

  export type ParticipantUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    drawId?: StringFieldUpdateOperationsInput | string
    score?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipantUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    drawId?: StringFieldUpdateOperationsInput | string
    score?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CharityImageCreateManyCharityInput = {
    id?: string
    url: string
    altText?: string | null
    order?: number
    createdAt?: Date | string
  }

  export type UserCharityCreateManyCharityInput = {
    id?: string
    userId: string
    subscriptionId: string
    type: $Enums.CharityContributionType
    percentage?: Decimal | DecimalJsLike | number | string | null
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    month?: number | null
    year?: number | null
    status?: $Enums.CharityStatus
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CharityImageUpdateWithoutCharityInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CharityImageUncheckedUpdateWithoutCharityInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CharityImageUncheckedUpdateManyWithoutCharityInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCharityUpdateWithoutCharityInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumCharityContributionTypeFieldUpdateOperationsInput | $Enums.CharityContributionType
    percentage?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    month?: NullableIntFieldUpdateOperationsInput | number | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumCharityStatusFieldUpdateOperationsInput | $Enums.CharityStatus
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscription?: SubscriptionOrderUpdateOneRequiredWithoutUserCharitiesNestedInput
    user?: UserUpdateOneRequiredWithoutUserCharitiesNestedInput
  }

  export type UserCharityUncheckedUpdateWithoutCharityInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    subscriptionId?: StringFieldUpdateOperationsInput | string
    type?: EnumCharityContributionTypeFieldUpdateOperationsInput | $Enums.CharityContributionType
    percentage?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    month?: NullableIntFieldUpdateOperationsInput | number | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumCharityStatusFieldUpdateOperationsInput | $Enums.CharityStatus
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCharityUncheckedUpdateManyWithoutCharityInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    subscriptionId?: StringFieldUpdateOperationsInput | string
    type?: EnumCharityContributionTypeFieldUpdateOperationsInput | $Enums.CharityContributionType
    percentage?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    month?: NullableIntFieldUpdateOperationsInput | number | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumCharityStatusFieldUpdateOperationsInput | $Enums.CharityStatus
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionOrderCreateManySubscriptionModelInput = {
    id?: string
    userId: string
    periodStart: Date | string
    periodEnd: Date | string
    stripeSessionId?: string | null
    stripePaymentIntentId?: string | null
    stripeCustomerId?: string | null
    stripeClientSecret?: string | null
    stripeEventId?: string | null
    paymentGateway?: $Enums.PaymentGateway
    amount: number
    currency?: string
    status?: $Enums.PaymentStatus
    failReason?: string | null
    completedAt?: Date | string | null
    cancelledAt?: Date | string | null
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionOrderUpdateWithoutSubscriptionModelInput = {
    id?: StringFieldUpdateOperationsInput | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    stripeSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeClientSecret?: NullableStringFieldUpdateOperationsInput | string | null
    stripeEventId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentGateway?: EnumPaymentGatewayFieldUpdateOperationsInput | $Enums.PaymentGateway
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    failReason?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSubcriptionsNestedInput
    userCharities?: UserCharityUpdateManyWithoutSubscriptionNestedInput
  }

  export type SubscriptionOrderUncheckedUpdateWithoutSubscriptionModelInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    stripeSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeClientSecret?: NullableStringFieldUpdateOperationsInput | string | null
    stripeEventId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentGateway?: EnumPaymentGatewayFieldUpdateOperationsInput | $Enums.PaymentGateway
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    failReason?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userCharities?: UserCharityUncheckedUpdateManyWithoutSubscriptionNestedInput
  }

  export type SubscriptionOrderUncheckedUpdateManyWithoutSubscriptionModelInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    stripeSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeClientSecret?: NullableStringFieldUpdateOperationsInput | string | null
    stripeEventId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentGateway?: EnumPaymentGatewayFieldUpdateOperationsInput | $Enums.PaymentGateway
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    failReason?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCharityCreateManySubscriptionInput = {
    id?: string
    userId: string
    charityId: string
    type: $Enums.CharityContributionType
    percentage?: Decimal | DecimalJsLike | number | string | null
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    month?: number | null
    year?: number | null
    status?: $Enums.CharityStatus
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCharityUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumCharityContributionTypeFieldUpdateOperationsInput | $Enums.CharityContributionType
    percentage?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    month?: NullableIntFieldUpdateOperationsInput | number | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumCharityStatusFieldUpdateOperationsInput | $Enums.CharityStatus
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserCharitiesNestedInput
    charity?: CharityUpdateOneRequiredWithoutUserCharitiesNestedInput
  }

  export type UserCharityUncheckedUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    charityId?: StringFieldUpdateOperationsInput | string
    type?: EnumCharityContributionTypeFieldUpdateOperationsInput | $Enums.CharityContributionType
    percentage?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    month?: NullableIntFieldUpdateOperationsInput | number | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumCharityStatusFieldUpdateOperationsInput | $Enums.CharityStatus
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCharityUncheckedUpdateManyWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    charityId?: StringFieldUpdateOperationsInput | string
    type?: EnumCharityContributionTypeFieldUpdateOperationsInput | $Enums.CharityContributionType
    percentage?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    month?: NullableIntFieldUpdateOperationsInput | number | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumCharityStatusFieldUpdateOperationsInput | $Enums.CharityStatus
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DrawCreateManyRolledOverFromInput = {
    id?: string
    adminId: string
    prizePool: number
    currency?: string
    entryStartDate: Date | string
    lastEntryDate: Date | string
    resultDate: Date | string
    drawNumber?: string | null
    status?: $Enums.DrawStatus
    fiveMatchPct?: number
    fourMatchPct?: number
    threeMatchPct?: number
    jackpotRolledOver?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WinnerCreateManyDrawInput = {
    id?: string
    userId: string
    winnerType: $Enums.WinnerType
    winnerScore: string
    verificationStatus?: $Enums.VerificationStatus
    paymentStatus?: $Enums.WinnerPaymentStatus
    proofImage?: string | null
    prizeAmount?: number | null
    adminNotes?: string | null
    verifiedAt?: Date | string | null
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParticipantCreateManyDrawInput = {
    id?: string
    userId: string
    score: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DrawUpdateWithoutRolledOverFromInput = {
    id?: StringFieldUpdateOperationsInput | string
    prizePool?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    entryStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastEntryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    resultDate?: DateTimeFieldUpdateOperationsInput | Date | string
    drawNumber?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDrawStatusFieldUpdateOperationsInput | $Enums.DrawStatus
    fiveMatchPct?: IntFieldUpdateOperationsInput | number
    fourMatchPct?: IntFieldUpdateOperationsInput | number
    threeMatchPct?: IntFieldUpdateOperationsInput | number
    jackpotRolledOver?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: UserUpdateOneRequiredWithoutDrawsNestedInput
    rolledOverTo?: DrawUpdateManyWithoutRolledOverFromNestedInput
    winners?: WinnerUpdateManyWithoutDrawNestedInput
    participants?: ParticipantUpdateManyWithoutDrawNestedInput
  }

  export type DrawUncheckedUpdateWithoutRolledOverFromInput = {
    id?: StringFieldUpdateOperationsInput | string
    adminId?: StringFieldUpdateOperationsInput | string
    prizePool?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    entryStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastEntryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    resultDate?: DateTimeFieldUpdateOperationsInput | Date | string
    drawNumber?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDrawStatusFieldUpdateOperationsInput | $Enums.DrawStatus
    fiveMatchPct?: IntFieldUpdateOperationsInput | number
    fourMatchPct?: IntFieldUpdateOperationsInput | number
    threeMatchPct?: IntFieldUpdateOperationsInput | number
    jackpotRolledOver?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rolledOverTo?: DrawUncheckedUpdateManyWithoutRolledOverFromNestedInput
    winners?: WinnerUncheckedUpdateManyWithoutDrawNestedInput
    participants?: ParticipantUncheckedUpdateManyWithoutDrawNestedInput
  }

  export type DrawUncheckedUpdateManyWithoutRolledOverFromInput = {
    id?: StringFieldUpdateOperationsInput | string
    adminId?: StringFieldUpdateOperationsInput | string
    prizePool?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    entryStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastEntryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    resultDate?: DateTimeFieldUpdateOperationsInput | Date | string
    drawNumber?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDrawStatusFieldUpdateOperationsInput | $Enums.DrawStatus
    fiveMatchPct?: IntFieldUpdateOperationsInput | number
    fourMatchPct?: IntFieldUpdateOperationsInput | number
    threeMatchPct?: IntFieldUpdateOperationsInput | number
    jackpotRolledOver?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WinnerUpdateWithoutDrawInput = {
    id?: StringFieldUpdateOperationsInput | string
    winnerType?: EnumWinnerTypeFieldUpdateOperationsInput | $Enums.WinnerType
    winnerScore?: StringFieldUpdateOperationsInput | string
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    paymentStatus?: EnumWinnerPaymentStatusFieldUpdateOperationsInput | $Enums.WinnerPaymentStatus
    proofImage?: NullableStringFieldUpdateOperationsInput | string | null
    prizeAmount?: NullableIntFieldUpdateOperationsInput | number | null
    adminNotes?: NullableStringFieldUpdateOperationsInput | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWinnersNestedInput
  }

  export type WinnerUncheckedUpdateWithoutDrawInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    winnerType?: EnumWinnerTypeFieldUpdateOperationsInput | $Enums.WinnerType
    winnerScore?: StringFieldUpdateOperationsInput | string
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    paymentStatus?: EnumWinnerPaymentStatusFieldUpdateOperationsInput | $Enums.WinnerPaymentStatus
    proofImage?: NullableStringFieldUpdateOperationsInput | string | null
    prizeAmount?: NullableIntFieldUpdateOperationsInput | number | null
    adminNotes?: NullableStringFieldUpdateOperationsInput | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WinnerUncheckedUpdateManyWithoutDrawInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    winnerType?: EnumWinnerTypeFieldUpdateOperationsInput | $Enums.WinnerType
    winnerScore?: StringFieldUpdateOperationsInput | string
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    paymentStatus?: EnumWinnerPaymentStatusFieldUpdateOperationsInput | $Enums.WinnerPaymentStatus
    proofImage?: NullableStringFieldUpdateOperationsInput | string | null
    prizeAmount?: NullableIntFieldUpdateOperationsInput | number | null
    adminNotes?: NullableStringFieldUpdateOperationsInput | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipantUpdateWithoutDrawInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutParticipantsNestedInput
  }

  export type ParticipantUncheckedUpdateWithoutDrawInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    score?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipantUncheckedUpdateManyWithoutDrawInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    score?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}