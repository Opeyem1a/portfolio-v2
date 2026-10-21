import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';

const alt = 'Opey Adeyemi';
const size = { width: 1200, height: 630 };
const contentType = 'image/png';

/**
 * The homepage's header and smile block, frozen. Rendered by Satori at build
 * time, so it takes inline styles rather than Tailwind classes.
 */
async function OpengraphImage() {
    const archivo = await readFile(
        join(process.cwd(), 'src/assets/Archivo-SemiBold.ttf')
    );

    return new ImageResponse(
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                height: '100%',
                padding: 56,
                backgroundColor: '#0b0b0a',
                color: '#ededea',
                fontFamily: 'Archivo',
            }}
        >
            <div
                style={{
                    fontSize: 34,
                    fontWeight: 600,
                    letterSpacing: -0.8,
                    marginBottom: 36,
                }}
            >
                Opey Adeyemi
            </div>
            <div
                style={{
                    display: 'flex',
                    alignItems: 'flex-end',
                    flexGrow: 1,
                    padding: 80,
                    borderRadius: 36,
                    backgroundColor: '#ffc42d',
                    backgroundImage:
                        'radial-gradient(circle at 26% 52%, #ffe38a 0%, #ffd866 22%, #ffc42d 62%)',
                }}
            >
                <svg
                    width="160"
                    height="160"
                    viewBox="0 0 1000 1000"
                    fill="none"
                >
                    <path
                        d="M1000 500C1000 776 776 1000 500 1000C224 1000 0 776 0 500L160 500C160 688 312 840 500 840C688 840 840 688 840 500H1000Z"
                        fill="#111111"
                    />
                    <path
                        d="M823.843 348.421L682.422 207L541.001 348.421"
                        stroke="#111111"
                        strokeWidth="135"
                    />
                    <circle cx="264" cy="274" r="135" fill="#111111" />
                </svg>
            </div>
        </div>,
        {
            ...size,
            fonts: [{ name: 'Archivo', data: archivo, weight: 600 }],
        }
    );
}

export { alt, size, contentType };
export default OpengraphImage;
