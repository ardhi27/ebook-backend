
/**
 * Client
**/

import * as runtime from './runtime/library.js';
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
 * Model BooksCategory
 * 
 */
export type BooksCategory = $Result.DefaultSelection<Prisma.$BooksCategoryPayload>
/**
 * Model BooksAuthor
 * 
 */
export type BooksAuthor = $Result.DefaultSelection<Prisma.$BooksAuthorPayload>
/**
 * Model Books
 * 
 */
export type Books = $Result.DefaultSelection<Prisma.$BooksPayload>
/**
 * Model Rental
 * 
 */
export type Rental = $Result.DefaultSelection<Prisma.$RentalPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
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
   * `prisma.booksCategory`: Exposes CRUD operations for the **BooksCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BooksCategories
    * const booksCategories = await prisma.booksCategory.findMany()
    * ```
    */
  get booksCategory(): Prisma.BooksCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.booksAuthor`: Exposes CRUD operations for the **BooksAuthor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BooksAuthors
    * const booksAuthors = await prisma.booksAuthor.findMany()
    * ```
    */
  get booksAuthor(): Prisma.BooksAuthorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.books`: Exposes CRUD operations for the **Books** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Books
    * const books = await prisma.books.findMany()
    * ```
    */
  get books(): Prisma.BooksDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rental`: Exposes CRUD operations for the **Rental** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rentals
    * const rentals = await prisma.rental.findMany()
    * ```
    */
  get rental(): Prisma.RentalDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    BooksCategory: 'BooksCategory',
    BooksAuthor: 'BooksAuthor',
    Books: 'Books',
    Rental: 'Rental'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "booksCategory" | "booksAuthor" | "books" | "rental"
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
      BooksCategory: {
        payload: Prisma.$BooksCategoryPayload<ExtArgs>
        fields: Prisma.BooksCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BooksCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BooksCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BooksCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BooksCategoryPayload>
          }
          findFirst: {
            args: Prisma.BooksCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BooksCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BooksCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BooksCategoryPayload>
          }
          findMany: {
            args: Prisma.BooksCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BooksCategoryPayload>[]
          }
          create: {
            args: Prisma.BooksCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BooksCategoryPayload>
          }
          createMany: {
            args: Prisma.BooksCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BooksCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BooksCategoryPayload>
          }
          update: {
            args: Prisma.BooksCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BooksCategoryPayload>
          }
          deleteMany: {
            args: Prisma.BooksCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BooksCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BooksCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BooksCategoryPayload>
          }
          aggregate: {
            args: Prisma.BooksCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBooksCategory>
          }
          groupBy: {
            args: Prisma.BooksCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<BooksCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.BooksCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<BooksCategoryCountAggregateOutputType> | number
          }
        }
      }
      BooksAuthor: {
        payload: Prisma.$BooksAuthorPayload<ExtArgs>
        fields: Prisma.BooksAuthorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BooksAuthorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BooksAuthorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BooksAuthorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BooksAuthorPayload>
          }
          findFirst: {
            args: Prisma.BooksAuthorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BooksAuthorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BooksAuthorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BooksAuthorPayload>
          }
          findMany: {
            args: Prisma.BooksAuthorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BooksAuthorPayload>[]
          }
          create: {
            args: Prisma.BooksAuthorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BooksAuthorPayload>
          }
          createMany: {
            args: Prisma.BooksAuthorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BooksAuthorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BooksAuthorPayload>
          }
          update: {
            args: Prisma.BooksAuthorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BooksAuthorPayload>
          }
          deleteMany: {
            args: Prisma.BooksAuthorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BooksAuthorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BooksAuthorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BooksAuthorPayload>
          }
          aggregate: {
            args: Prisma.BooksAuthorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBooksAuthor>
          }
          groupBy: {
            args: Prisma.BooksAuthorGroupByArgs<ExtArgs>
            result: $Utils.Optional<BooksAuthorGroupByOutputType>[]
          }
          count: {
            args: Prisma.BooksAuthorCountArgs<ExtArgs>
            result: $Utils.Optional<BooksAuthorCountAggregateOutputType> | number
          }
        }
      }
      Books: {
        payload: Prisma.$BooksPayload<ExtArgs>
        fields: Prisma.BooksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BooksFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BooksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BooksFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BooksPayload>
          }
          findFirst: {
            args: Prisma.BooksFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BooksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BooksFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BooksPayload>
          }
          findMany: {
            args: Prisma.BooksFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BooksPayload>[]
          }
          create: {
            args: Prisma.BooksCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BooksPayload>
          }
          createMany: {
            args: Prisma.BooksCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BooksDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BooksPayload>
          }
          update: {
            args: Prisma.BooksUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BooksPayload>
          }
          deleteMany: {
            args: Prisma.BooksDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BooksUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BooksUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BooksPayload>
          }
          aggregate: {
            args: Prisma.BooksAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBooks>
          }
          groupBy: {
            args: Prisma.BooksGroupByArgs<ExtArgs>
            result: $Utils.Optional<BooksGroupByOutputType>[]
          }
          count: {
            args: Prisma.BooksCountArgs<ExtArgs>
            result: $Utils.Optional<BooksCountAggregateOutputType> | number
          }
        }
      }
      Rental: {
        payload: Prisma.$RentalPayload<ExtArgs>
        fields: Prisma.RentalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RentalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RentalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalPayload>
          }
          findFirst: {
            args: Prisma.RentalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RentalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalPayload>
          }
          findMany: {
            args: Prisma.RentalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalPayload>[]
          }
          create: {
            args: Prisma.RentalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalPayload>
          }
          createMany: {
            args: Prisma.RentalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RentalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalPayload>
          }
          update: {
            args: Prisma.RentalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalPayload>
          }
          deleteMany: {
            args: Prisma.RentalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RentalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RentalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalPayload>
          }
          aggregate: {
            args: Prisma.RentalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRental>
          }
          groupBy: {
            args: Prisma.RentalGroupByArgs<ExtArgs>
            result: $Utils.Optional<RentalGroupByOutputType>[]
          }
          count: {
            args: Prisma.RentalCountArgs<ExtArgs>
            result: $Utils.Optional<RentalCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    booksCategory?: BooksCategoryOmit
    booksAuthor?: BooksAuthorOmit
    books?: BooksOmit
    rental?: RentalOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
    Rental: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Rental?: boolean | UserCountOutputTypeCountRentalArgs
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
  export type UserCountOutputTypeCountRentalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RentalWhereInput
  }


  /**
   * Count Type BooksCategoryCountOutputType
   */

  export type BooksCategoryCountOutputType = {
    books: number
  }

  export type BooksCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    books?: boolean | BooksCategoryCountOutputTypeCountBooksArgs
  }

  // Custom InputTypes
  /**
   * BooksCategoryCountOutputType without action
   */
  export type BooksCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BooksCategoryCountOutputType
     */
    select?: BooksCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BooksCategoryCountOutputType without action
   */
  export type BooksCategoryCountOutputTypeCountBooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BooksWhereInput
  }


  /**
   * Count Type BooksAuthorCountOutputType
   */

  export type BooksAuthorCountOutputType = {
    books: number
  }

  export type BooksAuthorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    books?: boolean | BooksAuthorCountOutputTypeCountBooksArgs
  }

  // Custom InputTypes
  /**
   * BooksAuthorCountOutputType without action
   */
  export type BooksAuthorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BooksAuthorCountOutputType
     */
    select?: BooksAuthorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BooksAuthorCountOutputType without action
   */
  export type BooksAuthorCountOutputTypeCountBooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BooksWhereInput
  }


  /**
   * Count Type BooksCountOutputType
   */

  export type BooksCountOutputType = {
    Rental: number
  }

  export type BooksCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Rental?: boolean | BooksCountOutputTypeCountRentalArgs
  }

  // Custom InputTypes
  /**
   * BooksCountOutputType without action
   */
  export type BooksCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BooksCountOutputType
     */
    select?: BooksCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BooksCountOutputType without action
   */
  export type BooksCountOutputTypeCountRentalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RentalWhereInput
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
    userId: number | null
  }

  export type UserSumAggregateOutputType = {
    userId: number | null
  }

  export type UserMinAggregateOutputType = {
    userId: number | null
    username: string | null
    password: string | null
    userRole: string | null
  }

  export type UserMaxAggregateOutputType = {
    userId: number | null
    username: string | null
    password: string | null
    userRole: string | null
  }

  export type UserCountAggregateOutputType = {
    userId: number
    username: number
    password: number
    userRole: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    userId?: true
  }

  export type UserSumAggregateInputType = {
    userId?: true
  }

  export type UserMinAggregateInputType = {
    userId?: true
    username?: true
    password?: true
    userRole?: true
  }

  export type UserMaxAggregateInputType = {
    userId?: true
    username?: true
    password?: true
    userRole?: true
  }

  export type UserCountAggregateInputType = {
    userId?: true
    username?: true
    password?: true
    userRole?: true
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
    userId: number
    username: string
    password: string
    userRole: string
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
    userId?: boolean
    username?: boolean
    password?: boolean
    userRole?: boolean
    Rental?: boolean | User$RentalArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    userId?: boolean
    username?: boolean
    password?: boolean
    userRole?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "username" | "password" | "userRole", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Rental?: boolean | User$RentalArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Rental: Prisma.$RentalPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: number
      username: string
      password: string
      userRole: string
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
     * // Only select the `userId`
     * const userWithUserIdOnly = await prisma.user.findMany({ select: { userId: true } })
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
    Rental<T extends User$RentalArgs<ExtArgs> = {}>(args?: Subset<T, User$RentalArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RentalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly userId: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly userRole: FieldRef<"User", 'String'>
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
   * User.Rental
   */
  export type User$RentalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rental
     */
    select?: RentalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rental
     */
    omit?: RentalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalInclude<ExtArgs> | null
    where?: RentalWhereInput
    orderBy?: RentalOrderByWithRelationInput | RentalOrderByWithRelationInput[]
    cursor?: RentalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RentalScalarFieldEnum | RentalScalarFieldEnum[]
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
   * Model BooksCategory
   */

  export type AggregateBooksCategory = {
    _count: BooksCategoryCountAggregateOutputType | null
    _avg: BooksCategoryAvgAggregateOutputType | null
    _sum: BooksCategorySumAggregateOutputType | null
    _min: BooksCategoryMinAggregateOutputType | null
    _max: BooksCategoryMaxAggregateOutputType | null
  }

  export type BooksCategoryAvgAggregateOutputType = {
    categoryId: number | null
  }

  export type BooksCategorySumAggregateOutputType = {
    categoryId: number | null
  }

  export type BooksCategoryMinAggregateOutputType = {
    categoryId: number | null
    category: string | null
  }

  export type BooksCategoryMaxAggregateOutputType = {
    categoryId: number | null
    category: string | null
  }

  export type BooksCategoryCountAggregateOutputType = {
    categoryId: number
    category: number
    _all: number
  }


  export type BooksCategoryAvgAggregateInputType = {
    categoryId?: true
  }

  export type BooksCategorySumAggregateInputType = {
    categoryId?: true
  }

  export type BooksCategoryMinAggregateInputType = {
    categoryId?: true
    category?: true
  }

  export type BooksCategoryMaxAggregateInputType = {
    categoryId?: true
    category?: true
  }

  export type BooksCategoryCountAggregateInputType = {
    categoryId?: true
    category?: true
    _all?: true
  }

  export type BooksCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BooksCategory to aggregate.
     */
    where?: BooksCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BooksCategories to fetch.
     */
    orderBy?: BooksCategoryOrderByWithRelationInput | BooksCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BooksCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BooksCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BooksCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BooksCategories
    **/
    _count?: true | BooksCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BooksCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BooksCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BooksCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BooksCategoryMaxAggregateInputType
  }

  export type GetBooksCategoryAggregateType<T extends BooksCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateBooksCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooksCategory[P]>
      : GetScalarType<T[P], AggregateBooksCategory[P]>
  }




  export type BooksCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BooksCategoryWhereInput
    orderBy?: BooksCategoryOrderByWithAggregationInput | BooksCategoryOrderByWithAggregationInput[]
    by: BooksCategoryScalarFieldEnum[] | BooksCategoryScalarFieldEnum
    having?: BooksCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BooksCategoryCountAggregateInputType | true
    _avg?: BooksCategoryAvgAggregateInputType
    _sum?: BooksCategorySumAggregateInputType
    _min?: BooksCategoryMinAggregateInputType
    _max?: BooksCategoryMaxAggregateInputType
  }

  export type BooksCategoryGroupByOutputType = {
    categoryId: number
    category: string
    _count: BooksCategoryCountAggregateOutputType | null
    _avg: BooksCategoryAvgAggregateOutputType | null
    _sum: BooksCategorySumAggregateOutputType | null
    _min: BooksCategoryMinAggregateOutputType | null
    _max: BooksCategoryMaxAggregateOutputType | null
  }

  type GetBooksCategoryGroupByPayload<T extends BooksCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BooksCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BooksCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BooksCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], BooksCategoryGroupByOutputType[P]>
        }
      >
    >


  export type BooksCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    categoryId?: boolean
    category?: boolean
    books?: boolean | BooksCategory$booksArgs<ExtArgs>
    _count?: boolean | BooksCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booksCategory"]>



  export type BooksCategorySelectScalar = {
    categoryId?: boolean
    category?: boolean
  }

  export type BooksCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"categoryId" | "category", ExtArgs["result"]["booksCategory"]>
  export type BooksCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    books?: boolean | BooksCategory$booksArgs<ExtArgs>
    _count?: boolean | BooksCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $BooksCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BooksCategory"
    objects: {
      books: Prisma.$BooksPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      categoryId: number
      category: string
    }, ExtArgs["result"]["booksCategory"]>
    composites: {}
  }

  type BooksCategoryGetPayload<S extends boolean | null | undefined | BooksCategoryDefaultArgs> = $Result.GetResult<Prisma.$BooksCategoryPayload, S>

  type BooksCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BooksCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BooksCategoryCountAggregateInputType | true
    }

  export interface BooksCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BooksCategory'], meta: { name: 'BooksCategory' } }
    /**
     * Find zero or one BooksCategory that matches the filter.
     * @param {BooksCategoryFindUniqueArgs} args - Arguments to find a BooksCategory
     * @example
     * // Get one BooksCategory
     * const booksCategory = await prisma.booksCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BooksCategoryFindUniqueArgs>(args: SelectSubset<T, BooksCategoryFindUniqueArgs<ExtArgs>>): Prisma__BooksCategoryClient<$Result.GetResult<Prisma.$BooksCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BooksCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BooksCategoryFindUniqueOrThrowArgs} args - Arguments to find a BooksCategory
     * @example
     * // Get one BooksCategory
     * const booksCategory = await prisma.booksCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BooksCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, BooksCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BooksCategoryClient<$Result.GetResult<Prisma.$BooksCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BooksCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BooksCategoryFindFirstArgs} args - Arguments to find a BooksCategory
     * @example
     * // Get one BooksCategory
     * const booksCategory = await prisma.booksCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BooksCategoryFindFirstArgs>(args?: SelectSubset<T, BooksCategoryFindFirstArgs<ExtArgs>>): Prisma__BooksCategoryClient<$Result.GetResult<Prisma.$BooksCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BooksCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BooksCategoryFindFirstOrThrowArgs} args - Arguments to find a BooksCategory
     * @example
     * // Get one BooksCategory
     * const booksCategory = await prisma.booksCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BooksCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, BooksCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__BooksCategoryClient<$Result.GetResult<Prisma.$BooksCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BooksCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BooksCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BooksCategories
     * const booksCategories = await prisma.booksCategory.findMany()
     * 
     * // Get first 10 BooksCategories
     * const booksCategories = await prisma.booksCategory.findMany({ take: 10 })
     * 
     * // Only select the `categoryId`
     * const booksCategoryWithCategoryIdOnly = await prisma.booksCategory.findMany({ select: { categoryId: true } })
     * 
     */
    findMany<T extends BooksCategoryFindManyArgs>(args?: SelectSubset<T, BooksCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BooksCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BooksCategory.
     * @param {BooksCategoryCreateArgs} args - Arguments to create a BooksCategory.
     * @example
     * // Create one BooksCategory
     * const BooksCategory = await prisma.booksCategory.create({
     *   data: {
     *     // ... data to create a BooksCategory
     *   }
     * })
     * 
     */
    create<T extends BooksCategoryCreateArgs>(args: SelectSubset<T, BooksCategoryCreateArgs<ExtArgs>>): Prisma__BooksCategoryClient<$Result.GetResult<Prisma.$BooksCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BooksCategories.
     * @param {BooksCategoryCreateManyArgs} args - Arguments to create many BooksCategories.
     * @example
     * // Create many BooksCategories
     * const booksCategory = await prisma.booksCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BooksCategoryCreateManyArgs>(args?: SelectSubset<T, BooksCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BooksCategory.
     * @param {BooksCategoryDeleteArgs} args - Arguments to delete one BooksCategory.
     * @example
     * // Delete one BooksCategory
     * const BooksCategory = await prisma.booksCategory.delete({
     *   where: {
     *     // ... filter to delete one BooksCategory
     *   }
     * })
     * 
     */
    delete<T extends BooksCategoryDeleteArgs>(args: SelectSubset<T, BooksCategoryDeleteArgs<ExtArgs>>): Prisma__BooksCategoryClient<$Result.GetResult<Prisma.$BooksCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BooksCategory.
     * @param {BooksCategoryUpdateArgs} args - Arguments to update one BooksCategory.
     * @example
     * // Update one BooksCategory
     * const booksCategory = await prisma.booksCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BooksCategoryUpdateArgs>(args: SelectSubset<T, BooksCategoryUpdateArgs<ExtArgs>>): Prisma__BooksCategoryClient<$Result.GetResult<Prisma.$BooksCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BooksCategories.
     * @param {BooksCategoryDeleteManyArgs} args - Arguments to filter BooksCategories to delete.
     * @example
     * // Delete a few BooksCategories
     * const { count } = await prisma.booksCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BooksCategoryDeleteManyArgs>(args?: SelectSubset<T, BooksCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BooksCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BooksCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BooksCategories
     * const booksCategory = await prisma.booksCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BooksCategoryUpdateManyArgs>(args: SelectSubset<T, BooksCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BooksCategory.
     * @param {BooksCategoryUpsertArgs} args - Arguments to update or create a BooksCategory.
     * @example
     * // Update or create a BooksCategory
     * const booksCategory = await prisma.booksCategory.upsert({
     *   create: {
     *     // ... data to create a BooksCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BooksCategory we want to update
     *   }
     * })
     */
    upsert<T extends BooksCategoryUpsertArgs>(args: SelectSubset<T, BooksCategoryUpsertArgs<ExtArgs>>): Prisma__BooksCategoryClient<$Result.GetResult<Prisma.$BooksCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BooksCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BooksCategoryCountArgs} args - Arguments to filter BooksCategories to count.
     * @example
     * // Count the number of BooksCategories
     * const count = await prisma.booksCategory.count({
     *   where: {
     *     // ... the filter for the BooksCategories we want to count
     *   }
     * })
    **/
    count<T extends BooksCategoryCountArgs>(
      args?: Subset<T, BooksCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BooksCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BooksCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BooksCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BooksCategoryAggregateArgs>(args: Subset<T, BooksCategoryAggregateArgs>): Prisma.PrismaPromise<GetBooksCategoryAggregateType<T>>

    /**
     * Group by BooksCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BooksCategoryGroupByArgs} args - Group by arguments.
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
      T extends BooksCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BooksCategoryGroupByArgs['orderBy'] }
        : { orderBy?: BooksCategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BooksCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBooksCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BooksCategory model
   */
  readonly fields: BooksCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BooksCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BooksCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    books<T extends BooksCategory$booksArgs<ExtArgs> = {}>(args?: Subset<T, BooksCategory$booksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BooksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the BooksCategory model
   */
  interface BooksCategoryFieldRefs {
    readonly categoryId: FieldRef<"BooksCategory", 'Int'>
    readonly category: FieldRef<"BooksCategory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * BooksCategory findUnique
   */
  export type BooksCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BooksCategory
     */
    select?: BooksCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BooksCategory
     */
    omit?: BooksCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BooksCategoryInclude<ExtArgs> | null
    /**
     * Filter, which BooksCategory to fetch.
     */
    where: BooksCategoryWhereUniqueInput
  }

  /**
   * BooksCategory findUniqueOrThrow
   */
  export type BooksCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BooksCategory
     */
    select?: BooksCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BooksCategory
     */
    omit?: BooksCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BooksCategoryInclude<ExtArgs> | null
    /**
     * Filter, which BooksCategory to fetch.
     */
    where: BooksCategoryWhereUniqueInput
  }

  /**
   * BooksCategory findFirst
   */
  export type BooksCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BooksCategory
     */
    select?: BooksCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BooksCategory
     */
    omit?: BooksCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BooksCategoryInclude<ExtArgs> | null
    /**
     * Filter, which BooksCategory to fetch.
     */
    where?: BooksCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BooksCategories to fetch.
     */
    orderBy?: BooksCategoryOrderByWithRelationInput | BooksCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BooksCategories.
     */
    cursor?: BooksCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BooksCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BooksCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BooksCategories.
     */
    distinct?: BooksCategoryScalarFieldEnum | BooksCategoryScalarFieldEnum[]
  }

  /**
   * BooksCategory findFirstOrThrow
   */
  export type BooksCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BooksCategory
     */
    select?: BooksCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BooksCategory
     */
    omit?: BooksCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BooksCategoryInclude<ExtArgs> | null
    /**
     * Filter, which BooksCategory to fetch.
     */
    where?: BooksCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BooksCategories to fetch.
     */
    orderBy?: BooksCategoryOrderByWithRelationInput | BooksCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BooksCategories.
     */
    cursor?: BooksCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BooksCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BooksCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BooksCategories.
     */
    distinct?: BooksCategoryScalarFieldEnum | BooksCategoryScalarFieldEnum[]
  }

  /**
   * BooksCategory findMany
   */
  export type BooksCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BooksCategory
     */
    select?: BooksCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BooksCategory
     */
    omit?: BooksCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BooksCategoryInclude<ExtArgs> | null
    /**
     * Filter, which BooksCategories to fetch.
     */
    where?: BooksCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BooksCategories to fetch.
     */
    orderBy?: BooksCategoryOrderByWithRelationInput | BooksCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BooksCategories.
     */
    cursor?: BooksCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BooksCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BooksCategories.
     */
    skip?: number
    distinct?: BooksCategoryScalarFieldEnum | BooksCategoryScalarFieldEnum[]
  }

  /**
   * BooksCategory create
   */
  export type BooksCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BooksCategory
     */
    select?: BooksCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BooksCategory
     */
    omit?: BooksCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BooksCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a BooksCategory.
     */
    data: XOR<BooksCategoryCreateInput, BooksCategoryUncheckedCreateInput>
  }

  /**
   * BooksCategory createMany
   */
  export type BooksCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BooksCategories.
     */
    data: BooksCategoryCreateManyInput | BooksCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BooksCategory update
   */
  export type BooksCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BooksCategory
     */
    select?: BooksCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BooksCategory
     */
    omit?: BooksCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BooksCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a BooksCategory.
     */
    data: XOR<BooksCategoryUpdateInput, BooksCategoryUncheckedUpdateInput>
    /**
     * Choose, which BooksCategory to update.
     */
    where: BooksCategoryWhereUniqueInput
  }

  /**
   * BooksCategory updateMany
   */
  export type BooksCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BooksCategories.
     */
    data: XOR<BooksCategoryUpdateManyMutationInput, BooksCategoryUncheckedUpdateManyInput>
    /**
     * Filter which BooksCategories to update
     */
    where?: BooksCategoryWhereInput
    /**
     * Limit how many BooksCategories to update.
     */
    limit?: number
  }

  /**
   * BooksCategory upsert
   */
  export type BooksCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BooksCategory
     */
    select?: BooksCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BooksCategory
     */
    omit?: BooksCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BooksCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the BooksCategory to update in case it exists.
     */
    where: BooksCategoryWhereUniqueInput
    /**
     * In case the BooksCategory found by the `where` argument doesn't exist, create a new BooksCategory with this data.
     */
    create: XOR<BooksCategoryCreateInput, BooksCategoryUncheckedCreateInput>
    /**
     * In case the BooksCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BooksCategoryUpdateInput, BooksCategoryUncheckedUpdateInput>
  }

  /**
   * BooksCategory delete
   */
  export type BooksCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BooksCategory
     */
    select?: BooksCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BooksCategory
     */
    omit?: BooksCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BooksCategoryInclude<ExtArgs> | null
    /**
     * Filter which BooksCategory to delete.
     */
    where: BooksCategoryWhereUniqueInput
  }

  /**
   * BooksCategory deleteMany
   */
  export type BooksCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BooksCategories to delete
     */
    where?: BooksCategoryWhereInput
    /**
     * Limit how many BooksCategories to delete.
     */
    limit?: number
  }

  /**
   * BooksCategory.books
   */
  export type BooksCategory$booksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Books
     */
    select?: BooksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Books
     */
    omit?: BooksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BooksInclude<ExtArgs> | null
    where?: BooksWhereInput
    orderBy?: BooksOrderByWithRelationInput | BooksOrderByWithRelationInput[]
    cursor?: BooksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BooksScalarFieldEnum | BooksScalarFieldEnum[]
  }

  /**
   * BooksCategory without action
   */
  export type BooksCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BooksCategory
     */
    select?: BooksCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BooksCategory
     */
    omit?: BooksCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BooksCategoryInclude<ExtArgs> | null
  }


  /**
   * Model BooksAuthor
   */

  export type AggregateBooksAuthor = {
    _count: BooksAuthorCountAggregateOutputType | null
    _avg: BooksAuthorAvgAggregateOutputType | null
    _sum: BooksAuthorSumAggregateOutputType | null
    _min: BooksAuthorMinAggregateOutputType | null
    _max: BooksAuthorMaxAggregateOutputType | null
  }

  export type BooksAuthorAvgAggregateOutputType = {
    authorId: number | null
  }

  export type BooksAuthorSumAggregateOutputType = {
    authorId: number | null
  }

  export type BooksAuthorMinAggregateOutputType = {
    authorId: number | null
    author: string | null
  }

  export type BooksAuthorMaxAggregateOutputType = {
    authorId: number | null
    author: string | null
  }

  export type BooksAuthorCountAggregateOutputType = {
    authorId: number
    author: number
    _all: number
  }


  export type BooksAuthorAvgAggregateInputType = {
    authorId?: true
  }

  export type BooksAuthorSumAggregateInputType = {
    authorId?: true
  }

  export type BooksAuthorMinAggregateInputType = {
    authorId?: true
    author?: true
  }

  export type BooksAuthorMaxAggregateInputType = {
    authorId?: true
    author?: true
  }

  export type BooksAuthorCountAggregateInputType = {
    authorId?: true
    author?: true
    _all?: true
  }

  export type BooksAuthorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BooksAuthor to aggregate.
     */
    where?: BooksAuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BooksAuthors to fetch.
     */
    orderBy?: BooksAuthorOrderByWithRelationInput | BooksAuthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BooksAuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BooksAuthors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BooksAuthors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BooksAuthors
    **/
    _count?: true | BooksAuthorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BooksAuthorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BooksAuthorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BooksAuthorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BooksAuthorMaxAggregateInputType
  }

  export type GetBooksAuthorAggregateType<T extends BooksAuthorAggregateArgs> = {
        [P in keyof T & keyof AggregateBooksAuthor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooksAuthor[P]>
      : GetScalarType<T[P], AggregateBooksAuthor[P]>
  }




  export type BooksAuthorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BooksAuthorWhereInput
    orderBy?: BooksAuthorOrderByWithAggregationInput | BooksAuthorOrderByWithAggregationInput[]
    by: BooksAuthorScalarFieldEnum[] | BooksAuthorScalarFieldEnum
    having?: BooksAuthorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BooksAuthorCountAggregateInputType | true
    _avg?: BooksAuthorAvgAggregateInputType
    _sum?: BooksAuthorSumAggregateInputType
    _min?: BooksAuthorMinAggregateInputType
    _max?: BooksAuthorMaxAggregateInputType
  }

  export type BooksAuthorGroupByOutputType = {
    authorId: number
    author: string
    _count: BooksAuthorCountAggregateOutputType | null
    _avg: BooksAuthorAvgAggregateOutputType | null
    _sum: BooksAuthorSumAggregateOutputType | null
    _min: BooksAuthorMinAggregateOutputType | null
    _max: BooksAuthorMaxAggregateOutputType | null
  }

  type GetBooksAuthorGroupByPayload<T extends BooksAuthorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BooksAuthorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BooksAuthorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BooksAuthorGroupByOutputType[P]>
            : GetScalarType<T[P], BooksAuthorGroupByOutputType[P]>
        }
      >
    >


  export type BooksAuthorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    authorId?: boolean
    author?: boolean
    books?: boolean | BooksAuthor$booksArgs<ExtArgs>
    _count?: boolean | BooksAuthorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booksAuthor"]>



  export type BooksAuthorSelectScalar = {
    authorId?: boolean
    author?: boolean
  }

  export type BooksAuthorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"authorId" | "author", ExtArgs["result"]["booksAuthor"]>
  export type BooksAuthorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    books?: boolean | BooksAuthor$booksArgs<ExtArgs>
    _count?: boolean | BooksAuthorCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $BooksAuthorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BooksAuthor"
    objects: {
      books: Prisma.$BooksPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      authorId: number
      author: string
    }, ExtArgs["result"]["booksAuthor"]>
    composites: {}
  }

  type BooksAuthorGetPayload<S extends boolean | null | undefined | BooksAuthorDefaultArgs> = $Result.GetResult<Prisma.$BooksAuthorPayload, S>

  type BooksAuthorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BooksAuthorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BooksAuthorCountAggregateInputType | true
    }

  export interface BooksAuthorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BooksAuthor'], meta: { name: 'BooksAuthor' } }
    /**
     * Find zero or one BooksAuthor that matches the filter.
     * @param {BooksAuthorFindUniqueArgs} args - Arguments to find a BooksAuthor
     * @example
     * // Get one BooksAuthor
     * const booksAuthor = await prisma.booksAuthor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BooksAuthorFindUniqueArgs>(args: SelectSubset<T, BooksAuthorFindUniqueArgs<ExtArgs>>): Prisma__BooksAuthorClient<$Result.GetResult<Prisma.$BooksAuthorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BooksAuthor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BooksAuthorFindUniqueOrThrowArgs} args - Arguments to find a BooksAuthor
     * @example
     * // Get one BooksAuthor
     * const booksAuthor = await prisma.booksAuthor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BooksAuthorFindUniqueOrThrowArgs>(args: SelectSubset<T, BooksAuthorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BooksAuthorClient<$Result.GetResult<Prisma.$BooksAuthorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BooksAuthor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BooksAuthorFindFirstArgs} args - Arguments to find a BooksAuthor
     * @example
     * // Get one BooksAuthor
     * const booksAuthor = await prisma.booksAuthor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BooksAuthorFindFirstArgs>(args?: SelectSubset<T, BooksAuthorFindFirstArgs<ExtArgs>>): Prisma__BooksAuthorClient<$Result.GetResult<Prisma.$BooksAuthorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BooksAuthor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BooksAuthorFindFirstOrThrowArgs} args - Arguments to find a BooksAuthor
     * @example
     * // Get one BooksAuthor
     * const booksAuthor = await prisma.booksAuthor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BooksAuthorFindFirstOrThrowArgs>(args?: SelectSubset<T, BooksAuthorFindFirstOrThrowArgs<ExtArgs>>): Prisma__BooksAuthorClient<$Result.GetResult<Prisma.$BooksAuthorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BooksAuthors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BooksAuthorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BooksAuthors
     * const booksAuthors = await prisma.booksAuthor.findMany()
     * 
     * // Get first 10 BooksAuthors
     * const booksAuthors = await prisma.booksAuthor.findMany({ take: 10 })
     * 
     * // Only select the `authorId`
     * const booksAuthorWithAuthorIdOnly = await prisma.booksAuthor.findMany({ select: { authorId: true } })
     * 
     */
    findMany<T extends BooksAuthorFindManyArgs>(args?: SelectSubset<T, BooksAuthorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BooksAuthorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BooksAuthor.
     * @param {BooksAuthorCreateArgs} args - Arguments to create a BooksAuthor.
     * @example
     * // Create one BooksAuthor
     * const BooksAuthor = await prisma.booksAuthor.create({
     *   data: {
     *     // ... data to create a BooksAuthor
     *   }
     * })
     * 
     */
    create<T extends BooksAuthorCreateArgs>(args: SelectSubset<T, BooksAuthorCreateArgs<ExtArgs>>): Prisma__BooksAuthorClient<$Result.GetResult<Prisma.$BooksAuthorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BooksAuthors.
     * @param {BooksAuthorCreateManyArgs} args - Arguments to create many BooksAuthors.
     * @example
     * // Create many BooksAuthors
     * const booksAuthor = await prisma.booksAuthor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BooksAuthorCreateManyArgs>(args?: SelectSubset<T, BooksAuthorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BooksAuthor.
     * @param {BooksAuthorDeleteArgs} args - Arguments to delete one BooksAuthor.
     * @example
     * // Delete one BooksAuthor
     * const BooksAuthor = await prisma.booksAuthor.delete({
     *   where: {
     *     // ... filter to delete one BooksAuthor
     *   }
     * })
     * 
     */
    delete<T extends BooksAuthorDeleteArgs>(args: SelectSubset<T, BooksAuthorDeleteArgs<ExtArgs>>): Prisma__BooksAuthorClient<$Result.GetResult<Prisma.$BooksAuthorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BooksAuthor.
     * @param {BooksAuthorUpdateArgs} args - Arguments to update one BooksAuthor.
     * @example
     * // Update one BooksAuthor
     * const booksAuthor = await prisma.booksAuthor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BooksAuthorUpdateArgs>(args: SelectSubset<T, BooksAuthorUpdateArgs<ExtArgs>>): Prisma__BooksAuthorClient<$Result.GetResult<Prisma.$BooksAuthorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BooksAuthors.
     * @param {BooksAuthorDeleteManyArgs} args - Arguments to filter BooksAuthors to delete.
     * @example
     * // Delete a few BooksAuthors
     * const { count } = await prisma.booksAuthor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BooksAuthorDeleteManyArgs>(args?: SelectSubset<T, BooksAuthorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BooksAuthors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BooksAuthorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BooksAuthors
     * const booksAuthor = await prisma.booksAuthor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BooksAuthorUpdateManyArgs>(args: SelectSubset<T, BooksAuthorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BooksAuthor.
     * @param {BooksAuthorUpsertArgs} args - Arguments to update or create a BooksAuthor.
     * @example
     * // Update or create a BooksAuthor
     * const booksAuthor = await prisma.booksAuthor.upsert({
     *   create: {
     *     // ... data to create a BooksAuthor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BooksAuthor we want to update
     *   }
     * })
     */
    upsert<T extends BooksAuthorUpsertArgs>(args: SelectSubset<T, BooksAuthorUpsertArgs<ExtArgs>>): Prisma__BooksAuthorClient<$Result.GetResult<Prisma.$BooksAuthorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BooksAuthors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BooksAuthorCountArgs} args - Arguments to filter BooksAuthors to count.
     * @example
     * // Count the number of BooksAuthors
     * const count = await prisma.booksAuthor.count({
     *   where: {
     *     // ... the filter for the BooksAuthors we want to count
     *   }
     * })
    **/
    count<T extends BooksAuthorCountArgs>(
      args?: Subset<T, BooksAuthorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BooksAuthorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BooksAuthor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BooksAuthorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BooksAuthorAggregateArgs>(args: Subset<T, BooksAuthorAggregateArgs>): Prisma.PrismaPromise<GetBooksAuthorAggregateType<T>>

    /**
     * Group by BooksAuthor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BooksAuthorGroupByArgs} args - Group by arguments.
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
      T extends BooksAuthorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BooksAuthorGroupByArgs['orderBy'] }
        : { orderBy?: BooksAuthorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BooksAuthorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBooksAuthorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BooksAuthor model
   */
  readonly fields: BooksAuthorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BooksAuthor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BooksAuthorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    books<T extends BooksAuthor$booksArgs<ExtArgs> = {}>(args?: Subset<T, BooksAuthor$booksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BooksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the BooksAuthor model
   */
  interface BooksAuthorFieldRefs {
    readonly authorId: FieldRef<"BooksAuthor", 'Int'>
    readonly author: FieldRef<"BooksAuthor", 'String'>
  }
    

  // Custom InputTypes
  /**
   * BooksAuthor findUnique
   */
  export type BooksAuthorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BooksAuthor
     */
    select?: BooksAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BooksAuthor
     */
    omit?: BooksAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BooksAuthorInclude<ExtArgs> | null
    /**
     * Filter, which BooksAuthor to fetch.
     */
    where: BooksAuthorWhereUniqueInput
  }

  /**
   * BooksAuthor findUniqueOrThrow
   */
  export type BooksAuthorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BooksAuthor
     */
    select?: BooksAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BooksAuthor
     */
    omit?: BooksAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BooksAuthorInclude<ExtArgs> | null
    /**
     * Filter, which BooksAuthor to fetch.
     */
    where: BooksAuthorWhereUniqueInput
  }

  /**
   * BooksAuthor findFirst
   */
  export type BooksAuthorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BooksAuthor
     */
    select?: BooksAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BooksAuthor
     */
    omit?: BooksAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BooksAuthorInclude<ExtArgs> | null
    /**
     * Filter, which BooksAuthor to fetch.
     */
    where?: BooksAuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BooksAuthors to fetch.
     */
    orderBy?: BooksAuthorOrderByWithRelationInput | BooksAuthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BooksAuthors.
     */
    cursor?: BooksAuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BooksAuthors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BooksAuthors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BooksAuthors.
     */
    distinct?: BooksAuthorScalarFieldEnum | BooksAuthorScalarFieldEnum[]
  }

  /**
   * BooksAuthor findFirstOrThrow
   */
  export type BooksAuthorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BooksAuthor
     */
    select?: BooksAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BooksAuthor
     */
    omit?: BooksAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BooksAuthorInclude<ExtArgs> | null
    /**
     * Filter, which BooksAuthor to fetch.
     */
    where?: BooksAuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BooksAuthors to fetch.
     */
    orderBy?: BooksAuthorOrderByWithRelationInput | BooksAuthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BooksAuthors.
     */
    cursor?: BooksAuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BooksAuthors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BooksAuthors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BooksAuthors.
     */
    distinct?: BooksAuthorScalarFieldEnum | BooksAuthorScalarFieldEnum[]
  }

  /**
   * BooksAuthor findMany
   */
  export type BooksAuthorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BooksAuthor
     */
    select?: BooksAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BooksAuthor
     */
    omit?: BooksAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BooksAuthorInclude<ExtArgs> | null
    /**
     * Filter, which BooksAuthors to fetch.
     */
    where?: BooksAuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BooksAuthors to fetch.
     */
    orderBy?: BooksAuthorOrderByWithRelationInput | BooksAuthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BooksAuthors.
     */
    cursor?: BooksAuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BooksAuthors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BooksAuthors.
     */
    skip?: number
    distinct?: BooksAuthorScalarFieldEnum | BooksAuthorScalarFieldEnum[]
  }

  /**
   * BooksAuthor create
   */
  export type BooksAuthorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BooksAuthor
     */
    select?: BooksAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BooksAuthor
     */
    omit?: BooksAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BooksAuthorInclude<ExtArgs> | null
    /**
     * The data needed to create a BooksAuthor.
     */
    data: XOR<BooksAuthorCreateInput, BooksAuthorUncheckedCreateInput>
  }

  /**
   * BooksAuthor createMany
   */
  export type BooksAuthorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BooksAuthors.
     */
    data: BooksAuthorCreateManyInput | BooksAuthorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BooksAuthor update
   */
  export type BooksAuthorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BooksAuthor
     */
    select?: BooksAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BooksAuthor
     */
    omit?: BooksAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BooksAuthorInclude<ExtArgs> | null
    /**
     * The data needed to update a BooksAuthor.
     */
    data: XOR<BooksAuthorUpdateInput, BooksAuthorUncheckedUpdateInput>
    /**
     * Choose, which BooksAuthor to update.
     */
    where: BooksAuthorWhereUniqueInput
  }

  /**
   * BooksAuthor updateMany
   */
  export type BooksAuthorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BooksAuthors.
     */
    data: XOR<BooksAuthorUpdateManyMutationInput, BooksAuthorUncheckedUpdateManyInput>
    /**
     * Filter which BooksAuthors to update
     */
    where?: BooksAuthorWhereInput
    /**
     * Limit how many BooksAuthors to update.
     */
    limit?: number
  }

  /**
   * BooksAuthor upsert
   */
  export type BooksAuthorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BooksAuthor
     */
    select?: BooksAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BooksAuthor
     */
    omit?: BooksAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BooksAuthorInclude<ExtArgs> | null
    /**
     * The filter to search for the BooksAuthor to update in case it exists.
     */
    where: BooksAuthorWhereUniqueInput
    /**
     * In case the BooksAuthor found by the `where` argument doesn't exist, create a new BooksAuthor with this data.
     */
    create: XOR<BooksAuthorCreateInput, BooksAuthorUncheckedCreateInput>
    /**
     * In case the BooksAuthor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BooksAuthorUpdateInput, BooksAuthorUncheckedUpdateInput>
  }

  /**
   * BooksAuthor delete
   */
  export type BooksAuthorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BooksAuthor
     */
    select?: BooksAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BooksAuthor
     */
    omit?: BooksAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BooksAuthorInclude<ExtArgs> | null
    /**
     * Filter which BooksAuthor to delete.
     */
    where: BooksAuthorWhereUniqueInput
  }

  /**
   * BooksAuthor deleteMany
   */
  export type BooksAuthorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BooksAuthors to delete
     */
    where?: BooksAuthorWhereInput
    /**
     * Limit how many BooksAuthors to delete.
     */
    limit?: number
  }

  /**
   * BooksAuthor.books
   */
  export type BooksAuthor$booksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Books
     */
    select?: BooksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Books
     */
    omit?: BooksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BooksInclude<ExtArgs> | null
    where?: BooksWhereInput
    orderBy?: BooksOrderByWithRelationInput | BooksOrderByWithRelationInput[]
    cursor?: BooksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BooksScalarFieldEnum | BooksScalarFieldEnum[]
  }

  /**
   * BooksAuthor without action
   */
  export type BooksAuthorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BooksAuthor
     */
    select?: BooksAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BooksAuthor
     */
    omit?: BooksAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BooksAuthorInclude<ExtArgs> | null
  }


  /**
   * Model Books
   */

  export type AggregateBooks = {
    _count: BooksCountAggregateOutputType | null
    _avg: BooksAvgAggregateOutputType | null
    _sum: BooksSumAggregateOutputType | null
    _min: BooksMinAggregateOutputType | null
    _max: BooksMaxAggregateOutputType | null
  }

  export type BooksAvgAggregateOutputType = {
    booksId: number | null
    authorId: number | null
    categoryId: number | null
  }

  export type BooksSumAggregateOutputType = {
    booksId: number | null
    authorId: number | null
    categoryId: number | null
  }

  export type BooksMinAggregateOutputType = {
    booksId: number | null
    booksName: string | null
    booksDesc: string | null
    booksImage: string | null
    authorId: number | null
    categoryId: number | null
  }

  export type BooksMaxAggregateOutputType = {
    booksId: number | null
    booksName: string | null
    booksDesc: string | null
    booksImage: string | null
    authorId: number | null
    categoryId: number | null
  }

  export type BooksCountAggregateOutputType = {
    booksId: number
    booksName: number
    booksDesc: number
    booksImage: number
    authorId: number
    categoryId: number
    _all: number
  }


  export type BooksAvgAggregateInputType = {
    booksId?: true
    authorId?: true
    categoryId?: true
  }

  export type BooksSumAggregateInputType = {
    booksId?: true
    authorId?: true
    categoryId?: true
  }

  export type BooksMinAggregateInputType = {
    booksId?: true
    booksName?: true
    booksDesc?: true
    booksImage?: true
    authorId?: true
    categoryId?: true
  }

  export type BooksMaxAggregateInputType = {
    booksId?: true
    booksName?: true
    booksDesc?: true
    booksImage?: true
    authorId?: true
    categoryId?: true
  }

  export type BooksCountAggregateInputType = {
    booksId?: true
    booksName?: true
    booksDesc?: true
    booksImage?: true
    authorId?: true
    categoryId?: true
    _all?: true
  }

  export type BooksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Books to aggregate.
     */
    where?: BooksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BooksOrderByWithRelationInput | BooksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BooksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Books
    **/
    _count?: true | BooksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BooksAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BooksSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BooksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BooksMaxAggregateInputType
  }

  export type GetBooksAggregateType<T extends BooksAggregateArgs> = {
        [P in keyof T & keyof AggregateBooks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooks[P]>
      : GetScalarType<T[P], AggregateBooks[P]>
  }




  export type BooksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BooksWhereInput
    orderBy?: BooksOrderByWithAggregationInput | BooksOrderByWithAggregationInput[]
    by: BooksScalarFieldEnum[] | BooksScalarFieldEnum
    having?: BooksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BooksCountAggregateInputType | true
    _avg?: BooksAvgAggregateInputType
    _sum?: BooksSumAggregateInputType
    _min?: BooksMinAggregateInputType
    _max?: BooksMaxAggregateInputType
  }

  export type BooksGroupByOutputType = {
    booksId: number
    booksName: string
    booksDesc: string
    booksImage: string | null
    authorId: number
    categoryId: number
    _count: BooksCountAggregateOutputType | null
    _avg: BooksAvgAggregateOutputType | null
    _sum: BooksSumAggregateOutputType | null
    _min: BooksMinAggregateOutputType | null
    _max: BooksMaxAggregateOutputType | null
  }

  type GetBooksGroupByPayload<T extends BooksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BooksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BooksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BooksGroupByOutputType[P]>
            : GetScalarType<T[P], BooksGroupByOutputType[P]>
        }
      >
    >


  export type BooksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    booksId?: boolean
    booksName?: boolean
    booksDesc?: boolean
    booksImage?: boolean
    authorId?: boolean
    categoryId?: boolean
    author?: boolean | BooksAuthorDefaultArgs<ExtArgs>
    BooksCategory?: boolean | BooksCategoryDefaultArgs<ExtArgs>
    Rental?: boolean | Books$RentalArgs<ExtArgs>
    _count?: boolean | BooksCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["books"]>



  export type BooksSelectScalar = {
    booksId?: boolean
    booksName?: boolean
    booksDesc?: boolean
    booksImage?: boolean
    authorId?: boolean
    categoryId?: boolean
  }

  export type BooksOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"booksId" | "booksName" | "booksDesc" | "booksImage" | "authorId" | "categoryId", ExtArgs["result"]["books"]>
  export type BooksInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | BooksAuthorDefaultArgs<ExtArgs>
    BooksCategory?: boolean | BooksCategoryDefaultArgs<ExtArgs>
    Rental?: boolean | Books$RentalArgs<ExtArgs>
    _count?: boolean | BooksCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $BooksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Books"
    objects: {
      author: Prisma.$BooksAuthorPayload<ExtArgs>
      BooksCategory: Prisma.$BooksCategoryPayload<ExtArgs>
      Rental: Prisma.$RentalPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      booksId: number
      booksName: string
      booksDesc: string
      booksImage: string | null
      authorId: number
      categoryId: number
    }, ExtArgs["result"]["books"]>
    composites: {}
  }

  type BooksGetPayload<S extends boolean | null | undefined | BooksDefaultArgs> = $Result.GetResult<Prisma.$BooksPayload, S>

  type BooksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BooksFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BooksCountAggregateInputType | true
    }

  export interface BooksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Books'], meta: { name: 'Books' } }
    /**
     * Find zero or one Books that matches the filter.
     * @param {BooksFindUniqueArgs} args - Arguments to find a Books
     * @example
     * // Get one Books
     * const books = await prisma.books.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BooksFindUniqueArgs>(args: SelectSubset<T, BooksFindUniqueArgs<ExtArgs>>): Prisma__BooksClient<$Result.GetResult<Prisma.$BooksPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Books that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BooksFindUniqueOrThrowArgs} args - Arguments to find a Books
     * @example
     * // Get one Books
     * const books = await prisma.books.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BooksFindUniqueOrThrowArgs>(args: SelectSubset<T, BooksFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BooksClient<$Result.GetResult<Prisma.$BooksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Books that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BooksFindFirstArgs} args - Arguments to find a Books
     * @example
     * // Get one Books
     * const books = await prisma.books.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BooksFindFirstArgs>(args?: SelectSubset<T, BooksFindFirstArgs<ExtArgs>>): Prisma__BooksClient<$Result.GetResult<Prisma.$BooksPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Books that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BooksFindFirstOrThrowArgs} args - Arguments to find a Books
     * @example
     * // Get one Books
     * const books = await prisma.books.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BooksFindFirstOrThrowArgs>(args?: SelectSubset<T, BooksFindFirstOrThrowArgs<ExtArgs>>): Prisma__BooksClient<$Result.GetResult<Prisma.$BooksPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Books that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BooksFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Books
     * const books = await prisma.books.findMany()
     * 
     * // Get first 10 Books
     * const books = await prisma.books.findMany({ take: 10 })
     * 
     * // Only select the `booksId`
     * const booksWithBooksIdOnly = await prisma.books.findMany({ select: { booksId: true } })
     * 
     */
    findMany<T extends BooksFindManyArgs>(args?: SelectSubset<T, BooksFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BooksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Books.
     * @param {BooksCreateArgs} args - Arguments to create a Books.
     * @example
     * // Create one Books
     * const Books = await prisma.books.create({
     *   data: {
     *     // ... data to create a Books
     *   }
     * })
     * 
     */
    create<T extends BooksCreateArgs>(args: SelectSubset<T, BooksCreateArgs<ExtArgs>>): Prisma__BooksClient<$Result.GetResult<Prisma.$BooksPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Books.
     * @param {BooksCreateManyArgs} args - Arguments to create many Books.
     * @example
     * // Create many Books
     * const books = await prisma.books.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BooksCreateManyArgs>(args?: SelectSubset<T, BooksCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Books.
     * @param {BooksDeleteArgs} args - Arguments to delete one Books.
     * @example
     * // Delete one Books
     * const Books = await prisma.books.delete({
     *   where: {
     *     // ... filter to delete one Books
     *   }
     * })
     * 
     */
    delete<T extends BooksDeleteArgs>(args: SelectSubset<T, BooksDeleteArgs<ExtArgs>>): Prisma__BooksClient<$Result.GetResult<Prisma.$BooksPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Books.
     * @param {BooksUpdateArgs} args - Arguments to update one Books.
     * @example
     * // Update one Books
     * const books = await prisma.books.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BooksUpdateArgs>(args: SelectSubset<T, BooksUpdateArgs<ExtArgs>>): Prisma__BooksClient<$Result.GetResult<Prisma.$BooksPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Books.
     * @param {BooksDeleteManyArgs} args - Arguments to filter Books to delete.
     * @example
     * // Delete a few Books
     * const { count } = await prisma.books.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BooksDeleteManyArgs>(args?: SelectSubset<T, BooksDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BooksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Books
     * const books = await prisma.books.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BooksUpdateManyArgs>(args: SelectSubset<T, BooksUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Books.
     * @param {BooksUpsertArgs} args - Arguments to update or create a Books.
     * @example
     * // Update or create a Books
     * const books = await prisma.books.upsert({
     *   create: {
     *     // ... data to create a Books
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Books we want to update
     *   }
     * })
     */
    upsert<T extends BooksUpsertArgs>(args: SelectSubset<T, BooksUpsertArgs<ExtArgs>>): Prisma__BooksClient<$Result.GetResult<Prisma.$BooksPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BooksCountArgs} args - Arguments to filter Books to count.
     * @example
     * // Count the number of Books
     * const count = await prisma.books.count({
     *   where: {
     *     // ... the filter for the Books we want to count
     *   }
     * })
    **/
    count<T extends BooksCountArgs>(
      args?: Subset<T, BooksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BooksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BooksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BooksAggregateArgs>(args: Subset<T, BooksAggregateArgs>): Prisma.PrismaPromise<GetBooksAggregateType<T>>

    /**
     * Group by Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BooksGroupByArgs} args - Group by arguments.
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
      T extends BooksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BooksGroupByArgs['orderBy'] }
        : { orderBy?: BooksGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BooksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBooksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Books model
   */
  readonly fields: BooksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Books.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BooksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends BooksAuthorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BooksAuthorDefaultArgs<ExtArgs>>): Prisma__BooksAuthorClient<$Result.GetResult<Prisma.$BooksAuthorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    BooksCategory<T extends BooksCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BooksCategoryDefaultArgs<ExtArgs>>): Prisma__BooksCategoryClient<$Result.GetResult<Prisma.$BooksCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Rental<T extends Books$RentalArgs<ExtArgs> = {}>(args?: Subset<T, Books$RentalArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RentalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Books model
   */
  interface BooksFieldRefs {
    readonly booksId: FieldRef<"Books", 'Int'>
    readonly booksName: FieldRef<"Books", 'String'>
    readonly booksDesc: FieldRef<"Books", 'String'>
    readonly booksImage: FieldRef<"Books", 'String'>
    readonly authorId: FieldRef<"Books", 'Int'>
    readonly categoryId: FieldRef<"Books", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Books findUnique
   */
  export type BooksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Books
     */
    select?: BooksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Books
     */
    omit?: BooksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BooksInclude<ExtArgs> | null
    /**
     * Filter, which Books to fetch.
     */
    where: BooksWhereUniqueInput
  }

  /**
   * Books findUniqueOrThrow
   */
  export type BooksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Books
     */
    select?: BooksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Books
     */
    omit?: BooksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BooksInclude<ExtArgs> | null
    /**
     * Filter, which Books to fetch.
     */
    where: BooksWhereUniqueInput
  }

  /**
   * Books findFirst
   */
  export type BooksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Books
     */
    select?: BooksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Books
     */
    omit?: BooksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BooksInclude<ExtArgs> | null
    /**
     * Filter, which Books to fetch.
     */
    where?: BooksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BooksOrderByWithRelationInput | BooksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Books.
     */
    cursor?: BooksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Books.
     */
    distinct?: BooksScalarFieldEnum | BooksScalarFieldEnum[]
  }

  /**
   * Books findFirstOrThrow
   */
  export type BooksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Books
     */
    select?: BooksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Books
     */
    omit?: BooksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BooksInclude<ExtArgs> | null
    /**
     * Filter, which Books to fetch.
     */
    where?: BooksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BooksOrderByWithRelationInput | BooksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Books.
     */
    cursor?: BooksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Books.
     */
    distinct?: BooksScalarFieldEnum | BooksScalarFieldEnum[]
  }

  /**
   * Books findMany
   */
  export type BooksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Books
     */
    select?: BooksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Books
     */
    omit?: BooksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BooksInclude<ExtArgs> | null
    /**
     * Filter, which Books to fetch.
     */
    where?: BooksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BooksOrderByWithRelationInput | BooksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Books.
     */
    cursor?: BooksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    distinct?: BooksScalarFieldEnum | BooksScalarFieldEnum[]
  }

  /**
   * Books create
   */
  export type BooksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Books
     */
    select?: BooksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Books
     */
    omit?: BooksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BooksInclude<ExtArgs> | null
    /**
     * The data needed to create a Books.
     */
    data: XOR<BooksCreateInput, BooksUncheckedCreateInput>
  }

  /**
   * Books createMany
   */
  export type BooksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Books.
     */
    data: BooksCreateManyInput | BooksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Books update
   */
  export type BooksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Books
     */
    select?: BooksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Books
     */
    omit?: BooksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BooksInclude<ExtArgs> | null
    /**
     * The data needed to update a Books.
     */
    data: XOR<BooksUpdateInput, BooksUncheckedUpdateInput>
    /**
     * Choose, which Books to update.
     */
    where: BooksWhereUniqueInput
  }

  /**
   * Books updateMany
   */
  export type BooksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Books.
     */
    data: XOR<BooksUpdateManyMutationInput, BooksUncheckedUpdateManyInput>
    /**
     * Filter which Books to update
     */
    where?: BooksWhereInput
    /**
     * Limit how many Books to update.
     */
    limit?: number
  }

  /**
   * Books upsert
   */
  export type BooksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Books
     */
    select?: BooksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Books
     */
    omit?: BooksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BooksInclude<ExtArgs> | null
    /**
     * The filter to search for the Books to update in case it exists.
     */
    where: BooksWhereUniqueInput
    /**
     * In case the Books found by the `where` argument doesn't exist, create a new Books with this data.
     */
    create: XOR<BooksCreateInput, BooksUncheckedCreateInput>
    /**
     * In case the Books was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BooksUpdateInput, BooksUncheckedUpdateInput>
  }

  /**
   * Books delete
   */
  export type BooksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Books
     */
    select?: BooksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Books
     */
    omit?: BooksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BooksInclude<ExtArgs> | null
    /**
     * Filter which Books to delete.
     */
    where: BooksWhereUniqueInput
  }

  /**
   * Books deleteMany
   */
  export type BooksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Books to delete
     */
    where?: BooksWhereInput
    /**
     * Limit how many Books to delete.
     */
    limit?: number
  }

  /**
   * Books.Rental
   */
  export type Books$RentalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rental
     */
    select?: RentalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rental
     */
    omit?: RentalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalInclude<ExtArgs> | null
    where?: RentalWhereInput
    orderBy?: RentalOrderByWithRelationInput | RentalOrderByWithRelationInput[]
    cursor?: RentalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RentalScalarFieldEnum | RentalScalarFieldEnum[]
  }

  /**
   * Books without action
   */
  export type BooksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Books
     */
    select?: BooksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Books
     */
    omit?: BooksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BooksInclude<ExtArgs> | null
  }


  /**
   * Model Rental
   */

  export type AggregateRental = {
    _count: RentalCountAggregateOutputType | null
    _avg: RentalAvgAggregateOutputType | null
    _sum: RentalSumAggregateOutputType | null
    _min: RentalMinAggregateOutputType | null
    _max: RentalMaxAggregateOutputType | null
  }

  export type RentalAvgAggregateOutputType = {
    rentalId: number | null
    userId: number | null
    booksId: number | null
  }

  export type RentalSumAggregateOutputType = {
    rentalId: number | null
    userId: number | null
    booksId: number | null
  }

  export type RentalMinAggregateOutputType = {
    rentalId: number | null
    userId: number | null
    booksId: number | null
    rentalDate: Date | null
    returnDate: Date | null
    status: string | null
  }

  export type RentalMaxAggregateOutputType = {
    rentalId: number | null
    userId: number | null
    booksId: number | null
    rentalDate: Date | null
    returnDate: Date | null
    status: string | null
  }

  export type RentalCountAggregateOutputType = {
    rentalId: number
    userId: number
    booksId: number
    rentalDate: number
    returnDate: number
    status: number
    _all: number
  }


  export type RentalAvgAggregateInputType = {
    rentalId?: true
    userId?: true
    booksId?: true
  }

  export type RentalSumAggregateInputType = {
    rentalId?: true
    userId?: true
    booksId?: true
  }

  export type RentalMinAggregateInputType = {
    rentalId?: true
    userId?: true
    booksId?: true
    rentalDate?: true
    returnDate?: true
    status?: true
  }

  export type RentalMaxAggregateInputType = {
    rentalId?: true
    userId?: true
    booksId?: true
    rentalDate?: true
    returnDate?: true
    status?: true
  }

  export type RentalCountAggregateInputType = {
    rentalId?: true
    userId?: true
    booksId?: true
    rentalDate?: true
    returnDate?: true
    status?: true
    _all?: true
  }

  export type RentalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rental to aggregate.
     */
    where?: RentalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rentals to fetch.
     */
    orderBy?: RentalOrderByWithRelationInput | RentalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RentalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rentals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rentals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rentals
    **/
    _count?: true | RentalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RentalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RentalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RentalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RentalMaxAggregateInputType
  }

  export type GetRentalAggregateType<T extends RentalAggregateArgs> = {
        [P in keyof T & keyof AggregateRental]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRental[P]>
      : GetScalarType<T[P], AggregateRental[P]>
  }




  export type RentalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RentalWhereInput
    orderBy?: RentalOrderByWithAggregationInput | RentalOrderByWithAggregationInput[]
    by: RentalScalarFieldEnum[] | RentalScalarFieldEnum
    having?: RentalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RentalCountAggregateInputType | true
    _avg?: RentalAvgAggregateInputType
    _sum?: RentalSumAggregateInputType
    _min?: RentalMinAggregateInputType
    _max?: RentalMaxAggregateInputType
  }

  export type RentalGroupByOutputType = {
    rentalId: number
    userId: number
    booksId: number
    rentalDate: Date
    returnDate: Date
    status: string
    _count: RentalCountAggregateOutputType | null
    _avg: RentalAvgAggregateOutputType | null
    _sum: RentalSumAggregateOutputType | null
    _min: RentalMinAggregateOutputType | null
    _max: RentalMaxAggregateOutputType | null
  }

  type GetRentalGroupByPayload<T extends RentalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RentalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RentalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RentalGroupByOutputType[P]>
            : GetScalarType<T[P], RentalGroupByOutputType[P]>
        }
      >
    >


  export type RentalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    rentalId?: boolean
    userId?: boolean
    booksId?: boolean
    rentalDate?: boolean
    returnDate?: boolean
    status?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    book?: boolean | BooksDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rental"]>



  export type RentalSelectScalar = {
    rentalId?: boolean
    userId?: boolean
    booksId?: boolean
    rentalDate?: boolean
    returnDate?: boolean
    status?: boolean
  }

  export type RentalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"rentalId" | "userId" | "booksId" | "rentalDate" | "returnDate" | "status", ExtArgs["result"]["rental"]>
  export type RentalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    book?: boolean | BooksDefaultArgs<ExtArgs>
  }

  export type $RentalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Rental"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      book: Prisma.$BooksPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      rentalId: number
      userId: number
      booksId: number
      rentalDate: Date
      returnDate: Date
      status: string
    }, ExtArgs["result"]["rental"]>
    composites: {}
  }

  type RentalGetPayload<S extends boolean | null | undefined | RentalDefaultArgs> = $Result.GetResult<Prisma.$RentalPayload, S>

  type RentalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RentalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RentalCountAggregateInputType | true
    }

  export interface RentalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Rental'], meta: { name: 'Rental' } }
    /**
     * Find zero or one Rental that matches the filter.
     * @param {RentalFindUniqueArgs} args - Arguments to find a Rental
     * @example
     * // Get one Rental
     * const rental = await prisma.rental.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RentalFindUniqueArgs>(args: SelectSubset<T, RentalFindUniqueArgs<ExtArgs>>): Prisma__RentalClient<$Result.GetResult<Prisma.$RentalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rental that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RentalFindUniqueOrThrowArgs} args - Arguments to find a Rental
     * @example
     * // Get one Rental
     * const rental = await prisma.rental.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RentalFindUniqueOrThrowArgs>(args: SelectSubset<T, RentalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RentalClient<$Result.GetResult<Prisma.$RentalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rental that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalFindFirstArgs} args - Arguments to find a Rental
     * @example
     * // Get one Rental
     * const rental = await prisma.rental.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RentalFindFirstArgs>(args?: SelectSubset<T, RentalFindFirstArgs<ExtArgs>>): Prisma__RentalClient<$Result.GetResult<Prisma.$RentalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rental that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalFindFirstOrThrowArgs} args - Arguments to find a Rental
     * @example
     * // Get one Rental
     * const rental = await prisma.rental.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RentalFindFirstOrThrowArgs>(args?: SelectSubset<T, RentalFindFirstOrThrowArgs<ExtArgs>>): Prisma__RentalClient<$Result.GetResult<Prisma.$RentalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rentals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rentals
     * const rentals = await prisma.rental.findMany()
     * 
     * // Get first 10 Rentals
     * const rentals = await prisma.rental.findMany({ take: 10 })
     * 
     * // Only select the `rentalId`
     * const rentalWithRentalIdOnly = await prisma.rental.findMany({ select: { rentalId: true } })
     * 
     */
    findMany<T extends RentalFindManyArgs>(args?: SelectSubset<T, RentalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RentalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rental.
     * @param {RentalCreateArgs} args - Arguments to create a Rental.
     * @example
     * // Create one Rental
     * const Rental = await prisma.rental.create({
     *   data: {
     *     // ... data to create a Rental
     *   }
     * })
     * 
     */
    create<T extends RentalCreateArgs>(args: SelectSubset<T, RentalCreateArgs<ExtArgs>>): Prisma__RentalClient<$Result.GetResult<Prisma.$RentalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rentals.
     * @param {RentalCreateManyArgs} args - Arguments to create many Rentals.
     * @example
     * // Create many Rentals
     * const rental = await prisma.rental.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RentalCreateManyArgs>(args?: SelectSubset<T, RentalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Rental.
     * @param {RentalDeleteArgs} args - Arguments to delete one Rental.
     * @example
     * // Delete one Rental
     * const Rental = await prisma.rental.delete({
     *   where: {
     *     // ... filter to delete one Rental
     *   }
     * })
     * 
     */
    delete<T extends RentalDeleteArgs>(args: SelectSubset<T, RentalDeleteArgs<ExtArgs>>): Prisma__RentalClient<$Result.GetResult<Prisma.$RentalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rental.
     * @param {RentalUpdateArgs} args - Arguments to update one Rental.
     * @example
     * // Update one Rental
     * const rental = await prisma.rental.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RentalUpdateArgs>(args: SelectSubset<T, RentalUpdateArgs<ExtArgs>>): Prisma__RentalClient<$Result.GetResult<Prisma.$RentalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rentals.
     * @param {RentalDeleteManyArgs} args - Arguments to filter Rentals to delete.
     * @example
     * // Delete a few Rentals
     * const { count } = await prisma.rental.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RentalDeleteManyArgs>(args?: SelectSubset<T, RentalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rentals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rentals
     * const rental = await prisma.rental.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RentalUpdateManyArgs>(args: SelectSubset<T, RentalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Rental.
     * @param {RentalUpsertArgs} args - Arguments to update or create a Rental.
     * @example
     * // Update or create a Rental
     * const rental = await prisma.rental.upsert({
     *   create: {
     *     // ... data to create a Rental
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rental we want to update
     *   }
     * })
     */
    upsert<T extends RentalUpsertArgs>(args: SelectSubset<T, RentalUpsertArgs<ExtArgs>>): Prisma__RentalClient<$Result.GetResult<Prisma.$RentalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rentals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalCountArgs} args - Arguments to filter Rentals to count.
     * @example
     * // Count the number of Rentals
     * const count = await prisma.rental.count({
     *   where: {
     *     // ... the filter for the Rentals we want to count
     *   }
     * })
    **/
    count<T extends RentalCountArgs>(
      args?: Subset<T, RentalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RentalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rental.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RentalAggregateArgs>(args: Subset<T, RentalAggregateArgs>): Prisma.PrismaPromise<GetRentalAggregateType<T>>

    /**
     * Group by Rental.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalGroupByArgs} args - Group by arguments.
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
      T extends RentalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RentalGroupByArgs['orderBy'] }
        : { orderBy?: RentalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RentalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRentalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Rental model
   */
  readonly fields: RentalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Rental.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RentalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    book<T extends BooksDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BooksDefaultArgs<ExtArgs>>): Prisma__BooksClient<$Result.GetResult<Prisma.$BooksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Rental model
   */
  interface RentalFieldRefs {
    readonly rentalId: FieldRef<"Rental", 'Int'>
    readonly userId: FieldRef<"Rental", 'Int'>
    readonly booksId: FieldRef<"Rental", 'Int'>
    readonly rentalDate: FieldRef<"Rental", 'DateTime'>
    readonly returnDate: FieldRef<"Rental", 'DateTime'>
    readonly status: FieldRef<"Rental", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Rental findUnique
   */
  export type RentalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rental
     */
    select?: RentalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rental
     */
    omit?: RentalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalInclude<ExtArgs> | null
    /**
     * Filter, which Rental to fetch.
     */
    where: RentalWhereUniqueInput
  }

  /**
   * Rental findUniqueOrThrow
   */
  export type RentalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rental
     */
    select?: RentalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rental
     */
    omit?: RentalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalInclude<ExtArgs> | null
    /**
     * Filter, which Rental to fetch.
     */
    where: RentalWhereUniqueInput
  }

  /**
   * Rental findFirst
   */
  export type RentalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rental
     */
    select?: RentalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rental
     */
    omit?: RentalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalInclude<ExtArgs> | null
    /**
     * Filter, which Rental to fetch.
     */
    where?: RentalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rentals to fetch.
     */
    orderBy?: RentalOrderByWithRelationInput | RentalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rentals.
     */
    cursor?: RentalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rentals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rentals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rentals.
     */
    distinct?: RentalScalarFieldEnum | RentalScalarFieldEnum[]
  }

  /**
   * Rental findFirstOrThrow
   */
  export type RentalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rental
     */
    select?: RentalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rental
     */
    omit?: RentalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalInclude<ExtArgs> | null
    /**
     * Filter, which Rental to fetch.
     */
    where?: RentalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rentals to fetch.
     */
    orderBy?: RentalOrderByWithRelationInput | RentalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rentals.
     */
    cursor?: RentalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rentals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rentals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rentals.
     */
    distinct?: RentalScalarFieldEnum | RentalScalarFieldEnum[]
  }

  /**
   * Rental findMany
   */
  export type RentalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rental
     */
    select?: RentalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rental
     */
    omit?: RentalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalInclude<ExtArgs> | null
    /**
     * Filter, which Rentals to fetch.
     */
    where?: RentalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rentals to fetch.
     */
    orderBy?: RentalOrderByWithRelationInput | RentalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rentals.
     */
    cursor?: RentalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rentals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rentals.
     */
    skip?: number
    distinct?: RentalScalarFieldEnum | RentalScalarFieldEnum[]
  }

  /**
   * Rental create
   */
  export type RentalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rental
     */
    select?: RentalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rental
     */
    omit?: RentalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalInclude<ExtArgs> | null
    /**
     * The data needed to create a Rental.
     */
    data: XOR<RentalCreateInput, RentalUncheckedCreateInput>
  }

  /**
   * Rental createMany
   */
  export type RentalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rentals.
     */
    data: RentalCreateManyInput | RentalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Rental update
   */
  export type RentalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rental
     */
    select?: RentalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rental
     */
    omit?: RentalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalInclude<ExtArgs> | null
    /**
     * The data needed to update a Rental.
     */
    data: XOR<RentalUpdateInput, RentalUncheckedUpdateInput>
    /**
     * Choose, which Rental to update.
     */
    where: RentalWhereUniqueInput
  }

  /**
   * Rental updateMany
   */
  export type RentalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rentals.
     */
    data: XOR<RentalUpdateManyMutationInput, RentalUncheckedUpdateManyInput>
    /**
     * Filter which Rentals to update
     */
    where?: RentalWhereInput
    /**
     * Limit how many Rentals to update.
     */
    limit?: number
  }

  /**
   * Rental upsert
   */
  export type RentalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rental
     */
    select?: RentalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rental
     */
    omit?: RentalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalInclude<ExtArgs> | null
    /**
     * The filter to search for the Rental to update in case it exists.
     */
    where: RentalWhereUniqueInput
    /**
     * In case the Rental found by the `where` argument doesn't exist, create a new Rental with this data.
     */
    create: XOR<RentalCreateInput, RentalUncheckedCreateInput>
    /**
     * In case the Rental was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RentalUpdateInput, RentalUncheckedUpdateInput>
  }

  /**
   * Rental delete
   */
  export type RentalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rental
     */
    select?: RentalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rental
     */
    omit?: RentalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalInclude<ExtArgs> | null
    /**
     * Filter which Rental to delete.
     */
    where: RentalWhereUniqueInput
  }

  /**
   * Rental deleteMany
   */
  export type RentalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rentals to delete
     */
    where?: RentalWhereInput
    /**
     * Limit how many Rentals to delete.
     */
    limit?: number
  }

  /**
   * Rental without action
   */
  export type RentalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rental
     */
    select?: RentalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rental
     */
    omit?: RentalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalInclude<ExtArgs> | null
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
    userId: 'userId',
    username: 'username',
    password: 'password',
    userRole: 'userRole'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const BooksCategoryScalarFieldEnum: {
    categoryId: 'categoryId',
    category: 'category'
  };

  export type BooksCategoryScalarFieldEnum = (typeof BooksCategoryScalarFieldEnum)[keyof typeof BooksCategoryScalarFieldEnum]


  export const BooksAuthorScalarFieldEnum: {
    authorId: 'authorId',
    author: 'author'
  };

  export type BooksAuthorScalarFieldEnum = (typeof BooksAuthorScalarFieldEnum)[keyof typeof BooksAuthorScalarFieldEnum]


  export const BooksScalarFieldEnum: {
    booksId: 'booksId',
    booksName: 'booksName',
    booksDesc: 'booksDesc',
    booksImage: 'booksImage',
    authorId: 'authorId',
    categoryId: 'categoryId'
  };

  export type BooksScalarFieldEnum = (typeof BooksScalarFieldEnum)[keyof typeof BooksScalarFieldEnum]


  export const RentalScalarFieldEnum: {
    rentalId: 'rentalId',
    userId: 'userId',
    booksId: 'booksId',
    rentalDate: 'rentalDate',
    returnDate: 'returnDate',
    status: 'status'
  };

  export type RentalScalarFieldEnum = (typeof RentalScalarFieldEnum)[keyof typeof RentalScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const UserOrderByRelevanceFieldEnum: {
    username: 'username',
    password: 'password',
    userRole: 'userRole'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const BooksCategoryOrderByRelevanceFieldEnum: {
    category: 'category'
  };

  export type BooksCategoryOrderByRelevanceFieldEnum = (typeof BooksCategoryOrderByRelevanceFieldEnum)[keyof typeof BooksCategoryOrderByRelevanceFieldEnum]


  export const BooksAuthorOrderByRelevanceFieldEnum: {
    author: 'author'
  };

  export type BooksAuthorOrderByRelevanceFieldEnum = (typeof BooksAuthorOrderByRelevanceFieldEnum)[keyof typeof BooksAuthorOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const BooksOrderByRelevanceFieldEnum: {
    booksName: 'booksName',
    booksDesc: 'booksDesc',
    booksImage: 'booksImage'
  };

  export type BooksOrderByRelevanceFieldEnum = (typeof BooksOrderByRelevanceFieldEnum)[keyof typeof BooksOrderByRelevanceFieldEnum]


  export const RentalOrderByRelevanceFieldEnum: {
    status: 'status'
  };

  export type RentalOrderByRelevanceFieldEnum = (typeof RentalOrderByRelevanceFieldEnum)[keyof typeof RentalOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    userId?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    userRole?: StringFilter<"User"> | string
    Rental?: RentalListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    userId?: SortOrder
    username?: SortOrder
    password?: SortOrder
    userRole?: SortOrder
    Rental?: RentalOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    userId?: number
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    userRole?: StringFilter<"User"> | string
    Rental?: RentalListRelationFilter
  }, "userId">

  export type UserOrderByWithAggregationInput = {
    userId?: SortOrder
    username?: SortOrder
    password?: SortOrder
    userRole?: SortOrder
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
    userId?: IntWithAggregatesFilter<"User"> | number
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    userRole?: StringWithAggregatesFilter<"User"> | string
  }

  export type BooksCategoryWhereInput = {
    AND?: BooksCategoryWhereInput | BooksCategoryWhereInput[]
    OR?: BooksCategoryWhereInput[]
    NOT?: BooksCategoryWhereInput | BooksCategoryWhereInput[]
    categoryId?: IntFilter<"BooksCategory"> | number
    category?: StringFilter<"BooksCategory"> | string
    books?: BooksListRelationFilter
  }

  export type BooksCategoryOrderByWithRelationInput = {
    categoryId?: SortOrder
    category?: SortOrder
    books?: BooksOrderByRelationAggregateInput
    _relevance?: BooksCategoryOrderByRelevanceInput
  }

  export type BooksCategoryWhereUniqueInput = Prisma.AtLeast<{
    categoryId?: number
    category?: string
    AND?: BooksCategoryWhereInput | BooksCategoryWhereInput[]
    OR?: BooksCategoryWhereInput[]
    NOT?: BooksCategoryWhereInput | BooksCategoryWhereInput[]
    books?: BooksListRelationFilter
  }, "categoryId" | "category">

  export type BooksCategoryOrderByWithAggregationInput = {
    categoryId?: SortOrder
    category?: SortOrder
    _count?: BooksCategoryCountOrderByAggregateInput
    _avg?: BooksCategoryAvgOrderByAggregateInput
    _max?: BooksCategoryMaxOrderByAggregateInput
    _min?: BooksCategoryMinOrderByAggregateInput
    _sum?: BooksCategorySumOrderByAggregateInput
  }

  export type BooksCategoryScalarWhereWithAggregatesInput = {
    AND?: BooksCategoryScalarWhereWithAggregatesInput | BooksCategoryScalarWhereWithAggregatesInput[]
    OR?: BooksCategoryScalarWhereWithAggregatesInput[]
    NOT?: BooksCategoryScalarWhereWithAggregatesInput | BooksCategoryScalarWhereWithAggregatesInput[]
    categoryId?: IntWithAggregatesFilter<"BooksCategory"> | number
    category?: StringWithAggregatesFilter<"BooksCategory"> | string
  }

  export type BooksAuthorWhereInput = {
    AND?: BooksAuthorWhereInput | BooksAuthorWhereInput[]
    OR?: BooksAuthorWhereInput[]
    NOT?: BooksAuthorWhereInput | BooksAuthorWhereInput[]
    authorId?: IntFilter<"BooksAuthor"> | number
    author?: StringFilter<"BooksAuthor"> | string
    books?: BooksListRelationFilter
  }

  export type BooksAuthorOrderByWithRelationInput = {
    authorId?: SortOrder
    author?: SortOrder
    books?: BooksOrderByRelationAggregateInput
    _relevance?: BooksAuthorOrderByRelevanceInput
  }

  export type BooksAuthorWhereUniqueInput = Prisma.AtLeast<{
    authorId?: number
    AND?: BooksAuthorWhereInput | BooksAuthorWhereInput[]
    OR?: BooksAuthorWhereInput[]
    NOT?: BooksAuthorWhereInput | BooksAuthorWhereInput[]
    author?: StringFilter<"BooksAuthor"> | string
    books?: BooksListRelationFilter
  }, "authorId">

  export type BooksAuthorOrderByWithAggregationInput = {
    authorId?: SortOrder
    author?: SortOrder
    _count?: BooksAuthorCountOrderByAggregateInput
    _avg?: BooksAuthorAvgOrderByAggregateInput
    _max?: BooksAuthorMaxOrderByAggregateInput
    _min?: BooksAuthorMinOrderByAggregateInput
    _sum?: BooksAuthorSumOrderByAggregateInput
  }

  export type BooksAuthorScalarWhereWithAggregatesInput = {
    AND?: BooksAuthorScalarWhereWithAggregatesInput | BooksAuthorScalarWhereWithAggregatesInput[]
    OR?: BooksAuthorScalarWhereWithAggregatesInput[]
    NOT?: BooksAuthorScalarWhereWithAggregatesInput | BooksAuthorScalarWhereWithAggregatesInput[]
    authorId?: IntWithAggregatesFilter<"BooksAuthor"> | number
    author?: StringWithAggregatesFilter<"BooksAuthor"> | string
  }

  export type BooksWhereInput = {
    AND?: BooksWhereInput | BooksWhereInput[]
    OR?: BooksWhereInput[]
    NOT?: BooksWhereInput | BooksWhereInput[]
    booksId?: IntFilter<"Books"> | number
    booksName?: StringFilter<"Books"> | string
    booksDesc?: StringFilter<"Books"> | string
    booksImage?: StringNullableFilter<"Books"> | string | null
    authorId?: IntFilter<"Books"> | number
    categoryId?: IntFilter<"Books"> | number
    author?: XOR<BooksAuthorScalarRelationFilter, BooksAuthorWhereInput>
    BooksCategory?: XOR<BooksCategoryScalarRelationFilter, BooksCategoryWhereInput>
    Rental?: RentalListRelationFilter
  }

  export type BooksOrderByWithRelationInput = {
    booksId?: SortOrder
    booksName?: SortOrder
    booksDesc?: SortOrder
    booksImage?: SortOrderInput | SortOrder
    authorId?: SortOrder
    categoryId?: SortOrder
    author?: BooksAuthorOrderByWithRelationInput
    BooksCategory?: BooksCategoryOrderByWithRelationInput
    Rental?: RentalOrderByRelationAggregateInput
    _relevance?: BooksOrderByRelevanceInput
  }

  export type BooksWhereUniqueInput = Prisma.AtLeast<{
    booksId?: number
    AND?: BooksWhereInput | BooksWhereInput[]
    OR?: BooksWhereInput[]
    NOT?: BooksWhereInput | BooksWhereInput[]
    booksName?: StringFilter<"Books"> | string
    booksDesc?: StringFilter<"Books"> | string
    booksImage?: StringNullableFilter<"Books"> | string | null
    authorId?: IntFilter<"Books"> | number
    categoryId?: IntFilter<"Books"> | number
    author?: XOR<BooksAuthorScalarRelationFilter, BooksAuthorWhereInput>
    BooksCategory?: XOR<BooksCategoryScalarRelationFilter, BooksCategoryWhereInput>
    Rental?: RentalListRelationFilter
  }, "booksId">

  export type BooksOrderByWithAggregationInput = {
    booksId?: SortOrder
    booksName?: SortOrder
    booksDesc?: SortOrder
    booksImage?: SortOrderInput | SortOrder
    authorId?: SortOrder
    categoryId?: SortOrder
    _count?: BooksCountOrderByAggregateInput
    _avg?: BooksAvgOrderByAggregateInput
    _max?: BooksMaxOrderByAggregateInput
    _min?: BooksMinOrderByAggregateInput
    _sum?: BooksSumOrderByAggregateInput
  }

  export type BooksScalarWhereWithAggregatesInput = {
    AND?: BooksScalarWhereWithAggregatesInput | BooksScalarWhereWithAggregatesInput[]
    OR?: BooksScalarWhereWithAggregatesInput[]
    NOT?: BooksScalarWhereWithAggregatesInput | BooksScalarWhereWithAggregatesInput[]
    booksId?: IntWithAggregatesFilter<"Books"> | number
    booksName?: StringWithAggregatesFilter<"Books"> | string
    booksDesc?: StringWithAggregatesFilter<"Books"> | string
    booksImage?: StringNullableWithAggregatesFilter<"Books"> | string | null
    authorId?: IntWithAggregatesFilter<"Books"> | number
    categoryId?: IntWithAggregatesFilter<"Books"> | number
  }

  export type RentalWhereInput = {
    AND?: RentalWhereInput | RentalWhereInput[]
    OR?: RentalWhereInput[]
    NOT?: RentalWhereInput | RentalWhereInput[]
    rentalId?: IntFilter<"Rental"> | number
    userId?: IntFilter<"Rental"> | number
    booksId?: IntFilter<"Rental"> | number
    rentalDate?: DateTimeFilter<"Rental"> | Date | string
    returnDate?: DateTimeFilter<"Rental"> | Date | string
    status?: StringFilter<"Rental"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    book?: XOR<BooksScalarRelationFilter, BooksWhereInput>
  }

  export type RentalOrderByWithRelationInput = {
    rentalId?: SortOrder
    userId?: SortOrder
    booksId?: SortOrder
    rentalDate?: SortOrder
    returnDate?: SortOrder
    status?: SortOrder
    user?: UserOrderByWithRelationInput
    book?: BooksOrderByWithRelationInput
    _relevance?: RentalOrderByRelevanceInput
  }

  export type RentalWhereUniqueInput = Prisma.AtLeast<{
    rentalId?: number
    AND?: RentalWhereInput | RentalWhereInput[]
    OR?: RentalWhereInput[]
    NOT?: RentalWhereInput | RentalWhereInput[]
    userId?: IntFilter<"Rental"> | number
    booksId?: IntFilter<"Rental"> | number
    rentalDate?: DateTimeFilter<"Rental"> | Date | string
    returnDate?: DateTimeFilter<"Rental"> | Date | string
    status?: StringFilter<"Rental"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    book?: XOR<BooksScalarRelationFilter, BooksWhereInput>
  }, "rentalId">

  export type RentalOrderByWithAggregationInput = {
    rentalId?: SortOrder
    userId?: SortOrder
    booksId?: SortOrder
    rentalDate?: SortOrder
    returnDate?: SortOrder
    status?: SortOrder
    _count?: RentalCountOrderByAggregateInput
    _avg?: RentalAvgOrderByAggregateInput
    _max?: RentalMaxOrderByAggregateInput
    _min?: RentalMinOrderByAggregateInput
    _sum?: RentalSumOrderByAggregateInput
  }

  export type RentalScalarWhereWithAggregatesInput = {
    AND?: RentalScalarWhereWithAggregatesInput | RentalScalarWhereWithAggregatesInput[]
    OR?: RentalScalarWhereWithAggregatesInput[]
    NOT?: RentalScalarWhereWithAggregatesInput | RentalScalarWhereWithAggregatesInput[]
    rentalId?: IntWithAggregatesFilter<"Rental"> | number
    userId?: IntWithAggregatesFilter<"Rental"> | number
    booksId?: IntWithAggregatesFilter<"Rental"> | number
    rentalDate?: DateTimeWithAggregatesFilter<"Rental"> | Date | string
    returnDate?: DateTimeWithAggregatesFilter<"Rental"> | Date | string
    status?: StringWithAggregatesFilter<"Rental"> | string
  }

  export type UserCreateInput = {
    username: string
    password: string
    userRole: string
    Rental?: RentalCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    userId?: number
    username: string
    password: string
    userRole: string
    Rental?: RentalUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    userRole?: StringFieldUpdateOperationsInput | string
    Rental?: RentalUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    userRole?: StringFieldUpdateOperationsInput | string
    Rental?: RentalUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    userId?: number
    username: string
    password: string
    userRole: string
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    userRole?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    userRole?: StringFieldUpdateOperationsInput | string
  }

  export type BooksCategoryCreateInput = {
    category: string
    books?: BooksCreateNestedManyWithoutBooksCategoryInput
  }

  export type BooksCategoryUncheckedCreateInput = {
    categoryId?: number
    category: string
    books?: BooksUncheckedCreateNestedManyWithoutBooksCategoryInput
  }

  export type BooksCategoryUpdateInput = {
    category?: StringFieldUpdateOperationsInput | string
    books?: BooksUpdateManyWithoutBooksCategoryNestedInput
  }

  export type BooksCategoryUncheckedUpdateInput = {
    categoryId?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    books?: BooksUncheckedUpdateManyWithoutBooksCategoryNestedInput
  }

  export type BooksCategoryCreateManyInput = {
    categoryId?: number
    category: string
  }

  export type BooksCategoryUpdateManyMutationInput = {
    category?: StringFieldUpdateOperationsInput | string
  }

  export type BooksCategoryUncheckedUpdateManyInput = {
    categoryId?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
  }

  export type BooksAuthorCreateInput = {
    author: string
    books?: BooksCreateNestedManyWithoutAuthorInput
  }

  export type BooksAuthorUncheckedCreateInput = {
    authorId?: number
    author: string
    books?: BooksUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type BooksAuthorUpdateInput = {
    author?: StringFieldUpdateOperationsInput | string
    books?: BooksUpdateManyWithoutAuthorNestedInput
  }

  export type BooksAuthorUncheckedUpdateInput = {
    authorId?: IntFieldUpdateOperationsInput | number
    author?: StringFieldUpdateOperationsInput | string
    books?: BooksUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type BooksAuthorCreateManyInput = {
    authorId?: number
    author: string
  }

  export type BooksAuthorUpdateManyMutationInput = {
    author?: StringFieldUpdateOperationsInput | string
  }

  export type BooksAuthorUncheckedUpdateManyInput = {
    authorId?: IntFieldUpdateOperationsInput | number
    author?: StringFieldUpdateOperationsInput | string
  }

  export type BooksCreateInput = {
    booksName: string
    booksDesc: string
    booksImage?: string | null
    author: BooksAuthorCreateNestedOneWithoutBooksInput
    BooksCategory: BooksCategoryCreateNestedOneWithoutBooksInput
    Rental?: RentalCreateNestedManyWithoutBookInput
  }

  export type BooksUncheckedCreateInput = {
    booksId?: number
    booksName: string
    booksDesc: string
    booksImage?: string | null
    authorId: number
    categoryId: number
    Rental?: RentalUncheckedCreateNestedManyWithoutBookInput
  }

  export type BooksUpdateInput = {
    booksName?: StringFieldUpdateOperationsInput | string
    booksDesc?: StringFieldUpdateOperationsInput | string
    booksImage?: NullableStringFieldUpdateOperationsInput | string | null
    author?: BooksAuthorUpdateOneRequiredWithoutBooksNestedInput
    BooksCategory?: BooksCategoryUpdateOneRequiredWithoutBooksNestedInput
    Rental?: RentalUpdateManyWithoutBookNestedInput
  }

  export type BooksUncheckedUpdateInput = {
    booksId?: IntFieldUpdateOperationsInput | number
    booksName?: StringFieldUpdateOperationsInput | string
    booksDesc?: StringFieldUpdateOperationsInput | string
    booksImage?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    Rental?: RentalUncheckedUpdateManyWithoutBookNestedInput
  }

  export type BooksCreateManyInput = {
    booksId?: number
    booksName: string
    booksDesc: string
    booksImage?: string | null
    authorId: number
    categoryId: number
  }

  export type BooksUpdateManyMutationInput = {
    booksName?: StringFieldUpdateOperationsInput | string
    booksDesc?: StringFieldUpdateOperationsInput | string
    booksImage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BooksUncheckedUpdateManyInput = {
    booksId?: IntFieldUpdateOperationsInput | number
    booksName?: StringFieldUpdateOperationsInput | string
    booksDesc?: StringFieldUpdateOperationsInput | string
    booksImage?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
  }

  export type RentalCreateInput = {
    rentalDate: Date | string
    returnDate: Date | string
    status: string
    user: UserCreateNestedOneWithoutRentalInput
    book: BooksCreateNestedOneWithoutRentalInput
  }

  export type RentalUncheckedCreateInput = {
    rentalId?: number
    userId: number
    booksId: number
    rentalDate: Date | string
    returnDate: Date | string
    status: string
  }

  export type RentalUpdateInput = {
    rentalDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutRentalNestedInput
    book?: BooksUpdateOneRequiredWithoutRentalNestedInput
  }

  export type RentalUncheckedUpdateInput = {
    rentalId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    booksId?: IntFieldUpdateOperationsInput | number
    rentalDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type RentalCreateManyInput = {
    rentalId?: number
    userId: number
    booksId: number
    rentalDate: Date | string
    returnDate: Date | string
    status: string
  }

  export type RentalUpdateManyMutationInput = {
    rentalDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type RentalUncheckedUpdateManyInput = {
    rentalId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    booksId?: IntFieldUpdateOperationsInput | number
    rentalDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type RentalListRelationFilter = {
    every?: RentalWhereInput
    some?: RentalWhereInput
    none?: RentalWhereInput
  }

  export type RentalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    userId?: SortOrder
    username?: SortOrder
    password?: SortOrder
    userRole?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    userId?: SortOrder
    username?: SortOrder
    password?: SortOrder
    userRole?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    userId?: SortOrder
    username?: SortOrder
    password?: SortOrder
    userRole?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BooksListRelationFilter = {
    every?: BooksWhereInput
    some?: BooksWhereInput
    none?: BooksWhereInput
  }

  export type BooksOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BooksCategoryOrderByRelevanceInput = {
    fields: BooksCategoryOrderByRelevanceFieldEnum | BooksCategoryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BooksCategoryCountOrderByAggregateInput = {
    categoryId?: SortOrder
    category?: SortOrder
  }

  export type BooksCategoryAvgOrderByAggregateInput = {
    categoryId?: SortOrder
  }

  export type BooksCategoryMaxOrderByAggregateInput = {
    categoryId?: SortOrder
    category?: SortOrder
  }

  export type BooksCategoryMinOrderByAggregateInput = {
    categoryId?: SortOrder
    category?: SortOrder
  }

  export type BooksCategorySumOrderByAggregateInput = {
    categoryId?: SortOrder
  }

  export type BooksAuthorOrderByRelevanceInput = {
    fields: BooksAuthorOrderByRelevanceFieldEnum | BooksAuthorOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BooksAuthorCountOrderByAggregateInput = {
    authorId?: SortOrder
    author?: SortOrder
  }

  export type BooksAuthorAvgOrderByAggregateInput = {
    authorId?: SortOrder
  }

  export type BooksAuthorMaxOrderByAggregateInput = {
    authorId?: SortOrder
    author?: SortOrder
  }

  export type BooksAuthorMinOrderByAggregateInput = {
    authorId?: SortOrder
    author?: SortOrder
  }

  export type BooksAuthorSumOrderByAggregateInput = {
    authorId?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BooksAuthorScalarRelationFilter = {
    is?: BooksAuthorWhereInput
    isNot?: BooksAuthorWhereInput
  }

  export type BooksCategoryScalarRelationFilter = {
    is?: BooksCategoryWhereInput
    isNot?: BooksCategoryWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BooksOrderByRelevanceInput = {
    fields: BooksOrderByRelevanceFieldEnum | BooksOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BooksCountOrderByAggregateInput = {
    booksId?: SortOrder
    booksName?: SortOrder
    booksDesc?: SortOrder
    booksImage?: SortOrder
    authorId?: SortOrder
    categoryId?: SortOrder
  }

  export type BooksAvgOrderByAggregateInput = {
    booksId?: SortOrder
    authorId?: SortOrder
    categoryId?: SortOrder
  }

  export type BooksMaxOrderByAggregateInput = {
    booksId?: SortOrder
    booksName?: SortOrder
    booksDesc?: SortOrder
    booksImage?: SortOrder
    authorId?: SortOrder
    categoryId?: SortOrder
  }

  export type BooksMinOrderByAggregateInput = {
    booksId?: SortOrder
    booksName?: SortOrder
    booksDesc?: SortOrder
    booksImage?: SortOrder
    authorId?: SortOrder
    categoryId?: SortOrder
  }

  export type BooksSumOrderByAggregateInput = {
    booksId?: SortOrder
    authorId?: SortOrder
    categoryId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type BooksScalarRelationFilter = {
    is?: BooksWhereInput
    isNot?: BooksWhereInput
  }

  export type RentalOrderByRelevanceInput = {
    fields: RentalOrderByRelevanceFieldEnum | RentalOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RentalCountOrderByAggregateInput = {
    rentalId?: SortOrder
    userId?: SortOrder
    booksId?: SortOrder
    rentalDate?: SortOrder
    returnDate?: SortOrder
    status?: SortOrder
  }

  export type RentalAvgOrderByAggregateInput = {
    rentalId?: SortOrder
    userId?: SortOrder
    booksId?: SortOrder
  }

  export type RentalMaxOrderByAggregateInput = {
    rentalId?: SortOrder
    userId?: SortOrder
    booksId?: SortOrder
    rentalDate?: SortOrder
    returnDate?: SortOrder
    status?: SortOrder
  }

  export type RentalMinOrderByAggregateInput = {
    rentalId?: SortOrder
    userId?: SortOrder
    booksId?: SortOrder
    rentalDate?: SortOrder
    returnDate?: SortOrder
    status?: SortOrder
  }

  export type RentalSumOrderByAggregateInput = {
    rentalId?: SortOrder
    userId?: SortOrder
    booksId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type RentalCreateNestedManyWithoutUserInput = {
    create?: XOR<RentalCreateWithoutUserInput, RentalUncheckedCreateWithoutUserInput> | RentalCreateWithoutUserInput[] | RentalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RentalCreateOrConnectWithoutUserInput | RentalCreateOrConnectWithoutUserInput[]
    createMany?: RentalCreateManyUserInputEnvelope
    connect?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
  }

  export type RentalUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RentalCreateWithoutUserInput, RentalUncheckedCreateWithoutUserInput> | RentalCreateWithoutUserInput[] | RentalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RentalCreateOrConnectWithoutUserInput | RentalCreateOrConnectWithoutUserInput[]
    createMany?: RentalCreateManyUserInputEnvelope
    connect?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type RentalUpdateManyWithoutUserNestedInput = {
    create?: XOR<RentalCreateWithoutUserInput, RentalUncheckedCreateWithoutUserInput> | RentalCreateWithoutUserInput[] | RentalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RentalCreateOrConnectWithoutUserInput | RentalCreateOrConnectWithoutUserInput[]
    upsert?: RentalUpsertWithWhereUniqueWithoutUserInput | RentalUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RentalCreateManyUserInputEnvelope
    set?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
    disconnect?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
    delete?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
    connect?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
    update?: RentalUpdateWithWhereUniqueWithoutUserInput | RentalUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RentalUpdateManyWithWhereWithoutUserInput | RentalUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RentalScalarWhereInput | RentalScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RentalUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RentalCreateWithoutUserInput, RentalUncheckedCreateWithoutUserInput> | RentalCreateWithoutUserInput[] | RentalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RentalCreateOrConnectWithoutUserInput | RentalCreateOrConnectWithoutUserInput[]
    upsert?: RentalUpsertWithWhereUniqueWithoutUserInput | RentalUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RentalCreateManyUserInputEnvelope
    set?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
    disconnect?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
    delete?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
    connect?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
    update?: RentalUpdateWithWhereUniqueWithoutUserInput | RentalUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RentalUpdateManyWithWhereWithoutUserInput | RentalUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RentalScalarWhereInput | RentalScalarWhereInput[]
  }

  export type BooksCreateNestedManyWithoutBooksCategoryInput = {
    create?: XOR<BooksCreateWithoutBooksCategoryInput, BooksUncheckedCreateWithoutBooksCategoryInput> | BooksCreateWithoutBooksCategoryInput[] | BooksUncheckedCreateWithoutBooksCategoryInput[]
    connectOrCreate?: BooksCreateOrConnectWithoutBooksCategoryInput | BooksCreateOrConnectWithoutBooksCategoryInput[]
    createMany?: BooksCreateManyBooksCategoryInputEnvelope
    connect?: BooksWhereUniqueInput | BooksWhereUniqueInput[]
  }

  export type BooksUncheckedCreateNestedManyWithoutBooksCategoryInput = {
    create?: XOR<BooksCreateWithoutBooksCategoryInput, BooksUncheckedCreateWithoutBooksCategoryInput> | BooksCreateWithoutBooksCategoryInput[] | BooksUncheckedCreateWithoutBooksCategoryInput[]
    connectOrCreate?: BooksCreateOrConnectWithoutBooksCategoryInput | BooksCreateOrConnectWithoutBooksCategoryInput[]
    createMany?: BooksCreateManyBooksCategoryInputEnvelope
    connect?: BooksWhereUniqueInput | BooksWhereUniqueInput[]
  }

  export type BooksUpdateManyWithoutBooksCategoryNestedInput = {
    create?: XOR<BooksCreateWithoutBooksCategoryInput, BooksUncheckedCreateWithoutBooksCategoryInput> | BooksCreateWithoutBooksCategoryInput[] | BooksUncheckedCreateWithoutBooksCategoryInput[]
    connectOrCreate?: BooksCreateOrConnectWithoutBooksCategoryInput | BooksCreateOrConnectWithoutBooksCategoryInput[]
    upsert?: BooksUpsertWithWhereUniqueWithoutBooksCategoryInput | BooksUpsertWithWhereUniqueWithoutBooksCategoryInput[]
    createMany?: BooksCreateManyBooksCategoryInputEnvelope
    set?: BooksWhereUniqueInput | BooksWhereUniqueInput[]
    disconnect?: BooksWhereUniqueInput | BooksWhereUniqueInput[]
    delete?: BooksWhereUniqueInput | BooksWhereUniqueInput[]
    connect?: BooksWhereUniqueInput | BooksWhereUniqueInput[]
    update?: BooksUpdateWithWhereUniqueWithoutBooksCategoryInput | BooksUpdateWithWhereUniqueWithoutBooksCategoryInput[]
    updateMany?: BooksUpdateManyWithWhereWithoutBooksCategoryInput | BooksUpdateManyWithWhereWithoutBooksCategoryInput[]
    deleteMany?: BooksScalarWhereInput | BooksScalarWhereInput[]
  }

  export type BooksUncheckedUpdateManyWithoutBooksCategoryNestedInput = {
    create?: XOR<BooksCreateWithoutBooksCategoryInput, BooksUncheckedCreateWithoutBooksCategoryInput> | BooksCreateWithoutBooksCategoryInput[] | BooksUncheckedCreateWithoutBooksCategoryInput[]
    connectOrCreate?: BooksCreateOrConnectWithoutBooksCategoryInput | BooksCreateOrConnectWithoutBooksCategoryInput[]
    upsert?: BooksUpsertWithWhereUniqueWithoutBooksCategoryInput | BooksUpsertWithWhereUniqueWithoutBooksCategoryInput[]
    createMany?: BooksCreateManyBooksCategoryInputEnvelope
    set?: BooksWhereUniqueInput | BooksWhereUniqueInput[]
    disconnect?: BooksWhereUniqueInput | BooksWhereUniqueInput[]
    delete?: BooksWhereUniqueInput | BooksWhereUniqueInput[]
    connect?: BooksWhereUniqueInput | BooksWhereUniqueInput[]
    update?: BooksUpdateWithWhereUniqueWithoutBooksCategoryInput | BooksUpdateWithWhereUniqueWithoutBooksCategoryInput[]
    updateMany?: BooksUpdateManyWithWhereWithoutBooksCategoryInput | BooksUpdateManyWithWhereWithoutBooksCategoryInput[]
    deleteMany?: BooksScalarWhereInput | BooksScalarWhereInput[]
  }

  export type BooksCreateNestedManyWithoutAuthorInput = {
    create?: XOR<BooksCreateWithoutAuthorInput, BooksUncheckedCreateWithoutAuthorInput> | BooksCreateWithoutAuthorInput[] | BooksUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: BooksCreateOrConnectWithoutAuthorInput | BooksCreateOrConnectWithoutAuthorInput[]
    createMany?: BooksCreateManyAuthorInputEnvelope
    connect?: BooksWhereUniqueInput | BooksWhereUniqueInput[]
  }

  export type BooksUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<BooksCreateWithoutAuthorInput, BooksUncheckedCreateWithoutAuthorInput> | BooksCreateWithoutAuthorInput[] | BooksUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: BooksCreateOrConnectWithoutAuthorInput | BooksCreateOrConnectWithoutAuthorInput[]
    createMany?: BooksCreateManyAuthorInputEnvelope
    connect?: BooksWhereUniqueInput | BooksWhereUniqueInput[]
  }

  export type BooksUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<BooksCreateWithoutAuthorInput, BooksUncheckedCreateWithoutAuthorInput> | BooksCreateWithoutAuthorInput[] | BooksUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: BooksCreateOrConnectWithoutAuthorInput | BooksCreateOrConnectWithoutAuthorInput[]
    upsert?: BooksUpsertWithWhereUniqueWithoutAuthorInput | BooksUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: BooksCreateManyAuthorInputEnvelope
    set?: BooksWhereUniqueInput | BooksWhereUniqueInput[]
    disconnect?: BooksWhereUniqueInput | BooksWhereUniqueInput[]
    delete?: BooksWhereUniqueInput | BooksWhereUniqueInput[]
    connect?: BooksWhereUniqueInput | BooksWhereUniqueInput[]
    update?: BooksUpdateWithWhereUniqueWithoutAuthorInput | BooksUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: BooksUpdateManyWithWhereWithoutAuthorInput | BooksUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: BooksScalarWhereInput | BooksScalarWhereInput[]
  }

  export type BooksUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<BooksCreateWithoutAuthorInput, BooksUncheckedCreateWithoutAuthorInput> | BooksCreateWithoutAuthorInput[] | BooksUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: BooksCreateOrConnectWithoutAuthorInput | BooksCreateOrConnectWithoutAuthorInput[]
    upsert?: BooksUpsertWithWhereUniqueWithoutAuthorInput | BooksUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: BooksCreateManyAuthorInputEnvelope
    set?: BooksWhereUniqueInput | BooksWhereUniqueInput[]
    disconnect?: BooksWhereUniqueInput | BooksWhereUniqueInput[]
    delete?: BooksWhereUniqueInput | BooksWhereUniqueInput[]
    connect?: BooksWhereUniqueInput | BooksWhereUniqueInput[]
    update?: BooksUpdateWithWhereUniqueWithoutAuthorInput | BooksUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: BooksUpdateManyWithWhereWithoutAuthorInput | BooksUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: BooksScalarWhereInput | BooksScalarWhereInput[]
  }

  export type BooksAuthorCreateNestedOneWithoutBooksInput = {
    create?: XOR<BooksAuthorCreateWithoutBooksInput, BooksAuthorUncheckedCreateWithoutBooksInput>
    connectOrCreate?: BooksAuthorCreateOrConnectWithoutBooksInput
    connect?: BooksAuthorWhereUniqueInput
  }

  export type BooksCategoryCreateNestedOneWithoutBooksInput = {
    create?: XOR<BooksCategoryCreateWithoutBooksInput, BooksCategoryUncheckedCreateWithoutBooksInput>
    connectOrCreate?: BooksCategoryCreateOrConnectWithoutBooksInput
    connect?: BooksCategoryWhereUniqueInput
  }

  export type RentalCreateNestedManyWithoutBookInput = {
    create?: XOR<RentalCreateWithoutBookInput, RentalUncheckedCreateWithoutBookInput> | RentalCreateWithoutBookInput[] | RentalUncheckedCreateWithoutBookInput[]
    connectOrCreate?: RentalCreateOrConnectWithoutBookInput | RentalCreateOrConnectWithoutBookInput[]
    createMany?: RentalCreateManyBookInputEnvelope
    connect?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
  }

  export type RentalUncheckedCreateNestedManyWithoutBookInput = {
    create?: XOR<RentalCreateWithoutBookInput, RentalUncheckedCreateWithoutBookInput> | RentalCreateWithoutBookInput[] | RentalUncheckedCreateWithoutBookInput[]
    connectOrCreate?: RentalCreateOrConnectWithoutBookInput | RentalCreateOrConnectWithoutBookInput[]
    createMany?: RentalCreateManyBookInputEnvelope
    connect?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BooksAuthorUpdateOneRequiredWithoutBooksNestedInput = {
    create?: XOR<BooksAuthorCreateWithoutBooksInput, BooksAuthorUncheckedCreateWithoutBooksInput>
    connectOrCreate?: BooksAuthorCreateOrConnectWithoutBooksInput
    upsert?: BooksAuthorUpsertWithoutBooksInput
    connect?: BooksAuthorWhereUniqueInput
    update?: XOR<XOR<BooksAuthorUpdateToOneWithWhereWithoutBooksInput, BooksAuthorUpdateWithoutBooksInput>, BooksAuthorUncheckedUpdateWithoutBooksInput>
  }

  export type BooksCategoryUpdateOneRequiredWithoutBooksNestedInput = {
    create?: XOR<BooksCategoryCreateWithoutBooksInput, BooksCategoryUncheckedCreateWithoutBooksInput>
    connectOrCreate?: BooksCategoryCreateOrConnectWithoutBooksInput
    upsert?: BooksCategoryUpsertWithoutBooksInput
    connect?: BooksCategoryWhereUniqueInput
    update?: XOR<XOR<BooksCategoryUpdateToOneWithWhereWithoutBooksInput, BooksCategoryUpdateWithoutBooksInput>, BooksCategoryUncheckedUpdateWithoutBooksInput>
  }

  export type RentalUpdateManyWithoutBookNestedInput = {
    create?: XOR<RentalCreateWithoutBookInput, RentalUncheckedCreateWithoutBookInput> | RentalCreateWithoutBookInput[] | RentalUncheckedCreateWithoutBookInput[]
    connectOrCreate?: RentalCreateOrConnectWithoutBookInput | RentalCreateOrConnectWithoutBookInput[]
    upsert?: RentalUpsertWithWhereUniqueWithoutBookInput | RentalUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: RentalCreateManyBookInputEnvelope
    set?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
    disconnect?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
    delete?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
    connect?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
    update?: RentalUpdateWithWhereUniqueWithoutBookInput | RentalUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: RentalUpdateManyWithWhereWithoutBookInput | RentalUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: RentalScalarWhereInput | RentalScalarWhereInput[]
  }

  export type RentalUncheckedUpdateManyWithoutBookNestedInput = {
    create?: XOR<RentalCreateWithoutBookInput, RentalUncheckedCreateWithoutBookInput> | RentalCreateWithoutBookInput[] | RentalUncheckedCreateWithoutBookInput[]
    connectOrCreate?: RentalCreateOrConnectWithoutBookInput | RentalCreateOrConnectWithoutBookInput[]
    upsert?: RentalUpsertWithWhereUniqueWithoutBookInput | RentalUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: RentalCreateManyBookInputEnvelope
    set?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
    disconnect?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
    delete?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
    connect?: RentalWhereUniqueInput | RentalWhereUniqueInput[]
    update?: RentalUpdateWithWhereUniqueWithoutBookInput | RentalUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: RentalUpdateManyWithWhereWithoutBookInput | RentalUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: RentalScalarWhereInput | RentalScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutRentalInput = {
    create?: XOR<UserCreateWithoutRentalInput, UserUncheckedCreateWithoutRentalInput>
    connectOrCreate?: UserCreateOrConnectWithoutRentalInput
    connect?: UserWhereUniqueInput
  }

  export type BooksCreateNestedOneWithoutRentalInput = {
    create?: XOR<BooksCreateWithoutRentalInput, BooksUncheckedCreateWithoutRentalInput>
    connectOrCreate?: BooksCreateOrConnectWithoutRentalInput
    connect?: BooksWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutRentalNestedInput = {
    create?: XOR<UserCreateWithoutRentalInput, UserUncheckedCreateWithoutRentalInput>
    connectOrCreate?: UserCreateOrConnectWithoutRentalInput
    upsert?: UserUpsertWithoutRentalInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRentalInput, UserUpdateWithoutRentalInput>, UserUncheckedUpdateWithoutRentalInput>
  }

  export type BooksUpdateOneRequiredWithoutRentalNestedInput = {
    create?: XOR<BooksCreateWithoutRentalInput, BooksUncheckedCreateWithoutRentalInput>
    connectOrCreate?: BooksCreateOrConnectWithoutRentalInput
    upsert?: BooksUpsertWithoutRentalInput
    connect?: BooksWhereUniqueInput
    update?: XOR<XOR<BooksUpdateToOneWithWhereWithoutRentalInput, BooksUpdateWithoutRentalInput>, BooksUncheckedUpdateWithoutRentalInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type RentalCreateWithoutUserInput = {
    rentalDate: Date | string
    returnDate: Date | string
    status: string
    book: BooksCreateNestedOneWithoutRentalInput
  }

  export type RentalUncheckedCreateWithoutUserInput = {
    rentalId?: number
    booksId: number
    rentalDate: Date | string
    returnDate: Date | string
    status: string
  }

  export type RentalCreateOrConnectWithoutUserInput = {
    where: RentalWhereUniqueInput
    create: XOR<RentalCreateWithoutUserInput, RentalUncheckedCreateWithoutUserInput>
  }

  export type RentalCreateManyUserInputEnvelope = {
    data: RentalCreateManyUserInput | RentalCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RentalUpsertWithWhereUniqueWithoutUserInput = {
    where: RentalWhereUniqueInput
    update: XOR<RentalUpdateWithoutUserInput, RentalUncheckedUpdateWithoutUserInput>
    create: XOR<RentalCreateWithoutUserInput, RentalUncheckedCreateWithoutUserInput>
  }

  export type RentalUpdateWithWhereUniqueWithoutUserInput = {
    where: RentalWhereUniqueInput
    data: XOR<RentalUpdateWithoutUserInput, RentalUncheckedUpdateWithoutUserInput>
  }

  export type RentalUpdateManyWithWhereWithoutUserInput = {
    where: RentalScalarWhereInput
    data: XOR<RentalUpdateManyMutationInput, RentalUncheckedUpdateManyWithoutUserInput>
  }

  export type RentalScalarWhereInput = {
    AND?: RentalScalarWhereInput | RentalScalarWhereInput[]
    OR?: RentalScalarWhereInput[]
    NOT?: RentalScalarWhereInput | RentalScalarWhereInput[]
    rentalId?: IntFilter<"Rental"> | number
    userId?: IntFilter<"Rental"> | number
    booksId?: IntFilter<"Rental"> | number
    rentalDate?: DateTimeFilter<"Rental"> | Date | string
    returnDate?: DateTimeFilter<"Rental"> | Date | string
    status?: StringFilter<"Rental"> | string
  }

  export type BooksCreateWithoutBooksCategoryInput = {
    booksName: string
    booksDesc: string
    booksImage?: string | null
    author: BooksAuthorCreateNestedOneWithoutBooksInput
    Rental?: RentalCreateNestedManyWithoutBookInput
  }

  export type BooksUncheckedCreateWithoutBooksCategoryInput = {
    booksId?: number
    booksName: string
    booksDesc: string
    booksImage?: string | null
    authorId: number
    Rental?: RentalUncheckedCreateNestedManyWithoutBookInput
  }

  export type BooksCreateOrConnectWithoutBooksCategoryInput = {
    where: BooksWhereUniqueInput
    create: XOR<BooksCreateWithoutBooksCategoryInput, BooksUncheckedCreateWithoutBooksCategoryInput>
  }

  export type BooksCreateManyBooksCategoryInputEnvelope = {
    data: BooksCreateManyBooksCategoryInput | BooksCreateManyBooksCategoryInput[]
    skipDuplicates?: boolean
  }

  export type BooksUpsertWithWhereUniqueWithoutBooksCategoryInput = {
    where: BooksWhereUniqueInput
    update: XOR<BooksUpdateWithoutBooksCategoryInput, BooksUncheckedUpdateWithoutBooksCategoryInput>
    create: XOR<BooksCreateWithoutBooksCategoryInput, BooksUncheckedCreateWithoutBooksCategoryInput>
  }

  export type BooksUpdateWithWhereUniqueWithoutBooksCategoryInput = {
    where: BooksWhereUniqueInput
    data: XOR<BooksUpdateWithoutBooksCategoryInput, BooksUncheckedUpdateWithoutBooksCategoryInput>
  }

  export type BooksUpdateManyWithWhereWithoutBooksCategoryInput = {
    where: BooksScalarWhereInput
    data: XOR<BooksUpdateManyMutationInput, BooksUncheckedUpdateManyWithoutBooksCategoryInput>
  }

  export type BooksScalarWhereInput = {
    AND?: BooksScalarWhereInput | BooksScalarWhereInput[]
    OR?: BooksScalarWhereInput[]
    NOT?: BooksScalarWhereInput | BooksScalarWhereInput[]
    booksId?: IntFilter<"Books"> | number
    booksName?: StringFilter<"Books"> | string
    booksDesc?: StringFilter<"Books"> | string
    booksImage?: StringNullableFilter<"Books"> | string | null
    authorId?: IntFilter<"Books"> | number
    categoryId?: IntFilter<"Books"> | number
  }

  export type BooksCreateWithoutAuthorInput = {
    booksName: string
    booksDesc: string
    booksImage?: string | null
    BooksCategory: BooksCategoryCreateNestedOneWithoutBooksInput
    Rental?: RentalCreateNestedManyWithoutBookInput
  }

  export type BooksUncheckedCreateWithoutAuthorInput = {
    booksId?: number
    booksName: string
    booksDesc: string
    booksImage?: string | null
    categoryId: number
    Rental?: RentalUncheckedCreateNestedManyWithoutBookInput
  }

  export type BooksCreateOrConnectWithoutAuthorInput = {
    where: BooksWhereUniqueInput
    create: XOR<BooksCreateWithoutAuthorInput, BooksUncheckedCreateWithoutAuthorInput>
  }

  export type BooksCreateManyAuthorInputEnvelope = {
    data: BooksCreateManyAuthorInput | BooksCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type BooksUpsertWithWhereUniqueWithoutAuthorInput = {
    where: BooksWhereUniqueInput
    update: XOR<BooksUpdateWithoutAuthorInput, BooksUncheckedUpdateWithoutAuthorInput>
    create: XOR<BooksCreateWithoutAuthorInput, BooksUncheckedCreateWithoutAuthorInput>
  }

  export type BooksUpdateWithWhereUniqueWithoutAuthorInput = {
    where: BooksWhereUniqueInput
    data: XOR<BooksUpdateWithoutAuthorInput, BooksUncheckedUpdateWithoutAuthorInput>
  }

  export type BooksUpdateManyWithWhereWithoutAuthorInput = {
    where: BooksScalarWhereInput
    data: XOR<BooksUpdateManyMutationInput, BooksUncheckedUpdateManyWithoutAuthorInput>
  }

  export type BooksAuthorCreateWithoutBooksInput = {
    author: string
  }

  export type BooksAuthorUncheckedCreateWithoutBooksInput = {
    authorId?: number
    author: string
  }

  export type BooksAuthorCreateOrConnectWithoutBooksInput = {
    where: BooksAuthorWhereUniqueInput
    create: XOR<BooksAuthorCreateWithoutBooksInput, BooksAuthorUncheckedCreateWithoutBooksInput>
  }

  export type BooksCategoryCreateWithoutBooksInput = {
    category: string
  }

  export type BooksCategoryUncheckedCreateWithoutBooksInput = {
    categoryId?: number
    category: string
  }

  export type BooksCategoryCreateOrConnectWithoutBooksInput = {
    where: BooksCategoryWhereUniqueInput
    create: XOR<BooksCategoryCreateWithoutBooksInput, BooksCategoryUncheckedCreateWithoutBooksInput>
  }

  export type RentalCreateWithoutBookInput = {
    rentalDate: Date | string
    returnDate: Date | string
    status: string
    user: UserCreateNestedOneWithoutRentalInput
  }

  export type RentalUncheckedCreateWithoutBookInput = {
    rentalId?: number
    userId: number
    rentalDate: Date | string
    returnDate: Date | string
    status: string
  }

  export type RentalCreateOrConnectWithoutBookInput = {
    where: RentalWhereUniqueInput
    create: XOR<RentalCreateWithoutBookInput, RentalUncheckedCreateWithoutBookInput>
  }

  export type RentalCreateManyBookInputEnvelope = {
    data: RentalCreateManyBookInput | RentalCreateManyBookInput[]
    skipDuplicates?: boolean
  }

  export type BooksAuthorUpsertWithoutBooksInput = {
    update: XOR<BooksAuthorUpdateWithoutBooksInput, BooksAuthorUncheckedUpdateWithoutBooksInput>
    create: XOR<BooksAuthorCreateWithoutBooksInput, BooksAuthorUncheckedCreateWithoutBooksInput>
    where?: BooksAuthorWhereInput
  }

  export type BooksAuthorUpdateToOneWithWhereWithoutBooksInput = {
    where?: BooksAuthorWhereInput
    data: XOR<BooksAuthorUpdateWithoutBooksInput, BooksAuthorUncheckedUpdateWithoutBooksInput>
  }

  export type BooksAuthorUpdateWithoutBooksInput = {
    author?: StringFieldUpdateOperationsInput | string
  }

  export type BooksAuthorUncheckedUpdateWithoutBooksInput = {
    authorId?: IntFieldUpdateOperationsInput | number
    author?: StringFieldUpdateOperationsInput | string
  }

  export type BooksCategoryUpsertWithoutBooksInput = {
    update: XOR<BooksCategoryUpdateWithoutBooksInput, BooksCategoryUncheckedUpdateWithoutBooksInput>
    create: XOR<BooksCategoryCreateWithoutBooksInput, BooksCategoryUncheckedCreateWithoutBooksInput>
    where?: BooksCategoryWhereInput
  }

  export type BooksCategoryUpdateToOneWithWhereWithoutBooksInput = {
    where?: BooksCategoryWhereInput
    data: XOR<BooksCategoryUpdateWithoutBooksInput, BooksCategoryUncheckedUpdateWithoutBooksInput>
  }

  export type BooksCategoryUpdateWithoutBooksInput = {
    category?: StringFieldUpdateOperationsInput | string
  }

  export type BooksCategoryUncheckedUpdateWithoutBooksInput = {
    categoryId?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
  }

  export type RentalUpsertWithWhereUniqueWithoutBookInput = {
    where: RentalWhereUniqueInput
    update: XOR<RentalUpdateWithoutBookInput, RentalUncheckedUpdateWithoutBookInput>
    create: XOR<RentalCreateWithoutBookInput, RentalUncheckedCreateWithoutBookInput>
  }

  export type RentalUpdateWithWhereUniqueWithoutBookInput = {
    where: RentalWhereUniqueInput
    data: XOR<RentalUpdateWithoutBookInput, RentalUncheckedUpdateWithoutBookInput>
  }

  export type RentalUpdateManyWithWhereWithoutBookInput = {
    where: RentalScalarWhereInput
    data: XOR<RentalUpdateManyMutationInput, RentalUncheckedUpdateManyWithoutBookInput>
  }

  export type UserCreateWithoutRentalInput = {
    username: string
    password: string
    userRole: string
  }

  export type UserUncheckedCreateWithoutRentalInput = {
    userId?: number
    username: string
    password: string
    userRole: string
  }

  export type UserCreateOrConnectWithoutRentalInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRentalInput, UserUncheckedCreateWithoutRentalInput>
  }

  export type BooksCreateWithoutRentalInput = {
    booksName: string
    booksDesc: string
    booksImage?: string | null
    author: BooksAuthorCreateNestedOneWithoutBooksInput
    BooksCategory: BooksCategoryCreateNestedOneWithoutBooksInput
  }

  export type BooksUncheckedCreateWithoutRentalInput = {
    booksId?: number
    booksName: string
    booksDesc: string
    booksImage?: string | null
    authorId: number
    categoryId: number
  }

  export type BooksCreateOrConnectWithoutRentalInput = {
    where: BooksWhereUniqueInput
    create: XOR<BooksCreateWithoutRentalInput, BooksUncheckedCreateWithoutRentalInput>
  }

  export type UserUpsertWithoutRentalInput = {
    update: XOR<UserUpdateWithoutRentalInput, UserUncheckedUpdateWithoutRentalInput>
    create: XOR<UserCreateWithoutRentalInput, UserUncheckedCreateWithoutRentalInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRentalInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRentalInput, UserUncheckedUpdateWithoutRentalInput>
  }

  export type UserUpdateWithoutRentalInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    userRole?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateWithoutRentalInput = {
    userId?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    userRole?: StringFieldUpdateOperationsInput | string
  }

  export type BooksUpsertWithoutRentalInput = {
    update: XOR<BooksUpdateWithoutRentalInput, BooksUncheckedUpdateWithoutRentalInput>
    create: XOR<BooksCreateWithoutRentalInput, BooksUncheckedCreateWithoutRentalInput>
    where?: BooksWhereInput
  }

  export type BooksUpdateToOneWithWhereWithoutRentalInput = {
    where?: BooksWhereInput
    data: XOR<BooksUpdateWithoutRentalInput, BooksUncheckedUpdateWithoutRentalInput>
  }

  export type BooksUpdateWithoutRentalInput = {
    booksName?: StringFieldUpdateOperationsInput | string
    booksDesc?: StringFieldUpdateOperationsInput | string
    booksImage?: NullableStringFieldUpdateOperationsInput | string | null
    author?: BooksAuthorUpdateOneRequiredWithoutBooksNestedInput
    BooksCategory?: BooksCategoryUpdateOneRequiredWithoutBooksNestedInput
  }

  export type BooksUncheckedUpdateWithoutRentalInput = {
    booksId?: IntFieldUpdateOperationsInput | number
    booksName?: StringFieldUpdateOperationsInput | string
    booksDesc?: StringFieldUpdateOperationsInput | string
    booksImage?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
  }

  export type RentalCreateManyUserInput = {
    rentalId?: number
    booksId: number
    rentalDate: Date | string
    returnDate: Date | string
    status: string
  }

  export type RentalUpdateWithoutUserInput = {
    rentalDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    book?: BooksUpdateOneRequiredWithoutRentalNestedInput
  }

  export type RentalUncheckedUpdateWithoutUserInput = {
    rentalId?: IntFieldUpdateOperationsInput | number
    booksId?: IntFieldUpdateOperationsInput | number
    rentalDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type RentalUncheckedUpdateManyWithoutUserInput = {
    rentalId?: IntFieldUpdateOperationsInput | number
    booksId?: IntFieldUpdateOperationsInput | number
    rentalDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type BooksCreateManyBooksCategoryInput = {
    booksId?: number
    booksName: string
    booksDesc: string
    booksImage?: string | null
    authorId: number
  }

  export type BooksUpdateWithoutBooksCategoryInput = {
    booksName?: StringFieldUpdateOperationsInput | string
    booksDesc?: StringFieldUpdateOperationsInput | string
    booksImage?: NullableStringFieldUpdateOperationsInput | string | null
    author?: BooksAuthorUpdateOneRequiredWithoutBooksNestedInput
    Rental?: RentalUpdateManyWithoutBookNestedInput
  }

  export type BooksUncheckedUpdateWithoutBooksCategoryInput = {
    booksId?: IntFieldUpdateOperationsInput | number
    booksName?: StringFieldUpdateOperationsInput | string
    booksDesc?: StringFieldUpdateOperationsInput | string
    booksImage?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: IntFieldUpdateOperationsInput | number
    Rental?: RentalUncheckedUpdateManyWithoutBookNestedInput
  }

  export type BooksUncheckedUpdateManyWithoutBooksCategoryInput = {
    booksId?: IntFieldUpdateOperationsInput | number
    booksName?: StringFieldUpdateOperationsInput | string
    booksDesc?: StringFieldUpdateOperationsInput | string
    booksImage?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: IntFieldUpdateOperationsInput | number
  }

  export type BooksCreateManyAuthorInput = {
    booksId?: number
    booksName: string
    booksDesc: string
    booksImage?: string | null
    categoryId: number
  }

  export type BooksUpdateWithoutAuthorInput = {
    booksName?: StringFieldUpdateOperationsInput | string
    booksDesc?: StringFieldUpdateOperationsInput | string
    booksImage?: NullableStringFieldUpdateOperationsInput | string | null
    BooksCategory?: BooksCategoryUpdateOneRequiredWithoutBooksNestedInput
    Rental?: RentalUpdateManyWithoutBookNestedInput
  }

  export type BooksUncheckedUpdateWithoutAuthorInput = {
    booksId?: IntFieldUpdateOperationsInput | number
    booksName?: StringFieldUpdateOperationsInput | string
    booksDesc?: StringFieldUpdateOperationsInput | string
    booksImage?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: IntFieldUpdateOperationsInput | number
    Rental?: RentalUncheckedUpdateManyWithoutBookNestedInput
  }

  export type BooksUncheckedUpdateManyWithoutAuthorInput = {
    booksId?: IntFieldUpdateOperationsInput | number
    booksName?: StringFieldUpdateOperationsInput | string
    booksDesc?: StringFieldUpdateOperationsInput | string
    booksImage?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: IntFieldUpdateOperationsInput | number
  }

  export type RentalCreateManyBookInput = {
    rentalId?: number
    userId: number
    rentalDate: Date | string
    returnDate: Date | string
    status: string
  }

  export type RentalUpdateWithoutBookInput = {
    rentalDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutRentalNestedInput
  }

  export type RentalUncheckedUpdateWithoutBookInput = {
    rentalId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    rentalDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type RentalUncheckedUpdateManyWithoutBookInput = {
    rentalId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    rentalDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
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