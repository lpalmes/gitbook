import { ContentPointer, getPublishedContentByUrl } from './api';

export async function getContentPointerByPathname(pathname: string) {
    const content = await getPublishedContentByUrl(pathname, undefined);

    if ('error' in content) {
        throw new Error(content.error.message);
    }

    if ('redirect' in content) {
        // TODO: handle redirect
        console.log(content);
        throw new Error('handle redirect');
    }

    return {
        spaceId: content.space,
        revisionId: undefined,
        changeRequestId: undefined,
    } as ContentPointer;
}

function stripURLSearch(url: URL): URL {
    const stripped = new URL(url.toString());
    stripped.search = '';
    return stripped;
}
