export default oauth.googleEventHandler({

  async onSuccess(event, { user, tokens }) {
    await setUserSession(event, {
      user: {
        tokens: tokens
      },
    });
    console.error("GitHub OAuth error:", event);

    return sendRedirect(event, "/callback");
  },
  // Optional, will return a json error and 401 status code by default
  onError(event, error) {
    console.error("GitHub OAuth error:", error);
    return sendRedirect(event, "/");
  },
});
