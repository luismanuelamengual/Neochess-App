'use client';
import { signIn, signOut, useSession } from "next-auth/react";

export default function Page() {
  const { data: session } = useSession();

  return (
    <div>
      {session?.user ? (
        <>
          {session.user.image && (
            <span
              style={{ backgroundImage: `url('${session.user.image}')` }}
            />
          )}
          <span>
            <small>Signed in as</small>
            <br />
            <strong>{session.user.email ?? session.user.name}</strong>
          </span>
          <button onClick={() => signOut()}>Sign out</button>
        </>
        
      ) : (
        <>
          <span>
            You are not signed in
          </span>
          <button onClick={() => signIn("google")}>Sign in (Google)</button>
          <button onClick={() => signIn("github")}>Sign in (GitHub)</button>
        </>
      )}
    </div>
  )
}
