declare module "firebase/app" {
  export type FirebaseApp = unknown;

  export function initializeApp(config: Record<string, string>): FirebaseApp;
  export function getApp(): FirebaseApp;
  export function getApps(): FirebaseApp[];
}

declare module "firebase/auth" {
  export type Auth = unknown;
  export type UserCredential = unknown;

  export function getAuth(app: unknown): Auth;
  export function createUserWithEmailAndPassword(
    auth: Auth,
    email: string,
    password: string
  ): Promise<UserCredential>;
  export function signInWithEmailAndPassword(
    auth: Auth,
    email: string,
    password: string
  ): Promise<UserCredential>;
  export function signInAnonymously(auth: Auth): Promise<UserCredential>;
  export function signOut(auth: Auth): Promise<void>;
  export function sendPasswordResetEmail(auth: Auth, email: string): Promise<void>;
}

declare module "firebase/firestore" {
  export type Firestore = unknown;
  export type DocumentReference = unknown;
  export type CollectionReference = unknown;
  export type QueryConstraint = unknown;
  export type Query = unknown;

  export type DocumentSnapshot = {
    exists(): boolean;
    data(): Record<string, unknown>;
  };

  export type QueryDocumentSnapshot = {
    id: string;
    data(): Record<string, unknown>;
  };

  export type QuerySnapshot = {
    docs: QueryDocumentSnapshot[];
  };

  export function getFirestore(app: unknown): Firestore;
  export function collection(db: Firestore, ...pathSegments: string[]): CollectionReference;
  export function doc(db: Firestore, ...pathSegments: string[]): DocumentReference;
  export function getDoc(reference: DocumentReference): Promise<DocumentSnapshot>;
  export function getDocs(query: Query | CollectionReference): Promise<QuerySnapshot>;
  export function addDoc(reference: CollectionReference, data: unknown): Promise<DocumentReference>;
  export function setDoc(
    reference: DocumentReference,
    data: unknown,
    options?: { merge?: boolean }
  ): Promise<void>;
  export function query(
    reference: CollectionReference,
    ...queryConstraints: QueryConstraint[]
  ): Query;
  export function where(fieldPath: string, opStr: string, value: unknown): QueryConstraint;
  export function orderBy(fieldPath: string, directionStr?: "asc" | "desc"): QueryConstraint;
}
