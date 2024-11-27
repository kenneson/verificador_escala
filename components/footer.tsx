'use client';

import { Github, Linkedin, } from 'lucide-react';

export function Footer() {
    return (
        <footer className="w-full border-t bg-background">
            <div className="mx-auto max-w-4xl py-6 px-4">
                <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                    <p className="text-sm text-muted-foreground">
                        © 2024 Folguei. Todos os direitos reservados. Desenvolvido por <a href='https://www.linkedin.com/in/kenneson-anderson/' target='_blank' rel='noopener noreferrer'><strong>Kenneson Anderson</strong></a>
                    </p>
                    <div className="flex items-center space-x-4">
                        <a
                            href="https://github.com/kenneson"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                            <Github className="h-5 w-5" />
                            <span className="sr-only">GitHub</span>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/kenneson-anderson/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                            <Linkedin className="h-5 w-5" />
                            <span className="sr-only">LinkedIn</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}