using Microsoft.EntityFrameworkCore.Migrations;

namespace ParksPlanner.Migrations
{
    public partial class FirstMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Park",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ApiId = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Park", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "Park",
                columns: new[] { "Id", "ApiId" },
                values: new object[] { 1, "77E0D7F0-1942-494A-ACE2-9004D2BDC59E" });

            migrationBuilder.InsertData(
                table: "Park",
                columns: new[] { "Id", "ApiId" },
                values: new object[] { 2, "6DA17C86-088E-4B4D-B862-7C1BD5CF236B" });

            migrationBuilder.InsertData(
                table: "Park",
                columns: new[] { "Id", "ApiId" },
                values: new object[] { 3, "E4C7784E-66A0-4D44-87D0-3E072F5FEF43" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Park");
        }
    }
}
