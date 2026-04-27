{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";

    flake-parts = {
      url = "github:hercules-ci/flake-parts";
      inputs.nixpkgs-lib.follows = "nixpkgs";
    };
  };

  outputs =
    inputs@{
      flake-parts,
      nixpkgs,
      ...
    }:
    flake-parts.lib.mkFlake { inherit inputs; } {
      systems = [
        "aarch64-linux"
        "x86_64-linux"
        "aarch64-darwin"
      ];

      perSystem =
        {
          lib,
          pkgs,
          system,
          config,
          ...
        }:
        {
          devShells.default = pkgs.mkShell {
            packages = with pkgs; [
              lefthook
              prettier
              treefmt
              nixfmt
              just

              nodejs
              pnpm
            ];
          };
        };
    };
}
