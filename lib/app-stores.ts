import appStore from 'app-store-scraper';
import googlePlay from 'google-play-scraper';

export type AppInfo = {
  title: string;
  description: string;
  icon: string;
  appStoreUrl?: string;
  playStoreUrl?: string;
};

export async function getAppInfo(appId: { ios?: string; android?: string }): Promise<AppInfo> {
  try {
    const [iosApp, androidApp] = await Promise.all([
      appId.ios ? appStore.app({ id: appId.ios }) : null,
      appId.android ? googlePlay.app({ appId: appId.android }) : null,
    ]);

    // Prefer iOS app info if available, fallback to Android
    const app = iosApp || androidApp;

    if (!app) {
      throw new Error('No app information found');
    }

    return {
      title: app.title,
      description: app.description,
      icon: app.icon || '',
      appStoreUrl: iosApp?.url,
      playStoreUrl: androidApp?.url,
    };
  } catch (error) {
    console.error('Error fetching app info:', error);
    throw error;
  }
}