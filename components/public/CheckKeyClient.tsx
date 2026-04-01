"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useKeyChecker } from "@/hooks/use-key-checker";
import { Loader2, KeyRound, Copy, Check, Shield, Zap, Clock, Hash, RefreshCw, Mail } from "lucide-react";

interface ParsedKeyResult {
  key: string;
  description: string;
  subType: string;
  errorCode: string;
  remaining: string;
  time: string;
}

export function CheckKeyClient() {
  const [activeTab, setActiveTab] = useState("pidms");
  const [keys, setKeys] = useState("");
  const [iid, setIid] = useState("");
  const [redeemKeys, setRedeemKeys] = useState("");
  const [accounts, setAccounts] = useState("");
  const [justGetDescription, setJustGetDescription] = useState(false);
  const [copied, setCopied] = useState(false);
  const { loading, result, setResult, checkKey, getCid, redeemMs, checkOffice365 } = useKeyChecker();

  const handleCheck = () => {
    switch (activeTab) {
      case "pidms":
        if (!keys.trim()) return;
        checkKey(keys.trim(), justGetDescription);
        break;
      case "cid":
        if (!iid.trim()) return;
        getCid(iid.trim());
        break;
      case "cidredeem":
        if (!redeemKeys.trim()) return;
        redeemMs(redeemKeys.trim());
        break;
      case "office365":
        if (!accounts.trim()) return;
        checkOffice365(accounts.trim());
        break;
    }
  };

  const parseResults = (data: any): ParsedKeyResult[] => {
    if (!data) return [];
    const items = Array.isArray(data) ? data : [data];
    return items
      .filter((item: any) => item && typeof item === "object" && !item.raw)
      .map((item: any) => ({
        key: item.keyname_with_dash || item.keyname || item.key || item.iid || "",
        description: item.prd || item.description || item.cid || item.result || "",
        subType: item.sub || item.sub_type || "",
        errorCode: item.errorcode || item.error_code || "",
        remaining: String(item.remaining ?? item.act_count_remain ?? item.actremaincount ?? item.ActCountRemain ?? item.remaining_count ?? ""),
        time: item.datetime_checked_done || item.time || "",
      }));
  };

  const handleCopy = () => {
    const parsed = parseResults(result);
    let text: string;
    if (parsed.length > 0) {
      text = parsed.map((r) =>
        `Key: ${r.key}\nDescription: ${r.description}\nSub type: ${r.subType}\nError code: ${r.errorCode}\nRemaining: ${r.remaining}\nTime: ${r.time}`
      ).join("\n\n");
    } else if (result) {
      text = typeof result === "string" ? result : (result?.raw || JSON.stringify(result, null, 2));
    } else {
      return;
    }
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const parsed = result ? parseResults(result) : [];
  const hasParsed = parsed.length > 0;

  const isDisabled = loading || (() => {
    switch (activeTab) {
      case "pidms": return !keys.trim();
      case "cid": return !iid.trim();
      case "cidredeem": return !redeemKeys.trim();
      case "office365": return !accounts.trim();
      default: return true;
    }
  })();

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setResult(null);
  };

  const tabConfig = [
    { value: "pidms", label: "PIDMS", icon: KeyRound, description: "Check product keys — activation status, remaining count & details" },
    { value: "cid", label: "Get CID", icon: Hash, description: "Get Confirmation ID (CID) from Installation ID (IID) for offline activation" },
    { value: "cidredeem", label: "Redeem CID", icon: RefreshCw, description: "Redeem and validate product keys via CID redemption service" },
    { value: "office365", label: "Office 365", icon: Mail, description: "Check Microsoft Office 365 account status and subscription details" },
  ];

  const currentTab = tabConfig.find(t => t.value === activeTab)!;

  return (
    <div className="pb-24 pt-8">
      {/* Trust badges */}
      <section className="mb-12 border-y border-border/50 bg-muted/20 py-6">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-wrap items-center justify-center gap-8 sm:gap-12">
          {[
            { icon: Shield, label: "Secure & Encrypted" },
            { icon: Zap, label: "Instant Results" },
            { icon: Clock, label: "100% Free Tool" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2.5 text-sm font-semibold uppercase tracking-widest text-muted-foreground group">
              <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground text-primary transition-colors">
                <Icon className="w-4 h-4" />
              </div>
              {label}
            </div>
          ))}
        </div>
      </section>

      {/* Key checker interface */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Tabs value={activeTab} onValueChange={handleTabChange}>
            {/* Custom Tabs List */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6">
              {tabConfig.map((tab) => (
                <button
                  key={tab.value}
                  onClick={() => handleTabChange(tab.value)}
                  className={`flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl text-sm font-bold transition-all duration-300 ${
                    activeTab === tab.value
                      ? "bg-primary text-primary-foreground shadow-glow shadow-primary/20 scale-[1.02]"
                      : "bg-card border border-border/50 text-muted-foreground hover:bg-muted/60 hover:text-foreground"
                  }`}
                >
                  <tab.icon className={`w-4 h-4 ${activeTab === tab.value ? "text-primary-foreground" : "text-primary"}`} />
                  <span className="hidden sm:inline">{tab.label}</span>
                  <span className="sm:hidden">{tab.label.split(' ')[0]}</span>
                </button>
              ))}
            </div>

            <Card className="border-border/50 shadow-2xl bg-card/60 backdrop-blur-xl overflow-hidden group hover:border-primary/20 transition-colors">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0 opacity-50" />
              
              <CardHeader className="bg-muted/10 border-b border-border/50 pb-6">
                <CardTitle className="flex items-center gap-3 text-2xl font-display">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary shadow-glow shadow-primary/10">
                    <currentTab.icon className="w-5 h-5" />
                  </div>
                  {currentTab.label}
                </CardTitle>
                <CardDescription className="text-base pt-2">{currentTab.description}</CardDescription>
              </CardHeader>
              <CardContent className="p-6 md:p-8 space-y-6">
                {/* PIDMS Tab */}
                <TabsContent value="pidms" className="mt-0 space-y-4 focus-visible:ring-0 focus-visible:outline-none">
                  <Textarea
                    placeholder={"Enter product key(s), one per line...\ne.g. XXXXX-XXXXX-XXXXX-XXXXX-XXXXX"}
                    value={keys}
                    onChange={(e) => setKeys(e.target.value)}
                    rows={6}
                    className="font-mono text-sm bg-background border-border/50 focus:border-primary focus:ring-1 focus:ring-primary shadow-inner resize-y h-32 md:h-48"
                  />
                  <div className="flex items-center space-x-3 bg-muted/30 p-3 rounded-lg border border-border/50 w-max cursor-pointer hover:bg-muted/50 transition-colors" onClick={() => setJustGetDescription(!justGetDescription)}>
                    <Checkbox
                      id="justDescPublic"
                      checked={justGetDescription}
                      onCheckedChange={(v) => setJustGetDescription(!!v)}
                      className="data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground border-primary/50"
                    />
                    <Label htmlFor="justDescPublic" className="text-sm font-semibold cursor-pointer select-none">
                      Just Get Description (Skip count check)
                    </Label>
                  </div>
                </TabsContent>

                {/* Get CID Tab */}
                <TabsContent value="cid" className="mt-0 space-y-4 focus-visible:ring-0 focus-visible:outline-none">
                  <Textarea
                    placeholder={"Enter Installation ID (IID)...\ne.g. 002666-077894-464834-..."}
                    value={iid}
                    onChange={(e) => setIid(e.target.value)}
                    rows={6}
                    className="font-mono text-sm bg-background border-border/50 focus:border-primary focus:ring-1 focus:ring-primary shadow-inner resize-y h-32 md:h-48"
                  />
                </TabsContent>

                {/* CID Redeem Tab */}
                <TabsContent value="cidredeem" className="mt-0 space-y-4 focus-visible:ring-0 focus-visible:outline-none">
                  <Textarea
                    placeholder={"Enter product key(s) for redemption, one per line...\ne.g. XXXXX-XXXXX-XXXXX-XXXXX-XXXXX"}
                    value={redeemKeys}
                    onChange={(e) => setRedeemKeys(e.target.value)}
                    rows={6}
                    className="font-mono text-sm bg-background border-border/50 focus:border-primary focus:ring-1 focus:ring-primary shadow-inner resize-y h-32 md:h-48"
                  />
                </TabsContent>

                {/* Office 365 Tab */}
                <TabsContent value="office365" className="mt-0 space-y-4 focus-visible:ring-0 focus-visible:outline-none">
                  <Textarea
                    placeholder={"Enter Office 365 account(s), one per line...\ne.g. user@domain.com:password"}
                    value={accounts}
                    onChange={(e) => setAccounts(e.target.value)}
                    rows={6}
                    className="font-mono text-sm bg-background border-border/50 focus:border-primary focus:ring-1 focus:ring-primary shadow-inner resize-y h-32 md:h-48"
                  />
                </TabsContent>

                {/* Action Frame */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <Button 
                    onClick={handleCheck} 
                    disabled={isDisabled} 
                    size="lg" 
                    className="w-full sm:w-auto px-8 h-12 font-bold uppercase tracking-widest text-xs gap-2 shadow-glow shadow-primary/20"
                  >
                    {loading ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <Zap className="w-4 h-4" />
                    )}
                    {activeTab === "pidms" ? "Check Key" : activeTab === "cid" ? "Extract CID" : activeTab === "cidredeem" ? "Redeem Key" : "Verify Account"}
                  </Button>
                  
                  {loading && (
                    <div className="flex items-center gap-2 text-muted-foreground text-sm font-medium animate-pulse">
                      <Loader2 className="w-4 h-4 animate-spin text-primary" />
                      Communicating with activation servers...
                    </div>
                  )}
                </div>

                {/* Results Section */}
                <AnimatePresence>
                  {result && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-8 pt-8 border-t border-border/50 space-y-4"
                    >
                      <div className="flex items-center justify-between">
                        <Label className="text-lg font-bold text-foreground font-display flex items-center gap-2">
                          <Check className="w-5 h-5 text-success" /> Results
                        </Label>
                        <Button variant="outline" size="sm" onClick={handleCopy} className={`gap-2 h-9 text-xs font-bold uppercase tracking-widest transition-all ${copied ? "border-success text-success bg-success/10" : ""}`}>
                          {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                          {copied ? "Copied" : "Copy Output"}
                        </Button>
                      </div>

                      {hasParsed ? (
                        <div className="space-y-4">
                          {parsed.map((item, idx) => (
                            <motion.div 
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: idx * 0.1 }}
                              key={idx} 
                              className="bg-background rounded-xl border border-border/50 p-5 space-y-3 font-mono text-sm shadow-sm relative overflow-hidden"
                            >
                              <div className="absolute top-0 right-0 w-12 h-12 bg-primary/10 rounded-bl-[100%] pointer-events-none" />
                              
                              <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 pb-2 border-b border-border/30">
                                <span className="text-muted-foreground w-24 shrink-0 font-medium">Key Target:</span> 
                                <span className="text-foreground font-bold tracking-wider">{item.key}</span>
                              </div>
                              <div className="flex flex-col sm:flex-row sm:items-baseline gap-2">
                                <span className="text-muted-foreground w-24 shrink-0 font-medium">Product:</span> 
                                <span className="text-primary font-bold">{item.description}</span>
                              </div>
                              {item.subType && (
                                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2">
                                  <span className="text-muted-foreground w-24 shrink-0 font-medium">Sub-Type:</span> 
                                  <span className="text-foreground">{item.subType}</span>
                                </div>
                              )}
                              {item.errorCode && (
                                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2">
                                  <span className="text-muted-foreground w-24 shrink-0 font-medium">Status/Error:</span> 
                                  <span className="text-foreground">{item.errorCode}</span>
                                </div>
                              )}
                              <div className="flex flex-col sm:flex-row sm:items-center gap-2 pt-2">
                                <span className="text-muted-foreground w-24 shrink-0 font-medium">Stock/Uses:</span>
                                <div className="inline-flex items-center gap-2 bg-success/10 rounded-md px-3 py-1 border border-success/20">
                                  <span className="text-success font-bold text-lg leading-none">{item.remaining || "—"}</span>
                                  <span className="text-success/70 text-xs font-semibold uppercase">Remaining</span>
                                </div>
                              </div>
                              {item.time && (
                                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 pt-2 border-t border-border/30 text-xs mt-2 text-muted-foreground/70">
                                  <span className="font-medium">Timestamp:</span> 
                                  <span>{item.time}</span>
                                </div>
                              )}
                            </motion.div>
                          ))}
                        </div>
                      ) : (
                        <pre className="bg-background p-5 rounded-xl text-xs sm:text-sm font-mono whitespace-pre-wrap overflow-auto max-h-[500px] border border-border/50 shadow-inner">
                          {typeof result === "string" ? result : (result?.raw || JSON.stringify(result, null, 2))}
                        </pre>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
                
              </CardContent>
            </Card>
          </Tabs>
        </motion.div>
      </section>
    </div>
  );
}
