export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Long: any;
};

export type AggregateBuddy = {
  __typename?: 'AggregateBuddy';
  count: Scalars['Int'];
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long'];
};

export type Buddy = Node & {
  __typename?: 'Buddy';
  id: Scalars['ID'];
  image: Scalars['String'];
  name: Scalars['String'];
};

/** A connection to a list of items. */
export type BuddyConnection = {
  __typename?: 'BuddyConnection';
  aggregate: AggregateBuddy;
  /** A list of edges. */
  edges: Array<Maybe<BuddyEdge>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type BuddyCreateInput = {
  id?: InputMaybe<Scalars['ID']>;
  image: Scalars['String'];
  name: Scalars['String'];
};

/** An edge in a connection. */
export type BuddyEdge = {
  __typename?: 'BuddyEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Buddy;
};

export enum BuddyOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ImageAsc = 'image_ASC',
  ImageDesc = 'image_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
}

export type BuddyPreviousValues = {
  __typename?: 'BuddyPreviousValues';
  id: Scalars['ID'];
  image: Scalars['String'];
  name: Scalars['String'];
};

export type BuddySubscriptionPayload = {
  __typename?: 'BuddySubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<Buddy>;
  previousValues?: Maybe<BuddyPreviousValues>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
};

export type BuddySubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<BuddySubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<BuddySubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<BuddySubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: InputMaybe<Array<MutationType>>;
  node?: InputMaybe<BuddyWhereInput>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: InputMaybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: InputMaybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: InputMaybe<Array<Scalars['String']>>;
};

export type BuddyUpdateInput = {
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type BuddyUpdateManyMutationInput = {
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type BuddyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<BuddyWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<BuddyWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<BuddyWhereInput>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: InputMaybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: InputMaybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: InputMaybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  image_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  image_ends_with?: InputMaybe<Scalars['String']>;
  /** All values greater than the given value. */
  image_gt?: InputMaybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  image_gte?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  image_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  image_lt?: InputMaybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  image_lte?: InputMaybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  image_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  image_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string. */
  image_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  image_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  image_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  image_starts_with?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values greater than the given value. */
  name_gt?: InputMaybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  name_gte?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  name_lt?: InputMaybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  name_lte?: InputMaybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string. */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
};

export type BuddyWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createBuddy: Buddy;
  deleteBuddy?: Maybe<Buddy>;
  deleteManyBuddies: BatchPayload;
  updateBuddy?: Maybe<Buddy>;
  updateManyBuddies: BatchPayload;
  upsertBuddy: Buddy;
};

export type MutationCreateBuddyArgs = {
  data: BuddyCreateInput;
};

export type MutationDeleteBuddyArgs = {
  where: BuddyWhereUniqueInput;
};

export type MutationDeleteManyBuddiesArgs = {
  where?: InputMaybe<BuddyWhereInput>;
};

export type MutationUpdateBuddyArgs = {
  data: BuddyUpdateInput;
  where: BuddyWhereUniqueInput;
};

export type MutationUpdateManyBuddiesArgs = {
  data: BuddyUpdateManyMutationInput;
  where?: InputMaybe<BuddyWhereInput>;
};

export type MutationUpsertBuddyArgs = {
  create: BuddyCreateInput;
  update: BuddyUpdateInput;
  where: BuddyWhereUniqueInput;
};

export enum MutationType {
  Created = 'CREATED',
  Deleted = 'DELETED',
  Updated = 'UPDATED',
}

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID'];
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  buddies: Array<Maybe<Buddy>>;
  buddiesConnection: BuddyConnection;
  buddy?: Maybe<Buddy>;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
};

export type QueryBuddiesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BuddyOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BuddyWhereInput>;
};

export type QueryBuddiesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BuddyOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BuddyWhereInput>;
};

export type QueryBuddyArgs = {
  where: BuddyWhereUniqueInput;
};

export type QueryNodeArgs = {
  id: Scalars['ID'];
};

export type Subscription = {
  __typename?: 'Subscription';
  buddy?: Maybe<BuddySubscriptionPayload>;
};

export type SubscriptionBuddyArgs = {
  where?: InputMaybe<BuddySubscriptionWhereInput>;
};
