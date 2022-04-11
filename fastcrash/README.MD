# FASTCRASH

Open port 8983 some http server

 - /api
 - /v2



 solr apache api


# Version

```
{
  "responseHeader":{
    "status":0,
    "QTime":29},
  "mode":"std",
  "solr_home":"/var/solr/data",
  "lucene":{
    "solr-spec-version":"8.0.0",
    "solr-impl-version":"8.0.0 2ae4746365c1ee72a0047ced7610b2096e438979 - jimczi - 2019-03-08 12:06:06",
    "lucene-spec-version":"8.0.0",
    "lucene-impl-version":"8.0.0 2ae4746365c1ee72a0047ced7610b2096e438979 - jimczi - 2019-03-08 11:58:55"},
  "jvm":{
    "version":"11.0.14.1 11.0.14.1+1",
    "name":"Oracle Corporation OpenJDK 64-Bit Server VM",
    "spec":{
      "vendor":"Oracle Corporation",
      "name":"Java Platform API Specification",
      "version":"11"},
    "jre":{
      "vendor":"Oracle Corporation",
      "version":"11.0.14.1"},
    "vm":{
      "vendor":"Oracle Corporation",
      "name":"OpenJDK 64-Bit Server VM",
      "version":"11.0.14.1+1"},
    "processors":1,
    "memory":{
      "free":"248.1 MB",
      "total":"490.7 MB",
      "max":"490.7 MB",
      "used":"242.6 MB (%49.4)",
      "raw":{
        "free":260125480,
        "total":514523136,
        "max":514523136,
        "used":254397656,
        "used%":49.44338518530681}},
    "jmx":{
      "classpath":"start.jar",
      "commandLineArgs":["-Xms512m",
        "-Xmx512m",
        "-XX:NewRatio=3",
        "-XX:SurvivorRatio=4",
        "-XX:TargetSurvivorRatio=90",
        "-XX:MaxTenuringThreshold=8",
        "-XX:+UseConcMarkSweepGC",
        "-XX:ConcGCThreads=4",
        "-XX:ParallelGCThreads=4",
        "-XX:+CMSScavengeBeforeRemark",
        "-XX:PretenureSizeThreshold=64m",
        "-XX:+UseCMSInitiatingOccupancyOnly",
        "-XX:CMSInitiatingOccupancyFraction=50",
        "-XX:CMSMaxAbortablePrecleanTime=6000",
        "-XX:+CMSParallelRemarkEnabled",
        "-XX:+ParallelRefProcEnabled",
        "-XX:-OmitStackTraceInFastThrow",
        "-Xlog:gc*:file=/var/solr/logs/solr_gc.log:time,uptime:filecount=9,filesize=20M",
        "-Dsolr.log.dir=/var/solr/logs",
        "-Djetty.port=8983",
        "-DSTOP.PORT=7983",
        "-DSTOP.KEY=solrrocks",
        "-Duser.timezone=UTC",
        "-Djetty.home=/opt/solr/server",
        "-Dsolr.solr.home=/var/solr/data",
        "-Dsolr.data.home=",
        "-Dsolr.install.dir=/opt/solr",
        "-Dsolr.default.confdir=/opt/solr/server/solr/configsets/_default/conf",
        "-Dlog4j.configurationFile=file:/var/solr/log4j2.xml",
        "-Dlog4j2.formatMsgNoLookups=true",
        "-Xss256k",
        "-Dsolr.jetty.https.port=8983"],
      "startTime":"2022-04-09T07:09:28.233Z",
      "upTimeMS":207297370}},
  "system":{
    "name":"Linux",
    "arch":"amd64",
    "availableProcessors":1,
    "systemLoadAverage":0.14,
    "version":"5.4.0-107-generic",
    "committedVirtualMemorySize":6450237440,
    "freePhysicalMemorySize":106496,
    "freeSwapSpaceSize":0,
    "processCpuLoad":0.0,
    "processCpuTime":319530000000,
    "systemCpuLoad":0.0,
    "totalPhysicalMemorySize":268435456,
    "totalSwapSpaceSize":0,
    "maxFileDescriptorCount":1048576,
    "openFileDescriptorCount":205,
    "uname":"Linux cf5cd2a37880 5.4.0-107-generic #121-Ubuntu SMP Thu Mar 24 16:04:27 UTC 2022 x86_64 GNU/Linux\n",
    "uptime":" 16:44:25 up 2 days,  9:37,  0 users,  load average: 0.14, 0.49, 0.76\n"}}
```
