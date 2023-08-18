import React, { useState } from "react";
import { JSONInput, Flex, Textarea, Box, Button } from "@strapi/design-system";
import { saveToken } from "./api";

function SettingsPage() {
  const [firebaseJsonValue, setFirebaseJsonValue] = useState("");
  const [apiToken, setApiToken] = useState("");
  const [loading, setLoading] = useState(false);
  const handleFirebaseJsonSubmit = async () => {
    console.log("submit", firebaseJsonValue);
  };

  const handleTokenSubmit = async () => {
    await saveToken(apiToken);
  };
  return (
    <Flex
      style={{ padding: 32 }}
      direction="column"
      alignItems="flex-start"
      gap={4}
    >
      <Box style={{ width: "100%" }}>
        <JSONInput
          label="Firebase-json-configuration"
          value={firebaseJsonValue}
          height={500}
          style={{ height: 400 }}
          onChange={setFirebaseJsonValue}
        />
        <Flex
          style={{
            marginTop: 16,
            width: "100%",
            padding: 16,
          }}
          justifyContent="flex-end"
        >
          <Button loading={loading} size="L" onClick={handleFirebaseJsonSubmit}>
            Submit
          </Button>
        </Flex>
      </Box>
      <Box style={{ width: "100%", height: 200 }}>
        <Textarea
          id="dashboard_api_key"
          name="dashboard_api_key"
          label="Dashboard api key"
          style={{ height: 200 }}
          value={apiToken}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          onChange={(e: any) => setApiToken(e.target.value)}
        ></Textarea>
        <Flex
          style={{ marginTop: 16, width: "100%", padding: 16 }}
          justifyContent="flex-end"
        >
          <Button loading={loading} size="L" onClick={handleTokenSubmit}>
            Submit
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
}

export default SettingsPage;
