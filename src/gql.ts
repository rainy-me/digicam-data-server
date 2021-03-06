type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export enum CacheControlScope {
  Public = "PUBLIC",
  Private = "PRIVATE"
}

export type Course = {
  title: Scalars["String"];
  teachers?: Maybe<Array<Scalars["String"]>>;
  year: Scalars["String"];
  availability: Scalars["String"];
  day: Scalars["String"];
  time: Scalars["String"];
  status: Scalars["String"];
  link: Scalars["String"];
};

export type FeedbackSheet = {
  date: Scalars["String"];
  course: Scalars["String"];
  time: Scalars["String"];
  deadline: Scalars["String"];
  status: Scalars["String"];
};

export type Info = {
  catagroy: Scalars["String"];
  date: Scalars["String"];
  property: Scalars["String"];
  title: Scalars["String"];
  sender: Scalars["String"];
  status: Scalars["String"];
  link: Scalars["String"];
  detail?: Maybe<InfoDetail>;
};

export type InfoDetail = {
  sender: Scalars["String"];
  date: Scalars["String"];
  catagroy: Scalars["String"];
  effectiveness: Scalars["String"];
  property: Scalars["String"];
  title: Scalars["String"];
  content: Scalars["String"];
  file: Scalars["String"];
};

export type Material = {
  date: Scalars["String"];
  property: Scalars["String"];
  course: Scalars["String"];
  title: Scalars["String"];
  status: Scalars["String"];
  link: Scalars["String"];
  detail?: Maybe<MaterialDetail>;
};

export type MaterialDetail = {
  sender: Scalars["String"];
  date: Scalars["String"];
  property: Scalars["String"];
  course: Scalars["String"];
  title: Scalars["String"];
  content: Scalars["String"];
  link: Scalars["String"];
  fileLink: Scalars["String"];
};

export type Query = {
  allInfo: Array<Maybe<Info>>;
  allCourse: Array<Maybe<Course>>;
};

export type Task = {
  date: Scalars["String"];
  course: Scalars["String"];
  title: Scalars["String"];
  deadline: Scalars["String"];
  status: Scalars["String"];
};

import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig
} from "graphql";

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, TParent, TContext, TArgs>;
}

export type SubscriptionResolver<
  TResult,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionResolverObject<TResult, TParent, TContext, TArgs>)
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export type CacheControlDirectiveResolver<
  Result,
  Parent,
  Context = any,
  Args = {
    maxAge?: Maybe<Maybe<Scalars["Int"]>>;
    scope?: Maybe<Maybe<CacheControlScope>>;
  }
> = DirectiveResolverFn<Result, Parent, Context, Args>;

export type CourseResolvers<Context = any, ParentType = Course> = {
  title?: Resolver<Scalars["String"], ParentType, Context>;
  teachers?: Resolver<Maybe<Array<Scalars["String"]>>, ParentType, Context>;
  year?: Resolver<Scalars["String"], ParentType, Context>;
  availability?: Resolver<Scalars["String"], ParentType, Context>;
  day?: Resolver<Scalars["String"], ParentType, Context>;
  time?: Resolver<Scalars["String"], ParentType, Context>;
  status?: Resolver<Scalars["String"], ParentType, Context>;
  link?: Resolver<Scalars["String"], ParentType, Context>;
};

export type FeedbackSheetResolvers<
  Context = any,
  ParentType = FeedbackSheet
> = {
  date?: Resolver<Scalars["String"], ParentType, Context>;
  course?: Resolver<Scalars["String"], ParentType, Context>;
  time?: Resolver<Scalars["String"], ParentType, Context>;
  deadline?: Resolver<Scalars["String"], ParentType, Context>;
  status?: Resolver<Scalars["String"], ParentType, Context>;
};

