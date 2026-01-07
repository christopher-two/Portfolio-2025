import fs from 'fs';
import path from 'path';
import { InfoPage } from '@/components/InfoPage';

export default async function VersionsPage() {
    const filePath = path.join(process.cwd(), 'src/content/spot/versions.md');
    const content = fs.readFileSync(filePath, 'utf8');

    return (
        <InfoPage
            title="Versiones"
            subtitle="Evolución de las cápsulas del tiempo."
            content={content}
            backHref="/spot"
        />
    );
}
