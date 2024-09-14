FROM grafana/k6:latest

#write the test that you need to execute
COPY scripts/getPet.js /scripts/getPet.js
CMD ["run", "/scripts/getPet.js"]