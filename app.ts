import * as Drash from "https://deno.land/x/drash@<2.7.0/mod.ts";

class HomeResource extends Drash.Resource {
  paths = ["/"];

  public GET(_request: Drash.Request, response: Drash.Response) {
    response.text("Hello world!");
  }
}

const server = new Drash.Server({
  resources: [
    HomeResource,
  ],
  protocol: "http",
  hostname: "localhost",
  port: 3000,
});

server.run();
