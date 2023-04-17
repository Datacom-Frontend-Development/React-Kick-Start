This guide explains how to use a React Kick Start with Microsoft Identity

# Getting started

Clone the project locally from GitHub

```bash
npx degit vercel/turborepo/examples/design-system YOUR-PROJECT-NAME
cd YOUR-PROJECT-NAME
npm install
git init . && git add . && git commit -m "Init
```

# Configure

Before running the project, first configure the environment variables for authentication with Azure.

1. Setup [Azure AD](/azure/active-directory/fundamentals/active-directory-access-create-new-tenant) or [Azure AD B2C](/azure/active-directory-b2c/tutorial-create-tenant) using the steps provided on Microsoft documentation
2. Using [Microsoft Entra](https://entra.microsoft.com/#home) register a SPA web application
3. Once the Azure setup is complete create a new `.env` file at the **root** of your project folder and populate the following values

```bash
VITE_AZURE_AD_CLIENT_ID="CLIENT ID FROM AZURE"
VITE_AZURE_AD_REDIRECT_URL="http://localhost:PORT/app"
VITE_AZURE_AD_AUTHORITY="https://login.microsoftonline.com/common/"
```

> [!NOTE]
> Note the Azure Authority may vary depending on how the tenant is setup.
