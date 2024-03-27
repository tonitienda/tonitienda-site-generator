generate-tsoobame:
    cd tsoobame && \
    yarn install && \
    yarn build
    cp -r tsoobame/out/** out/
    