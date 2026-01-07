import fs from 'fs';
import path from 'path';
import { InfoPage } from '@/components/InfoPage';

export default async function PrivacyPage() {
    const filePath = path.join(process.cwd(), 'src/content/spot/privacy.md');
    const content = fs.readFileSync(filePath, 'utf8');

    return (
        <InfoPage
            title="Privacidad"
            subtitle="Tu ubicación y datos, bajo tu control."
            content={content}
            backHref="/spot"
        />
    );
}
