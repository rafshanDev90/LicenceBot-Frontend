import { useState } from "react";
// import { supabase } from "@/integrations/supabase/client"; // To be implemented

interface KeyCheckerResult {
  success: boolean;
  data: any;
  error?: string;
}

export function useKeyChecker() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const callApi = async (body: Record<string, any>) => {
    setLoading(true);
    setResult(null);
    try {
      // MOCK: Delay to simulate network request
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // MOCK: Generate fake results based on the action
      let mockData: any = [];

      switch (body.action) {
        case "check_key":
          mockData = [
            {
              key: body.keys.split('\n')[0] || "XXXXX-XXXXX-XXXXX",
              description: "Windows 11 Professional Retail",
              subType: "Retail",
              errorCode: "0xC004C060",
              remaining: "0",
              time: new Date().toISOString().replace('T', ' ').substring(0, 19),
            }
          ];
          break;
        case "get_cid":
          mockData = [
            {
              iid: body.iid || "002666-077894-464834",
              cid: "123456-789012-345678-901234-567890",
              errorcode: "Success",
              time: new Date().toISOString().replace('T', ' ').substring(0, 19),
            }
          ];
          break;
        case "redeem_ms":
          mockData = [
            {
              key: body.keys.split('\n')[0] || "XXXXX-XXXXX-XXXXX",
              result: "Redeemed successfully to account",
              time: new Date().toISOString().replace('T', ' ').substring(0, 19),
            }
          ];
          break;
        case "office365":
          mockData = [
            {
              key: body.accounts.split('\n')[0] || "user@domain.com",
              description: "Office 365 E5 Developer",
              subType: "Subscription active",
              remaining: "24/25 licenses used",
              time: new Date().toISOString().replace('T', ' ').substring(0, 19),
            }
          ];
          break;
      }

      setResult(mockData);
      return mockData;
      
      /* Real Implementation:
      const { data, error } = await supabase.functions.invoke("key-checker", {
        body,
      });

      if (error) throw error;
      if (data?.error) throw new Error(data.error);

      setResult(data?.data);
      return data?.data;
      */
    } catch (err: any) {
      console.error(err);
      return null;
    } finally {
      setLoading(false);
    }
  };

  const checkKey = (keys: string, justGetDescription = false) =>
    callApi({ action: "check_key", keys, justGetDescription });

  const getCid = (iid: string) => callApi({ action: "get_cid", iid });

  const redeemMs = (keys: string) => callApi({ action: "redeem_ms", keys });

  const checkOffice365 = (accounts: string) =>
    callApi({ action: "office365", accounts });

  return {
    loading,
    result,
    setResult,
    checkKey,
    getCid,
    redeemMs,
    checkOffice365,
  };
}
