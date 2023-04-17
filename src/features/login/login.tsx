import { EventType, IPublicClientApplication } from "@azure/msal-browser";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "@infrastructure/auth/authConfig";
import {
  Anchor,
  Box,
  Button,
  Checkbox,
  createStyles,
  Group,
  MantineSize,
  PasswordInput,
  TextInput,
  Title,
} from "@mantine/core";
import { IconAt, IconLock } from "@tabler/icons";
import { useNavigate } from "react-router-dom";

const useStyles = createStyles((theme) => ({
  root: {
    display: "flex",
    width: "100%",
    alignItems: "stretch",
  },
  column: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    flexGrow: 1,
    maxWidth: "50%",
    flexBasis: 0,
  },
  leftColumn: {
    background: theme.colors[theme.primaryColor][6],
    alignItems: "stretch",
  },
  container: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing.xl,
    maxWidth: 390,
    margin: "0 auto",
  },
}));

// const handleLogin = (instance: IPublicClientApplication) => {
//   // instance.loginRedirect(loginRequest).catch((e) => console.log("Error: ", e));

//   // Account selection logic is app dependent. Adjust as needed for different use cases.
//   // Set active acccount on page load
//   // const accounts = instance.getAllAccounts();
//   // if (accounts.length > 0) {
//   //   instance.setActiveAccount(accounts[0]);
//   // }

//   // instance.addEventCallback((event: any) => {
//   //   // set active account after redirect
//   //   if (event.eventType === EventType.LOGIN_SUCCESS && event.payload.account) {
//   //     const account = event.payload.account;
//   //     instance.setActiveAccount(account);
//   //   }
//   // });

//   // console.log("get active account", instance.getActiveAccount());

//   // handle auth redired/do all initial setup for msal
//   instance
//     .handleRedirectPromise()
//     .then((authResult) => {
//       console.log("authResult", authResult);
//       if (!authResult) {
//         // Check if user signed in
//         const account = instance.getAllAccounts();
//         console.log("accounts", account);
//         if (account.length === 0) {
//           // redirect anonymous user to login page
//           instance.loginRedirect();
//         }
//       }
//     })
//     .catch((err) => {
//       // TODO: Handle errors
//       console.log("=========");
//       console.log(err);
//     });
// };

export const Login = () => {
  let navigate = useNavigate();
  const { classes, cx } = useStyles();
  const inputSize: MantineSize = "md";

  const { instance } = useMsal();

  return (
    <Box className={classes.root}>
      <Box className={cx(classes.column, classes.leftColumn)}></Box>
      <Box className={cx(classes.column)}>
        <Box className={cx(classes.container)}>
          <Title order={1}>Hello!</Title>
          <TextInput
            label="Your email"
            type="email"
            placeholder="Your email"
            size={inputSize}
            icon={<IconAt size={16} />}
          />
          <PasswordInput
            placeholder="Password"
            label="Password"
            size={inputSize}
            icon={<IconLock size={16} />}
          />
          <Group position="apart">
            <Anchor href="https://mantine.dev/">Forgot password</Anchor>
          </Group>
          <Group grow>
            <Checkbox size={inputSize} label="Remember me" />
            <Button
              size={inputSize}
              onClick={() => {
                navigate("/app", { replace: true });
                // handleLogin(instance);
              }}
            >
              Sign In
            </Button>
          </Group>
        </Box>
      </Box>
    </Box>
  );
};
