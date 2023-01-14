import { HybridModule } from "projen-cdktf-hybrid-construct";
const project = new HybridModule({
  author: "user",
  authorAddress: "user@domain.com",
  defaultReleaseBranch: "main",
  devDeps: ["projen-cdktf-hybrid-construct"],
  name: "terraform-aws-hybrid-module-demo",
  repositoryUrl: "https://github.com/user/terraform-aws-hybrid-module-demo.git",

  // cdktfVersion: "^0.13.0",       /* Minimum target version of this library. */
  // constructExamples: undefined,  /* If set a construct examples folder will be created. */
  // deps: [],                      /* Runtime dependencies of this module. */
  // description: undefined,        /* The description is just a string that helps people understand the purpose of the package. */
  // packageName: undefined,        /* The "name" in package.json. */
  // terraformExamples: undefined,  /* If set a terraform examples folder will be created. */
});
project.addBundledDeps("cdktf-tf-module-stack");
project.addPeerDeps("cdktf@^0.12.0");
project.addPeerDeps("@cdktf/provider-aws@^10.0.107");
project.synth();
