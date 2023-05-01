﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using ModelsApi.Data;

#nullable disable

namespace ModelsApi.Data.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    partial class ApplicationDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.4")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("ModelsApi.Models.Entities.EfAccount", b =>
                {
                    b.Property<long>("EfAccountId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<long>("EfAccountId"), 1L, 1);

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasMaxLength(254)
                        .HasColumnType("nvarchar(254)");

                    b.Property<bool>("IsManager")
                        .HasColumnType("bit");

                    b.Property<string>("PwHash")
                        .IsRequired()
                        .HasMaxLength(60)
                        .HasColumnType("nvarchar(60)");

                    b.HasKey("EfAccountId");

                    b.HasIndex("Email")
                        .IsUnique();

                    b.ToTable("Accounts");
                });

            modelBuilder.Entity("ModelsApi.Models.Entities.EfExpense", b =>
                {
                    b.Property<long>("EfExpenseId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<long>("EfExpenseId"), 1L, 1);

                    b.Property<DateTime>("Date")
                        .HasColumnType("date");

                    b.Property<long?>("EfModelId")
                        .HasColumnType("bigint");

                    b.Property<long>("JobId")
                        .HasColumnType("bigint");

                    b.Property<long>("ModelId")
                        .HasColumnType("bigint");

                    b.Property<string>("Text")
                        .HasColumnType("nvarchar(max)");

                    b.Property<decimal>("amount")
                        .HasColumnType("decimal(9,2)");

                    b.HasKey("EfExpenseId");

                    b.HasIndex("EfModelId");

                    b.ToTable("Expenses");
                });

            modelBuilder.Entity("ModelsApi.Models.Entities.EfJob", b =>
                {
                    b.Property<long>("EfJobId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<long>("EfJobId"), 1L, 1);

                    b.Property<string>("Comments")
                        .HasMaxLength(2000)
                        .HasColumnType("nvarchar(2000)");

                    b.Property<string>("Customer")
                        .HasMaxLength(64)
                        .HasColumnType("nvarchar(64)");

                    b.Property<int>("Days")
                        .HasColumnType("int");

                    b.Property<string>("Location")
                        .HasMaxLength(128)
                        .HasColumnType("nvarchar(128)");

                    b.Property<DateTimeOffset>("StartDate")
                        .HasColumnType("datetimeoffset");

                    b.HasKey("EfJobId");

                    b.ToTable("Jobs");
                });

            modelBuilder.Entity("ModelsApi.Models.Entities.EfJobModel", b =>
                {
                    b.Property<long>("EfJobId")
                        .HasColumnType("bigint");

                    b.Property<long>("EfModelId")
                        .HasColumnType("bigint");

                    b.HasKey("EfJobId", "EfModelId");

                    b.HasIndex("EfModelId");

                    b.ToTable("JobModels");
                });

            modelBuilder.Entity("ModelsApi.Models.Entities.EfManager", b =>
                {
                    b.Property<long>("EfManagerId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<long>("EfManagerId"), 1L, 1);

                    b.Property<long>("EfAccountId")
                        .HasColumnType("bigint");

                    b.Property<string>("Email")
                        .HasMaxLength(254)
                        .HasColumnType("nvarchar(254)");

                    b.Property<string>("FirstName")
                        .HasMaxLength(64)
                        .HasColumnType("nvarchar(64)");

                    b.Property<string>("LastName")
                        .HasMaxLength(32)
                        .HasColumnType("nvarchar(32)");

                    b.HasKey("EfManagerId");

                    b.HasIndex("EfAccountId");

                    b.HasIndex("Email")
                        .IsUnique()
                        .HasFilter("[Email] IS NOT NULL");

                    b.ToTable("Managers");
                });

            modelBuilder.Entity("ModelsApi.Models.Entities.EfModel", b =>
                {
                    b.Property<long>("EfModelId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<long>("EfModelId"), 1L, 1);

                    b.Property<string>("AddresLine1")
                        .HasMaxLength(64)
                        .HasColumnType("nvarchar(64)");

                    b.Property<string>("AddresLine2")
                        .HasMaxLength(64)
                        .HasColumnType("nvarchar(64)");

                    b.Property<DateTime>("BirthDate")
                        .HasColumnType("date");

                    b.Property<string>("City")
                        .HasMaxLength(64)
                        .HasColumnType("nvarchar(64)");

                    b.Property<string>("Comments")
                        .HasMaxLength(1000)
                        .HasColumnType("nvarchar(1000)");

                    b.Property<string>("Country")
                        .HasMaxLength(64)
                        .HasColumnType("nvarchar(64)");

                    b.Property<long>("EfAccountId")
                        .HasColumnType("bigint");

                    b.Property<string>("Email")
                        .HasMaxLength(254)
                        .HasColumnType("nvarchar(254)");

                    b.Property<string>("EyeColor")
                        .HasMaxLength(32)
                        .HasColumnType("nvarchar(32)");

                    b.Property<string>("FirstName")
                        .HasMaxLength(64)
                        .HasColumnType("nvarchar(64)");

                    b.Property<string>("HairColor")
                        .HasMaxLength(32)
                        .HasColumnType("nvarchar(32)");

                    b.Property<double>("Height")
                        .HasColumnType("float");

                    b.Property<string>("LastName")
                        .HasMaxLength(32)
                        .HasColumnType("nvarchar(32)");

                    b.Property<string>("Nationality")
                        .HasMaxLength(64)
                        .HasColumnType("nvarchar(64)");

                    b.Property<string>("PhoneNo")
                        .HasMaxLength(12)
                        .HasColumnType("nvarchar(12)");

                    b.Property<int>("ShoeSize")
                        .HasColumnType("int");

                    b.Property<string>("Zip")
                        .HasMaxLength(9)
                        .HasColumnType("nvarchar(9)");

                    b.HasKey("EfModelId");

                    b.HasIndex("EfAccountId");

                    b.HasIndex("Email")
                        .IsUnique()
                        .HasFilter("[Email] IS NOT NULL");

                    b.ToTable("Models");
                });

            modelBuilder.Entity("ModelsApi.Models.Entities.EfExpense", b =>
                {
                    b.HasOne("ModelsApi.Models.Entities.EfModel", null)
                        .WithMany("Expenses")
                        .HasForeignKey("EfModelId");
                });

            modelBuilder.Entity("ModelsApi.Models.Entities.EfJobModel", b =>
                {
                    b.HasOne("ModelsApi.Models.Entities.EfJob", "Job")
                        .WithMany("JobModels")
                        .HasForeignKey("EfJobId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("ModelsApi.Models.Entities.EfModel", "Model")
                        .WithMany("JobModels")
                        .HasForeignKey("EfModelId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Job");

                    b.Navigation("Model");
                });

            modelBuilder.Entity("ModelsApi.Models.Entities.EfManager", b =>
                {
                    b.HasOne("ModelsApi.Models.Entities.EfAccount", "Account")
                        .WithMany()
                        .HasForeignKey("EfAccountId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Account");
                });

            modelBuilder.Entity("ModelsApi.Models.Entities.EfModel", b =>
                {
                    b.HasOne("ModelsApi.Models.Entities.EfAccount", "Account")
                        .WithMany()
                        .HasForeignKey("EfAccountId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Account");
                });

            modelBuilder.Entity("ModelsApi.Models.Entities.EfJob", b =>
                {
                    b.Navigation("JobModels");
                });

            modelBuilder.Entity("ModelsApi.Models.Entities.EfModel", b =>
                {
                    b.Navigation("Expenses");

                    b.Navigation("JobModels");
                });
#pragma warning restore 612, 618
        }
    }
}
