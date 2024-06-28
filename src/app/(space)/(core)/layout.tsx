import {
    CustomizationBackground,
    CustomizationCorners,
    CustomizationHeaderPreset,
    CustomizationSettings,
    SiteCustomizationSettings,
} from '@gitbook/api';
import assertNever from 'assert-never';
import colors from 'tailwindcss/colors';

import { emojiFontClassName } from '@/components/primitives';
import { fonts, ibmPlexMono } from '@/fonts';
import { getSpaceLanguage } from '@/intl/server';
import { getCurrentSiteLayoutData, getSpaceLayoutData } from '@/lib/api';
import { hexToRgb, shadesOfColor } from '@/lib/colors';
import { tcls } from '@/lib/tailwind';

import '../globals.css';
import { getContentPointer, getPathnameParam } from './fetch';

import { languages } from '@/intl/translations';
import { getContentPointerByPathname } from '@/lib/next-api';
import { ClientContexts } from '../ClientContexts';

export default async function RootLayout(props: { children: React.ReactNode }) {
    return (
        <html suppressHydrationWarning lang="en">
            <head></head>
            <body
                className={tcls(
                    emojiFontClassName,
                    `${ibmPlexMono.variable}`,
                    'bg-light',
                    'dark:bg-dark'
                )}
            >
                <ClientContexts language={languages['en']}>{props.children}</ClientContexts>
            </body>
        </html>
    );
}