export type InfoResolvers<Context = any, ParentType = Info> = {
  catagroy?: Resolver<Scalars["String"], ParentType, Context>;
  date?: Resolver<Scalars["String"], ParentType, Context>;
  property?: Resolver<Scalars["String"], ParentType, Context>;
  title?: Resolver<Scalars["String"], ParentType, Context>;
  sender?: Resolver<Scalars["String"], ParentType, Context>;
  status?: Resolver<Scalars["String"], ParentType, Context>;
  link?: Resolver<Scalars["String"], ParentType, Context>;
  detail?: Resolver<Maybe<InfoDetail>, ParentType, Context>;
};

export type InfoDetailResolvers<Context = any, ParentType = InfoDetail> = {
  sender?: Resolver<Scalars["String"], ParentType, Context>;
  date?: Resolver<Scalars["String"], ParentType, Context>;
  catagroy?: Resolver<Scalars["String"], ParentType, Context>;
  effectiveness?: Resolver<Scalars["String"], ParentType, Context>;
  property?: Resolver<Scalars["String"], ParentType, Context>;
  title?: Resolver<Scalars["String"], ParentType, Context>;
  content?: Resolver<Scalars["String"], ParentType, Context>;
  file?: Resolver<Scalars["String"], ParentType, Context>;
};

export type MaterialResolvers<Context = any, ParentType = Material> = {
  date?: Resolver<Scalars["String"], ParentType, Context>;
  property?: Resolver<Scalars["String"], ParentType, Context>;
  course?: Resolver<Scalars["String"], ParentType, Context>;
  title?: Resolver<Scalars["String"], ParentType, Context>;
  status?: Resolver<Scalars["String"], ParentType, Context>;
  link?: Resolver<Scalars["String"], ParentType, Context>;
  detail?: Resolver<Maybe<MaterialDetail>, ParentType, Context>;
};

export type MaterialDetailResolvers<
  Context = any,
  ParentType = MaterialDetail
> = {
  sender?: Resolver<Scalars["String"], ParentType, Context>;
  date?: Resolver<Scalars["String"], ParentType, Context>;
  property?: Resolver<Scalars["String"], ParentType, Context>;
  course?: Resolver<Scalars["String"], ParentType, Context>;
  title?: Resolver<Scalars["String"], ParentType, Context>;
  content?: Resolver<Scalars["String"], ParentType, Context>;
  link?: Resolver<Scalars["String"], ParentType, Context>;
  fileLink?: Resolver<Scalars["String"], ParentType, Context>;
};

export type QueryResolvers<Context = any, ParentType = Query> = {
  allInfo?: Resolver<Array<Maybe<Info>>, ParentType, Context>;
  allCourse?: Resolver<Array<Maybe<Course>>, ParentType, Context>;
};

export type TaskResolvers<Context = any, ParentType = Task> = {
  date?: Resolver<Scalars["String"], ParentType, Context>;
  course?: Resolver<Scalars["String"], ParentType, Context>;
  title?: Resolver<Scalars["String"], ParentType, Context>;
  deadline?: Resolver<Scalars["String"], ParentType, Context>;
  status?: Resolver<Scalars["String"], ParentType, Context>;
};

export interface UploadScalarConfig
  extends GraphQLScalarTypeConfig<Scalars["Upload"], any> {
  name: "Upload";
}

export type Resolvers<Context = any> = {
  Course?: CourseResolvers<Context>;
  FeedbackSheet?: FeedbackSheetResolvers<Context>;
  Info?: InfoResolvers<Context>;
  InfoDetail?: InfoDetailResolvers<Context>;
  Material?: MaterialResolvers<Context>;
  MaterialDetail?: MaterialDetailResolvers<Context>;
  Query?: QueryResolvers<Context>;
  Task?: TaskResolvers<Context>;
  Upload?: GraphQLScalarType;
};

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<Context = any> = Resolvers<Context>;
export type DirectiveResolvers<Context = any> = {
  cacheControl?: CacheControlDirectiveResolver<any, any, Context>;
};

/**
 * @deprecated
 * Use "DirectiveResolvers" root object instead. If you wish to get "IDirectiveResolvers", add "typesPrefix: I" to your config.
 */
export type IDirectiveResolvers<Context = any> = DirectiveResolvers<Context>;
