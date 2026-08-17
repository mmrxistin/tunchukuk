// Bismillahirahmanirahim
// Elhamdulillahirabbilalemin
// Es-selatu ve Es-selamu ala Resulina Muhammedin 
// Süphanallah, Elhamdulillah, Allahu Ekber
// La ilahe illallah
import { Prisma } from "@prisma/client";

export function getUserDataSelect(loggedInUserId: string) {
  return {
    id: true,
    username: true,
    displayName: true,
    avatarUrl: true,
    bio: true,
    createdAt: true,
  } satisfies Prisma.UserSelect;
}

export type UserData = Prisma.UserGetPayload<{
  select: ReturnType<typeof getUserDataSelect>;
}>;

export function getYekInclude(loggedInUserId: string) {
  return {
    user: {
      select: getUserDataSelect(loggedInUserId),
    },
    attachments: true,
  } as const;
}

export type YekData = Prisma.YekGetPayload<{
  include: ReturnType<typeof getYekInclude>;
}>;

export interface YekPage {
  posts: any;
  items: YekData[];
  nextCursor: string | null;
}
export function getyekemInclude(loggedInUserId: string) {
  return {
    user: {
      select: getUserDataSelect(loggedInUserId),
    },
    attachments: true,
  } as const;
}

export type yekemData = Prisma.yekemGetPayload<{
  include: ReturnType<typeof getyekemInclude>;
}>;

export interface yekemPage {
  items: yekemData[];
  nextCursor: string | null;
}


export function getTefsirInclude(loggedInUserId: string) {
  return {
    user: {
      select: getUserDataSelect(loggedInUserId),
    },
    attachments: true,
  } as const;
}

export type TefsirData = Prisma.TefsirGetPayload<{
  include: ReturnType<typeof getTefsirInclude>;
}>;

export interface TefsirPage {
  items: TefsirData[];
  nextCursor: string | null;
}
// Generic include for content models (Yek, Duyem, Dirok, etc.)
export function getCarDataInclude(loggedInUserId: string) {
  return {
    user: {
      select: getUserDataSelect(loggedInUserId),
    },
    attachments: true,
  } as const;
}

// Generic content type used for lists/pages returned by your APIs.
// Each content model (Yek, Duyem, Dirok, ...) will conform to this shape at runtime.

export type CarData = Prisma.CarGetPayload<{
  include: ReturnType<typeof getCarDataInclude>;
}>;

export interface CarPage {
  posts: CarData[];
  nextCursor: string | null;
}

// ------------------------
// Per-model include + type examples
// ------------------------



// du example (same pattern)
export function getduInclude(loggedInUserId: string) {
  return {
    user: {
      select: getUserDataSelect(loggedInUserId),
    },
    attachments: true,
  } as const;
}

export type duData = Prisma.duGetPayload<{
  include: ReturnType<typeof getduInclude>;
}>;

export interface duPage {
  items: duData[];
  nextCursor: string | null;
}
export function getseInclude(loggedInUserId: string) {
  return {
    user: {
      select: getUserDataSelect(loggedInUserId),
    },
    attachments: true,
  } as const;
}

export type seData = Prisma.seGetPayload<{
  include: ReturnType<typeof getseInclude>;
}>;

export interface sePage {
  items: seData[];
  nextCursor: string | null;
}

export function getPencInclude(loggedInUserId: string) {
  return {
    user: {
      select: getUserDataSelect(loggedInUserId),
    },
    attachments: true,
  } as const;
}

export type PencData = Prisma.PencGetPayload<{
  include: ReturnType<typeof getPencInclude>;
}>;

export interface PencPage {
  items: PencData[];
  nextCursor: string | null;
}
export function getXaneInclude(loggedInUserId: string) {
  return {
    user: {
      select: getUserDataSelect(loggedInUserId),
    },
    attachments: true,
  } as const;
}

export type XaneData = Prisma.XaneGetPayload<{
  include: ReturnType<typeof getXaneInclude>;
}>;

export interface XanePage {
  items: XaneData[];
  nextCursor: string | null;
}

// Dirok (history) example
export function getDirokInclude(loggedInUserId: string) {
  return {
    user: {
      select: getUserDataSelect(loggedInUserId),
    },
    attachments: true,
  } as const;
}

export type DirokData = Prisma.DirokGetPayload<{
  include: ReturnType<typeof getDirokInclude>;
}>;

export interface DirokPage {
  items: DirokData[];
  nextCursor: string | null;
}


// Dirok (history) example
export function getRojnameInclude(loggedInUserId: string) {
  return {
    user: {
      select: getUserDataSelect(loggedInUserId),
    },
    attachments: true,
  } as const;
}

export type RojnameData = Prisma.RojnameGetPayload<{
  include: ReturnType<typeof getRojnameInclude>;
}>;

export interface RojnamePage {
  items: RojnameData[];
  nextCursor: string | null;
}


// Dirok (history) example
export function getYekemInclude(loggedInUserId: string) {
  return {
    user: {
      select: getUserDataSelect(loggedInUserId),
    },
    attachments: true,
  } as const;
}

export type YekemData = Prisma.YekemGetPayload<{
  include: ReturnType<typeof getYekemInclude>;
}>;

export interface YekemPage {
  items: YekemData[];
  nextCursor: string | null;
}




// Dirok (history) example
export function getDuyemInclude(loggedInUserId: string) {
  return {
    user: {
      select: getUserDataSelect(loggedInUserId),
    },
    attachments: true,
  } as const;
}

export type DuyemData = Prisma.DuyemGetPayload<{
  include: ReturnType<typeof getDuyemInclude>;
}>;

export interface DuyemPage {
  items: DuyemData[];
  nextCursor: string | null;
}
export interface BookmarkInfo {
  isBookmarkedByUser: boolean;
}

export interface Attachment {
  file: File;
  mediaId?: string;
  url?: string;
  type?: string;
  isUploading: boolean;
}
