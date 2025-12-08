import React, { createContext, useContext, useState, useCallback } from 'react';
import { SettingsTabValues } from 'librechat-data-provider';

export const UIContext = createContext({
  openSettings: () => {},
  openBalance: () => {},
  openContact: () => {},
});

export const UIProvider = ({ children }) => {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [activeSettingsTab, setActiveSettingsTab] = useState<SettingsTabValues | null>(null);

  // Call this to open Settings and optionally a specific tab
  const openSettings = useCallback((tab: SettingsTabValues | null = null) => {
    setSettingsOpen(true);
    if (tab) setActiveSettingsTab(tab);
  }, []);

  // Call this to open Settings and focus the Balance tab
  const openBalance = useCallback(() => {
    openSettings(SettingsTabValues.BALANCE);
  }, [openSettings]);

  // Call this to open Settings and focus the Contact tab
  const openContact = useCallback(() => {
    openSettings(SettingsTabValues.CONTACT);
  }, [openSettings]);

  return (
    <UIContext.Provider value={{ openSettings, openBalance, openContact, settingsOpen, setSettingsOpen, activeSettingsTab, setActiveSettingsTab }}>
      {children}
    </UIContext.Provider>
  );
};

export const useUI = () => useContext(UIContext);
